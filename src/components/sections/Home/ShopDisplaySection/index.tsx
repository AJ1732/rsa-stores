import { ProductCard, ScrollContainer } from "@/components";
import { getProductsByFilter } from "@/data";

const ShopDisplaySection = async () => {
  const products = await getProductsByFilter({
    offset: 0,
    limit: 4,
  });

  return (
    <section className="space-y-8 pt-16 md:space-y-11 lg:space-y-14">
      <h2 className="font-integral text-[2rem] md:text-4xl lg:text-center lg:text-[3rem]">
        Our ITEMS
      </h2>

      <ScrollContainer />

      <div className="flex gap-5 overflow-x-auto">
        {products.map(({ id }) => (
          <ProductCard
            key={id}
            title="T-Shirt with Tape Details"
            description="Elevate your wardrobe with this stylish black t-shirt featuring a striking monochrome mountain range graphic."
            price={100}
            className="mb-6"
          />
        ))}
      </div>
    </section>
  );
};
export default ShopDisplaySection;
