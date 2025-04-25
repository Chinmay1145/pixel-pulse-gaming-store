
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ProductCard from "./ProductCard";
import { Button } from "@/components/ui/button";
import { getFeaturedProducts } from "@/data/products";

const FeaturedProducts = () => {
  const featuredProducts = getFeaturedProducts();
  const [startIdx, setStartIdx] = useState(0);
  const displayCount = 3; // Number of items to show at once
  
  const nextProducts = () => {
    if (startIdx + displayCount < featuredProducts.length) {
      setStartIdx(startIdx + 1);
    }
  };
  
  const prevProducts = () => {
    if (startIdx > 0) {
      setStartIdx(startIdx - 1);
    }
  };

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold">Featured Products</h2>
          <div className="flex gap-2">
            <Button 
              variant="outline" 
              size="icon" 
              onClick={prevProducts}
              disabled={startIdx === 0}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button 
              variant="outline" 
              size="icon" 
              onClick={nextProducts}
              disabled={startIdx + displayCount >= featuredProducts.length}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredProducts.slice(startIdx, startIdx + displayCount).map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
