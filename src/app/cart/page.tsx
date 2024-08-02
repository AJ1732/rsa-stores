import { CartCard } from "@/components";

const CartPage = () => {
  return (
    <section>
      <h2>Cart</h2>
      <div className="divide-y-2 rounded-[1.25rem] border px-4 lg:px-6">
        <CartCard title="Gradient Graphic T-shirt" />
        <CartCard title="Gradient Graphic T-shirt" />
      </div>
    </section>
  );
};
export default CartPage;
