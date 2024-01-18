import { createContext, useContext, useReducer } from "react";
import { cartReducer} from "./Reducers";
import { BookList } from "../Data/books.js";

const Cart = createContext();

const Context = ({ children }) => {

  const products = BookList.books.map((book) => ({
    bookId: book.bookId,
    title: book.title,
    author: book.author,
    price: book.price,
    isPublic: book.isPublic,
    categoryId: book.categoryId,
  }));


  const [state, dispatch] = useReducer(cartReducer, {
    products: products,
    cart: [],
  });

  return (
    <Cart.Provider value={{ state, dispatch }}>
      {children}
    </Cart.Provider>
  );
};

export const CartState = () => {
  return useContext(Cart);
};

export default Context;
