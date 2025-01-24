import React from 'react'
import sofa1 from '../../Assets/Images/Individual Product Img/image 1.png'
import sofa2 from '../../Assets/Images/Individual Product Img/image 1 (1).png'
import sofa3 from '../../Assets/Images/Individual Product Img/image 1 (2).png'
import sofa4 from '../../Assets/Images/Individual Product Img/image 1 (3).png'
import Breadcrumb from '../BreadCrumbComponent/Breadcrumb'
import Gototop from '../MainComponents/Gototop'
import './ProductPage.scss'
import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";
import { TiTick } from "react-icons/ti";

import leaf from '../../Assets/Images/Leaf.png'
import box from '../../Assets/Images/Group.png'

const ProductPage = () => {
  return (
    <div className='productContainer'>
        <div className="porductSec">
            <div className="breadCrumb">
                <Breadcrumb/>
            </div>

            <div className="productInfoContainer">
                <div className="gridOne">
                    <div className="images">
                        <img src={sofa1} alt="" />
                        <img src={sofa2} alt="" />
                        <img src={sofa3} alt="" />
                        <img src={sofa4} alt="" />
                    </div>
                </div>

                <div className="gridTwo">
                    <div className="title">
                      <h2>Luxe Armchair - Left Arm Chute</h2>

                    </div>
                    <div className="rating">
                        <FaStar/>
                        <FaStar/>
                        <FaStar/>
                        <FaStar/>
                        <FaStarHalfAlt/>

                        <span className='ratingNum'>4.8 star</span>
                        
                    </div>

                    <div className="priceContainer">
                        <div className="discountedPrice">
                            <span>$899.00</span>
                        </div>
                        <div className="orignalPrice">
                            <span>$1000.00</span>
                        </div>
                        <div className="discount">
                            <span>-40%</span>

                        </div>
                    </div>

                    <div className="description">
                    Ultra-functional and elegantly minimalist, our Luxe Armchair Collection draws inspiration from Nordic-style décor. It features a neutral color palette and natural wood accents, highlighted by uniquely designed hexagonal legs. 
                    </div>


                    <div className="checkBoxcontainer">
                        <div className="colorBox">
                            <TiTick/>
                        </div>
                        <div className="colorBox colorBox1"></div>
                        <div className="colorBox colorBox2"></div>
                    </div>

                    <div className="buyButton">
                    <button>Buy Now</button>
                    </div>

                    <div className="RandomLine">
                        <img src={box} alt="imgBox" />
                        <span>Free shipping included</span>
                    </div>

                    <div className="RandomLine">
                        <img src={leaf} alt="imgBox" />
                        <span>Made from the best of materials sourced</span>
                    </div>
                </div>
            </div>
        </div>
      <Gototop/>
    </div>
  )
}

export default ProductPage
