
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Laptop, Smartphone, HeadphonesIcon } from "lucide-react";

const Hero = () => {
  return (
    <div className="bg-gradient-to-br from-gaming-950 via-black to-gaming-900 text-white overflow-hidden">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 md:space-y-8">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                <span className="bg-gradient-to-r from-gaming-400 to-gaming-700 bg-clip-text text-transparent">
                  Next-Gen Gaming
                </span>
                <br />
                Gear for Gamers
              </h1>
              <p className="text-lg text-gray-300 md:pr-12">
                Elevate your gaming experience with cutting-edge technology designed for performance and immersion.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <Button 
                size="lg" 
                className="bg-gaming-600 hover:bg-gaming-700"
                asChild
              >
                <Link to="/products">Shop All Products</Link>
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-gaming-600 text-gaming-500 hover:bg-gaming-950"
                asChild
              >
                <Link to="/category/new">New Arrivals</Link>
              </Button>
            </div>
            
            <div className="grid grid-cols-3 gap-4 pt-4">
              <div className="flex flex-col items-center gap-2 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors text-center">
                <Laptop className="h-6 w-6 text-gaming-500" />
                <span className="text-sm">Gaming Laptops</span>
              </div>
              <div className="flex flex-col items-center gap-2 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors text-center">
                <Smartphone className="h-6 w-6 text-gaming-500" />
                <span className="text-sm">Gaming Phones</span>
              </div>
              <div className="flex flex-col items-center gap-2 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors text-center">
                <HeadphonesIcon className="h-6 w-6 text-gaming-500" />
                <span className="text-sm">Audio Devices</span>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative z-10 animate-float">
              <img 
                src="/placeholder.svg" 
                alt="Gaming Laptop" 
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute inset-0 rounded-lg bg-gaming-500/20 animate-pulse-glow"></div>
            </div>
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-gaming-700/30 rounded-full blur-3xl"></div>
            <div className="absolute -top-10 -left-10 w-60 h-60 bg-gaming-500/20 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
