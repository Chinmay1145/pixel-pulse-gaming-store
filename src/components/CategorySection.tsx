
import { Link } from "react-router-dom";
import { Laptop, Smartphone, HeadphonesIcon, Package, Headphones } from "lucide-react";
import { Button } from "@/components/ui/button";

const CategorySection = () => {
  const categories = [
    {
      name: "Gaming Laptops",
      icon: <Laptop className="h-8 w-8" />,
      path: "/category/laptops",
      description: "Powerful gaming laptops for immersive gaming on the go."
    },
    {
      name: "Gaming Smartphones",
      icon: <Smartphone className="h-8 w-8" />,
      path: "/category/smartphones",
      description: "High-performance gaming phones with advanced cooling and high refresh rates."
    },
    {
      name: "Gaming Headphones",
      icon: <HeadphonesIcon className="h-8 w-8" />,
      path: "/category/audio",
      description: "Immersive audio experience with surround sound and noise cancellation."
    },
    {
      name: "Gaming Earbuds",
      icon: <Headphones className="h-8 w-8" />,
      path: "/category/audio",
      description: "Ultra-low latency gaming earbuds for mobile gaming."
    },
    {
      name: "Gaming PCs",
      icon: <Package className="h-8 w-8" />,
      path: "/category/pc",
      description: "Pre-built gaming PCs with cutting-edge components."
    }
  ];

  return (
    <section className="py-16 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold mb-4">Shop By Category</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore our wide range of gaming products designed for performance and immersion.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {categories.map(category => (
            <Link 
              to={category.path} 
              key={category.name} 
              className="gaming-card p-6 text-center flex flex-col items-center gap-4"
            >
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-gaming-100 dark:bg-gaming-900 text-gaming-600">
                {category.icon}
              </div>
              <h3 className="font-semibold">{category.name}</h3>
              <p className="text-sm text-muted-foreground">{category.description}</p>
              <Button variant="ghost" className="mt-auto text-gaming-600 hover:text-gaming-700 hover:bg-gaming-100 dark:hover:bg-gaming-900">
                Browse Products
              </Button>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
