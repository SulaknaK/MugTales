import React from "react";
import { BookList } from "../Data/books.js";
import CategoryBookListItem from "./CategoryBookListItem.js";

function CategoryBookList() {

    const bookGrid = {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(270px, 1fr)",
        gridGap: "20px",
        paddingTop: "20px",
        paddingBottom: "20px",
      };

  return (
    <div style={bookGrid}>
      {BookList.books.map((book) => (
        <CategoryBookListItem book={book} key={book.id}/>
      ))}
    </div>
  );
}

export default CategoryBookList;
