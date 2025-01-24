import React from 'react'
import './Footer.scss'
import footerLogo from '../../Assets/Images/Oasis.png'

const Footer = () => {
  return (
    <div className='FooterComponent'>
        <div className="FooterSection">
            <div className="flexOne box">
                <div className="sectionOne">
                    <img src={footerLogo} alt="oasisLogo" />

                    <p className='route'>Home / Blog / Sale / About Us</p>
                </div>
            </div>
            <div className="flexTwo box">
                <p>contact us</p>
                <p>+44994984949</p>
                <p>email</p>
                <p>hello@gmail.com</p>
            </div>
            <div className="flexThree box">
                <p>address</p>
                <p>nklajo fajfeojoijfoj aojfd oa</p>
                <p>opening hours</p>
                <p>10am - 10pm</p>
            </div>
            <div className="flexFour box">
                <p>@copyright</p>
            </div>


        </div>
      
    </div>
  )
}

export default Footer
