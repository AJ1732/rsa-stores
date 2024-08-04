import { ProductCard } from "@/components";

const ShopPage = () => {
  return (
    <section className="pt-8 pb-16">
      <div className="flex gap-5 overflow-x-auto">
        <ProductCard id={1} title="T-Shirt with Tape Details" />
        <ProductCard id={1} title="T-Shirt with Tape Details" />
      </div>
    </section>
  );
};
export default ShopPage;
