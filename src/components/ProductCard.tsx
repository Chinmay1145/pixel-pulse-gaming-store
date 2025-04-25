import { Link } from "react-router-dom";
import { ShoppingCart, IndianRupee } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Product } from "@/types/product";
import { useCart } from "@/context/CartContext";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { addToCart } = useCart();
  
  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product);
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(price);
  };

  return (
    <Link to={`/product/${product.id}`}>
      <div className="gaming-card h-full flex flex-col card-hover-effect">
        <div className="relative">
          {product.discount && (
            <Badge className="absolute top-2 right-2 bg-gaming-600 hover:bg-gaming-700">
              {product.discount}% OFF
            </Badge>
          )}
          {product.isNew && (
            <Badge className="absolute top-2 left-2 bg-blue-500 hover:bg-blue-600">
              NEW
            </Badge>
          )}
          
          <div className="h-48 overflow-hidden rounded-t-xl">
            <img 
              src={product.images[0]} 
              alt={product.name}
              className="w-full h-full object-cover transition-transform hover:scale-110 duration-700"
            />
          </div>
        </div>
        
        <div className="flex flex-col flex-grow p-4">
          <div className="flex items-center gap-1 text-sm text-muted-foreground mb-1">
            <span className="capitalize">{product.category}</span>
            <span className="text-xs">•</span>
            <span className="capitalize">{product.subCategory}</span>
          </div>
          
          <h3 className="font-semibold mb-2 line-clamp-2">{product.name}</h3>
          
          <div className="flex items-center gap-1 mb-2">
            {[...Array(5)].map((_, i) => (
              <span 
                key={i} 
                className={`text-sm ${i < Math.floor(product.rating) ? "text-yellow-400" : "text-gray-300"}`}
              >
                ★
              </span>
            ))}
            <span className="text-xs text-muted-foreground">({product.reviews})</span>
          </div>
          
          <div className="mt-auto">
            <div className="flex items-center gap-2 mb-3">
              <div className="flex items-center text-lg font-bold">
                <IndianRupee className="h-4 w-4" />
                {formatPrice(product.price).replace('₹', '')}
              </div>
              
              {product.originalPrice && (
                <div className="text-sm text-muted-foreground line-through">
                  ₹{product.originalPrice.toLocaleString('en-IN')}
                </div>
              )}
            </div>
            
            <Button 
              onClick={handleAddToCart}
              className="w-full bg-gaming-600 hover:bg-gaming-700 gap-2"
            >
              <ShoppingCart className="h-4 w-4" /> Add to Cart
            </Button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
