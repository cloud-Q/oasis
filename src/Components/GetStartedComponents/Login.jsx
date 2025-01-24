import React, { useState } from 'react'
import './Login.scss'
import plant from '../../Assets/Images/Squircle.png'
import GoogleLogo from '../../Assets/Images/google_logo.png'
import AppleLogo from '../../Assets/Images/apple_logo.png'
import { IoMdClose } from "react-icons/io";

import * as Yup from 'yup';
import { Formik, Form} from 'formik';
import Signup from './Signup'
import Forgotpass from './Forgotpass'

const Login = ({closeLogin}) => {

  // for signUp section
  const[signUpOpen,setSignUpOpen] = useState(false);
  const ReturnLogin = () => {
    setSignUpOpen(false);
    closeLogin();
    document.body.style.overflow = 'visible';
  };
  
  
  // for Froget pass section
  const[fgPassOpen,setFgPassUpOpen] = useState(false);
  const RtnLogin = () => {
    setSignUpOpen(false);
    closeLogin();
    document.body.style.overflow = 'visible';
  };




  const DisplayErrorMessage = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  });

  return (
    <>
    <div className='LoginContainer'>
        <div className="LoginSection">
          <div className="LoginHeaderDivision"> 
            <div className="HeadingDiv">
              <button onClick={closeLogin}><IoMdClose/></button>
              <h3 className='MainHeading'>Login</h3>
            </div>

            <div className="Image">
              <img src={plant} alt="plant img" />
            </div>
          </div>

        {/* Main Form */}
          <div className="LoginMidDivision">
            <p>Welcome Back</p> 
            <Formik
              initialValues={{
                email:'',
                password:'',
              }}
              validationSchema={DisplayErrorMessage}
              onSubmit={values => {
                console.log(values);
              }}
            >

              {({errors, touched, handleChange, values})=>(
                <div className="form">
                  <Form>
                    <input type='email' name='email' placeholder="email" id="email" onChange={handleChange} value={values.email}/>
                    {touched.email && errors.email && <div className='errorMsg'>{errors.email}</div>}

                    <input type='password' name='password' placeholder="password" id="password"/>
                    {touched.password && errors.password && <div className='errorMsg' onChange={handleChange} value={values.password}>{errors.password}</div>}

                    <a href="#" className='forgotPassword' onClick={() => {setFgPassUpOpen(true);
                      document.body.style.overflow = 'hidden';
                    }}>Forgot password?</a>
                    <button type="submit">Submit</button>
                  </Form>
                </div>
              )}
            </Formik>
          </div>


          <div className='LoginEndDivision'>
            <span className='seprator'>OR</span>


            <button><img src={GoogleLogo} alt="Google logo" />Continue with Google</button>

            <button><img src={AppleLogo} alt="Apple logo" />Continue with Apple</button>


            <div className="signUpSec">
              <p onClick={() => {setSignUpOpen(true);
                document.body.style.overflow = 'hidden';
              }}>First time here? <a href="#">Create an Account</a></p>
            </div>
          </div>


          


        </div>
      
    </div>



    {signUpOpen && <Signup ReturnLogin={ReturnLogin}/>}

    {fgPassOpen && <Forgotpass RtnLogin={RtnLogin}/>}
    
    </>
  )
}

export default Login
