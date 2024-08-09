import { SlidersHorizontal, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import FilterTab from "@/components/sections/Shop/FilterTab";

const FilterDrawer = () => {
  return (
    <Drawer>
      <DrawerTrigger>
        <SlidersHorizontal className="size-4 rotate-90 text-black/40" />
      </DrawerTrigger>

      <DrawerContent className="lg:hidden pb-6">
        <DrawerHeader className="flex items-center justify-between">
          <DrawerTitle>Filter</DrawerTitle>

          <DrawerClose>
            <X />
          </DrawerClose>
        </DrawerHeader>

        <div className="px-4">
          <FilterTab />
        </div>

        {/* <DrawerFooter>
          <Button>Submit</Button>
          <DrawerClose>
            <Button variant="outline">Cancel</Button>
          </DrawerClose>
        </DrawerFooter> */}
      </DrawerContent>
    </Drawer>
  );
};
export default FilterDrawer;
