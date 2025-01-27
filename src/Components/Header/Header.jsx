import React, { useState } from 'react'
import './Header.scss'
import Logo from '../../Assets/Images/Oasis.svg'
import ShopingCartLogo from '../../Assets/Images/cart.png'
import { FaArrowRight } from "react-icons/fa";
import { RiShoppingCartLine } from "react-icons/ri";
import Login from '../GetStartedComponents/Login';
import Cart from '../CartComponent/Cart';

import { RxHamburgerMenu } from "react-icons/rx";
import Hamberger from './Hamberger';



const Header = () => {
    const[openLogin,setOpenLogin] = useState(false);

    const closeLogin = () => {
      setOpenLogin(false);
      setOpenCart(false);
      document.body.style.overflow = 'visible';
    }
    
    const[openCart,setOpenCart] = useState(false);
    
    const[openHamberger, setOpenHamberger] = useState(false);
    const closeHamberger = () => {
      setOpenHamberger(false);
    }


  return (
    <>

    <div className='Header-Container'>
      <div className="Header-Section">
        <div className="Header-Logo">
            <img src={Logo} alt="Oasis Logo" />
        </div>
        <div className="HambergerMenu" onClick={()=>setOpenHamberger(true)}>
          <RxHamburgerMenu/>
        </div>
        <div className="Header-Links">
            <li><a href="#">Home</a></li>
            <li><a href="#">Shop</a></li>
            <li><a href="#">Category</a></li>
            <li><a href="#">Blog</a></li>
        </div>
        <div className="Header-LoginSection">
            <div className="ShopingCart">
                <div className="Shoping-Cart-Btn" onClick={() => {setOpenCart(true);
                  document.body.style.overflow = 'hidden';
                } }>
                    <RiShoppingCartLine/>
                </div>
                <div className="LoginBtnContainer">
                    <button className='LoginBtn' onClick={() => {setOpenLogin(true);
                      document.body.style.overflow = 'hidden';
                    }}>Get Started <FaArrowRight/></button>
                </div>
            </div>
        </div>
      </div>
    </div>



    {
        openLogin && <Login closeLogin={closeLogin}/>
    }
    {
        openCart && <Cart closeLogin={closeLogin}/>
    }

    {
      openHamberger && <Hamberger closeHamberger={closeHamberger}/>
    }
</>
  )
}

export default Header
