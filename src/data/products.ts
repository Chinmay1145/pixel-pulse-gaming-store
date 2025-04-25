export interface Product {
  id: number;
  name: string;
  category: string;
  subCategory: string;
  price: number;
  originalPrice?: number;
  description: string;
  features: string[];
  specifications: Record<string, string>;
  images: string[];
  rating: number;
  reviews: number;
  inStock: boolean;
  isNew?: boolean;
  isFeatured?: boolean;
  discount?: number;
}

const products: Product[] = [
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
  
  // SMARTPHONES
  {
    id: 6,
    name: "PixelPulse Gaming Phone Pro",
    category: "smartphones",
    subCategory: "gaming",
    price: 79990,
    originalPrice: 89990,
    description: "Ultimate gaming smartphone with dedicated triggers and advanced cooling.",
    features: [
      "Snapdragon 8 Gen 3 processor",
      "16GB LPDDR5X RAM",
      "512GB UFS 4.0 storage",
      "6.8-inch 165Hz AMOLED Display",
      "Dedicated gaming triggers",
      "Advanced cooling system"
    ],
    specifications: {
      "Processor": "Snapdragon 8 Gen 3",
      "Memory": "16GB LPDDR5X",
      "Storage": "512GB UFS 4.0",
      "Display": "6.8-inch AMOLED, 1440x3200, 165Hz",
      "Battery": "6000mAh",
      "Fast Charging": "120W",
      "Operating System": "Android 14",
      "Camera": "50MP + 16MP + 8MP"
    },
    images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    rating: 4.9,
    reviews: 78,
    inStock: true,
    isNew: true,
    isFeatured: true,
    discount: 11
  },
  {
    id: 7,
    name: "PixelPulse Gaming Phone Lite",
    category: "smartphones",
    subCategory: "gaming",
    price: 44990,
    originalPrice: 49990,
    description: "Mid-range gaming smartphone with powerful performance.",
    features: [
      "MediaTek Dimensity 9300 processor",
      "12GB LPDDR5 RAM",
      "256GB UFS 3.1 storage",
      "6.6-inch 144Hz AMOLED Display",
      "Shoulder triggers",
      "Liquid cooling system"
    ],
    specifications: {
      "Processor": "MediaTek Dimensity 9300",
      "Memory": "12GB LPDDR5",
      "Storage": "256GB UFS 3.1",
      "Display": "6.6-inch AMOLED, 1080x2400, 144Hz",
      "Battery": "5500mAh",
      "Fast Charging": "67W",
      "Operating System": "Android 14",
      "Camera": "64MP + 8MP"
    },
    images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    rating: 4.7,
    reviews: 112,
    inStock: true,
    discount: 10
  },
  {
    id: 8,
    name: "PixelPulse Gaming Phone Ultra",
    category: "smartphones",
    subCategory: "gaming",
    price: 109990,
    description: "The most powerful gaming phone with a built-in cooling fan.",
    features: [
      "Snapdragon 8 Gen 3 overclocked processor",
      "24GB LPDDR5X RAM",
      "1TB UFS 4.0 storage",
      "7.1-inch 240Hz AMOLED Display",
      "Built-in cooling fan",
      "RGB lighting effects"
    ],
    specifications: {
      "Processor": "Snapdragon 8 Gen 3 (3.3GHz)",
      "Memory": "24GB LPDDR5X",
      "Storage": "1TB UFS 4.0",
      "Display": "7.1-inch AMOLED, 1440x3200, 240Hz",
      "Battery": "6500mAh",
      "Fast Charging": "165W",
      "Operating System": "Android 14",
      "Camera": "200MP + 50MP + 12MP"
    },
    images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    rating: 4.9,
    reviews: 45,
    inStock: true,
    isNew: true
  },
  
  // AUDIO DEVICES - HEADPHONES
  {
    id: 9,
    name: "PixelPulse Nova Pro Wireless Headphones",
    category: "audio",
    subCategory: "headphones",
    price: 24990,
    originalPrice: 29990,
    description: "Premium wireless gaming headphones with spatial audio and active noise cancellation.",
    features: [
      "50mm dynamic drivers",
      "Active noise cancellation",
      "Spatial audio technology",
      "30+ hours battery life",
      "RGB lighting effects"
    ],
    specifications: {
      "Drivers": "50mm Neodymium",
      "Frequency Response": "20Hz - 40kHz",
      "Connectivity": "Bluetooth 5.3, 2.4GHz Wireless",
      "Battery Life": "30 hours (Bluetooth), 20 hours (RGB on)",
      "Microphone": "Detachable Boom Mic + Built-in Mic",
      "Weight": "320g"
    },
    images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    rating: 4.8,
    reviews: 203,
    inStock: true,
    isFeatured: true,
    discount: 17
  },
  {
    id: 10,
    name: "PixelPulse Stealth Gaming Headphones",
    category: "audio",
    subCategory: "headphones",
    price: 8990,
    originalPrice: 12990,
    description: "Lightweight gaming headphones with immersive audio and clear communication.",
    features: [
      "40mm dynamic drivers",
      "Lightweight design at 250g",
      "Virtual 7.1 surround sound",
      "20 hours battery life",
      "Noise-cancelling microphone"
    ],
    specifications: {
      "Drivers": "40mm Neodymium",
      "Frequency Response": "20Hz - 20kHz",
      "Connectivity": "2.4GHz Wireless",
      "Battery Life": "20 hours",
      "Microphone": "Omnidirectional Boom Mic",
      "Weight": "250g"
    },
    images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    rating: 4.6,
    reviews: 178,
    inStock: true,
    discount: 31
  },
  
  // EARBUDS
  {
    id: 11,
    name: "PixelPulse Echo Pro Gaming Earbuds",
    category: "audio",
    subCategory: "earbuds",
    price: 12990,
    originalPrice: 14990,
    description: "True wireless gaming earbuds with ultra-low latency and immersive sound.",
    features: [
      "10mm graphene drivers",
      "40ms ultra-low latency",
      "Active noise cancellation",
      "36 hours total battery life",
      "RGB lighting effects"
    ],
    specifications: {
      "Drivers": "10mm Graphene-coated",
      "Frequency Response": "20Hz - 20kHz",
      "Connectivity": "Bluetooth 5.3, 2.4GHz Wireless",
      "Battery Life": "8 hours (buds), 28 hours (case)",
      "Water Resistance": "IPX5",
      "Weight": "7g per earbud"
    },
    images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    rating: 4.7,
    reviews: 142,
    inStock: true,
    discount: 13
  },
  {
    id: 12,
    name: "PixelPulse Echo Lite Gaming Earbuds",
    category: "audio",
    subCategory: "earbuds",
    price: 5990,
    originalPrice: 7990,
    description: "Affordable gaming earbuds with low latency and great battery life.",
    features: [
      "8mm dynamic drivers",
      "60ms low latency mode",
      "Environmental noise cancellation",
      "30 hours total battery life",
      "Dual-mic noise reduction"
    ],
    specifications: {
      "Drivers": "8mm Dynamic",
      "Frequency Response": "20Hz - 20kHz",
      "Connectivity": "Bluetooth 5.2",
      "Battery Life": "6 hours (buds), 24 hours (case)",
      "Water Resistance": "IPX4",
      "Weight": "5g per earbud"
    },
    images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    rating: 4.5,
    reviews: 98,
    inStock: true,
    discount: 25
  },
  
  // Add at least 40 more products here with similar structure
  // Just adding a few more representative products for the app to function
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
    id: 18,
    name: "PixelPulse Vision Pro Gaming Phone",
    category: "smartphones",
    subCategory: "gaming",
    price: 89990,
    originalPrice: 99990,
    description: "Premium gaming smartphone with innovative cooling and gaming features.",
    features: [
      "Snapdragon 8 Gen 3 processor",
      "18GB LPDDR5X RAM",
      "512GB UFS 4.0 storage",
      "6.8-inch 165Hz AMOLED Display",
      "Air Triggers 3.0",
      "Dual-fan cooling system"
    ],
    specifications: {
      "Processor": "Snapdragon 8 Gen 3",
      "Memory": "18GB LPDDR5X",
      "Storage": "512GB UFS 4.0",
      "Display": "6.8-inch AMOLED, 1440x3200, 165Hz",
      "Battery": "6500mAh",
      "Fast Charging": "120W",
      "Operating System": "Android 14",
      "Camera": "108MP + 50MP + 12MP"
    },
    images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    rating: 4.9,
    reviews: 89,
    inStock: true,
    isFeatured: true,
    discount: 10
  },
  {
    id: 19,
    name: "PixelPulse Luna Pro Gaming Headphones",
    category: "audio",
    subCategory: "headphones",
    price: 29990,
    originalPrice: 34990,
    description: "Premium wireless gaming headphones with spatial audio and dual wireless connectivity.",
    features: [
      "50mm Beryllium drivers",
      "Active noise cancellation",
      "Spatial audio with head tracking",
      "40 hours battery life",
      "Dual wireless connectivity"
    ],
    specifications: {
      "Drivers": "50mm Beryllium",
      "Frequency Response": "20Hz - 40kHz",
      "Connectivity": "Bluetooth 5.3, 2.4GHz Wireless",
      "Battery Life": "40 hours (ANC off), 30 hours (ANC on)",
      "Microphone": "AI-powered noise cancellation",
      "Weight": "325g"
    },
    images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    rating: 4.9,
    reviews: 156,
    inStock: true,
    isNew: true,
    discount: 14
  },
  {
    id: 20,
    name: "PixelPulse Echo Elite Gaming Earbuds",
    category: "audio",
    subCategory: "earbuds",
    price: 15990,
    originalPrice: 17990,
    description: "Professional gaming earbuds with ultra-low latency and premium sound quality.",
    features: [
      "12mm graphene drivers",
      "35ms ultra-low latency",
      "Active noise cancellation",
      "40 hours total battery life",
      "Dual-device connectivity"
    ],
    specifications: {
      "Drivers": "12mm Graphene-coated",
      "Frequency Response": "20Hz - 20kHz",
      "Connectivity": "Bluetooth 5.3, 2.4GHz Wireless",
      "Battery Life": "10 hours (buds), 30 hours (case)",
      "Water Resistance": "IPX5",
      "Weight": "6g per earbud"
    },
    images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    rating: 4.7,
    reviews: 178,
    inStock: true,
    isFeatured: true,
    discount: 11
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
    id: 23,
    name: "PixelPulse Nexus Gaming Phone",
    category: "smartphones",
    subCategory: "gaming",
    price: 59990,
    originalPrice: 64990,
    description: "Mid-range gaming smartphone with excellent performance and cooling.",
    features: [
      "MediaTek Dimensity 9300 processor",
      "16GB LPDDR5X RAM",
      "256GB UFS 4.0 storage",
      "6.7-inch 144Hz AMOLED Display",
      "Shoulder triggers",
      "Vapor chamber cooling"
    ],
    specifications: {
      "Processor": "MediaTek Dimensity 9300",
      "Memory": "16GB LPDDR5X",
      "Storage": "256GB UFS 4.0",
      "Display": "6.7-inch AMOLED, 1440x3200, 144Hz",
      "Battery": "6000mAh",
      "Fast Charging": "67W",
      "Operating System": "Android 14",
      "Camera": "64MP + 16MP + 8MP"
    },
    images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    rating: 4.6,
    reviews: 134,
    inStock: true,
    discount: 8
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
    id: 25,
    name: "PixelPulse Orbit Gaming Headphones",
    category: "audio",
    subCategory: "headphones",
    price: 18990,
    originalPrice: 21990,
    description: "Premium gaming headphones with exceptional sound quality and comfort.",
    features: [
      "53mm dynamic drivers",
      "DTS Headphone:X v2.0",
      "Memory foam ear cushions",
      "25 hours battery life",
      "Detachable microphone"
    ],
    specifications: {
      "Drivers": "53mm Neodymium",
      "Frequency Response": "20Hz - 20kHz",
      "Connectivity": "2.4GHz Wireless",
      "Battery Life": "25 hours",
      "Microphone": "Detachable boom mic",
      "Weight": "340g"
    },
    images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    rating: 4.7,
    reviews: 245,
    inStock: true,
    discount: 14
  },
  {
    id: 26,
    name: "PixelPulse Zenith Gaming Smartphone",
    category: "smartphones",
    subCategory: "gaming",
    price: 49990,
    originalPrice: 54990,
    description: "Budget-friendly gaming smartphone with great performance.",
    features: [
      "Snapdragon 8 Gen 2 processor",
      "12GB LPDDR5 RAM",
      "256GB UFS 3.1 storage",
      "6.6-inch 120Hz AMOLED Display",
      "Shoulder triggers",
      "Liquid cooling"
    ],
    specifications: {
      "Processor": "Snapdragon 8 Gen 2",
      "Memory": "12GB LPDDR5",
      "Storage": "256GB UFS 3.1",
      "Display": "6.6-inch AMOLED, 1080x2400, 120Hz",
      "Battery": "5500mAh",
      "Fast Charging": "65W",
      "Operating System": "Android 14",
      "Camera": "50MP + 8MP"
    },
    images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    rating: 4.5,
    reviews: 167,
    inStock: true,
    discount: 9
  },
  {
    id: 27,
    name: "PixelPulse Harmony Gaming Earbuds",
    category: "audio",
    subCategory: "earbuds",
    price: 9990,
    originalPrice: 11990,
    description: "Gaming earbuds with great sound and affordable price.",
    features: [
      "10mm dynamic drivers",
      "45ms low latency",
      "Environmental noise cancellation",
      "32 hours total battery life",
      "Touch controls"
    ],
    specifications: {
      "Drivers": "10mm Dynamic",
      "Frequency Response": "20Hz - 20kHz",
      "Connectivity": "Bluetooth 5.2",
      "Battery Life": "8 hours (buds), 24 hours (case)",
      "Water Resistance": "IPX4",
      "Weight": "5g per earbud"
    },
    images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    rating: 4.4,
    reviews: 89,
    inStock: true,
    discount: 17
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
  },
  {
    id: 30,
    name: "PixelPulse Eclipse Gaming Headphones",
    category: "audio",
    subCategory: "headphones",
    price: 12990,
    originalPrice: 14990,
    description: "Mid-range gaming headphones with great comfort and sound.",
    features: [
      "45mm dynamic drivers",
      "Virtual 7.1 surround sound",
      "Breathable mesh ear cushions",
      "20 hours battery life",
      "Flip-to-mute microphone"
    ],
    specifications: {
      "Drivers": "45mm Neodymium",
      "Frequency Response": "20Hz - 20kHz",
      "Connectivity": "2.4GHz Wireless",
      "Battery Life": "20 hours",
      "Microphone": "Flip-to-mute boom mic",
      "Weight": "300g"
    },
    images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    rating: 4.6,
    reviews: 189,
    inStock: true,
    discount: 13
  }
];

export const getFeaturedProducts = () => products.filter(product => product.isFeatured);
export const getNewArrivals = () => products.filter(product => product.isNew);
export const getProductsByCategory = (category: string) => products.filter(product => product.category === category);
export const getProductById = (id: number) => products.find(product => product.id === id);

export default products;
