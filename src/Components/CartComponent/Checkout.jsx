import React, { useState } from 'react'
import './Checkout.scss'
import { IoMdClose } from "react-icons/io";


import * as Yup from 'yup';
import { Formik, Form } from 'formik';
import Payment from './Payment';


const Checkout = ({handleCheckout, closeLogin}) => {

    const DisplayErrorMessage = Yup.object().shape({
        email: Yup.string().email('Invalid email').required('Required'),
    });

    const [openPayment, setOpenPayment] = useState(false);

    const handelCloseEvt = () =>{
        setOpenPayment(false);
        closeLogin();

    }

    



    return (
        <>
        
            <div className='checkoutContainer'>
                <div className="checkoutSection">
                    <div className="HeadingDiv">
                    <button onClick={handleCheckout}><IoMdClose /></button>
                        <h3 className='MainHeading'>Checkout</h3>
                    </div>

                    <div className="bkTOLoginSec">
                        <p className='loginTitle'>Customer Info</p>
                        <p>Already have an account? <a href="#">Login</a></p>
                    </div>

                    <Formik
                        initialValues={{
                            email: '',
                        }}
                        validationSchema={DisplayErrorMessage}
                        onSubmit={values => {
                            console.log(values);
                        }}
                    >

                        {({ errors, touched, handleChange, values }) => (
                            <div className="form">
                                <Form>
                                    <input type='email' name='email' placeholder="email" id="email" onChange={handleChange} value={values.email} />
                                    {touched.email && errors.email && <div className='errorMsg'>{errors.email}</div>}
                                </Form>
                            </div>
                        )}
                    </Formik>

                    <div className="addressContainer">
                        <div className="inputBoxContainer">
                            <div className="addressTitle">
                                <p>Shipping Address</p>
                            </div>
                            <div className="inputBoxes">
                                <input type="text" placeholder='First Name' />
                                <input type="text" placeholder='Last Name' />
                                <input type="text" placeholder='+1' />
                                <input type="text" placeholder='Address' />
                                <div className="locationBox">
                                    <input type=" text" name="city" id="city" placeholder='City' />
                                    <input type=" text" name="country" id="country" placeholder='Country' />
                                </div>
                            </div>


                            <button className='nextBtn' onClick={()=> setOpenPayment(true)}>Proceed to payment</button>

                        </div>
                    </div>

                </div>


            </div>

            {openPayment && <Payment handelCloseEvt={handelCloseEvt} closeLogin={closeLogin}/>}
        </>
    )
}

export default Checkout
