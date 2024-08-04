import { ProductCard } from "@/components";

const ShopPage = () => {
  return (
    <section>
      <div className="flex gap-5 overflow-x-auto py-20">
        <ProductCard id={1} title="T-Shirt with Tape Details" />
        <ProductCard id={1} title="T-Shirt with Tape Details" />
      </div>
    </section>
  );
};
export default ShopPage;
