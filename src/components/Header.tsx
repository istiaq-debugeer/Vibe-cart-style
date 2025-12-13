"use client";
import { Menu, Heart, ShoppingCart, User, Filter, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";

const Header = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>("all");

  const dressTypes = [
    { value: "all", label: "All Dresses" },
    { value: "casual", label: "Casual Dresses" },
    { value: "formal", label: "Formal Dresses" },
    { value: "evening", label: "Evening Dresses" },
    { value: "party", label: "Party Dresses" },
    { value: "maxi", label: "Maxi Dresses" },
    { value: "mini", label: "Mini Dresses" },
    { value: "midi", label: "Midi Dresses" },
    { value: "cocktail", label: "Cocktail Dresses" },
    { value: "wedding", label: "Wedding Dresses" },
    { value: "summer", label: "Summer Dresses" },
    { value: "winter", label: "Winter Dresses" }
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-background/90 backdrop-blur-md shadow-sm border-b border-border">
      <div className="flex items-center justify-between px-4 py-3">
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="icon">
            <Menu className="h-5 w-5" />
          </Button>
          <h1 className="text-2xl font-playfair font-bold text-foreground">
            buyo
          </h1>
        </div>
        
        <div className="flex items-center space-x-2">
          <Button variant="ghost" size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90">
            <MessageSquare className="h-4 w-4 mr-1" />
            Ask Disha
          </Button>
          <Button variant="ghost" size="icon">
            <Heart className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon">
            <ShoppingCart className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon">
            <User className="h-5 w-5" />
          </Button>
        </div>
      </div>
      
      <div className="px-4 pb-3">
        <div className="flex items-center space-x-2">
          <Filter className="h-4 w-4 text-muted-foreground" />
          <Select value={selectedFilter} onValueChange={setSelectedFilter}>
            <SelectTrigger className="w-full rounded-full border-border focus:border-primary">
              <SelectValue placeholder="Filter by dress type" />
            </SelectTrigger>
            <SelectContent>
              {dressTypes.map((type) => (
                <SelectItem key={type.value} value={type.value}>
                  {type.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
    </header>
  );
};

export default Header;
