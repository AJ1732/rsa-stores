import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export default function ButtonDemo({
  label,
  disabled,
  className,
  onClick,
}: ButtonProps) {
  return (
    <Button
      onClick={onClick}
      disabled={disabled}
      className={cn("rounded-full active:scale-[0.99] duration-300 transition-all px-6 py-3", className)}
    >
      {label}
    </Button>
  );
}
