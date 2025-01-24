import React from 'react'
import "./Sittingroom.scss"
import options from '../../Assets/Data/galleryoptionbuttons';

import { FiSearch } from "react-icons/fi";
// import { IoIosArrowForward } from "react-icons/io";
import ProductGrid from '../MainComponents/ThirdSection/ProductGrid';
// import { useNavigate } from 'react-router';
import Breadcrumb from '../BreadCrumbComponent/Breadcrumb';
import Gototop from '../MainComponents/Gototop';

const Sittingroom = () => {
    // const Navigate = useNavigate();
    return (

        <div className='SittingRoomContainer'>

            <div className="sittingRoomDescriptionSec">
                <div className="sittingRoomInfo">
                    <h1 className='sittingRoomTitle'>Sitting Room</h1>
                    <p className='tagLine'>Transform your sitting room with our elegant and functional seating options, perfect for every modern home.</p>

                </div>

                {/* make a seperate breadCrumbComponent and implement it using useParams() */}
                <Breadcrumb/>
                {/* <div className="BreadCrumbNavigation">
                    <div className="breadCrumbSec">
                        <ul>
                            <li onClick={() => Navigate('/')}>Home Page</li>
                            <IoIosArrowForward/>
                            <li onClick={() => Navigate('/')}>Categories</li>
                            <IoIosArrowForward/>
                            <li onClick={() => Navigate('/categories/sittingroom')}>Setting Room</li>
                            

                        </ul>
                    </div>
                </div> */}
                <div className="ProductSearch">
                    <input type="text" name="search" id="searchBar" placeholder='Search By Name Or Category'/>
                    <div className="searchIcon">
                        <FiSearch />
                    </div>
                </div>

            </div>

            
            <div className="ProductOptionSection">
                    <button className='primaryBtn btn'>All</button>
                    {
                        options.map((i)=> <button key={i.id} className='otherBtn btn'>{i.category}</button>)
                    }
                    
                </div>
            <div className="productListContainer">
                    <ProductGrid/>
            </div>

    <Gototop/>
        </div>


        
    )
}

export default Sittingroom
