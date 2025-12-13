"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAppDispatch, useAppSelector } from "@/hooks/use-redux";
import { fetchVideoById } from "@/lib/videoSlice";

import { ArrowLeft, Heart, MessageCircle, Star, ShoppingCart, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function VideoDetailsClient({ id }: { id: string }) {
  const router = useRouter();
  const dispatch = useAppDispatch();

  const { current: video, loading, error } = useAppSelector((state) => state.video);

  const [isLiked, setIsLiked] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    dispatch(fetchVideoById(id));
  }, [id, dispatch]);

  if (loading) return <div className="p-4 text-center">Loading video...</div>;
  if (error) return <div className="p-4 text-red-500 text-center">{error}</div>;
  if (!video) return <div className="p-4 text-center">No video found.</div>;

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
              onPlay={() => setIsPlaying(true)}
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
              alt={video.seller.name}
              className="w-10 h-10 rounded-full border-2 border-gray-300"
            />

            <div>
              <p className="font-semibold">{video.seller.name}</p>
              <div className="flex items-center space-x-4 text-sm text-gray-500">
                <span>{video.likes} likes</span>
                <span>{video.comments} comments</span>
              </div>
            </div>
          </div>

          <p className="text-gray-600 mb-3">{video.description}</p>

          <div className="flex flex-wrap gap-2 mb-4">
            {video.hashtags?.map((tag, idx) => (
              <span key={idx} className="text-black text-sm font-medium">
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
                        <Badge className="bg-black text-white text-xs">
                          {product.discount}
                        </Badge>
                      </div>

                      <div className="flex items-center space-x-1 mb-3">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-xs">{product.rating}</span>
                      </div>

                      <Button className="w-full bg-black text-white h-7 text-xs flex items-center justify-center">
                        <ShoppingCart className="h-3 w-3 mr-1" />
                        Add to Cart
                      </Button>
                    </div>

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
