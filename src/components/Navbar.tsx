
import { useState } from "react";
import { Link } from "react-router-dom";
import { ShoppingCart, Menu, X, Laptop, HeadphonesIcon, Smartphone, Package } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import ThemeToggle from "./ThemeToggle";
import { useCart } from "@/context/CartContext";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { cartItems } = useCart();
  
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="sticky top-0 z-50 glassmorphism py-4 px-4 md:px-6">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <span className="bg-gaming-600 text-white p-1 rounded">
              <Package className="h-6 w-6" />
            </span>
            <span className="text-xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-gaming-500 to-gaming-700">
              PixelPulse
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1">
            <Link to="/products" className="nav-link">All Products</Link>
            <Link to="/category/laptops" className="nav-link flex items-center gap-1">
              <Laptop className="h-4 w-4" /> Laptops
            </Link>
            <Link to="/category/smartphones" className="nav-link flex items-center gap-1">
              <Smartphone className="h-4 w-4" /> Smartphones
            </Link>
            <Link to="/category/audio" className="nav-link flex items-center gap-1">
              <HeadphonesIcon className="h-4 w-4" /> Audio
            </Link>
          </div>

          {/* Right Side - Cart & Theme Toggle */}
          <div className="flex items-center space-x-4">
            <ThemeToggle />
            <Link to="/cart">
              <Button variant="ghost" size="icon" className="relative">
                <ShoppingCart className="h-5 w-5" />
                {totalItems > 0 && (
                  <Badge 
                    className="absolute -top-2 -right-2 bg-gaming-600 hover:bg-gaming-700"
                  >
                    {totalItems}
                  </Badge>
                )}
              </Button>
            </Link>

            {/* Mobile Menu Button */}
            <Button 
              variant="ghost" 
              size="icon" 
              className="md:hidden"
              onClick={toggleMenu}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-2 glassmorphism rounded-lg">
            <div className="flex flex-col">
              <Link 
                to="/products" 
                className="px-4 py-3 hover:bg-secondary/50 rounded-md"
                onClick={toggleMenu}
              >
                All Products
              </Link>
              <Link 
                to="/category/laptops" 
                className="px-4 py-3 hover:bg-secondary/50 rounded-md flex items-center gap-2"
                onClick={toggleMenu}
              >
                <Laptop className="h-4 w-4" /> Laptops
              </Link>
              <Link 
                to="/category/smartphones" 
                className="px-4 py-3 hover:bg-secondary/50 rounded-md flex items-center gap-2"
                onClick={toggleMenu}
              >
                <Smartphone className="h-4 w-4" /> Smartphones
              </Link>
              <Link 
                to="/category/audio" 
                className="px-4 py-3 hover:bg-secondary/50 rounded-md flex items-center gap-2"
                onClick={toggleMenu}
              >
                <HeadphonesIcon className="h-4 w-4" /> Audio
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
