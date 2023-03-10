import React, { useState, useEffect } from "react";
import "../assets/css/Carousel.css";
import Items from "../assets/api/items";
import CarouselImages from "../assets/api/carousel";

const Carousel = () => {
  const [selected, setSelected] = useState(0);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 7000);
    return () => clearInterval(interval);
  }, [selected]);

  const handleNext = () => {
    setSelected(selected + 1);
    if (selected === 4) {
      setSelected(0);
    }
  };

  const handlePrev = () => {
    setSelected(selected - 1);

    if (selected === 0) {
      setSelected(4);
    }
  };

  return (
    <div className="wrapper">
      <div className="container flex">
        <div
          className="carousel-container"
          onMouseEnter={() => {
            setHovered(true);
          }}
          onMouseLeave={() => {
            setHovered(false);
          }}
        >
          <div className="carousel">
            <button
              className={hovered ? "prev-btn op-100" : "prev-btn"}
              onClick={handlePrev}
            >
              <img src="/assets/images/prev-carousel.svg" />
            </button>
            {CarouselImages?.map((image, i) => {
              return (
                <div
                  className={
                    selected === i ? `slide${i} slide` : "slide slideout"
                  }
                >
                  <img src={image} className="img-carousel"></img>
                </div>
              );
            })}
            <div className="index flex">
              {CarouselImages?.map((image, i) => {
                return (
                  <div>
                    <input
                      type="radio"
                      name="radio-btn"
                      id={i}
                      onChange={() => {
                        setSelected(i);
                      }}
                    />
                    <label
                      htmlFor={i}
                      className={
                        selected === i ? `custom-radio active` : "custom-radio"
                      }
                    ></label>
                  </div>
                );
              })}
            </div>
            <button
              className={hovered ? "next-btn op-100" : "next-btn"}
              onClick={handleNext}
            >
              <img src="/assets/images/next-carousel.svg" />
            </button>
          </div>
        </div>
        <div className="banner">
          <img src="/assets/images/banner-1.png" className="img-banner" />
          <img src="/assets/images/banner-2.png" className="img-banner" />
        </div>
      </div>
      <div className="item-container">
        {Items?.map((item, i) => {
          return (
            <div className="item">
              <img src={item.url} className="item-img" />
              <div className="item-name">{item.description}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Carousel;
