import { ProductCard, ProductCarousel } from "@/components";
import { getProductsByFilter } from "@/data";

const ShopDisplaySection = async () => {
  const products = await getProductsByFilter({
    offset: 0,
    limit: 10,
  });

  return (
    <section className="space-y-8 pt-16 md:space-y-11 lg:space-y-14">
      <h2 className="-mb-20 font-integral text-[2rem] md:text-4xl lg:text-center lg:text-[3rem]">
        Our ITEMS
      </h2>

      <ProductCarousel products={products} />
    </section>
  );
};
export default ShopDisplaySection;
