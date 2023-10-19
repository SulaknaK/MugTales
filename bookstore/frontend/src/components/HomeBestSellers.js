import React from 'react';
import "../styles/home-best-sellers.css";
import book1 from '../assets/bestseller-images/book1.jpg';
import book2 from '../assets/bestseller-images/book2.jpg';
import book3 from '../assets/bestseller-images/book3.jpg';
import book4 from '../assets/bestseller-images/book4.jpg';

function HomeBestSellers() {
  return (
    <div className='bs-section'>
        <h2 className="bs-title">Best Sellers</h2>
        <div className="bs-items">
            <img
                src={book1}
                alt="bs1"
            />
            <img
                src={book2}
                alt="bs2"
            />
            <img
                src={book3}
                alt="bs3"
            />
            <img
                src={book4}
                alt="bs4"
            />
        </div>
    </div>
  );
}

export default HomeBestSellers;
