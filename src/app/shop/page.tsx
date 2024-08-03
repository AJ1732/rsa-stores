import { ProductCard } from "@/components";

const ProductsPage = () => {
  return (
    <section>
      <div className="flex gap-5 py-20 overflow-x-auto">
        <ProductCard id={1} title="T-Shirt with Tape Details" />
        <ProductCard id={1} title="T-Shirt with Tape Details" />
      </div>
    </section>
  );
};
export default ProductsPage;
