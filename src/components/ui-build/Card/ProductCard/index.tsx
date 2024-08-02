import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ProductCardProps } from "@/types/card";
import { formatCurrency } from "@/utils/formatCurrency";

const ProductCard: React.FC<ProductCardProps> = ({ title }) => {
  // 10.75rem;
  // height: 10.875rem
  return (
    <Card className="max-w-[10.75rem] border-0 shadow-none *:p-0 md:max-w-[18.5rem]">
      <figure className="mb-4 h-[10.875rem] w-[10.75rem] rounded-[1.25rem] bg-[#F0EEED] md:h-[18.625rem] md:w-[18.4375rem]"></figure>

      <CardHeader>
        <CardTitle className="line-clamp-1 text-base md:text-xl">
          {title}
        </CardTitle>
        <CardDescription className="line-clamp-2">
          Elevate your wardrobe with this stylish black t-shirt featuring a
          striking monochrome mountain range graphic.
        </CardDescription>
      </CardHeader>

      <CardContent className="mt-4 text-xl font-bold md:text-2xl">
        <p>{formatCurrency(100)}</p>
      </CardContent>
    </Card>
  );
};
export default ProductCard;
