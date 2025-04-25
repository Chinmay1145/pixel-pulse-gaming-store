
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CheckCircle, ShoppingCart, Package } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";

const CheckoutSuccessPage = () => {
  const { cartItems } = useCart();
  const navigate = useNavigate();

  // Redirect if user directly accesses this page without items
  useEffect(() => {
    if (cartItems.length !== 0) {
      navigate("/");
    }
  }, []);

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-lg mx-auto gaming-card p-8 text-center">
        <div className="flex justify-center mb-4">
          <div className="w-20 h-20 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center">
            <CheckCircle className="h-10 w-10 text-green-600 dark:text-green-400" />
          </div>
        </div>
        
        <h1 className="text-2xl font-bold mb-2">Order Successful!</h1>
        <p className="text-muted-foreground mb-6">
          Thank you for your purchase. Your order has been confirmed and will be shipped soon.
        </p>
        
        <div className="gaming-card p-4 mb-6">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Package className="h-5 w-5 text-gaming-600" />
              <span className="font-medium">Order #A7182DY</span>
            </div>
            <span className="text-sm text-muted-foreground">
              {new Date().toLocaleDateString()}
            </span>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild>
            <Link to="/products">Continue Shopping</Link>
          </Button>
          <Button variant="outline">
            <Link to="/orders">View Order</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CheckoutSuccessPage;
