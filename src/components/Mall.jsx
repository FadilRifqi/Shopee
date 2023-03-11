import React from "react";
import "../assets/css/Mall.css";

const Mall = () => {
  return (
    <div className="mall-wrapper">
      <div className="mall-container">
        <div className="mall-header"></div>
        <div className="mall-items">
          <div className="carousel-wrapper">
            <div className="carousel-container-mall"></div>
          </div>
          <div className="item-mall-wrapper">
            <div className="item-mall-container">
              <div className="item-mall"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="item-terlaris-wrapper">
        <div className="item-terlaris-container">
          <div className="item-terlaris-header"></div>
          <div className="item-terlaris-product-wrapper">
            <div className="item-terlaris-product-container">
              <div className="item-terlaris-product"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mall;
