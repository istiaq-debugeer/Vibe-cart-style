import { Suspense } from "react";
import dynamic from "next/dynamic";

const CartClient = dynamic(() => import("./CartClient"));

export default function CartPage() {
  return (
    <Suspense fallback={<div className="p-4">Loading cart...</div>}>
      <CartClient />
    </Suspense>
  );
}
