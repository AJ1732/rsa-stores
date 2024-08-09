import { SlidersHorizontal } from "lucide-react";
import { FilterDrawer, FilterTab, ProductCard } from "@/components";
import { getProductsByFilter } from "@/data";

const ShopPage = async () => {
  const start = 0;
  const end = 10;
  const products = await getProductsByFilter({ offset: start, limit: end });

  return (
    <section className="pb-20 pt-12">
      <div className="relative grid gap-5 lg:grid-cols-4">
        {/* FILTER */}
        <div className="h-fit w-full space-y-6 rounded-[1.25rem] border-black/10 px-6 py-5 max-lg:hidden lg:sticky lg:top-[6.5rem] lg:max-w-[18.5rem] lg:border">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold">Filters</h2>
            <SlidersHorizontal className="size-6 rotate-90 bg-white text-black/40" />
          </div>
          
          <FilterTab />
        </div>

        <div className="grid size-full grid-cols-2 place-items-center gap-y-5 lg:col-span-3 lg:col-start-2 lg:grid-cols-subgrid">
          {/* HEADER */}
          <div className="col-span-2 flex size-full items-center justify-between lg:col-span-3">
            <h1 className="text-[2rem] font-bold">Shop</h1>

            <div className="flex items-center justify-center gap-6">
              <p className="text-black/60">Showing 1-10 of 100 products</p>

              <div className="flex size-8 items-center justify-center rounded-full bg-shade-200 p-2 lg:hidden">
                <FilterDrawer />
              </div>
            </div>
          </div>

          {/* PRODUCTS DISPLAY */}
          {products.map((product) => (
            <ProductCard key={product.id} id={product.id} />
          ))}

          {/* PAGINATION */}
          <div className="col-span-2 mt-8 size-full rounded border-t border-black/10 bg-shade-200 text-center text-white lg:col-span-3">
            Pagination
          </div>
        </div>
      </div>
    </section>
  );
};
export default ShopPage;
