import { ProductCard } from "@/components";
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

      <div className="flex gap-5 overflow-x-auto">
        {products.map(({ id, title, price, description, images }) => {
          const source = images[0];
          return (
            <ProductCard
              id={id}
              key={id}
              title={title}
              src={source}
              description={description}
              price={price}
              className="mb-6"
            />
          );
        })}
      </div>
    </section>
  );
};
export default ShopDisplaySection;
