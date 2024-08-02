import { CartCard, ProductCard } from "@/components";
import { getCategories, getProducts, getProductsByFilter } from "@/data";

export default async function Home() {
  const category = await getCategories();
  const filteredProducts = await getProductsByFilter(undefined, 0, 40, 100);
  const filteredProductsByTitle = await getProductsByFilter(
    "Majestic",
    0,
    40,
    100,
  );

  // Majestic Mountain Graphic T-Shirt
  // console.log(category);
  // console.log(filteredProductsByTitle);

  return <main className="min-h-[calc(100dvh-100px)] text-neutral-950"></main>;
}
