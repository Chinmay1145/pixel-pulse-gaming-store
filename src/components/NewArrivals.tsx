
import { Link } from "react-router-dom";
import ProductCard from "./ProductCard";
import { Button } from "@/components/ui/button";
import { getNewArrivals } from "@/data/products";

const NewArrivals = () => {
  const newProducts = getNewArrivals();
  const displayProducts = newProducts.slice(0, 4);

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div>
            <h2 className="text-2xl font-bold mb-2">New Arrivals</h2>
            <p className="text-muted-foreground">Check out the latest gaming gear</p>
          </div>
          <Button 
            variant="outline" 
            className="mt-4 md:mt-0"
            asChild
          >
            <Link to="/category/new">View All New Products</Link>
          </Button>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {displayProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewArrivals;
