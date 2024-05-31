"use client"
import { useRouter } from 'next/navigation';
// import { useRouter  from 'next/navigation';
import React, { createContext, useState, useEffect } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState({});
  const [subTotal, setSubTotal] = useState(0);
const router=useRouter();
  useEffect(() => {
    console.log("Hello I am useEffect from Page[app.js].js");
    try {
      if (localStorage.getItem('cart')) {
        setCart(JSON.parse(localStorage.getItem('cart')));
      }
      if(localStorage.getItem('total')) {
        setSubTotal(parseInt(localStorage.getItem('total')));
      }
    } catch (error) {
      console.log(error);
      localStorage.clear();
    }
  }, []);

  const addToCart = (itemCode, qty, price, name, size, variant) => {
    let newCart = { ...cart };
    const itemKey = `${itemCode}_${size}_${variant}`;
    console.log(newCart);

    if (itemKey in newCart) {
      newCart[itemKey].qty = newCart[itemKey].qty + qty;
    } else {
      newCart[itemKey] = { qty, price, name, size, variant };
    }
    setCart(newCart);
    saveCart(newCart);
  };

  const removeFromCart = (itemCode, qty, price, name, size, variant) => {
    let newCart = { ...cart };
    const itemKey = `${itemCode}_${size}_${variant}`;

    if (itemKey in newCart) {
      newCart[itemKey].qty = newCart[itemKey].qty - qty;
      if (newCart[itemKey].qty <= 0) {
        delete newCart[itemKey];
      }
    }
    setCart(newCart);
    saveCart(newCart);
  };

  const clearCart = () => {
    setCart({});
    saveCart({});
    console.log("Cart has been cleared");
  };

  const buyNow=(itemCode, qty, price, name, size, variant)=>{
  
    const itemKey = `${itemCode}_${size}_${variant}`;
    let newCart =  {itemCode:{ qty:1, price, name, size, variant }};
    // console.log(newCart);
    setCart(newCart);
    saveCart(newCart);

  
    router.push('/checkout')
  }
  const saveCart = (myCart) => {
    localStorage.setItem('cart', JSON.stringify(myCart));
    let subt = 0;
    let keys = Object.keys(myCart);
    for (let i = 0; i < keys.length; i++) {
      subt += myCart[keys[i]].price * myCart[keys[i]].qty;
    }
    localStorage.setItem('total', JSON.stringify(subt));
    setSubTotal(parseInt(localStorage.getItem('total')));
  };

  const contextValue = {
    cart,
    subTotal,
    addToCart,
    removeFromCart,
    clearCart,
    buyNow,
  };

  return (
    <CartContext.Provider value={contextValue}>
      {children}
    </CartContext.Provider>
  );
};
