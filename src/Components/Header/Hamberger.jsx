import React, {useState} from 'react'
import './Hamberger.scss'
import { IoMdClose } from "react-icons/io";

import { FaArrowRight } from "react-icons/fa";
import { RiShoppingCartLine } from "react-icons/ri";
import Login from '../GetStartedComponents/Login';
import Cart from '../CartComponent/Cart';


const Hamberger = ({ closeHamberger }) => {

    const[openLogin,setOpenLogin] = useState(false);
    
        const closeLogin = () => {
          setOpenLogin(false);
          setOpenCart(false);
          document.body.style.overflow = 'visible';
        }
        
        const[openCart,setOpenCart] = useState(false);
    return (
        <>
            <div className='hamContainer'>
                <div className="hamSection">
                    <div className="HeadingDiv">
                        <button onClick={closeHamberger}><IoMdClose /></button>
                    </div>

                    <div className="Header-Links">
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Shop</a></li>
                        <li><a href="#">Category</a></li>
                        <li><a href="#">Blog</a></li>
                    </div>

                    <div className="Header-LoginSection">
                        <div className="ShopingCart">
                            <div className="Shoping-Cart-Btn" onClick={() => {
                                setOpenCart(true);
                                document.body.style.overflow = 'hidden';
                            }}>
                                <RiShoppingCartLine />
                            </div>
                            <div className="LoginBtnContainer">
                                <button className='LoginBtn' onClick={() => {
                                    setOpenLogin(true);
                                    document.body.style.overflow = 'hidden';
                                }}>Get Started <FaArrowRight /></button>
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

        
        </>
    )
}

export default Hamberger
