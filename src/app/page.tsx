import Header from "@/components/Header";
import VideoCard from "@/components/VideoCard";
import BottomNav from "@/components/BottomNav";

const mockVideos = [
  {
    id: "1",
    title: "Super Edgy Looks",
    seller: {
      name: "Sarah Fashion",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b332c28c?w=150&h=150&fit=crop&crop=face"
    },
    thumbnail: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=400&h=300&fit=crop",
    products: [
      {
        id: "1",
        name: "DressBerry Sweatshirt",
        price: 29.99,
        originalPrice: 49.99,
        rating: 4.5,
        image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=200&h=150&fit=crop"
      },
      {
        id: "2",
        name: "Casual Denim Jacket",
        price: 89.99,
        originalPrice: 120.00,
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1551232864-3f0890e580d9?w=200&h=150&fit=crop"
      },
      {
        id: "3",
        name: "Rose Gold Necklace",
        price: 24.99,
        originalPrice: 39.99,
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=200&h=150&fit=crop"
      }
    ],
    hashtags: ["womenfashion", "casualwear", "trending"],
    timestamp: "2 hours ago",
    isLive: false
  },
  {
    id: "2",
    title: "Elegant Evening Wear",
    seller: {
      name: "Emma Styles",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
    },
    thumbnail: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400&h=300&fit=crop",
    products: [
      {
        id: "4",
        name: "Silk Evening Dress",
        price: 149.99,
        originalPrice: 199.99,
        rating: 4.9,
        image: "https://images.unsplash.com/photo-1566479179817-1c3be5ff2bcb?w=200&h=150&fit=crop"
      },
      {
        id: "5",
        name: "Pearl Earrings",
        price: 34.99,
        originalPrice: 49.99,
        rating: 4.6,
        image: "https://images.unsplash.com/photo-1506634572416-48cdfe530110?w=200&h=150&fit=crop"
      }
    ],
    hashtags: ["elegantfashion", "eveningwear", "luxury"],
    timestamp: "5 hours ago",
    isLive: true
  },
  {
    id: "3",
    title: "Boho Chic Vibes",
    seller: {
      name: "Maya Boutique",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face"
    },
    thumbnail: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=400&h=300&fit=crop",
    products: [
      {
        id: "6",
        name: "Bohemian Maxi Dress",
        price: 79.99,
        originalPrice: 99.99,
        rating: 4.4,
        image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=200&h=150&fit=crop"
      },
      {
        id: "7",
        name: "Layered Bracelet Set",
        price: 19.99,
        originalPrice: 29.99,
        rating: 4.3,
        image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=200&h=150&fit=crop"
      }
    ],
    hashtags: ["bohofashion", "maxidress", "accessories"],
    timestamp: "1 day ago",
    isLive: false
  }
];

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background/95 to-muted/30">
      <Header />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden py-8 px-4">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-secondary/5" />
        <div className="relative max-w-md mx-auto text-center mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            Trending Now
          </div>
          <h1 className="text-2xl font-bold text-foreground mb-2">
            Discover Fashion Videos
          </h1>
          <p className="text-muted-foreground text-sm">
            Shop trending styles from your favorite creators
          </p>
        </div>
      </section>

      {/* Videos Feed */}
      <main className="max-w-md mx-auto px-4 pb-24">
        <div className="space-y-8">
          {mockVideos.map((video, index) => (
            <div 
              key={video.id} 
              className="animate-fade-in" 
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <VideoCard video={video} />
            </div>
          ))}
        </div>
        
        {/* Load More Button */}
        <div className="mt-12 text-center">
          <button className="px-8 py-3 bg-primary/10 hover:bg-primary/20 text-primary rounded-full font-medium transition-all duration-300 hover:scale-105">
            Load More Videos
          </button>
        </div>
      </main>

      {/* Background Decorations */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 -left-4 w-24 h-24 bg-primary/5 rounded-full blur-xl" />
        <div className="absolute bottom-1/4 -right-4 w-32 h-32 bg-secondary/5 rounded-full blur-xl" />
      </div>

      {/* Bottom Navigation */}
      <BottomNav />
    </div>
  );
};

export default Index;
