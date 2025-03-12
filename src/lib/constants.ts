
export const APP_NAME = "Choose Wisely";

export const CATEGORIES = [
  "Real Estate",
  "Vehicles",
  "Electronics",
  "Fashion",
  "Home",
  "Hobbies",
  "Work",
  "Travel",
  "Partners",
  "Studies",
  "Music",
  "Pets",
];

export type Category = typeof CATEGORIES[number];

export const CRYPTO_PAYMENT_METHODS = [
  { id: "btc", name: "Bitcoin (BTC)", icon: "bitcoin" },
  { id: "eth", name: "Ethereum (ETH)", icon: "ethereum" },
  { id: "doge", name: "Dogecoin (DOGE)", icon: "dogecoin" },
];

export interface Listing {
  id: string;
  title: string;
  description: string;
  price: number;
  category: Category;
  images: string[];
  features: string[];
  createdAt: Date;
  userId: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  profilePicture?: string;
  preferences?: {
    categories: Category[];
    priceRange: [number, number];
    features: string[];
  };
}
