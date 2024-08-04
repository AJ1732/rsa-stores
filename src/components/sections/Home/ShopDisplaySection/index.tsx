import Link from "next/link";
import { ButtonLink, ProductCarousel } from "@/components";
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

      <div className="flex items-center justify-center">
        <ButtonLink
          link={`/shop`}
          label={"View All"}
          className="border border-black/10 bg-transparent px-14 py-4 text-black hover:bg-shade-200"
        />
      </div>
    </section>
  );
};
export default ShopDisplaySection;
