import { Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border mt-auto">
      <div className="max-w-md mx-auto px-4 py-8">
        {/* Brand */}
        <div className="text-center mb-6">
          <h2 className="text-2xl font-playfair font-bold text-foreground mb-2">
            buyo
          </h2>
          <p className="text-sm text-muted-foreground">
            Discover fashion that speaks to you
          </p>
        </div>

        {/* Links */}
        <div className="grid grid-cols-3 gap-4 mb-6 text-center">
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-2">Shop</h3>
            <ul className="space-y-1 text-xs text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">New Arrivals</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Best Sellers</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Sale</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-2">Help</h3>
            <ul className="space-y-1 text-xs text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Shipping</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Returns</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-2">About</h3>
            <ul className="space-y-1 text-xs text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">Our Story</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Privacy</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Terms</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-6 border-t border-border">
          <p className="text-xs text-center text-muted-foreground flex items-center justify-center gap-1">
            Made with <Heart className="h-3 w-3 fill-red-500 text-red-500" /> © {currentYear} buyo
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
