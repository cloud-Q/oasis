import React, { useContext, useState } from 'react'
import { IoMdClose } from "react-icons/io";
import './Cart.scss'
import MyContext from '../Context';
import Checkout from './Checkout';

const Cart = ({closeLogin}) => {

    const {currentProduct} = useContext(MyContext);
    
    
    const[openCheckout,setOpenCheckout] = useState(false);
    const handleCheckout = () => {
        setOpenCheckout(false);
        closeLogin();
    }
    
    return (
        <>
            <div className='cartContainer'>
                <div className="cartSection">
                    <div className="HeadingDiv">
                        <button onClick={closeLogin}><IoMdClose /></button>
                        <h3 className='MainHeading'>Cart</h3>
                    </div>

                    {/* products section */}
                    <div className="ProductGridSection">
                    {currentProduct.map(({ id, img, title, cost, colors }) => (
                    <div className="productItem" key={id}>
                        <div className="productImageContainer">
                        <img src={img} alt={title}/>
                        </div>
                        <div className="productInfoContainer">
                        <p className='productTitle'>{title}</p>
                        <p className="price">{`$${cost}`}</p>
                            <div className="colorOptionsContainer">
                            {colors.map(({ colorId, colorImg }) => (
                                <div className="colorOption" key={colorId}>
                                <img src={colorImg} alt={`Color ${colorId}` } />
                                </div>
                            ))}
                            </div>
                        </div>
                    </div>
                    ))}
                    </div>

                    <button onClick={()=> setOpenCheckout(true)} className='nextBtn'>Next</button>
                </div>




            </div>
        

            {openCheckout && <Checkout handleCheckout={handleCheckout} closeLogin={closeLogin} />}

        </>

    
    )
}

export default Cart
