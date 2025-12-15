"use client";

import { useRouter } from "next/navigation";
import { ArrowLeft, Plus, Minus, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/hooks/useCart"; 
import Image from "next/image";
export default function CartClient() {
  const router = useRouter();

  // ✅ ALL cart logic now comes from custom hook
  const {
    items,
    increaseQty,
    decreaseQty,
    removeItem,
    totalPrice,
  } = useCart();

  return (
    <div className="min-h-screen bg-gray-100">
      {/* HEADER */}
      <header className="sticky top-0 z-50 bg-white border-b">
        <div className="flex items-center px-4 py-4">
          <Button variant="ghost" size="icon" onClick={() => router.back()}>
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <h1 className="text-xl font-semibold ml-4">Shopping Cart</h1>
        </div>
      </header>

      {/* CONTENT */}
      <main className="p-4 space-y-4">
        {items.length === 0 ? (
          <div className="bg-white p-6 rounded-lg text-center text-gray-500">
            Your cart is empty
          </div>
        ) : (
          <>
            {items.map((item) => (
              <div
                key={item.id}
                className="flex items-center bg-white p-4 rounded-lg shadow-sm"
              >
                <Image
                    src={item.image}
                    alt={item.name}
                    width={80}
                    height={80}
                    className="rounded object-cover"
                />

                <div className="flex-1 ml-4">
                  <h3 className="font-medium">{item.name}</h3>
                  <p className="text-gray-500">${item.price}</p>

                  <div className="flex items-center mt-2 space-x-2">
                    <Button
                      size="icon"
                      variant="outline"
                      onClick={() => decreaseQty(item.id)}
                    >
                      <Minus className="h-4 w-4" />
                    </Button>

                    <span className="w-8 text-center">
                      {item.quantity}
                    </span>

                    <Button
                      size="icon"
                      variant="outline"
                      onClick={() => increaseQty(item.id)}
                    >
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => removeItem(item.id)}
                >
                  <Trash2 className="h-5 w-5 text-red-500" />
                </Button>
              </div>
            ))}

            {/* TOTAL */}
            <div className="bg-white p-4 rounded-lg shadow-sm flex justify-between items-center">
              <span className="font-semibold">Total</span>
              <span className="font-bold text-lg">
                ${totalPrice.toFixed(2)}
              </span>
            </div>

            <Button className="w-full bg-black text-white hover:bg-gray-800">
              Checkout
            </Button>
          </>
        )}
      </main>
    </div>
  );
}
