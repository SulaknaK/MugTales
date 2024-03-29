import React from 'react';
import "../styles/category-book-list-item.css";
import { CartState } from '../context/Context.js';

function CategoryBookListItem({ book}) {

  const {state: {cart}, dispatch} = CartState();
  const images = require.context('../assets/book-images', true);
  console.log(images)

  const bookImageFileName = function (book) {
    let name = book.title.toLowerCase();
    name = name.replace(/ /g, "-");
    name = name.replace(/'/g, "");
    name = name.replace(/:/g, "");
    console.log("name", name)
    return images(`./${name}.jpg`);
  };

  const newBookTitle = (title, maxLength) => {
    if (title.length > maxLength) {
      console.log(title.substring(0, maxLength) + '...');
      return title.substring(0, maxLength) + '...';
    }
    return title;
  };

  const bookTitle = newBookTitle(book.title, 33);

  return (
    <div className="bookcard-card">
      <div className="bookcard-row">
        <div className="bookcard-column">
          {book.isPublic && (
            <button className="bookcard-read-now-btn">
              <i className="fa-solid fa-book-open-reader"></i>
            </button>
          )}
          <img src={bookImageFileName(book)} alt={book.title} className="bookcard-bookImage" />
        </div>
        <div className="bookcard-column">
          <p className="bookcard-name">{bookTitle}</p>
          <p className="bookcard-auther">{book.author}</p>
          <div className="bookcard-bottom-content">
            <p className="bookcard-price">${(book.price).toFixed(2)}</p>
            {
              cart.some((p) => p.bookId === book.bookId) ? (
                <button 
                onClick={() =>{dispatch({type:"REMOVE_FROM_CART", payload: book});}}
                className="bookcard-add-to-cart-btn">Remove from cart</button>
              ):(
                <button
                onClick={() =>{dispatch({type:"ADD_TO_CART", payload: book});}} 
                className="bookcard-add-to-cart-btn">Add to cart</button>
              )
            }
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default CategoryBookListItem;
