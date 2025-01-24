import React from 'react'
import './Forgorpass.scss'
import BrokenVase from '../../Assets/Images/BrokenVass.png'
import { IoMdClose } from "react-icons/io";

import * as Yup from 'yup';
import { Formik, Form } from 'formik';

const Forgotpass = ({ RtnLogin }) => {
    const DisplayErrorMessage = Yup.object().shape({
      email: Yup.string().email('Invalid email').required('Required'),
      password: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    });
  
    return (
      <div className='SignupContainer'>
        <div className="SignupSection">
          <div className="SignupHeaderDivision">
            <div className="HeadingDiv">
              <button onClick={RtnLogin}><IoMdClose /></button>
              <h3 className='MainHeading'>Forgot Password</h3>
            </div>
  
            <div className="Image">
              <img src={BrokenVase} alt="vase img" />
            </div>
          </div>
  
          {/* Main Form */}
          <div className="SignupMidDivision">
            <p>Enter Your Email & we'll send a Link to Reset Your Password</p>
            <Formik
              initialValues={{
                email: '',
                // password: '',
              }}
              validationSchema={DisplayErrorMessage}
              onSubmit={values => {
                console.log(values);
              }}
            >
  
              {({ errors, touched, handleChange, values }) => (
                <div className="form SignUpForm">
                  <Form>
                    <input type='email' name='email' placeholder="email" id="email" onChange={handleChange} value={values.email} />
                    {touched.email && errors.email && <div className='errorMsg'>{errors.email}</div>}
  
                    {/* <input type='password' name='password' placeholder="password" id="password" />
                    {touched.password && errors.password && <div className='errorMsg' onChange={handleChange} value={values.password}>{errors.password}</div>} */}
  
  
                    <button type="submit">Reset Password</button>
                  </Form>
                </div>
              )}
            </Formik>
          </div>
  
  
  
  
          <div className="bkTOLoginSec">
            <p>Remember Your Password? <a href="#">Back to Login</a></p>
          </div>
  
  
  
  
        </div>
  
      </div>
    )
  }

export default Forgotpass
