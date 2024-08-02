import Link from "next/link";
import { InputField } from "@/components";
import { CircleUserRound, SearchIcon, ShoppingCart } from "lucide-react";

const Navbar = () => {
  const navlinks: NavLinks[] = [
    {
      name: "shop",
      link: "/shop",
    },
  ];
  return (
    <header className="">
      <nav className="flex items-center justify-between py-6">
        <div className="flex items-center justify-between gap-8">
          <Link href={`/`}>
            <h1 className="mb-2 font-integral text-4xl">RSA</h1>
          </Link>

          <ul className="flex items-center justify-center gap-6">
            {navlinks.map(({ name, link }) => (
              <li key={name} className="text-xl">
                <Link href={link} className="block">
                  {name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <InputField
          startIcon={<SearchIcon />}
          placeholder="Search for products..."
          className="min-w-[36rem] bg-shade-200 dark:bg-transparent"
          iconProps={{
            className: "stroke-black/40",
          }}
        />

        <div className="flex gap-8 *:size-10">
          <ShoppingCart />
          <CircleUserRound />
        </div>
      </nav>
    </header>
  );
};
export default Navbar;
