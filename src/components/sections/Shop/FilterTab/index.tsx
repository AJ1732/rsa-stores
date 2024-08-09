import { ButtonLink } from "@/components";
import { SlidersHorizontal } from "lucide-react";

const FilterTab = () => {
  return (
    <div className="space-y-6">
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
