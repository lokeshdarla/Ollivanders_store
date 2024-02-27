import React, { createContext, useContext, useState, ReactNode } from 'react';

interface CartItem {
  id: number;
  ProductName: string;
  description: string;
  Price: number;
  quantity: number;
  imageURL: string;
}

const defaultCartItems: CartItem[] = [
  {
    id: 1,
    ProductName: "Harry Potter's Wand",
    description:
      'The wand that chose Harry Potter, the Boy Who Lived, when he visited Ollivanders Wand shop at 11 years of age.',
    Price: 999.99,
    quantity: 10,
    imageURL: '/assets/harrpotter.webp',
  },
  {
    id: 2,
    ProductName: "Hermione Granger's Wand",
    description:
      "Take home the wand of Hermione Granger, founding member of Dumbledore’s Army, best friend to Ron and Harry and often called the brightest witch of her age.",
    Price: 999.99,
    quantity: 10,
    imageURL: '/assets/harrpotter.webp',
  },
];

interface CartContextValue {
  cartItems: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (productId: number) => void;
  updateCartItemsQuantity: (cartId:number,newQuantity:number)=>void;
}

const CartContext = createContext<CartContextValue | undefined>(undefined);

interface CartProviderProps {
  children: ReactNode;
}

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>(defaultCartItems);

  const addToCart = (item: CartItem) => {
    setCartItems((prev) => [...prev, item]);
  };

  const removeFromCart = (productId: number) => {
    setCartItems((prev) => prev.filter((item) => item.id !== productId));
  };


  const updateCartItemsQuantity = (cartId: number, newQuantity: number) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === cartId ? { ...item, quantity: newQuantity } : item
      )
    );
  };
  

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart,updateCartItemsQuantity }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = (): CartContextValue => {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }

  return context;
};
