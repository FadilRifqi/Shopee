import React from "react";
import "../assets/css/Product.css";
import FlashSale from "./FlashSale";
import Kategori from "./Kategori";
import Mall from "./Mall";

const Product = () => {
  return (
    <div className="product-wrapper">
      <div className="product-container">
        <Kategori />
        <FlashSale />
        <Mall />
      </div>
    </div>
  );
};

export default Product;
