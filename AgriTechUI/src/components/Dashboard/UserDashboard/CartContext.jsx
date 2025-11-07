import React, { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product, qty = 1) => {
    setCart(prev => {
      const exists = prev.find(p => p.product.id === product.id);
      if (exists) {
        return prev.map(p =>
          p.product.id === product.id ? { ...p, qty: p.qty + qty } : p
        );
      }
      return [...prev, { product, qty }];
    });
  };

  const removeFromCart = (productId) => {
    setCart(prev => prev.filter(p => p.product.id !== productId));
  };

  const clearCart = () => setCart([]);

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};
