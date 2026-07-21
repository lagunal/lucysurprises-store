import { createServerFn } from "@tanstack/react-start";
import { Product } from "./mock-data";

export const getWooProducts = createServerFn({ method: "GET" })
  .validator((category?: string) => category)
  .handler(async ({ data: categoryName }) => {
    try {
      // Mueve las variables de entorno dentro del handler para evitar
      // que se filtren o rompan el bundle del cliente.
      const wcUrl = process.env.VITE_WC_STORE_URL || process.env.WC_STORE_URL || "https://lucysurprises.com";
      const ck = process.env.WC_CONSUMER_KEY;
      const cs = process.env.WC_CONSUMER_SECRET;

      if (!ck || !cs) {
        console.warn("Faltan las credenciales de WooCommerce");
        return [];
      }

      const auth = Buffer.from(`${ck}:${cs}`).toString("base64");

      const headers = {
        "Content-Type": "application/json",
        Authorization: `Basic ${auth}`,
      };

      let categoryQuery = "";
      if (categoryName) {
        const catRes = await fetch(`${wcUrl}/wp-json/wc/v3/products/categories?search=${encodeURIComponent(categoryName)}`, { headers });
        const categories = await catRes.json();
        const match = categories.find((c: any) => c.name === categoryName);
        if (match) {
          categoryQuery = `&category=${match.id}`;
        } else {
          return [];
        }
      }

      const res = await fetch(`${wcUrl}/wp-json/wc/v3/products?per_page=100${categoryQuery}`, { headers });
      const wcProducts = await res.json();

      if (!Array.isArray(wcProducts)) {
        console.error("WooCommerce API returned non-array:", wcProducts);
        return [];
      }

      return wcProducts.map((p: any) => {
        const cat = p.categories && p.categories.length > 0 ? p.categories[0].name : "Uncategorized";
        const img = p.images && p.images.length > 0 ? p.images[0].src : "";

        return {
          id: p.id.toString(),
          name: p.name,
          price: parseFloat(p.price || p.regular_price || "0"),
          image: img,
          category: cat,
          description: p.short_description ? p.short_description.replace(/(<([^>]+)>)/gi, "") : "",
        } as Product;
      });
    } catch (err) {
      console.error("Error fetching WooCommerce products:", err);
      return [];
    }
  });
