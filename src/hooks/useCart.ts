import { useState } from "react";

type CartItem = {
  id: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
};

export function useCart() {
  const [items, setItems] = useState<CartItem[]>([
    {
      id: "1",
      name: "DressBerry Sweatshirt",
      price: 29.99,
      image:
        "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=200&h=200&fit=crop",
      quantity: 1,
    },
    {
      id: "2",
      name: "Casual Denim Jacket",
      price: 89.99,
      image:
        "https://images.unsplash.com/photo-1551232864-3f0890e580d9?w=200&h=200&fit=crop",
      quantity: 2,
    },
  ]);

  const increaseQty = (id: string) => {
    setItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQty = (id: string) => {
    setItems((prev) =>
      prev.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const removeItem = (id: string) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  const totalPrice = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return {
    items,
    increaseQty,
    decreaseQty,
    removeItem,
    totalPrice,
  };
}
