import { ProductCard } from "@/components";
import { getProductsByCategory, getSingleCategory } from "@/data";

type Props = {
  params: {
    id: number;
  };
};

const CategoryItemPage = async ({ params }: Props) => {
  const category = await getSingleCategory(params.id);
  const products = await getProductsByCategory(params.id);

  return (
    <section className="space-y-6 pb-16 pt-12 md:space-y-9 lg:space-y-12">
      <h2 className="text-center font-integral text-2xl md:text-[2rem] lg:text-[2.5rem]">
        {category.name}
      </h2>

      <div className="flex flex-wrap items-center justify-center gap-6">
        {products.map((product) => (
          <ProductCard id={product.id} />
        ))}
      </div>
    </section>
  );
};
export default CategoryItemPage;
