
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "@/components/ProductCard";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { SlidersHorizontal, Search, X } from "lucide-react";
import products, { Product } from "@/data/products";

const ProductsPage = () => {
  const { category } = useParams<{ category: string }>();
  const [priceRange, setPriceRange] = useState<number[]>([0, 250000]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [showFilters, setShowFilters] = useState(false);
  const [selectedSubCategories, setSelectedSubCategories] = useState<string[]>([]);

  // Get unique sub categories from products
  const subCategories = Array.from(
    new Set(products.map((product) => product.subCategory))
  );

  useEffect(() => {
    let result = products;

    // Filter by category if specified
    if (category && category !== "new") {
      result = result.filter((product) => product.category === category);
    } else if (category === "new") {
      result = result.filter((product) => product.isNew);
    }

    // Filter by search term
    if (searchTerm) {
      result = result.filter((product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Filter by price range
    result = result.filter(
      (product) => product.price >= priceRange[0] && product.price <= priceRange[1]
    );

    // Filter by selected sub categories
    if (selectedSubCategories.length > 0) {
      result = result.filter((product) =>
        selectedSubCategories.includes(product.subCategory)
      );
    }

    setFilteredProducts(result);
  }, [category, searchTerm, priceRange, selectedSubCategories]);

  const handleSubCategoryChange = (subCategory: string) => {
    setSelectedSubCategories((prev) =>
      prev.includes(subCategory)
        ? prev.filter((sc) => sc !== subCategory)
        : [...prev, subCategory]
    );
  };

  const clearFilters = () => {
    setPriceRange([0, 250000]);
    setSearchTerm("");
    setSelectedSubCategories([]);
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
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">
          {category === "new" 
            ? "New Arrivals" 
            : category 
              ? `${category.charAt(0).toUpperCase() + category.slice(1)}` 
              : "All Products"}
        </h1>
        <Button 
          variant="outline"
          className="md:hidden"
          onClick={() => setShowFilters(!showFilters)}
        >
          <SlidersHorizontal className="h-4 w-4 mr-2" />
          Filters
        </Button>
      </div>

      <div className="flex flex-col md:flex-row gap-6">
        {/* Sidebar - Filters */}
        <div 
          className={`
            ${showFilters ? "block" : "hidden"} 
            md:block w-full md:w-64 lg:w-72 space-y-6 gaming-card p-4 h-fit
          `}
        >
          <div className="flex justify-between items-center md:hidden">
            <h2 className="font-semibold">Filters</h2>
            <Button variant="ghost" size="sm" onClick={() => setShowFilters(false)}>
              <X className="h-4 w-4" />
            </Button>
          </div>

          {/* Search */}
          <div className="space-y-2">
            <h3 className="font-semibold">Search</h3>
            <div className="relative">
              <Search className="absolute left-2 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-8"
              />
            </div>
          </div>

          <Separator />

          {/* Price Range */}
          <div className="space-y-2">
            <h3 className="font-semibold">Price Range</h3>
            <Slider
              min={0}
              max={250000}
              step={5000}
              value={priceRange}
              onValueChange={setPriceRange}
              className="my-6"
            />
            <div className="flex justify-between text-sm">
              <span>{formatPrice(priceRange[0])}</span>
              <span>{formatPrice(priceRange[1])}</span>
            </div>
          </div>

          <Separator />

          {/* Sub Categories */}
          <div className="space-y-3">
            <h3 className="font-semibold">Type</h3>
            {subCategories.map((subCategory) => (
              <div className="flex items-center space-x-2" key={subCategory}>
                <Checkbox
                  id={`subcategory-${subCategory}`}
                  checked={selectedSubCategories.includes(subCategory)}
                  onCheckedChange={() => handleSubCategoryChange(subCategory)}
                />
                <Label htmlFor={`subcategory-${subCategory}`} className="capitalize">
                  {subCategory}
                </Label>
              </div>
            ))}
          </div>

          <Separator />

          {/* Clear Filters */}
          <Button variant="outline" className="w-full" onClick={clearFilters}>
            Clear Filters
          </Button>
        </div>

        {/* Product Grid */}
        <div className="flex-1">
          {filteredProducts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-lg text-muted-foreground">No products found matching your criteria.</p>
              <Button onClick={clearFilters} variant="link" className="mt-2">
                Clear all filters
              </Button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
