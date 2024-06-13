import { createContext, useContext, useReducer } from "react";

import products from "../Data/data.json";
import { cartReducer, productReducer } from "./Reducers";

const Cart = createContext();

function Context({ children }) {
  const [state, dispatch] = useReducer(cartReducer, {
    products: products,
    cart: [],
  });

  const [productState, productDispatch] = useReducer(productReducer, {
    searchQuery: "",
  });

  return (
    <Cart.Provider value={{ state, dispatch, productState, productDispatch }}>
      {children}
    </Cart.Provider>
  );
}

export default Context;

export const CartState = () => {
  return useContext(Cart);
};
