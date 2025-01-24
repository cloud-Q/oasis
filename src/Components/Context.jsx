import React, { createContext, useState } from 'react';

// Create the context
const MyContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [currentProduct, setCurrentProduct] = useState([]);

  // Add a product to the cart
  const addProductToCart = (product) => {
    setCurrentProduct((prevProducts) => {
      if (prevProducts.some((item) => item.id === product.id)) {
        return prevProducts; 
      }
      return [...prevProducts, product];
    });
  };


  return (
    <MyContext.Provider
      value={{
        currentProduct,
        addProductToCart,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};

export default MyContext;
