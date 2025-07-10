// CartContext.js
'use client'
import { createContext, useContext, useState, useEffect } from 'react'

const CartContext = createContext()

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([])

  // ✅ Fixed: Proper quantity calculation
  const qua = cartItems.reduce((total, item) => total + item.quantity, 0)

  const addToCart = (item) => {
    const isItemInCart = cartItems.find((cartItem) => cartItem.id === item.id)
    
    if (isItemInCart) {
      setCartItems(
        cartItems.map((cartItem) =>
          cartItem.id === item.id
            ? { 
                ...cartItem, // Keep original cart item properties like when it was first added (if any are special)
                // Update with details from the latest 'item' being added
                name: item.name || item.title || cartItem.name,
                priceCents: item.priceCents || cartItem.priceCents,
                image: item.image || cartItem.image,
                selectedColor: item.selectedColor, // Always update to latest selected color
                selectedSize: item.selectedSize,   // Always update to latest selected size
                quantity: cartItem.quantity + 1 
              }
            : cartItem
        )
      )
    } else {
      // Add new item, ensure all necessary fields are present
      setCartItems([...cartItems, { 
        ...item, 
        quantity: 1 
      }])
    }
  }

  const removeFromCart = (item) => {
    const isItemInCart = cartItems.find((cartItem) => cartItem.id === item.id)
    
    if (isItemInCart && isItemInCart.quantity === 1) {
      setCartItems(cartItems.filter((cartItem) => cartItem.id !== item.id))
    } else {
      setCartItems(
        cartItems.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
        )
      )
    }
  }

  const getCartTotal = () => {
    return cartItems.reduce((total, item) => total + (item.priceCents || 0) * item.quantity, 0)
  }

  // ✅ Fixed: Load from localStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem("cartItems")
    if (savedCart) {
      try {
        setCartItems(JSON.parse(savedCart))
      } catch (error) {
        console.error("Error loading cart from localStorage:", error)
      }
    }
  }, [])

  // ✅ Fixed: Save to localStorage when cart changes
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems))
  }, [cartItems])

  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeFromCart, getCartTotal, qua, clearCart }} // Add clearCart to context
    >
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error('useCart must be used within a CartProvider')
  }
  return context
}