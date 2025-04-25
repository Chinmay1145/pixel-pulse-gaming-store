import { Product } from "@/types/product";

export const laptops: Product[] = [
  // GAMING LAPTOPS
  {
    id: 1,
    name: "PixelPulse Predator X1 Gaming Laptop",
    category: "laptops",
    subCategory: "gaming",
    price: 129990,
    originalPrice: 149990,
    description: "Ultimate gaming laptop with blazing-fast performance and immersive visuals.",
    features: [
      "13th Gen Intel Core i9 processor",
      "NVIDIA GeForce RTX 4080 16GB GDDR6",
      "32GB DDR5 RAM",
      "1TB NVMe SSD",
      "17.3-inch 240Hz QHD Display"
    ],
    specifications: {
      "Processor": "Intel Core i9-13900H",
      "Graphics": "NVIDIA GeForce RTX 4080 16GB GDDR6",
      "Memory": "32GB DDR5-4800MHz (Dual Channel)",
      "Storage": "1TB PCIe NVMe SSD",
      "Display": "17.3-inch QHD (2560x1440) IPS, 240Hz",
      "Operating System": "Windows 11 Home",
      "Battery": "99.9Wh",
      "Weight": "2.4kg"
    },
    images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    rating: 4.8,
    reviews: 124,
    inStock: true,
    isFeatured: true,
    discount: 13
  },
  {
    id: 2,
    name: "PixelPulse Shadow Gaming Laptop",
    category: "laptops",
    subCategory: "gaming",
    price: 89990,
    originalPrice: 99990,
    description: "Sleek gaming laptop with powerful performance for competitive gaming.",
    features: [
      "AMD Ryzen 9 processor",
      "NVIDIA GeForce RTX 4060 8GB GDDR6",
      "16GB DDR5 RAM",
      "512GB NVMe SSD",
      "15.6-inch 165Hz Full HD Display"
    ],
    specifications: {
      "Processor": "AMD Ryzen 9 7940HS",
      "Graphics": "NVIDIA GeForce RTX 4060 8GB GDDR6",
      "Memory": "16GB DDR5-4800MHz",
      "Storage": "512GB PCIe NVMe SSD",
      "Display": "15.6-inch Full HD IPS, 165Hz",
      "Operating System": "Windows 11 Home",
      "Battery": "70Wh",
      "Weight": "2.1kg"
    },
    images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    rating: 4.7,
    reviews: 98,
    inStock: true,
    discount: 10
  },
  {
    id: 3,
    name: "PixelPulse Stealth Pro",
    category: "laptops",
    subCategory: "gaming",
    price: 149990,
    originalPrice: 169990,
    description: "Premium thin and light gaming laptop with no performance compromise.",
    features: [
      "Intel Core i9 processor",
      "NVIDIA GeForce RTX 4090 24GB GDDR6",
      "64GB DDR5 RAM",
      "2TB NVMe SSD",
      "16-inch Mini-LED 240Hz Display"
    ],
    specifications: {
      "Processor": "Intel Core i9-13980HX",
      "Graphics": "NVIDIA GeForce RTX 4090 24GB GDDR6",
      "Memory": "64GB DDR5-5600MHz",
      "Storage": "2TB PCIe Gen4 NVMe SSD",
      "Display": "16-inch Mini-LED, 3840x2400, 240Hz",
      "Operating System": "Windows 11 Pro",
      "Battery": "99.9Wh",
      "Weight": "2.1kg"
    },
    images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    rating: 4.9,
    reviews: 56,
    inStock: true,
    isNew: true,
    isFeatured: true,
    discount: 12
  },
  {
    id: 4,
    name: "PixelPulse Titan Gaming Laptop",
    category: "laptops",
    subCategory: "gaming",
    price: 219990,
    description: "The ultimate desktop replacement with uncompromising performance.",
    features: [
      "Intel Core i9 processor (overclockable)",
      "NVIDIA GeForce RTX 4090 SLI 24GB GDDR6",
      "128GB DDR5 RAM",
      "4TB NVMe RAID SSD",
      "17.3-inch 4K 144Hz OLED Display"
    ],
    specifications: {
      "Processor": "Intel Core i9-13980HX (Overclockable)",
      "Graphics": "Dual NVIDIA GeForce RTX 4090 24GB GDDR6",
      "Memory": "128GB DDR5-5600MHz",
      "Storage": "4TB PCIe Gen4 NVMe RAID SSD",
      "Display": "17.3-inch 4K OLED, 3840x2160, 144Hz",
      "Operating System": "Windows 11 Pro",
      "Battery": "99.9Wh",
      "Weight": "3.5kg"
    },
    images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    rating: 4.9,
    reviews: 32,
    inStock: false,
    isNew: true
  },
  {
    id: 5,
    name: "PixelPulse Zenith Gaming Laptop",
    category: "laptops",
    subCategory: "gaming",
    price: 74990,
    originalPrice: 79990,
    description: "Affordable gaming laptop without compromising on performance.",
    features: [
      "AMD Ryzen 7 processor",
      "NVIDIA GeForce RTX 3070 8GB GDDR6",
      "16GB DDR4 RAM",
      "512GB NVMe SSD",
      "15.6-inch 144Hz Full HD Display"
    ],
    specifications: {
      "Processor": "AMD Ryzen 7 7735HS",
      "Graphics": "NVIDIA GeForce RTX 3070 8GB GDDR6",
      "Memory": "16GB DDR4-3200MHz",
      "Storage": "512GB PCIe NVMe SSD",
      "Display": "15.6-inch Full HD IPS, 144Hz",
      "Operating System": "Windows 11 Home",
      "Battery": "60Wh",
      "Weight": "2.3kg"
    },
    images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    rating: 4.6,
    reviews: 145,
    inStock: true,
    discount: 6
  },
  {
    id: 17,
    name: "PixelPulse Aero Pro Gaming Laptop",
    category: "laptops",
    subCategory: "gaming",
    price: 169990,
    originalPrice: 189990,
    description: "Ultra-thin gaming laptop with exceptional performance and battery life.",
    features: [
      "Intel Core i9-13980HX processor",
      "NVIDIA GeForce RTX 4080 16GB GDDR6",
      "32GB DDR5 RAM",
      "2TB NVMe SSD",
      "16-inch 240Hz QHD+ Display"
    ],
    specifications: {
      "Processor": "Intel Core i9-13980HX",
      "Graphics": "NVIDIA GeForce RTX 4080 16GB GDDR6",
      "Memory": "32GB DDR5-6400MHz",
      "Storage": "2TB PCIe Gen4 NVMe SSD",
      "Display": "16-inch QHD+ (2560x1600), 240Hz",
      "Battery": "99.9Wh",
      "Weight": "2.1kg"
    },
    images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    rating: 4.8,
    reviews: 67,
    inStock: true,
    isNew: true,
    discount: 11
  },
  {
    id: 22,
    name: "PixelPulse Vector Gaming Laptop",
    category: "laptops",
    subCategory: "gaming",
    price: 109990,
    originalPrice: 119990,
    description: "High-performance gaming laptop with advanced cooling system.",
    features: [
      "AMD Ryzen 9 7945HX processor",
      "NVIDIA GeForce RTX 4070 8GB",
      "32GB DDR5 RAM",
      "1TB NVMe SSD",
      "17.3-inch 240Hz QHD Display"
    ],
    specifications: {
      "Processor": "AMD Ryzen 9 7945HX",
      "Graphics": "NVIDIA GeForce RTX 4070 8GB",
      "Memory": "32GB DDR5-5600MHz",
      "Storage": "1TB PCIe Gen4 NVMe SSD",
      "Display": "17.3-inch QHD, 240Hz",
      "Battery": "90Wh",
      "Weight": "2.5kg"
    },
    images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    rating: 4.7,
    reviews: 89,
    inStock: true,
    discount: 8
  },
  {
    id: 28,
    name: "PixelPulse Phoenix Gaming Laptop",
    category: "laptops",
    subCategory: "gaming",
    price: 79990,
    originalPrice: 89990,
    description: "Entry-level gaming laptop with great value.",
    features: [
      "AMD Ryzen 7 7735HS processor",
      "NVIDIA GeForce RTX 3060 6GB",
      "16GB DDR4 RAM",
      "512GB NVMe SSD",
      "15.6-inch 144Hz Full HD Display"
    ],
    specifications: {
      "Processor": "AMD Ryzen 7 7735HS",
      "Graphics": "NVIDIA GeForce RTX 3060 6GB",
      "Memory": "16GB DDR4-3200MHz",
      "Storage": "512GB PCIe NVMe SSD",
      "Display": "15.6-inch Full HD, 144Hz",
      "Battery": "56Wh",
      "Weight": "2.3kg"
    },
    images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    rating: 4.5,
    reviews: 234,
    inStock: true,
    discount: 11
  },
];
