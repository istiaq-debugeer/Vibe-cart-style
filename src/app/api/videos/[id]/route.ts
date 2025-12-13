// src/app/api/videos/[id]/route.ts
import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  context: { params: Promise<{ id: string }> }
) {
  const { id } = await context.params; // ← IMPORTANT FIX

  const video = {
    id,
    title: "Super Edgy Looks",
    seller: {
      name: "Sarah Fashion",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b332c28c?w=150&h=150&fit=crop",
    },
    videoUrl: "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4",
    thumbnailUrl:
      "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=400&h=600&fit=crop",
    description: "Discover the latest trending fashion…",
    products: [
      {
        id: "1",
        name: "DressBerry Sweatshirt",
        price: 29.99,
        originalPrice: 49.99,
        rating: 4.5,
        image:
          "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=200&h=150&fit=crop",
        discount: "40% OFF",
      },
    ],
    hashtags: ["womenfashion", "casualwear"],
    likes: 1200,
    comments: 45,
    isLive: false,
  };

  return NextResponse.json(video);
}
