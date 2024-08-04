import { ProductCard } from "@/components";
import { getSingleProduct } from "@/data";

type Props = {
  params: {
    id: number;
  };
};

const ShopItemPage = async ({ params }: Props) => {
  const product = await getSingleProduct(params.id);

  return (
    <div className="pb-16 pt-12">
      <ProductCard key={product.id} id={params.id} />
    </div>
  );
};
export default ShopItemPage;
