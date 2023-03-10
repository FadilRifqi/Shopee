import React from "react";
import {
  AiFillInstagram,
  AiOutlineQuestionCircle,
  AiOutlineShoppingCart,
  AiOutlineSearch,
} from "react-icons/ai";
import { MdFacebook } from "react-icons/md";
import { GiGraduateCap } from "react-icons/gi";
import { IoNotificationsOutline } from "react-icons/io5";
import { RiArrowDropDownLine } from "react-icons/ri";
import { VscGlobe } from "react-icons/vsc";
import "../assets/css/Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar-container">
      <div className="navbar-content">
        <div className="upper">
          <div className="nav-items-wrapper">
            <a href="" className="nav-item">
              Seller Centre
            </a>
            <a href="" className="nav-item">
              <span className="mr-2">|</span> Mulai Jual
            </a>
            <a href="" className="nav-item">
              <span className="mr-2">|</span> Download
            </a>
            <div className="contact">
              <div className="mr-2">
                <span className="mr-2">|</span> Ikuti kami di
              </div>
              <div>
                <a href="" className="fa-item">
                  {" "}
                  <MdFacebook />
                </a>
                <a href="" className="fa-item">
                  {" "}
                  <AiFillInstagram />
                </a>
                <a href="" className="fa-item">
                  {" "}
                  <GiGraduateCap />
                </a>
              </div>
            </div>
          </div>
          <div className="nav-items-wrapper">
            <div className="d-flex">
              <a href="" className="nav-item d-flex gap-2">
                <div className="fa-item">
                  <IoNotificationsOutline />
                </div>{" "}
                Notifikasi
              </a>
              <a href="" className="nav-item d-flex gap-2">
                <div className="fa-item">
                  <AiOutlineQuestionCircle />
                </div>{" "}
                Bantuan
              </a>
              <div className="nav-item d-flex gap-2 dropdown">
                <div className="fa-item">
                  <VscGlobe />
                </div>
                Bahasa Indonesia
                <div className="fa-item">
                  <RiArrowDropDownLine />
                </div>
              </div>
            </div>
            <div>
              <a href="" className="auth">
                Daftar
              </a>
              <a href="" className="text-none">
                <span className="mr-2">|</span>
                <span className="auth">Login</span>
              </a>
            </div>
          </div>
        </div>
        <div className="lower">
          <div className="shopee-logo">
            <a href="">
              <img src="./assets/images/svgexport-5.svg" className="img" />
            </a>
          </div>
          <div className="search-bar">
            <div className="search">
              <input type="text" className="input" placeholder="Search" />
              <button className="btn">
                <div className="mt-1">
                  <div className="search-icon">
                    <AiOutlineSearch />
                  </div>
                </div>
              </button>
            </div>
            <div className="recomend">
              <div className="recomend-item">
                <a href="" className="text-none">
                  Sandal wanita
                </a>
              </div>
              <div className="recomend-item">
                <a href="" className="text-none">
                  Tas Selempang Wanita
                </a>
              </div>
              <div className="recomend-item">
                <a href="" className="text-none">
                  Gamis Terbaru 2023 Lebaran Wanita
                </a>
              </div>
              <div className="recomend-item">
                <a href="" className="text-none">
                  Sepatu Wanita
                </a>
              </div>
              <div className="recomend-item">
                <a href="" className="text-none">
                  Tas Wanita
                </a>
              </div>
              <div className="recomend-item">
                <a href="" className="text-none">
                  Jam Tangan Wanita
                </a>
              </div>
              <div className="recomend-item">
                <a href="" className="text-none">
                  Jas Hujan
                </a>
              </div>
              <div className="recomend-item">
                <a href="" className="text-none">
                  Sendal
                </a>
              </div>
            </div>
          </div>
          <div className="cart-wrapper">
            <a href="" className="cart ">
              <AiOutlineShoppingCart />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
