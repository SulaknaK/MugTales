import React from 'react';
import CategoryNav from '../components/CategoryNav';
import CategoryBookList from '../components/CategoryBookList';

function Category() {

    const categoryPage ={
        display: "grid",
        gridTemplateColumns: "1fr 3fr",
      }


  return (
    <div style={categoryPage}>
       <CategoryNav />
       <CategoryBookList />
    </div>
  )
}

export default Category
