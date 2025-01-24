import React from 'react'
import './Signup.scss'
import NightStand from '../../Assets/Images/NightStandTable.png'
import { IoMdClose } from "react-icons/io";

import * as Yup from 'yup';
import { Formik, Form } from 'formik';


const Signup = ({ ReturnLogin }) => {
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
            <button onClick={ReturnLogin}><IoMdClose /></button>
            <h3 className='MainHeading'>Sign Up</h3>
          </div>

          <div className="Image">
            <img src={NightStand} alt="plant img" />
          </div>
        </div>

        {/* Main Form */}
        <div className="SignupMidDivision">
          <p>Welcome Back</p>
          <Formik
            initialValues={{
              email: '',
              password: '',
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

                  <input type='password' name='password' placeholder="password" id="password" />
                  {touched.password && errors.password && <div className='errorMsg' onChange={handleChange} value={values.password}>{errors.password}</div>}


                  <button type="submit">Create Account</button>
                </Form>
              </div>
            )}
          </Formik>
        </div>


        <div className="tNcSection">
          <div className="tNcContainer">
            <input type="checkbox" id='inputChekbx' name='inputChekbx' />
            <label htmlFor="inputChekbx">I agree to the <a href="#">Terms and Conditions of Furniture</a> and acknowledge the <a href="#">Privacy Policy</a></label>
          </div>

        </div>


        <div className="bkTOLoginSec">
          <p>Already have an account? <a href="#">Login</a></p>
        </div>




      </div>

    </div>
  )
}

export default Signup


