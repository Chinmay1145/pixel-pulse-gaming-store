
import { useState } from "react";
import { Link } from "react-router-dom";
import { IndianRupee, ArrowLeft, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Separator } from "@/components/ui/separator";
import { useCart } from "@/context/CartContext";
import { useToast } from "@/components/ui/use-toast";
import { useNavigate } from "react-router-dom";

const CheckoutPage = () => {
  const { cartItems, cartTotal, clearCart } = useCart();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("card");
  
  const tax = cartTotal * 0.18;
  const total = cartTotal + tax;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    
    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false);
      clearCart();
      navigate("/checkout-success");
      
      toast({
        title: "Order placed successfully!",
        description: "Thank you for your purchase.",
      });
    }, 2000);
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
        asChild
      >
        <Link to="/cart">
          <ArrowLeft className="h-4 w-4" /> Back to Cart
        </Link>
      </Button>
      
      <h1 className="text-2xl font-bold mb-6">Checkout</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Shipping Information */}
            <div className="gaming-card p-6">
              <h2 className="text-xl font-semibold mb-4">Shipping Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="firstName">First Name</Label>
                  <Input id="firstName" required className="mt-1" />
                </div>
                <div>
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input id="lastName" required className="mt-1" />
                </div>
                <div className="md:col-span-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input id="email" type="email" required className="mt-1" />
                </div>
                <div className="md:col-span-2">
                  <Label htmlFor="address">Street Address</Label>
                  <Input id="address" required className="mt-1" />
                </div>
                <div>
                  <Label htmlFor="city">City</Label>
                  <Input id="city" required className="mt-1" />
                </div>
                <div>
                  <Label htmlFor="postalCode">Postal Code</Label>
                  <Input id="postalCode" required className="mt-1" />
                </div>
                <div>
                  <Label htmlFor="state">State</Label>
                  <Input id="state" required className="mt-1" />
                </div>
                <div>
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" required className="mt-1" />
                </div>
              </div>
            </div>
            
            {/* Payment Method */}
            <div className="gaming-card p-6">
              <h2 className="text-xl font-semibold mb-4">Payment Method</h2>
              
              <RadioGroup 
                defaultValue="card" 
                value={paymentMethod} 
                onValueChange={setPaymentMethod}
              >
                <div className="flex items-center space-x-2 mb-3">
                  <RadioGroupItem value="card" id="card" />
                  <Label htmlFor="card" className="cursor-pointer">
                    Credit/Debit Card
                  </Label>
                </div>
                <div className="flex items-center space-x-2 mb-3">
                  <RadioGroupItem value="upi" id="upi" />
                  <Label htmlFor="upi" className="cursor-pointer">
                    UPI Payment
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="cod" id="cod" />
                  <Label htmlFor="cod" className="cursor-pointer">
                    Cash on Delivery
                  </Label>
                </div>
              </RadioGroup>
              
              {paymentMethod === "card" && (
                <div className="mt-4 space-y-4">
                  <div>
                    <Label htmlFor="cardNumber">Card Number</Label>
                    <Input 
                      id="cardNumber" 
                      placeholder="1234 5678 9012 3456" 
                      required 
                      className="mt-1" 
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="expiry">Expiry Date</Label>
                      <Input 
                        id="expiry" 
                        placeholder="MM/YY" 
                        required 
                        className="mt-1" 
                      />
                    </div>
                    <div>
                      <Label htmlFor="cvv">CVV</Label>
                      <Input 
                        id="cvv" 
                        placeholder="123" 
                        required 
                        className="mt-1" 
                        maxLength={3} 
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="nameOnCard">Name on Card</Label>
                    <Input 
                      id="nameOnCard" 
                      placeholder="John Doe" 
                      required 
                      className="mt-1" 
                    />
                  </div>
                </div>
              )}
              
              {paymentMethod === "upi" && (
                <div className="mt-4">
                  <Label htmlFor="upiId">UPI ID</Label>
                  <Input 
                    id="upiId" 
                    placeholder="name@bank" 
                    required 
                    className="mt-1" 
                  />
                </div>
              )}
            </div>
            
            <Button 
              type="submit" 
              size="lg"
              className="w-full bg-gaming-600 hover:bg-gaming-700"
              disabled={isProcessing}
            >
              {isProcessing ? "Processing..." : `Pay ${formatPrice(total)}`}
            </Button>
          </form>
        </div>
        
        {/* Order Summary */}
        <div>
          <div className="gaming-card p-6 sticky top-20">
            <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
            
            <div className="space-y-4 mb-4">
              {cartItems.map((item) => (
                <div key={item.id} className="flex gap-3">
                  <div className="w-12 h-12 bg-secondary/50 rounded overflow-hidden flex-shrink-0">
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-grow">
                    <p className="text-sm font-medium line-clamp-1">{item.name}</p>
                    <div className="flex justify-between text-sm text-muted-foreground">
                      <span>Qty: {item.quantity}</span>
                      <div className="flex items-center">
                        <IndianRupee className="h-3 w-3" />
                        {formatPrice(item.price * item.quantity).replace('₹', '')}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <Separator className="my-4" />
            
            <div className="space-y-2 mb-4">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Subtotal</span>
                <div className="flex items-center">
                  <IndianRupee className="h-3 w-3" />
                  {formatPrice(cartTotal).replace('₹', '')}
                </div>
              </div>
              
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Tax</span>
                <div className="flex items-center">
                  <IndianRupee className="h-3 w-3" />
                  {formatPrice(tax).replace('₹', '')}
                </div>
              </div>
              
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Shipping</span>
                <span className="text-green-600">Free</span>
              </div>
            </div>
            
            <Separator className="my-4" />
            
            <div className="flex justify-between font-bold">
              <span>Total</span>
              <div className="flex items-center">
                <IndianRupee className="h-4 w-4" />
                {formatPrice(total).replace('₹', '')}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
