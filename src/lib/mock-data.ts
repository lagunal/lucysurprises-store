export const LOGO_URL =
  "https://lucysurprises.com/wp-content/uploads/2024/07/cropped-Logo-lucysurprises-balloons-1.png";

export const IMG = {
  hero: "https://lucysurprises.com/wp-content/uploads/2024/07/IMG_7359.jpg",
  lucy: "https://lucysurprises.com/wp-content/uploads/2024/07/Lucy-with-flowers.jpg",
  blueTree: "https://lucysurprises.com/wp-content/uploads/2024/07/decor-blue-tree.jpeg",
  birthDecor: "https://lucysurprises.com/wp-content/uploads/2024/07/birth-decor.jpeg",
  giraffe: "https://lucysurprises.com/wp-content/uploads/2024/07/giraffe-birth-decor-905x1024.jpg",
  grad: "https://lucysurprises.com/wp-content/uploads/2024/07/grad1.jpeg",
  testimonial: "https://lucysurprises.com/wp-content/uploads/2024/07/JoseCortez-testimonial-1.png",
};

export type Product = {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  description?: string;
};

export const PRODUCTS: Product[] = [
  { id: "b1", name: "Rose Gold Birthday Bouquet", price: 89, image: IMG.birthDecor, category: "Bouquets", description: "Rose gold & blush balloon bouquet with custom tag." },
  { id: "b2", name: "Graduation Celebration Bouquet", price: 95, image: IMG.grad, category: "Bouquets", description: "Congratulate your grad with a stunning arrangement." },
  { id: "b3", name: "Baby Shower Bouquet", price: 79, image: IMG.giraffe, category: "Bouquets", description: "Soft pastel bouquet, perfect for baby showers." },
  { id: "b4", name: "Anniversary Bouquet", price: 99, image: IMG.hero, category: "Bouquets" },
  { id: "d1", name: "Blue Tree Balloon Backdrop", price: 320, image: IMG.blueTree, category: "Decorations", description: "Full-service organic arch installation." },
  { id: "d2", name: "Birthday Balloon Arch", price: 280, image: IMG.birthDecor, category: "Decorations" },
  { id: "d3", name: "Grand Opening Column Set", price: 220, image: IMG.grad, category: "Decorations" },
  { id: "d4", name: "Wedding Balloon Wall", price: 450, image: IMG.hero, category: "Decorations" },
  { id: "t1", name: "Safari Theme Setup", price: 380, image: IMG.giraffe, category: "Themes" },
  { id: "t2", name: "Princess Theme Setup", price: 340, image: IMG.birthDecor, category: "Themes" },
  { id: "t3", name: "Winter Wonderland", price: 400, image: IMG.blueTree, category: "Themes" },
  { id: "o1", name: "Quinceañera Package", price: 550, image: IMG.hero, category: "Occasions" },
  { id: "o2", name: "Baby Shower Package", price: 380, image: IMG.giraffe, category: "Occasions" },
  { id: "o3", name: "Graduation Package", price: 320, image: IMG.grad, category: "Occasions" },
];

export const CART_ITEMS = [
  { id: "b1", name: "Rose Gold Birthday Bouquet", price: 89, image: IMG.birthDecor, qty: 1 },
  { id: "d1", name: "Blue Tree Balloon Backdrop", price: 320, image: IMG.blueTree, qty: 1 },
];
