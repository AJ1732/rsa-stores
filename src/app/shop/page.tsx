import { ProductCard } from "@/components";

const ProductsPage = () => {
  return (
    <section>
      <div className="flex gap-5 overflow-x-auto">
        <ProductCard title="T-Shirt with Tape Details" />
        <ProductCard title="T-Shirt with Tape Details" />
      </div>
    </section>
  );
};
export default ProductsPage;
