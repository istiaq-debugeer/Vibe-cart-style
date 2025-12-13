"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useGetVideoByIdQuery } from "@/lib/videoApi";

import {
  ArrowLeft,
  Heart,
  MessageCircle,
  Star,
  ShoppingCart,
  Play,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function VideoDetailsClient({ id }: { id: string }) {
  const router = useRouter();

  // RTK Query replaces fetchVideoById
  const { data: video, isLoading, error } = useGetVideoByIdQuery(id);

  const [isLiked, setIsLiked] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  if (isLoading) return <div className="p-4 text-center">Loading video...</div>;
  if (error) return <div className="p-4 text-center text-red-500">Error loading video</div>;
  if (!video) return <div className="p-4 text-center">No video found.</div>;

  // Similar videos (static for now)
  const similarVideos = [
    {
      id: "4",
      title: "Elegant Evening Wear",
      thumbnail: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=200&h=150&fit=crop",
      seller: "Emma Styles",
    },
    {
      id: "5",
      title: "Boho Chic Vibes",
      thumbnail: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=200&h=150&fit=crop",
      seller: "Maya Boutique",
    },
    {
      id: "6",
      title: "Trendy Streetwear",
      thumbnail: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=200&h=150&fit=crop",
      seller: "Urban Vibes",
    },
    {
      id: "7",
      title: "Minimalist Chic",
      thumbnail: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=200&h=150&fit=crop",
      seller: "Clean Lines Co",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex justify-center">
      <main className="max-w-md w-full bg-white pb-10">

        {/* Header */}
        <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md shadow-sm p-4">
          <div className="flex items-center justify-between">
            <Button variant="ghost" size="icon" onClick={() => router.back()}>
              <ArrowLeft className="h-5 w-5" />
            </Button>

            <div className="flex items-center space-x-2">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsLiked((prev) => !prev)}
                className={`${isLiked ? "text-red-500" : "text-gray-500"} hover:text-red-500`}
              >
                <Heart className={`h-5 w-5 ${isLiked ? "fill-current" : ""}`} />
              </Button>

              <Button variant="ghost" size="icon">
                <MessageCircle className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </header>

        {/* Video Player */}
        <div className="relative bg-black">
          {!isPlaying ? (
            <div className="relative">
              <img
                src={video.thumbnailUrl}
                alt={video.title}
                className="w-full h-96 object-cover"
              />

              <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                <Button
                  onClick={() => setIsPlaying(true)}
                  className="rounded-full bg-white/90 hover:bg-white text-black w-16 h-16"
                >
                  <Play className="h-8 w-8 ml-1" />
                </Button>
              </div>
            </div>
          ) : (
            <video
              src={video.videoUrl}
              className="w-full h-96 object-cover"
              controls
              autoPlay
              onPause={() => setIsPlaying(false)}
            />
          )}

          {video.isLive && (
            <Badge className="absolute top-4 left-4 bg-red-500 text-white animate-pulse">
              LIVE
            </Badge>
          )}
        </div>

        {/* Video Info */}
        <div className="px-4 py-4 text-left">
          <h1 className="text-2xl font-bold mb-2">{video.title}</h1>

          <div className="flex items-center space-x-3 mb-3">
            <img
              src={video.seller.avatar}
              className="w-10 h-10 rounded-full border"
            />

            <div>
              <p className="font-semibold">{video.seller.name}</p>
              <p className="text-sm text-gray-500">
                {video.likes} likes • {video.comments} comments
              </p>
            </div>
          </div>

          <p className="text-gray-600 mb-3">{video.description}</p>

          <div className="flex flex-wrap gap-2 mb-4">
            {video.hashtags?.map((tag, index) => (
              <span key={index} className="text-black text-sm font-medium">
                #{tag}
              </span>
            ))}
          </div>
        </div>

        {/* Products List */}
        <div className="px-4 mb-6">
          <h3 className="text-lg font-semibold mb-4">Shop This Look</h3>

          <div className="space-y-3">
            {video.products.map((product) => (
              <Card key={product.id}>
                <CardContent className="p-3">
                  <div className="flex items-start space-x-3">

                    <img
                      src={product.image}
                      onClick={() => router.push(`/product/${product.id}`)}
                      className="w-24 h-24 object-cover rounded-lg cursor-pointer"
                    />

                    <div className="flex-1">
                      <h4
                        className="font-medium cursor-pointer"
                        onClick={() => router.push(`/product/${product.id}`)}
                      >
                        {product.name}
                      </h4>

                      <div className="flex items-center space-x-2 mb-2">
                        <span className="text-base font-bold">${product.price}</span>
                        <span className="text-xs text-gray-400 line-through">
                          ${product.originalPrice}
                        </span>
                        <Badge className="bg-black text-white text-xs">{product.discount}</Badge>
                      </div>

                      <div className="flex items-center space-x-1 mb-3">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-xs">{product.rating}</span>
                      </div>

                      <div className="flex gap-2">
                        <Button className="w-full bg-black text-white h-7 text-xs flex items-center justify-center">
                          <ShoppingCart className="h-3 w-3 mr-1" />
                          Add to Cart
                        </Button>

                        <Button
                          variant="outline"
                          className="w-full h-7 text-xs border-black"
                        >
                          Buy Now
                        </Button>
                      </div>
                    </div>

                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Similar Videos */}
        <div className="px-4 mb-8">
          <h3 className="text-lg font-semibold mb-4">Similar from Other Sellers</h3>

          <div className="grid grid-cols-2 gap-4">
            {similarVideos.map((sv) => (
              <Card
                key={sv.id}
                className="cursor-pointer hover:shadow-lg transition-shadow"
                onClick={() => router.push(`/video/${sv.id}`)}
              >
                <CardContent className="p-0">
                  <img src={sv.thumbnail} className="w-full h-32 object-cover rounded-t-lg" />
                  <div className="p-3">
                    <h4 className="font-medium text-sm">{sv.title}</h4>
                    <p className="text-xs text-gray-500">{sv.seller}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

      </main>
    </div>
  );
}
