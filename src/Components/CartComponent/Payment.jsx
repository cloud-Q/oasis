import React, { useState } from 'react'
import { IoMdClose } from "react-icons/io";
import './Payment.scss'
import OrderConfirm from './OrderConfirm';
import card from '../../Assets/Images/Mastercard.png'

const Payment = ({ handelCloseEvt, closeLogin }) => {


    const [openOrderConfirm, setOrderConfirm] = useState(false);

    const handelCloseEvnt = () => {
        setOrderConfirm(false);
        closeLogin();

    }
    return (
        <>
            <div className='paymentContainer'>
                <div className="paymentSection">
                    <div className="HeadingDiv">
                        <button onClick={handelCloseEvt}><IoMdClose /></button>
                        <h3 className='MainHeading'>Checkout</h3>
                    </div>
                    <div className="paymentContent">
                        <input type="text" value="Credit Card Number"/>
                        <div className="cardinfo">
                            <div className="CardNum">
                                <input type="text" placeholder='Exp. date'/> 
                                <img src={card} alt="mastercard" className='mastercard' />
                            </div>
                            <input type="text" placeholder='CVV'/>
                        </div>
                        <input type="text" placeholder='Name of card holder'/>

                        <div className="addressVerify">
                            <input type="checkbox" />
                            <span>Use shipping address as billing address</span>
                        </div>

                        <div className="RememberMeSec">
                            <p>Remember Me</p>
                            <div className="rememberSelect">
                                <input type="checkbox" />
                                <span>Save my information for faster checkout</span>
                            </div>
                        </div>

                    </div>


                    <button className='nextBtn' onClick={()=>setOrderConfirm(true)}>Next</button>


                </div>
            </div>

            {
                openOrderConfirm && <OrderConfirm handelCloseEvnt={handelCloseEvnt}/>
            }
        
        </>
    )
}

export default Payment
