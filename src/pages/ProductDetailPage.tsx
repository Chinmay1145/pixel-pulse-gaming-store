
import { useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { 
  ShoppingCart, 
  IndianRupee, 
  Truck, 
  ArrowLeft, 
  Check, 
  ShieldCheck,
  Star,
  Minus,
  Plus,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { getProductById } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { useToast } from "@/components/ui/use-toast";

const ProductDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const product = getProductById(parseInt(id || "0"));
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();
  const navigate = useNavigate();
  const { toast } = useToast();

  // Redirect to 404 if product not found
  if (!product) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-2xl font-bold mb-4">Product Not Found</h2>
        <p className="mb-8">The product you're looking for doesn't exist or has been removed.</p>
        <Button asChild>
          <Link to="/products">Browse All Products</Link>
        </Button>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product, quantity);
    toast({
      title: "Added to cart",
      description: `${quantity} × ${product.name} added to your cart.`,
    });
  };

  const handleBuyNow = () => {
    addToCart(product, quantity);
    navigate("/cart");
  };

  const incrementQuantity = () => {
    setQuantity(prev => prev + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(prev => prev - 1);
    }
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(price);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <Button 
        variant="ghost" 
        className="mb-6 flex items-center gap-1"
        onClick={() => navigate(-1)}
      >
        <ArrowLeft className="h-4 w-4" /> Back
      </Button>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Product Images */}
        <div className="space-y-4">
          <div className="gaming-card overflow-hidden aspect-square">
            <img 
              src={product.images[selectedImage]} 
              alt={product.name} 
              className="w-full h-full object-contain p-4"
            />
          </div>
          
          <div className="flex gap-3 overflow-x-auto pb-2">
            {product.images.map((image, index) => (
              <button 
                key={index}
                onClick={() => setSelectedImage(index)}
                className={`
                  relative flex-shrink-0 w-20 h-20 border rounded
                  ${selectedImage === index ? "border-gaming-600" : "border-border"}
                `}
              >
                <img 
                  src={image} 
                  alt={`${product.name} thumbnail ${index+1}`}
                  className="w-full h-full object-cover p-1"
                />
              </button>
            ))}
          </div>
        </div>
        
        {/* Product Info */}
        <div>
          <div className="flex flex-wrap gap-2 mb-2">
            {product.isNew && (
              <Badge className="bg-blue-500 hover:bg-blue-600">NEW</Badge>
            )}
            {product.discount && (
              <Badge className="bg-gaming-600 hover:bg-gaming-700">
                {product.discount}% OFF
              </Badge>
            )}
            <Badge variant="outline" className="border-gaming-600 text-gaming-600">
              {product.category}
            </Badge>
          </div>
          
          <h1 className="text-2xl md:text-3xl font-bold mb-2">{product.name}</h1>
          
          {/* Ratings */}
          <div className="flex items-center gap-2 mb-4">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star 
                  key={i} 
                  size={16} 
                  className={`${i < Math.floor(product.rating) ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
                />
              ))}
            </div>
            <span className="text-sm text-muted-foreground">
              {product.rating} ({product.reviews} reviews)
            </span>
          </div>
          
          {/* Price */}
          <div className="flex items-baseline gap-3 mb-6">
            <div className="flex items-center text-2xl font-bold">
              <IndianRupee className="h-5 w-5" />
              {formatPrice(product.price).replace('₹', '')}
            </div>
            
            {product.originalPrice && (
              <div className="text-muted-foreground line-through">
                ₹{product.originalPrice.toLocaleString('en-IN')}
              </div>
            )}
            
            {product.discount && (
              <Badge className="ml-2 bg-green-600 hover:bg-green-700">
                Save {formatPrice(product.originalPrice! - product.price)}
              </Badge>
            )}
          </div>
          
          {/* Description */}
          <p className="text-muted-foreground mb-6">{product.description}</p>
          
          {/* Features */}
          <div className="space-y-1 mb-6">
            {product.features.map((feature, index) => (
              <div key={index} className="flex items-start gap-2">
                <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                <span>{feature}</span>
              </div>
            ))}
          </div>
          
          <Separator className="my-6" />
          
          {/* Stock Status */}
          <div className="flex items-center gap-2 mb-6">
            <div 
              className={`w-3 h-3 rounded-full ${
                product.inStock ? "bg-green-500" : "bg-red-500"
              }`}
            ></div>
            <span>{product.inStock ? "In Stock" : "Out of Stock"}</span>
          </div>
          
          {/* Quantity */}
          {product.inStock && (
            <div className="flex items-center gap-4 mb-6">
              <span className="font-medium">Quantity:</span>
              <div className="flex items-center">
                <Button 
                  variant="outline" 
                  size="icon" 
                  onClick={decrementQuantity}
                  disabled={quantity <= 1}
                >
                  <Minus className="h-4 w-4" />
                </Button>
                <span className="w-12 text-center">{quantity}</span>
                <Button 
                  variant="outline" 
                  size="icon" 
                  onClick={incrementQuantity}
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
            </div>
          )}
          
          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 mb-6">
            <Button 
              size="lg" 
              onClick={handleAddToCart}
              disabled={!product.inStock}
              className="flex-1 bg-gaming-600 hover:bg-gaming-700 gap-2"
            >
              <ShoppingCart className="h-5 w-5" /> Add to Cart
            </Button>
            <Button 
              size="lg" 
              onClick={handleBuyNow}
              disabled={!product.inStock}
              className="flex-1"
              variant="secondary"
            >
              Buy Now
            </Button>
          </div>
          
          {/* Shipping & Returns */}
          <div className="space-y-3 py-4">
            <div className="flex items-center gap-2">
              <Truck className="h-5 w-5 text-gaming-600" />
              <span>Free shipping & returns</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="h-5 w-5 text-gaming-600" />
              <span>2 Year warranty</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Tabs for more info */}
      <div className="mt-12">
        <Tabs defaultValue="specifications">
          <TabsList className="grid grid-cols-3 mb-6">
            <TabsTrigger value="specifications">Specifications</TabsTrigger>
            <TabsTrigger value="reviews">Reviews</TabsTrigger>
            <TabsTrigger value="shipping">Shipping & Returns</TabsTrigger>
          </TabsList>
          
          <TabsContent value="specifications" className="gaming-card p-6">
            <h3 className="text-lg font-semibold mb-4">Technical Specifications</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {Object.entries(product.specifications).map(([key, value]) => (
                <div key={key} className="flex flex-col py-2 border-b border-border/50">
                  <span className="text-sm text-muted-foreground">{key}</span>
                  <span className="font-medium">{value}</span>
                </div>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="reviews" className="gaming-card p-6">
            <h3 className="text-lg font-semibold mb-4">Customer Reviews</h3>
            <div className="flex items-center gap-4 mb-6">
              <div className="text-4xl font-bold">{product.rating}</div>
              <div className="flex flex-col">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      size={20} 
                      className={`${i < Math.floor(product.rating) ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
                    />
                  ))}
                </div>
                <span className="text-sm text-muted-foreground">
                  Based on {product.reviews} reviews
                </span>
              </div>
            </div>
            
            <div className="text-center py-4">
              <p className="text-muted-foreground">
                Detailed reviews coming soon. Be the first to review this product!
              </p>
              <Button variant="outline" className="mt-2">
                Write a Review
              </Button>
            </div>
          </TabsContent>
          
          <TabsContent value="shipping" className="gaming-card p-6">
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-2">Shipping Information</h3>
                <p className="text-muted-foreground">
                  We offer free standard shipping on all orders above ₹5,000. 
                  Orders are typically processed within 24 hours and delivered within 3-5 business days.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-2">Return Policy</h3>
                <p className="text-muted-foreground">
                  If you're not completely satisfied with your purchase, you can return it within 30 days for a full refund. 
                  Products must be in original condition with all packaging and accessories.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-2">Warranty</h3>
                <p className="text-muted-foreground">
                  All our products come with a standard 2-year manufacturer warranty against defects in materials and workmanship.
                </p>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default ProductDetailPage;
