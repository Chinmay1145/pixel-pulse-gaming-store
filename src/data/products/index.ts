
import { Product } from "@/types/product";
import { laptops } from "./laptops";
import { smartphones } from "./smartphones";
import { audioProducts } from "./audio";
import { pcProducts } from "./pc";

const products: Product[] = [
  ...laptops,
  ...smartphones,
  ...audioProducts,
  ...pcProducts
];

export const getFeaturedProducts = () => products.filter(product => product.isFeatured);
export const getNewArrivals = () => products.filter(product => product.isNew);
export const getProductsByCategory = (category: string) => products.filter(product => product.category === category);
export const getProductById = (id: number) => products.find(product => product.id === id);

export default products;
