import { createContext, useEffect, useState } from "react";

export const ProContext = createContext();

export const ProProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      setProducts(data);
    };

    
    getData();
  }, []);

  return (
    <ProContext.Provider value={{ products }}>{children}</ProContext.Provider>
  );
};
