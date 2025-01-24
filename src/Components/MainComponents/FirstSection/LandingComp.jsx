import React from 'react'
import sofa  from '../../../Assets/Images/LoginPageSofaImage.png'
import './Landing.scss'

const LandingComp = () => {
  return (
    <div className='landingContainer'>

        <div className="LandingInfoContainer">
            <div className="LandingInfoSec">
                <h1 className='furnitureTitle'>Furniture Store</h1>
                <h4 className='tagLine'>Discover the Artistry of Modern Contemporary Furniture</h4>
                <h4 className='infoDescription'>Experience the elegance and functionality of cutting-edge design where luxury meets innovation in every piece for ultimate relaxation
                </h4>
                
            </div>

        </div>
        <div className="LandingImageContainer">
            <img src={sofa} alt="imagee of a beautiful sofa" />
        </div>
      
    </div>
  )
}

export default LandingComp
