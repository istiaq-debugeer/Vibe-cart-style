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

  const { data: product, isLoading, error } = useGetProductByIdQuery(id);

  const [isLiked, setIsLiked] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState<string>("");

  // ✅ MUST guard async data
  if (isLoading) {
    return <div className="p-6 text-center">Loading product...</div>;
  }

  if (error || !product) {
    return (
      <div className="p-6 text-center text-red-500">
        Product not found
      </div>
    );
  }

  useEffect(() => {
    if (product.sizes?.length) {
      setSelectedSize(product.sizes[0]);
    }
  }, [product]);

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
            className={`${isLiked ? "text-red-500" : "text-gray-500"} hover:text-red-500`}
          >
            <Heart className={`h-5 w-5 ${isLiked ? "fill-current" : ""}`} />
          </Button>
        </div>
      </header>

      {/* MAIN */}
      <main className="w-full">
        <div className="mx-auto max-w-5xl px-4">
          {/* IMAGE */}
          <div className="bg-white">
            <img
              src={product.images[0]}
              alt={product.name}
              className="w-full h-[500px] object-cover"
            />
          </div>

          {/* INFO */}
          <div className="bg-white px-4 py-4">
            <div className="flex items-start justify-between mb-2">
              <h1 className="text-xl font-bold flex-1">{product.name}</h1>
              <Badge className="bg-red-100 text-red-600">
                {product.discount}
              </Badge>
            </div>

            <div className="flex items-center space-x-2 mb-3">
              <span className="text-2xl font-bold">${product.price}</span>
              <span className="text-lg text-gray-400 line-through">
                ${product.originalPrice}
              </span>
            </div>

            <div className="flex items-center space-x-2 mb-4">
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              <span className="text-sm">
                {product.rating} ({product.reviews} reviews)
              </span>
            </div>

            <p className="text-gray-600 mb-4">{product.description}</p>

            {/* SIZE */}
            <div className="mb-4">
              <h3 className="font-medium mb-2">Size</h3>
              <div className="flex space-x-2">
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
              <div className="flex items-center space-x-3">
                <Button
                  variant="outline"
                  size="icon"
                  disabled={quantity <= 1}
                  onClick={() => handleQuantityChange(-1)}
                >
                  <Minus className="h-4 w-4" />
                </Button>

                <span className="text-lg">{quantity}</span>

                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => handleQuantityChange(1)}
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* FEATURES */}
            <div className="mb-6">
              <h3 className="font-medium mb-2">Features</h3>
              <ul className="space-y-1">
                {product.features.map((f, i) => (
                  <li key={i} className="text-sm text-gray-600">
                    • {f}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* CTA */}
          <div className="sticky bottom-0 bg-white p-4 border-t">
            <Button
              className="w-full bg-black text-white"
              onClick={() => router.push("/cart")}
            >
              <ShoppingCart className="h-4 w-4 mr-2" />
              Add to Cart
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
}
