import React, { useEffect, useState } from "react";
import "../assets/css/Mall.css";

const Mall = () => {
  const [page, setPage] = useState(0);
  const [productPage, setProductPage] = useState(0);
  const [hovered, setHovered] = useState(false);
  const [productHovered, setProductHovered] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 7000);
    return () => clearInterval(interval);
  }, [page]);

  const handleNext = () => {
    if (page === 2) {
      setPage(0);
    } else {
      setPage(page + 1);
    }
  };

  const handleProductNext = () => {
    if (productPage === 1) {
      setProductPage(1);
    } else {
      setProductPage(productPage + 1);
    }
    console.log(productPage);
  };

  const handlePrev = () => {
    if (page === 0) {
      setPage(2);
    } else {
      setPage(page - 1);
    }
  };

  const handleProductPrev = () => {
    if (productPage === 0) {
      setProductPage(0);
    } else {
      setProductPage(productPage - 1);
    }
    console.log(productPage);
  };

  return (
    <div className="mall-wrapper">
      <div className="mall-container">
        <div className="mall-header">
          <div className="mall-header-judul-container">
            <div className="mall-header-judul">Shopee Mall</div>
          </div>
          <div className="mall-header-container">
            <div className="section">
              <img
                src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/6c502a2641457578b0d5f5153b53dd5d.png"
                width={20}
                height={20}
              />
              <div className="text">7 Hr Pengembalian</div>
            </div>
            <div className="section">
              <img
                src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/511aca04cc3ba9234ab0e4fcf20768a2.png"
                width={20}
                height={20}
              />
              <div className="text">100% Ori</div>
            </div>
            <div className="section">
              <img
                src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/16ead7e0a68c3cff9f32910e4be08122.png"
                width={20}
                height={20}
              />
              <div className="text">Gratis Ongkir</div>
            </div>
          </div>
        </div>
        <div className="mall-items">
          <div
            className="carousel-wrapper"
            onMouseEnter={() => {
              setHovered(true);
            }}
            onMouseLeave={() => {
              setHovered(false);
            }}
          >
            <button
              className={hovered ? "prev-mall op-100" : "prev-mall op-0"}
              onClick={handlePrev}
            >
              <img src="/assets/images/prev-carousel.svg" />
            </button>
            <div className="carousel-container-mall">
              <div
                className={
                  page === 0 ? "carousel-mall" : "carousel-mall-" + page
                }
              >
                <img
                  src="/assets/images/mall-carousel-1.png"
                  alt=""
                  width={390}
                  height={452}
                />
                <img
                  src="/assets/images/mall-carousel-2.png"
                  alt=""
                  width={390}
                  height={452}
                />
                <img
                  src="/assets/images/mall-carousel-3.png"
                  alt=""
                  width={390}
                  height={452}
                />
              </div>
            </div>
            <button
              className={hovered ? "next-mall op-100" : "next-mall"}
              onClick={handleNext}
            >
              <img src="/assets/images/next-carousel.svg" />
            </button>
          </div>
          <div
            className="item-mall-wrapper"
            onMouseEnter={() => {
              setProductHovered(true);
            }}
            onMouseLeave={() => {
              setProductHovered(false);
            }}
          >
            <button
              className={
                productHovered
                  ? productPage !== 1
                    ? "change-right-mall-hovered op-100"
                    : "change-right-mall-hovered op-0"
                  : productPage !== 1
                  ? "change-right-mall op-100"
                  : "change-right-mall op-0"
              }
              onClick={handleProductNext}
            >
              <img
                src="/assets/images/svgexport-13.svg"
                className={productHovered ? "change-img-hovered" : "change-img"}
              />
            </button>
            <div className="item-mall-container">
              <div className={productPage === 0 ? "slide-0" : "slide-1"}>
                <div className="item-mall">
                  <div className="up">
                    <div className="mall-product">
                      <div className="mall-product-img">
                        <img
                          src="/assets/images/mall-item-1.png"
                          alt=""
                          width={200}
                          height={200}
                        />
                      </div>
                      <div className="mall-product-des">Diskon S/D 90%</div>
                    </div>
                    <div className="mall-product">
                      <div className="mall-product-img">
                        <img
                          src="/assets/images/mall-item-2.png"
                          alt=""
                          width={200}
                          height={200}
                        />
                      </div>
                      <div className="mall-product-des">Diskon S/D 90%</div>
                    </div>
                    <div className="mall-product">
                      <div className="mall-product-img">
                        <img
                          src="/assets/images/mall-item-3.png"
                          alt=""
                          width={200}
                          height={200}
                        />
                      </div>
                      <div className="mall-product-des">Diskon S/D 90%</div>
                    </div>
                    <div className="mall-product">
                      <div className="mall-product-img">
                        <img
                          src="/assets/images/mall-item-4.png"
                          alt=""
                          width={200}
                          height={200}
                        />
                      </div>
                      <div className="mall-product-des">Diskon S/D 90%</div>
                    </div>
                  </div>
                  <div className="down">
                    <div className="mall-product">
                      <div className="mall-product-img">
                        <img
                          src="/assets/images/mall-item-5.png"
                          alt=""
                          width={200}
                          height={200}
                        />
                      </div>
                      <div className="mall-product-des">Diskon S/D 90%</div>
                    </div>
                    <div className="mall-product">
                      <div className="mall-product-img">
                        <img
                          src="/assets/images/mall-item-1.png"
                          alt=""
                          width={200}
                          height={200}
                        />
                      </div>
                      <div className="mall-product-des">Diskon S/D 90%</div>
                    </div>
                    <div className="mall-product">
                      <div className="mall-product-img">
                        <img
                          src="/assets/images/mall-item-2.png"
                          alt=""
                          width={200}
                          height={200}
                        />
                      </div>
                      <div className="mall-product-des">Diskon S/D 90%</div>
                    </div>
                    <div className="mall-product">
                      <div className="mall-product-img">
                        <img
                          src="/assets/images/mall-item-3.png"
                          alt=""
                          width={200}
                          height={200}
                        />
                      </div>
                      <div className="mall-product-des">Diskon S/D 90%</div>
                    </div>
                  </div>
                </div>
                <div className="item-mall">
                  <div className="up">
                    <div className="mall-product">
                      <div className="mall-product-img">
                        <img
                          src="/assets/images/mall-item-4.png"
                          alt=""
                          width={200}
                          height={200}
                        />
                      </div>
                      <div className="mall-product-des">Diskon S/D 90%</div>
                    </div>
                    <div className="mall-product">
                      <div className="mall-product-img">
                        <img
                          src="/assets/images/mall-item-5.png"
                          alt=""
                          width={200}
                          height={200}
                        />
                      </div>
                      <div className="mall-product-des">Diskon S/D 90%</div>
                    </div>
                    <div className="mall-product">
                      <div className="mall-product-img">
                        <img
                          src="/assets/images/mall-item-1.png"
                          alt=""
                          width={200}
                          height={200}
                        />
                      </div>
                      <div className="mall-product-des">Diskon S/D 90%</div>
                    </div>
                    <div className="mall-product">
                      <div className="mall-product-img">
                        <img
                          src="/assets/images/mall-item-1.png"
                          alt=""
                          width={200}
                          height={200}
                        />
                      </div>
                      <div className="mall-product-des">Diskon S/D 90%</div>
                    </div>
                  </div>
                  <div className="down">
                    <div className="mall-product">
                      <div className="mall-product-img">
                        <img
                          src="/assets/images/mall-item-1.png"
                          alt=""
                          width={200}
                          height={200}
                        />
                      </div>
                      <div className="mall-product-des">Diskon S/D 90%</div>
                    </div>
                    <div className="mall-product">
                      <div className="mall-product-img">
                        <img
                          src="/assets/images/mall-item-1.png"
                          alt=""
                          width={200}
                          height={200}
                        />
                      </div>
                      <div className="mall-product-des">Diskon S/D 90%</div>
                    </div>
                    <div className="mall-product">
                      <div className="mall-product-img">
                        <img
                          src="/assets/images/mall-item-1.png"
                          alt=""
                          width={200}
                          height={200}
                        />
                      </div>
                      <div className="mall-product-des">Diskon S/D 90%</div>
                    </div>
                    <div className="mall-product">
                      <div className="mall-product-img">
                        <img
                          src="/assets/images/mall-item-1.png"
                          alt=""
                          width={200}
                          height={200}
                        />
                      </div>
                      <div className="mall-product-des">Diskon S/D 90%</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <button
              className={
                productHovered
                  ? productPage !== 0
                    ? "change-left-mall-hovered op-100"
                    : "change-left-mall-hovered op-0"
                  : productPage !== 0
                  ? "change-left-mall op-100"
                  : "change-left-mall op-0"
              }
              onClick={handleProductPrev}
            >
              <img
                src="/assets/images/svgexport-12.svg"
                className={productHovered ? "change-img-hovered" : "change-img"}
              />
            </button>
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
