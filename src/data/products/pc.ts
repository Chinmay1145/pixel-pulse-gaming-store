import { Product } from "@/types/product";

export const pcProducts: Product[] = [
  {
    id: 13,
    name: "PixelPulse Battle Station PC",
    category: "pc",
    subCategory: "gaming",
    price: 199990,
    description: "Pre-built gaming PC with extreme performance for hardcore gamers.",
    features: [
      "Intel Core i9-13900K processor",
      "NVIDIA GeForce RTX 4090 24GB GDDR6X",
      "64GB DDR5 RAM",
      "2TB NVMe SSD + 4TB HDD",
      "Custom liquid cooling",
      "RGB lighting system"
    ],
    specifications: {
      "Processor": "Intel Core i9-13900K",
      "Graphics": "NVIDIA GeForce RTX 4090 24GB",
      "Memory": "64GB DDR5-6000MHz",
      "Storage": "2TB NVMe PCIe 4.0 SSD + 4TB HDD",
      "Cooling": "Custom 360mm AIO Liquid Cooling",
      "Power Supply": "1200W 80+ Platinum",
      "Operating System": "Windows 11 Pro"
    },
    images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    rating: 4.9,
    reviews: 34,
    inStock: true,
    isNew: true,
    isFeatured: true
  },
  {
    id: 14,
    name: "PixelPulse Commander Gaming PC",
    category: "pc",
    subCategory: "gaming",
    price: 149990,
    originalPrice: 169990,
    description: "High-performance gaming PC for serious gamers.",
    features: [
      "AMD Ryzen 9 7950X processor",
      "NVIDIA GeForce RTX 4080 16GB GDDR6X",
      "32GB DDR5 RAM",
      "1TB NVMe SSD + 2TB HDD",
      "RGB lighting system"
    ],
    specifications: {
      "Processor": "AMD Ryzen 9 7950X",
      "Graphics": "NVIDIA GeForce RTX 4080 16GB",
      "Memory": "32GB DDR5-5600MHz",
      "Storage": "1TB NVMe PCIe 4.0 SSD + 2TB HDD",
      "Cooling": "240mm AIO Liquid Cooling",
      "Power Supply": "850W 80+ Gold",
      "Operating System": "Windows 11 Home"
    },
    images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    rating: 4.8,
    reviews: 67,
    inStock: true,
    discount: 12
  },
  {
    id: 15,
    name: "PixelPulse Scout Gaming PC",
    category: "pc",
    subCategory: "gaming",
    price: 89990,
    originalPrice: 99990,
    description: "Mid-range gaming PC with excellent value for casual gamers.",
    features: [
      "AMD Ryzen 7 7700X processor",
      "NVIDIA GeForce RTX 4060 Ti 8GB GDDR6",
      "16GB DDR5 RAM",
      "1TB NVMe SSD",
      "RGB lighting system"
    ],
    specifications: {
      "Processor": "AMD Ryzen 7 7700X",
      "Graphics": "NVIDIA GeForce RTX 4060 Ti 8GB",
      "Memory": "16GB DDR5-5200MHz",
      "Storage": "1TB NVMe PCIe 4.0 SSD",
      "Cooling": "Air Cooling",
      "Power Supply": "650W 80+ Bronze",
      "Operating System": "Windows 11 Home"
    },
    images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    rating: 4.7,
    reviews: 92,
    inStock: true,
    discount: 10
  },
  {
    id: 16,
    name: "PixelPulse Scout Mini PC",
    category: "pc",
    subCategory: "gaming",
    price: 64990,
    originalPrice: 74990,
    description: "Compact gaming PC perfect for small spaces without compromising performance.",
    features: [
      "AMD Ryzen 5 7600X processor",
      "NVIDIA GeForce RTX 4060 8GB GDDR6",
      "16GB DDR5 RAM",
      "512GB NVMe SSD",
      "Mini-ITX Form Factor"
    ],
    specifications: {
      "Processor": "AMD Ryzen 5 7600X",
      "Graphics": "NVIDIA GeForce RTX 4060 8GB",
      "Memory": "16GB DDR5-5200MHz",
      "Storage": "512GB NVMe PCIe 4.0 SSD",
      "Cooling": "Low-Profile Air Cooling",
      "Power Supply": "600W 80+ Gold",
      "Operating System": "Windows 11 Home"
    },
    images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    rating: 4.6,
    reviews: 45,
    inStock: true,
    discount: 13
  },
  {
    id: 21,
    name: "PixelPulse Quantum Gaming PC",
    category: "pc",
    subCategory: "gaming",
    price: 299990,
    description: "Ultimate gaming PC with top-tier components and custom water cooling.",
    features: [
      "Intel Core i9-14900K processor",
      "NVIDIA GeForce RTX 4090 Ti 24GB",
      "128GB DDR5 RAM",
      "4TB NVMe SSD + 8TB HDD",
      "Custom water cooling loop",
      "Premium RGB lighting"
    ],
    specifications: {
      "Processor": "Intel Core i9-14900K",
      "Graphics": "NVIDIA GeForce RTX 4090 Ti 24GB",
      "Memory": "128GB DDR5-7200MHz",
      "Storage": "4TB NVMe PCIe 5.0 + 8TB HDD",
      "Cooling": "Custom 420mm water cooling",
      "Power Supply": "1600W 80+ Titanium",
      "Operating System": "Windows 11 Pro"
    },
    images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    rating: 5.0,
    reviews: 23,
    inStock: true,
    isNew: true,
    isFeatured: true
  },
  {
    id: 24,
    name: "PixelPulse Aurora Pro Gaming PC",
    category: "pc",
    subCategory: "gaming",
    price: 179990,
    originalPrice: 199990,
    description: "High-end gaming PC with premium components and RGB lighting.",
    features: [
      "AMD Ryzen 9 7950X3D processor",
      "NVIDIA GeForce RTX 4080 SUPER 16GB",
      "64GB DDR5 RAM",
      "2TB NVMe SSD + 4TB HDD",
      "360mm AIO cooling"
    ],
    specifications: {
      "Processor": "AMD Ryzen 9 7950X3D",
      "Graphics": "NVIDIA GeForce RTX 4080 SUPER 16GB",
      "Memory": "64GB DDR5-6000MHz",
      "Storage": "2TB NVMe PCIe 4.0 + 4TB HDD",
      "Cooling": "360mm AIO Liquid Cooling",
      "Power Supply": "1000W 80+ Platinum",
      "Operating System": "Windows 11 Pro"
    },
    images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    rating: 4.8,
    reviews: 67,
    inStock: true,
    discount: 10
  },
  {
    id: 29,
    name: "PixelPulse Atlas Gaming PC",
    category: "pc",
    subCategory: "gaming",
    price: 119990,
    originalPrice: 129990,
    description: "Mid-range gaming PC with great upgradeability.",
    features: [
      "Intel Core i7-14700K processor",
      "NVIDIA GeForce RTX 4070 Ti 12GB",
      "32GB DDR5 RAM",
      "1TB NVMe SSD + 2TB HDD",
      "240mm AIO cooling"
    ],
    specifications: {
      "Processor": "Intel Core i7-14700K",
      "Graphics": "NVIDIA GeForce RTX 4070 Ti 12GB",
      "Memory": "32GB DDR5-5600MHz",
      "Storage": "1TB NVMe PCIe 4.0 + 2TB HDD",
      "Cooling": "240mm AIO Liquid Cooling",
      "Power Supply": "850W 80+ Gold",
      "Operating System": "Windows 11 Home"
    },
    images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    rating: 4.7,
    reviews: 156,
    inStock: true,
    discount: 8
  }
];
