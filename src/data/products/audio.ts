import { Product } from "@/types/product";

export const audioProducts: Product[] = [
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
