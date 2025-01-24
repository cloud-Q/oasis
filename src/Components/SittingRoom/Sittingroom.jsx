import React, { useState } from 'react'
import "./Sittingroom.scss"
import options from '../../Assets/Data/galleryoptionbuttons';

import { FiSearch } from "react-icons/fi";
// import { IoIosArrowForward } from "react-icons/io";
import ProductGrid from '../MainComponents/ThirdSection/ProductGrid';
// import { useNavigate } from 'react-router';
import Breadcrumb from '../BreadCrumbComponent/Breadcrumb';
import Gototop from '../MainComponents/Gototop';

import prdtInfo from '../../Assets/Data/data';


import { useNavigate } from 'react-router';
import { FaArrowRight } from 'react-icons/fa';
import MyContext from '../Context'
import {useContext} from 'react';

const Sittingroom = () => {

    const { currentProduct, addProductToCart } = useContext(MyContext);

    const Navigate = useNavigate();

    const AddinCart = (product) => {
        addProductToCart(product); // Add product to the global cart
        console.log('Current Cart:', currentProduct);
      };
    // const Navigate = useNavigate();
    // const [value, setValue] = useState();
    const [searchTerm, setSearchTerm] = useState('');

    const filteredProducts = prdtInfo.filter((item) => {
        const productTitle = item.title ? item.title.toLowerCase() : '';
        return searchTerm.toLowerCase() && productTitle.startsWith(searchTerm);
    });

    console.log(filteredProducts);

    

    


    return (

        <div className='SittingRoomContainer'>

            <div className="sittingRoomDescriptionSec">
                <div className="sittingRoomInfo">
                    <h1 className='sittingRoomTitle'>Sitting Room</h1>
                    <p className='tagLine'>Transform your sitting room with our elegant and functional seating options, perfect for every modern home.</p>

                </div>


                <Breadcrumb />
                <div className="ProductSearch">
                    {/* <input type="text" name="search" id="searchBar" placeholder='Search By Name Or Category' onChange={(e)=> {setValue(e.target.value)}} value={value}/> */}
                    <input
                        type="text"
                        placeholder="Search products..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />

                    <div className="searchIcon" >
                        <FiSearch />
                    </div>
                </div>

            </div>


            <div className="ProductOptionSection">
                <button className='primaryBtn btn'>All</button>
                {
                    options.map((i) => <button key={i.id} className='otherBtn btn'>{i.category}</button>)
                }

            </div>
            
            {/* Display filtered products or default grid */}
            
            <div className="productListContainerm">
                {filteredProducts.length > 0 ? (
                    filteredProducts.map(({ id, img, title, cost, colors }) => (
                        <div className="productItemm," key={id}>
                          <div className="productImageContainerm">
                            <img
                              src={img}
                              alt={title}
                              onClick={() => Navigate(`/categories/sittingroom/${title}`)}
                            />
                            
                          </div>
                          <div className="productInfoContainerm">
                            <p className="productTitlem">{title}</p>
                            <p className="pricem">{`$${cost}`}</p>
                          </div>
                          <div className="colorOptionsContainerm">
                            {colors.map(({ colorId, colorImg }) => (
                              <div className="colorOptionm" key={colorId}>
                                <img src={colorImg} alt={`Color ${colorId}`} />
                              </div>
                            ))}
                          </div>
                          <button
                              className="addPrdtm"
                              onClick={() =>
                                AddinCart({ id, img, title, cost, colors })
                              }
                            >
                              Add to Cart <FaArrowRight />
                            </button>
                        </div>
                      ))
                ) : (

                    (searchTerm.length > 0) ? <p> No products Matched</p> : <ProductGrid />
                )}
            </div>

            <Gototop />





        </div>



    )
}

export default Sittingroom
