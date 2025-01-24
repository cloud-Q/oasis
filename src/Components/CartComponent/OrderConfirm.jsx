import React from 'react'
import './OrderConfirm.scss'
import { IoMdClose } from "react-icons/io";
import tree from '../../Assets/Images/sakuraTree.png'

const OrderConfirm = ({ handelCloseEvnt }) => {
    return (
        <div className='ConfirmContainer'>
            <div className="ConfirmSection">
                <div className="HeadingDiv">
                    <button onClick={handelCloseEvnt}><IoMdClose /></button>
                    <h3 className='MainHeading'></h3>
                </div>

                <div className="Image">
                    <img src={tree} alt="sakura tree img" />
                </div>

                <div className="LastContainer">
                    <div className="confirmationText">
                            <div className="title">
                            Your Order is Confirmed!
                            </div>
                            <div className="discription">
                            Thank you for shopping with us! Your beautiful new furniture is on its way and will be with you soon. Get ready to transform your space!
                            </div>
                    </div>
                    <div className="confimationBtn">
                    
                    <button>Buy Now</button>
                    
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OrderConfirm
