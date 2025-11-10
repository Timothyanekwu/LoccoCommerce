import Products from "@/app/marketplace/products";

export type Product = {
  _id: string;
  name: string;
  img: string[];
  brand: string;
  category: string;
  description: string;
  price: number;
  quantity: number;
  clicks: number;
  ret_pol: string;
  condition: string;
  seo: string[];
  weight: number;
  discount: number;
};

export type CartItem = {
  _id: string;
  name: string;
  img: string;
  price: number;
  qty: number;
  // category: string;
};

export type Orders = {
  customerFullName: string;
  customerPhone: string;
  customerAddress: string;
  orderNumber: number;
  totalPrice: number;
  payMethod: string;
  products: CartItem[];
};

export type Location = {
  _id: string;
  name: string;
  surname: string;
  fullAddress: string;
  info: string;
  phoneNo: string;
  additionalPhone: string;
};

export type AppContextType = {
  products: Product[];
  setProducts: React.Dispatch<React.SetStateAction<Product[]>>;
  cart: CartItem[];
  setCart: React.Dispatch<React.SetStateAction<CartItem[]>>;
  orders: Orders[];
  setOrders: React.Dispatch<React.SetStateAction<Orders[]>>;
  search: string;
  pages: (string | number)[];
  setPages: React.Dispatch<React.SetStateAction<(string | number)[]>>;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  handleSearch: (e: React.FormEvent<HTMLFormElement>) => void;
  handleSort: (opt: string) => void;
  handlePage: (page: string) => void;
  handleCat: (item: string) => void;
  handlePrice: (low: number, high: number) => void;
  searchParams: any;
  totalPages: number;
  setTotalPages: React.Dispatch<React.SetStateAction<number>>;
  addToCart: (item: CartItem) => void;
  removeFromCart: (itemId: string) => void;
  qty: number;
  setQty: React.Dispatch<React.SetStateAction<number>>;
  locations: Location[];
  setLocations: React.Dispatch<React.SetStateAction<Location[]>>;
  locat: Location;
  setLocat: React.Dispatch<React.SetStateAction<Location>>;
  locatView: boolean;
  setLocatView: React.Dispatch<React.SetStateAction<boolean>>;
  addLocation: (e: { target: any }) => void;
  locationSubmit: () => void;
  locationId: string;
  setLocationId: React.Dispatch<React.SetStateAction<string>>;
  payType: string;
  setPayType: React.Dispatch<React.SetStateAction<string>>;
  placeOrder: () => void;
};
