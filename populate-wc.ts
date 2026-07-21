import { PRODUCTS } from "./src/lib/mock-data";

const wcUrl = process.env.VITE_WC_STORE_URL || process.env.WC_STORE_URL || "https://lucysurprises.com";
const ck = process.env.WC_CONSUMER_KEY;
const cs = process.env.WC_CONSUMER_SECRET;

if (!ck || !cs) {
  console.error("Missing WC_CONSUMER_KEY or WC_CONSUMER_SECRET");
  process.exit(1);
}

const auth = Buffer.from(`${ck}:${cs}`).toString("base64");

const headers = {
  "Content-Type": "application/json",
  Authorization: `Basic ${auth}`,
};

async function createCategory(name: string) {
  console.log(`Checking category: ${name}`);
  // first check if exists
  const getRes = await fetch(`${wcUrl}/wp-json/wc/v3/products/categories?search=${encodeURIComponent(name)}`, { headers });
  const existing = await getRes.json();
  const match = existing.find((c: any) => c.name === name);
  if (match) {
    console.log(`Category ${name} already exists (id: ${match.id})`);
    return match.id;
  }
  
  const res = await fetch(`${wcUrl}/wp-json/wc/v3/products/categories`, {
    method: "POST",
    headers,
    body: JSON.stringify({ name }),
  });
  const data = await res.json();
  if (data.id) {
    console.log(`Category ${name} created (id: ${data.id})`);
    return data.id;
  }
  console.error(`Failed to create category ${name}:`, data);
  return null;
}

async function createProduct(product: any, categoryId: number) {
  console.log(`Creating product: ${product.name}`);
  
  const payload = {
    name: product.name,
    type: "simple",
    regular_price: product.price.toString(),
    description: product.description || "",
    short_description: product.description || "",
    categories: [
      {
        id: categoryId,
      },
    ],
    images: [
      {
        src: product.image,
      },
    ],
  };

  const res = await fetch(`${wcUrl}/wp-json/wc/v3/products`, {
    method: "POST",
    headers,
    body: JSON.stringify(payload),
  });

  const data = await res.json();
  if (data.id) {
    console.log(`Product created: ${data.name} (id: ${data.id})`);
  } else {
    console.error(`Failed to create product ${product.name}:`, data);
  }
}

async function main() {
  console.log("Starting WC Population...");
  
  const categories = Array.from(new Set(PRODUCTS.map((p) => p.category)));
  const categoryMap: Record<string, number> = {};
  
  for (const catName of categories) {
    const id = await createCategory(catName);
    if (id) {
      categoryMap[catName] = id;
    }
  }

  for (const p of PRODUCTS) {
    const catId = categoryMap[p.category];
    if (catId) {
      await createProduct(p, catId);
    }
  }
  
  console.log("Done!");
}

main().catch(console.error);
