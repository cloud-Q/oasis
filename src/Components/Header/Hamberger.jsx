import React, { useState } from 'react';
import './Hamberger.scss'; // Ensure this path is correct
import { IoMdClose } from "react-icons/io";
import { FaArrowRight } from "react-icons/fa";
import { RiShoppingCartLine } from "react-icons/ri";
import Login from '../GetStartedComponents/Login';
import Cart from '../CartComponent/Cart';

const Hamberger = ({ closeHamberger }) => {
  const [openLogin, setOpenLogin] = useState(false);
  const [openCart, setOpenCart] = useState(false);

  const closeLogin = () => {
    setOpenLogin(false);
    setOpenCart(false);
    document.body.style.overflow = 'visible'; // Restore scroll
  };

  return (
    <>
      <div className="hamContainer">
        <div className="hamSection">
          {/* Close Button */}
          <div className="HeadingDiv">
            <button onClick={closeHamberger}>
              <IoMdClose />
            </button>
          </div>

          {/* Navigation Links */}
          <ul className="Header-Links">
            <li><a href="#">Home</a></li>
            <li><a href="#">Shop</a></li>
            <li><a href="#">Category</a></li>
            <li><a href="#">Blog</a></li>
          </ul>

          {/* Login and Cart */}
          <div className="Header-LoginSection">
            <div className="ShopingCart">
              {/* Shopping Cart Button */}
              <div
                className="Shoping-Cart-Btn"
                onClick={() => {
                  setOpenCart(true);
                  document.body.style.overflow = 'hidden'; // Disable scroll
                }}
              >
                <RiShoppingCartLine />
              </div>

              {/* Login Button */}
              <div className="LoginBtnContainer">
                <button
                  className="LoginBtn"
                  onClick={() => {
                    setOpenLogin(true);
                    document.body.style.overflow = 'hidden'; // Disable scroll
                  }}
                >
                  Get Started <FaArrowRight />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modals for Login and Cart */}
      {openLogin && <Login closeLogin={closeLogin} />}
      {openCart && <Cart closeLogin={closeLogin} />}
    </>
  );
};

export default Hamberger;
