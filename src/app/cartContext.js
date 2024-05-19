"use client"
import React, { createContext, useState, useEffect } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState({});
  const [subTotal, setSubTotal] = useState(0);

  useEffect(() => {
    console.log("Hello i am useEffect from Page[app.js].js");
    try {
      if (localStorage.getItem('cart')) {
        setCart(JSON.parse(localStorage.getItem('cart')));
      }
    } catch (error) {
      console.log(error);
      localStorage.clear();
    }
  }, []);

 const addToCart=(itemCode,qty,price,name,size,variant)=>
 {
let newCart=cart;
if(itemCode in cart)
    {
        newCart[itemCode].qty=cart[itemCode].qty+qty;
    }
    else{
        
        newCart[itemCode]={qty:1,price,name,size,variant}
    }
    console.log(newCart);
    setCart(newCart)
    saveCart(newCart)
 }

  
    const removeFromCart=(itemCode,qty,price,name,size,variant)=>{
  
        let newCart=cart;
        if (itemCode in cart)
          {
            newCart[itemCode].qty=cart[itemCode].qty-qty
          }
          if(newCart[itemCode]["qty"]<=0)
            {
              delete newCart[itemCode];
            }
          setCart(newCart);
          saveCart(newCart)
        }

        const clearCart=()=>
            {
              setCart({});
              saveCart({})
              console.log("Cart has been cleard");
            }
  const saveCart = (myCart) => {
    localStorage.setItem('cart',JSON.stringify(myCart));
    let subt=0;
    let keys=Object.keys(myCart);
    console.log(keys.length);
    for(let i=0;i<keys.length;i++)
        {
            subt+=myCart[keys[i]].price*myCart[keys[i]].qty;
        }
       setSubTotal(subt)
  };

  const contextValue = {
    cart,
    subTotal,
    addToCart,
    removeFromCart,
    clearCart,
  };

  return (
    <CartContext.Provider value={contextValue}>
      {children}
    </CartContext.Provider>
  );
};