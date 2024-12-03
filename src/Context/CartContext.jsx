import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);


  const addToCart = (product, id) => {
    const isProduct = cart.find((ele) => ele.id === id);

    if (isProduct) {
      setCart(
        cart.map((ele) =>
          ele.id === id ? { ...ele, amount: ele.amount + 1 } : ele
        )
      );
    } else {
      setCart([...cart, { ...product, amount: 1 }]);
    }
  };

  const removeItemFromCart = (id) => {
    const newCart = cart.filter((ele) => {
      return ele.id !== id;
    });

    setCart(newCart);
  };

  const clearCart = () => {
    setCart([]);
  };

  const handleIncrease = (id) => {
    setCart(
      cart.map((ele) =>
        ele.id === id ? { ...ele, amount: ele.amount + 1 } : ele
      )
    );
  };

  const handleDecrease = (id) => {
    setCart(
      cart.map((ele) =>
        ele.id === id && ele.amount > 1
          ? { ...ele, amount: ele.amount - 1 }
          : ele
      )
    );
  };
  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeItemFromCart,
        clearCart,
        handleIncrease,
        handleDecrease,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
