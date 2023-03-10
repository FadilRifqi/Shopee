import React, { useState, useEffect } from "react";
import "../assets/css/FlashSale.css";

const date = new Date();
const now = {
  hour: date.getHours().toString(),
  minute: date.getMinutes().toString(),
  second: date.getSeconds().toString(),
};

const FlashSale = () => {
  const [hour, setHour] = useState(now.hour);
  const [minute, setMinute] = useState(now.minute);
  const [second, setSecond] = useState(now.second);

  const getTime = () => {
    const date = new Date();

    setHour(date.getHours().toString());
    setMinute(
      date.getMinutes() < 10
        ? "0" + date.getMinutes().toString()
        : "" + date.getMinutes().toString()
    );
    setSecond(
      date.getSeconds() < 10
        ? "0" + date.getSeconds().toString()
        : date.getSeconds().toString()
    );

    return now;
  };

  useEffect(() => {
    console.log(minute);
    const interval = setInterval(() => {
      getTime();
    }, 1000);
    return () => clearInterval(interval);
  }, [hour, minute, second]);

  return (
    <div className="flash-wrapper">
      <div className="flash-container">
        <div className="flash-time">
          <img src="/assets/images/logo.png" className="flash-judul" />
          <div className="remaining-time">
            <span className="hour">{hour}</span>
            <span className="minute">{minute}</span>
            <span className="second">{second}</span>
          </div>
          <button className="next">
            Lihat Semua{" "}
            <img src="/assets/images/svgexport-13.svg" className="next-img" />
          </button>
        </div>
        <div className="flash-product-container">
          <div className="flash-product">
            <div className="flash-img">
              <img src="/assets/images/flash.jpeg" />
            </div>
            <div className="flash-price"></div>
          </div>
        </div>
      </div>
      <div className="promo-container"></div>
    </div>
  );
};

export default FlashSale;
