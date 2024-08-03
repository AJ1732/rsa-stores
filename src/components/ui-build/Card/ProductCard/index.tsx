import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { ProductCardProps } from "@/types/card";
import { formatCurrency } from "@/utils/formatCurrency";
import Image from "next/image";
import Link from "next/link";

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  title,
  src,
  description,
  className,
  price,
}) => {
  return (
    <Card
      className={cn(
        "max-w-[10.75rem] border-0 shadow-none *:p-0 md:max-w-[18.5rem]",
        className,
      )}
    >
      <Link href={`/shop/${id}`} className="block">
        <figure className="relative mb-4 h-[10.875rem] w-[10.75rem] overflow-hidden rounded-[1.25rem] bg-[#F0EEED] md:h-[18.625rem] md:w-[18.4375rem]">
          <Image
            fill
            src={src ?? "https://i.imgur.com/QkIa5tT.jpeg"}
            style={{ objectFit: "contain" }}
            alt="Product Image"
          />
        </figure>
      </Link>

      <CardHeader>
        <CardTitle className="line-clamp-1 text-base md:text-xl">
          {title}
        </CardTitle>
        <CardDescription className="line-clamp-2">
          {description}
        </CardDescription>
      </CardHeader>

      <CardContent className="mt-4 text-xl font-bold md:text-2xl">
        <p>{formatCurrency(price ?? 0)}</p>
      </CardContent>
    </Card>
  );
};
export default ProductCard;
