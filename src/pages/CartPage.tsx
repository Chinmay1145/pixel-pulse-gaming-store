
import { Link, useNavigate } from "react-router-dom";
import { IndianRupee, Trash2, Minus, Plus, ShoppingCart, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useCart } from "@/context/CartContext";

const CartPage = () => {
  const { cartItems, updateQuantity, removeFromCart, cartTotal } = useCart();
  const navigate = useNavigate();

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(price);
  };

  if (cartItems.length === 0) {
    return (
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-2xl font-bold mb-6">Your Cart</h1>
        <div className="gaming-card p-8 text-center space-y-4">
          <div className="flex justify-center">
            <ShoppingCart className="h-16 w-16 text-muted-foreground" />
          </div>
          <h2 className="text-xl font-semibold">Your cart is empty</h2>
          <p className="text-muted-foreground">
            Looks like you haven't added any products to your cart yet.
          </p>
          <Button asChild className="bg-gaming-600 hover:bg-gaming-700 mt-4">
            <Link to="/products">Browse Products</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Button 
        variant="ghost" 
        className="mb-6 flex items-center gap-1"
        onClick={() => navigate(-1)}
      >
        <ArrowLeft className="h-4 w-4" /> Continue Shopping
      </Button>
      
      <h1 className="text-2xl font-bold mb-6">Your Cart</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-4">
          {/* Cart Items */}
          <div className="gaming-card">
            <div className="p-4 md:p-6">
              <div className="hidden md:grid grid-cols-6 gap-4 mb-4 text-sm text-muted-foreground">
                <div className="col-span-3">Product</div>
                <div className="text-center">Price</div>
                <div className="text-center">Quantity</div>
                <div className="text-right">Total</div>
              </div>
              
              <Separator className="mb-6" />
              
              {cartItems.map((item) => (
                <div key={item.id}>
                  <div className="grid grid-cols-1 md:grid-cols-6 gap-4 items-center">
                    {/* Product Info */}
                    <div className="md:col-span-3 flex gap-4 items-center">
                      <Link to={`/product/${item.id}`} className="w-16 h-16 bg-secondary/50 rounded overflow-hidden">
                        <img 
                          src={item.image} 
                          alt={item.name} 
                          className="w-full h-full object-cover"
                        />
                      </Link>
                      <div>
                        <Link to={`/product/${item.id}`} className="font-medium hover:text-gaming-600 transition-colors">
                          {item.name}
                        </Link>
                        <div className="flex items-center gap-2 mt-1 md:hidden">
                          <span className="text-sm text-muted-foreground">Price: </span>
                          <div className="flex items-center">
                            <IndianRupee className="h-3 w-3" /> 
                            {formatPrice(item.price).replace('₹', '')}
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Price */}
                    <div className="hidden md:flex justify-center items-center">
                      <div className="flex items-center">
                        <IndianRupee className="h-3 w-3" /> 
                        {formatPrice(item.price).replace('₹', '')}
                      </div>
                    </div>
                    
                    {/* Quantity */}
                    <div className="flex justify-center gap-2 items-center">
                      <div className="flex items-center border rounded">
                        <Button 
                          variant="ghost" 
                          size="icon"
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          disabled={item.quantity <= 1}
                          className="h-8 w-8"
                        >
                          <Minus className="h-3 w-3" />
                        </Button>
                        <span className="w-10 text-center text-sm">{item.quantity}</span>
                        <Button 
                          variant="ghost" 
                          size="icon"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="h-8 w-8"
                        >
                          <Plus className="h-3 w-3" />
                        </Button>
                      </div>
                      <Button 
                        variant="ghost" 
                        size="icon"
                        onClick={() => removeFromCart(item.id)}
                        className="text-red-500 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-950"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                    
                    {/* Total */}
                    <div className="md:text-right">
                      <div className="flex items-center md:justify-end">
                        <span className="text-sm text-muted-foreground md:hidden mr-1">Total: </span>
                        <div className="flex items-center font-medium">
                          <IndianRupee className="h-3 w-3" /> 
                          {formatPrice(item.price * item.quantity).replace('₹', '')}
                        </div>
                      </div>
                    </div>
                  </div>
                  <Separator className="my-6" />
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Order Summary */}
        <div className="gaming-card h-fit p-4 md:p-6">
          <h2 className="text-xl font-bold mb-4">Order Summary</h2>
          
          <div className="space-y-3 mb-6">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Subtotal</span>
              <div className="flex items-center font-medium">
                <IndianRupee className="h-3 w-3" /> 
                {formatPrice(cartTotal).replace('₹', '')}
              </div>
            </div>
            
            <div className="flex justify-between">
              <span className="text-muted-foreground">Shipping</span>
              <span className="text-green-600">Free</span>
            </div>
            
            <div className="flex justify-between">
              <span className="text-muted-foreground">Tax</span>
              <div className="flex items-center">
                <IndianRupee className="h-3 w-3" /> 
                {formatPrice(cartTotal * 0.18).replace('₹', '')}
              </div>
            </div>
            
            <Separator className="my-3" />
            
            <div className="flex justify-between font-bold">
              <span>Total</span>
              <div className="flex items-center">
                <IndianRupee className="h-4 w-4" /> 
                {formatPrice(cartTotal + (cartTotal * 0.18)).replace('₹', '')}
              </div>
            </div>
          </div>
          
          <Button 
            size="lg"
            className="w-full bg-gaming-600 hover:bg-gaming-700"
            asChild
          >
            <Link to="/checkout">Proceed to Checkout</Link>
          </Button>
          
          <div className="mt-4 text-xs text-center text-muted-foreground">
            <p>Secure checkout powered by Stripe</p>
            <p className="mt-1">Free shipping on all orders above ₹5,000</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
