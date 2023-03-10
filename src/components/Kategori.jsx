import React, { useState } from "react";
import "../assets/css/Kategori.css";
import BarangDua from "./BarangDua";
import BarangSatu from "./BarangSatu";

const Kategori = () => {
  const [page, setPage] = useState(0);
  const [hovered, setHovered] = useState(false);

  const handleClick = (i) => {
    if (i === 0) {
      setPage(1);
    } else {
      setPage(0);
    }
  };

  return (
    <div className="kategori-wrapper">
      <div className="kategori-container">
        <div className="kategori-judul">
          <div className="judul">KATEGORI</div>
        </div>
        <div
          className={page === 0 ? "barang-wrapper" : "barang-wrapper-next"}
          onMouseEnter={() => {
            setHovered(true);
          }}
          onMouseLeave={() => {
            setHovered(false);
          }}
        >
          <button
            className={
              hovered
                ? page === 0
                  ? "change-right-hovered"
                  : "change-left-hovered"
                : page === 0
                ? "change-right"
                : "change-left"
            }
            onClick={() => {
              handleClick(page);
            }}
          >
            <img
              src={
                page === 0
                  ? "/assets/images/svgexport-13.svg"
                  : "/assets/images/svgexport-12.svg"
              }
              className={hovered ? "change-img-hovered" : "change-img"}
            />
          </button>
          <div className="kategori-barang">
            <BarangSatu />
          </div>
          <div className="kategori-barang">
            <BarangDua />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Kategori;
