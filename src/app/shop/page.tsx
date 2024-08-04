import { ProductCard } from "@/components";
import { getProducts, getProductsByFilter } from "@/data";

const ShopPage = async () => {
  const products = await getProductsByFilter({ offset: 0, limit: 9 });
  return (
    <section className="pb-20 pt-12">
      <div className="grid grid-cols-4 gap-5">
        <div className="max-w-[18.5rem] bg-red-500">Filter</div>

        <div className="col-span-3 grid grid-cols-subgrid gap-y-5">
          {products.map((product) => (
            <ProductCard key={product.id} id={product.id} />
          ))}

          <div className="col-span-3 text-center md:col-span-2">Pagination</div>
        </div>
      </div>
    </section>
  );
};
export default ShopPage;
