// components/VideoCard.tsx
"use client";
import React, { useState } from "react";
import { Heart, Bookmark, Play, Star, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useRouter } from "next/navigation";

type Product = {
  id: string;
  name: string;
  price: number;
  originalPrice: number;
  rating: number;
  image: string;
};

type Video = {
  id: string;
  title: string;
  seller: {
    name: string;
    avatar: string;
  };
  thumbnail: string;
  products: Product[];
  hashtags: string[];
  timestamp: string;
  isLive?: boolean;
};

type Props = {
  video: Video;
};

const VideoCard: React.FC<Props> = ({ video }) => {
  const [isLiked, setIsLiked] = useState<boolean>(false);
  const [isBookmarked, setIsBookmarked] = useState<boolean>(false);
  const router = useRouter();

  const handleVideoClick = () => void router.push(`/video/${video.id}`);

  const calculateDiscount = (original: number, current: number) =>
    Math.round(((original - current) / original) * 100);

  return (
    <Card className="mb-6 overflow-hidden shadow-lg border-0 bg-white animate-fade-in">
      <CardContent className="p-0">
        {/* Seller Info */}
        <div className="flex items-center justify-between p-4 pb-2">
          <div className="flex items-center space-x-3">
            <img
              src={video.seller.avatar}
              alt={video.seller.name}
              className="w-10 h-10 rounded-full border-2 border-gray-200"
            />
            <div>
              <h3 className="font-semibold text-sm">{video.seller.name}</h3>
              <p className="text-xs text-gray-500">{video.timestamp}</p>
            </div>
          </div>
          <Button size="sm" className="bg-black text-white rounded-full px-4 hover:bg-gray-800 transition-colors">
            Follow
          </Button>
        </div>

        {/* Video Thumbnail */}
        <div className="relative cursor-pointer group" onClick={handleVideoClick}>
          <img src={video.thumbnail} alt={video.title} className="w-full h-64 object-cover" />
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors flex items-center justify-center">
            <Button size="icon" className="rounded-full bg-white/90 hover:bg-white">
              <Play className="h-6 w-6 text-black" />
            </Button>
          </div>
          {video.isLive && <Badge className="absolute top-2 left-2 bg-red-500 text-white animate-pulse">LIVE</Badge>}
        </div>

        {/* ... rest of component unchanged ... */}
      </CardContent>
    </Card>
  );
};

export default VideoCard;
