import { ProductCard } from "@/components";

const ShopPage = () => {
  return (
    <section className="pt-12 pb-16">
      <div className="flex gap-5 overflow-x-auto">
        <ProductCard id={1} />
        <ProductCard id={1} />
      </div>
    </section>
  );
};
export default ShopPage;
