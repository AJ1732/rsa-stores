import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Minus, Plus, Trash2 } from "lucide-react";
import { CartCardProps } from "@/types/card";
import { formatCurrency } from "@/lib/formatCurrency";

const CartCard: React.FC<CartCardProps> = ({ title }) => {
  return (
    <Card className="flex w-full max-w-[41.5rem] items-center justify-start gap-4 rounded-none border-0 py-4 shadow-none *:p-0 md:py-6">
      <figure className="aspect-square min-w-[6.1875rem] rounded-lg bg-[#F0EEED] lg:min-w-[7.75rem]"></figure>

      <div className="flex size-full items-center justify-between">
        <div className="flex h-full flex-col items-start justify-between gap-5 *:p-0 lg:gap-10">
          <CardHeader className="space-y-1">
            <CardTitle className="text-base md:text-xl">{title}</CardTitle>
            <CardDescription className="text-xs text-black md:text-sm">
              Category: <span className="text-black/60">Clothes</span>
            </CardDescription>
          </CardHeader>

          <CardContent className="text-xl font-bold md:text-2xl">
            <p>{formatCurrency(100)}</p>
          </CardContent>
        </div>

        <div className="flex h-full flex-col items-end justify-between space-y-7 lg:space-y-12">
          <div className="rounded-full bg-red-50 p-3">
            <Trash2 className="size-5 stroke-red-500 lg:size-6" />
          </div>

          <div className="flex items-center justify-center gap-4 rounded-full bg-shade-200 px-4 py-2.5 text-sm lg:gap-5 lg:px-6 lg:py-3">
            <button type="button" className="active:scale-90">
              <Minus className="size-4 lg:size-5" />
            </button>

            <span>1</span>

            <button type="button" className="active:scale-90">
              <Plus className="size-4 lg:size-5" />
            </button>
          </div>
        </div>
      </div>
    </Card>
  );
};
export default CartCard;
