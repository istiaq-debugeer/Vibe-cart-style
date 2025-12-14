// src/app/product/[id]/ProductDetailsClient.tsx
"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft, Heart, Star, ShoppingCart, Minus, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useGetProductByIdQuery } from "@/lib/productApi";

export default function ProductDetailsClient({ id }: { id: string }) {
  const router = useRouter();

  // 🔹 RTK Query hook (ALWAYS called)
  const { data: product, isLoading, error } = useGetProductByIdQuery(id);

  // 🔹 Local state hooks (ALWAYS called)
  const [isLiked, setIsLiked] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState<string>("");

  // 🔹 Effect hook (ALWAYS called)
  useEffect(() => {
    if (product?.sizes?.length) {
      setSelectedSize(product.sizes[0]);
    }
  }, [product]);

  // ⛔ RETURNS ONLY AFTER ALL HOOKS
  if (isLoading) {
    return <div className="p-4 text-center">Loading product...</div>;
  }

  if (error || !product) {
    return <div className="p-4 text-center text-red-500">Product not found</div>;
  }

  const handleQuantityChange = (change: number) => {
    setQuantity((q) => Math.max(1, q + change));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* HEADER */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md shadow-sm p-4">
        <div className="flex items-center justify-between">
          <Button variant="ghost" size="icon" onClick={() => router.back()}>
            <ArrowLeft className="h-5 w-5" />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsLiked(!isLiked)}
            className={`${isLiked ? "text-red-500" : "text-gray-500"}`}
          >
            <Heart className={`h-5 w-5 ${isLiked ? "fill-current" : ""}`} />
          </Button>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-4">
        {/* IMAGE */}
        <img
          src={product.images[0]}
          alt={product.name}
          className="w-full h-[500px] object-cover"
        />

        {/* INFO */}
        <div className="bg-white px-4 py-4">
          <h1 className="text-xl font-bold">{product.name}</h1>

          <div className="flex items-center gap-2 my-2">
            <span className="text-2xl font-bold">${product.price}</span>
            <span className="line-through text-gray-400">
              ${product.originalPrice}
            </span>
            <Badge>{product.discount}</Badge>
          </div>

          <div className="flex items-center gap-2 mb-4">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            <span>{product.rating}</span>
            <span className="text-gray-500">
              ({product.reviews} reviews)
            </span>
          </div>

          <p className="text-gray-600 mb-4">{product.description}</p>

          {/* SIZE */}
          <div className="mb-4">
            <h3 className="font-medium mb-2">Size</h3>
            <div className="flex gap-2">
              {(product.sizes.length ? product.sizes : ["M"]).map((size) => (
                <Button
                  key={size}
                  size="sm"
                  variant={selectedSize === size ? "default" : "outline"}
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </Button>
              ))}
            </div>
          </div>

          {/* QUANTITY */}
          <div className="mb-6">
            <h3 className="font-medium mb-2">Quantity</h3>
            <div className="flex items-center gap-3">
              <Button size="icon" onClick={() => handleQuantityChange(-1)}>
                <Minus />
              </Button>
              <span>{quantity}</span>
              <Button size="icon" onClick={() => handleQuantityChange(1)}>
                <Plus />
              </Button>
            </div>
          </div>
        </div>

        {/* ADD TO CART */}
        <div className="sticky bottom-0 bg-white p-4 border-t">
          <Button className="w-full" onClick={() => router.push("/cart")}>
            <ShoppingCart className="mr-2 h-4 w-4" />
            Add to Cart
          </Button>
        </div>
      </main>
    </div>
  );
}
