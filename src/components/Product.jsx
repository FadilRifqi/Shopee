import React from "react";
import "../assets/css/Product.css";
import FlashSale from "./FlashSale";
import Kategori from "./Kategori";

const Product = () => {
  return (
    <div className="product-wrapper">
      <div className="product-container">
        <Kategori />
        <FlashSale />
      </div>
    </div>
  );
};

export default Product;
