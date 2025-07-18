import React, { useState } from 'react'
import './Header.scss'
import Logo from '../../Assets/Images/Oasis.svg'

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

         // factory: returns a click handler that scrolls to the `href` target
    const scrollToSection = (e) => {
      e.preventDefault()
      const targetId = e.currentTarget.getAttribute('href').slice(1)
      const el = document.getElementById(targetId)
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    }



  return (
    <>

    <div className='Header-Container' id='homeMain'>
      <div className="Header-Section">
        <div className="Header-Logo">
            <img src={Logo} alt="Oasis Logo" />
        </div>
        <div className="HambergerMenu" onClick={()=>setOpenHamberger(true)}>
          <RxHamburgerMenu/>
        </div>
        <div className="Header-Links">
            <li><a href="#homeMain" onClick={scrollToSection}>Home</a></li>
            <li><a href="#productSectionMain" onClick={scrollToSection}>Shop</a></li>
            <li><a href="#categoryMain" onClick={scrollToSection}>Category</a></li>
            <li><a href="#blogMain" onClick={scrollToSection}>Blog</a></li>
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
