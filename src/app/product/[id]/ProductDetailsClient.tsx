// src/app/product/[id]/ProductDetailsClient.tsx
"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft, Heart, Star, ShoppingCart, Minus, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

type Product = {
  id: string;
  name: string;
  price: number;
  originalPrice: number;
  rating: number;
  reviews: number;
  images: string[];
  description: string;
  sizes: string[];
  colors: string[];
  discount: string;
  inStock: boolean;
  features: string[];
};

const mockProducts: Record<string, Product> = {
  "1": {
    id: "1",
    name: "DressBerry Sweatshirt",
    price: 29.99,
    originalPrice: 49.99,
    rating: 4.5,
    reviews: 127,
    images: [
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=600&fit=crop",
    ],
    description: "Comfortable and stylish sweatshirt perfect for casual wear.",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Black", "Grey", "Navy"],
    discount: "40% OFF",
    inStock: true,
    features: ["Premium cotton blend", "Relaxed fit", "Machine washable", "Imported"],
  },
  "2": {
    id: "2",
    name: "Casual Denim Jacket",
    price: 89.99,
    originalPrice: 120.0,
    rating: 4.8,
    reviews: 342,
    images: [
      "https://images.unsplash.com/photo-1551232864-3f0890e580d9?w=400&h=600&fit=crop",
    ],
    description: "Classic denim jacket with a modern cut — great for layering.",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Blue", "Black"],
    discount: "25% OFF",
    inStock: true,
    features: ["Durable denim", "Machine washable", "Imported"],
  },
  "3": {
    id: "3",
    name: "Rose Gold Necklace",
    price: 24.99,
    originalPrice: 39.99,
    rating: 4.7,
    reviews: 58,
    images: [
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=600&fit=crop",
    ],
    description: "Elegant rose gold necklace to add a subtle shine to any outfit.",
    sizes: [],
    colors: ["Rose Gold"],
    discount: "37% OFF",
    inStock: true,
    features: ["Hypoallergenic", "Gold plated", "Imported"],
  },
};

export default function ProductDetailsClient({ id }: { id: string }) {
  const router = useRouter();

  // select product by id, fallback to product "1" if not found
  const product = mockProducts[id] ?? {
    ...mockProducts["1"],
    id: String(id ?? "1"),
    name: `Product ${id}`,
  };

  const [isLiked, setIsLiked] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState(product.sizes[0] ?? "M");

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

      {/* Main content */}
      <main className="w-full">
        <div className="mx-auto max-w-5xl px-4">
          {/* Product Image */}
          <div className="bg-white">
            <img src={product.images[0]} alt={product.name} className="w-full h-[500px] object-cover" />
          </div>

          {/* PRODUCT INFO */}
          <div className="bg-white px-4 py-4">
            <div className="flex items-start justify-between mb-2">
              <h1 className="text-xl font-bold flex-1">{product.name}</h1>
              <Badge variant="secondary" className="bg-red-100 text-red-600 ml-2">
                {product.discount}
              </Badge>
            </div>

            <div className="flex items-center space-x-2 mb-3">
              <span className="text-2xl font-bold text-black">${product.price}</span>
              <span className="text-lg text-gray-400 line-through">${product.originalPrice}</span>
            </div>

            <div className="flex items-center space-x-2 mb-4">
              <div className="flex items-center space-x-1">
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                <span className="text-sm font-medium">{product.rating}</span>
              </div>
              <span className="text-sm text-gray-500">({product.reviews} reviews)</span>
            </div>

            <p className="text-gray-600 mb-4">{product.description}</p>

            <div className="mb-4">
              <h3 className="font-medium mb-2">Size</h3>
              <div className="flex space-x-2">
                {(product.sizes.length ? product.sizes : ["M"]).map((size) => (
                  <Button
                    key={size}
                    variant={selectedSize === size ? "default" : "outline"}
                    size="sm"
                    className={selectedSize === size ? "bg-black text-white" : "border-gray-300"}
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </Button>
                ))}
              </div>
            </div>

            <div className="mb-6">
              <h3 className="font-medium mb-2">Quantity</h3>
              <div className="flex items-center space-x-3">
                <Button variant="outline" size="icon" className="h-8 w-8" disabled={quantity <= 1} onClick={() => handleQuantityChange(-1)}>
                  <Minus className="h-4 w-4" />
                </Button>

                <span className="text-lg font-medium w-8 text-center">{quantity}</span>

                <Button variant="outline" size="icon" className="h-8 w-8" onClick={() => handleQuantityChange(1)}>
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <div className="mb-6">
              <h3 className="font-medium mb-2">Features</h3>
              <ul className="space-y-1">
                {product.features.map((f, i) => (
                  <li key={i} className="text-sm text-gray-600">• {f}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="sticky bottom-0 bg-background p-4 border-t border-border">
            <Button className="w-full bg-black text-white hover:bg-gray-800" onClick={() => router.push("/cart")}>
              <ShoppingCart className="h-4 w-4 mr-2" />
              Add to Cart
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
}
