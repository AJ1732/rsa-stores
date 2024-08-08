import { ButtonLink } from "@/components";
import { SlidersHorizontal } from "lucide-react";

const FilterTab = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold">Filters</h2>
        <SlidersHorizontal className="size-6 rotate-90 bg-white text-black/40" />
      </div>

      <hr />

      <div>Category</div>

      <hr />

      <div>Price</div>

      <hr />

      <ButtonLink
        label="Apply Filter"
        className="w-full py-4 text-sm font-medium"
      />
    </div>
  );
};
export default FilterTab;
