// src/app/api/products/[id]/route.ts
import { NextResponse } from "next/server";

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

const products: Record<string, Product> = {
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
    features: [
      "Premium cotton blend",
      "Relaxed fit",
      "Machine washable",
      "Imported",
    ],
  },
  "2": {
    id: "2",
    name: "Casual Denim Jacket",
    price: 89.99,
    originalPrice: 120,
    rating: 4.8,
    reviews: 342,
    images: [
      "https://images.unsplash.com/photo-1551232864-3f0890e580d9?w=400&h=600&fit=crop",
    ],
    description: "Classic denim jacket with a modern cut.",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Blue", "Black"],
    discount: "25% OFF",
    inStock: true,
    features: ["Durable denim", "Machine washable"],
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

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ id: string }> } // ✅ params is a Promise
) {
  const { id } = await params; // ✅ MUST await

  const product = products[id];

  if (!product) {
    return NextResponse.json(
      { message: "Product not found" },
      { status: 404 }
    );
  }

  return NextResponse.json(product);
}
