import { createContext } from "react";

import products from "../Data/data.json";

const Cart = createContext();

function Context({ children }) {
  return <Cart.Provider value={products}>{children}</Cart.Provider>;
}

export default Context;
