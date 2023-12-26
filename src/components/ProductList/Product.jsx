import React from 'react';
import './Product.css';

const Product = ({ src, link, title }) => {
  return (
    <div className="p">
      <div className="p-browser">
        {/* <div className="p-circle"></div>
        <div className="p-circle"></div>
        <div className="p-circle"></div> */}
        <h6>{title}</h6>
      </div>
      <a href={link} target="_blank" rel="noreferrer">
        <img src={src} alt="no_img" className="p-img" />
      </a>
    </div>
  );
};

export default Product;
