import { ProductCard } from "@/components";
import { getProductsByCategory } from "@/data";

type Props = {
  params: {
    id: number;
  };
};

const CategoryItemPage = async ({ params }: Props) => {
  const products = await getProductsByCategory(params.id);

  return (
    <section className="pb-16 pt-12">
      <div className="flex flex-wrap gap-5 items-center justify-center">
        {products.map((product) => (
          <ProductCard id={1} title="T-Shirt with Tape Details" />
        ))}
      </div>
    </section>
  );
};
export default CategoryItemPage;
