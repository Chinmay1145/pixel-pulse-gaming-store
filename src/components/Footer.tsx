
import { Link } from "react-router-dom";
import { Package, Facebook, Twitter, Instagram, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary/30 border-t border-border/50 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="bg-gaming-600 text-white p-1 rounded">
                <Package className="h-6 w-6" />
              </span>
              <span className="text-xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-gaming-500 to-gaming-700">
                PixelPulse
              </span>
            </div>
            <p className="text-muted-foreground text-sm">
              Premium gaming accessories and hardware for the most immersive gaming experience.
            </p>
            <div className="flex items-center gap-4 pt-2">
              <a href="#" className="text-muted-foreground hover:text-gaming-600 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-gaming-600 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-gaming-600 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-gaming-600 transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-semibold mb-4 text-lg">Shop</h3>
            <ul className="space-y-2">
              <li><Link to="/products" className="text-muted-foreground hover:text-foreground transition-colors">All Products</Link></li>
              <li><Link to="/category/laptops" className="text-muted-foreground hover:text-foreground transition-colors">Gaming Laptops</Link></li>
              <li><Link to="/category/smartphones" className="text-muted-foreground hover:text-foreground transition-colors">Smartphones</Link></li>
              <li><Link to="/category/audio" className="text-muted-foreground hover:text-foreground transition-colors">Audio Devices</Link></li>
              <li><Link to="/category/accessories" className="text-muted-foreground hover:text-foreground transition-colors">Accessories</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-lg">Support</h3>
            <ul className="space-y-2">
              <li><Link to="/contact" className="text-muted-foreground hover:text-foreground transition-colors">Contact Us</Link></li>
              <li><Link to="/faqs" className="text-muted-foreground hover:text-foreground transition-colors">FAQs</Link></li>
              <li><Link to="/shipping" className="text-muted-foreground hover:text-foreground transition-colors">Shipping Policy</Link></li>
              <li><Link to="/returns" className="text-muted-foreground hover:text-foreground transition-colors">Returns & Refunds</Link></li>
              <li><Link to="/warranty" className="text-muted-foreground hover:text-foreground transition-colors">Warranty Information</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-lg">Company</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-muted-foreground hover:text-foreground transition-colors">About Us</Link></li>
              <li><Link to="/blog" className="text-muted-foreground hover:text-foreground transition-colors">Blog</Link></li>
              <li><Link to="/careers" className="text-muted-foreground hover:text-foreground transition-colors">Careers</Link></li>
              <li><Link to="/privacy" className="text-muted-foreground hover:text-foreground transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-muted-foreground hover:text-foreground transition-colors">Terms & Conditions</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border/50 mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} PixelPulse Gaming Store. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
