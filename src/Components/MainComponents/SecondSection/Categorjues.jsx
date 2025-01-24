import React from 'react'
import'./Category.scss'
import { FaArrowRight } from "react-icons/fa";
import kittle from '../../../Assets/Images/kittle.png'
import GreySofa from '../../../Assets/Images/greySofa.png'
import Plant from '../../../Assets/Images/Squircle.png'
import NightStand from '../../../Assets/Images/NightStandTable.png'
import { useNavigate } from 'react-router';

const Categorjues = () => {

    const Navigate = useNavigate();
  return (
    <div className='categoryContainer'>
        <div className="categorySection">
            <h4>Category</h4>
            <div className="categoryItemGrids">
                <div className="gridOne">
                    <div className='content'>
                        <p className='ProductTitle'>Sitting Room</p>
                        <button onClick={() => Navigate('/categories/sittingroom')}>Shop now <FaArrowRight/></button>
                    </div>
                    <div className="productImage imgPrOne">
                        <img src={GreySofa} alt="a beautiful grey sofa" />
                    </div>
                </div>
                <div className="gridTwoFirst">
                    <div className='content'>
                        <p className='ProductTitle'>Accessories</p>
                        <button onClick={() => Navigate('/categories/sittingroom')}>Shop now <FaArrowRight/></button>
                    </div>
                    <div className="productImage imgPrOne">
                        <img src={Plant} alt="a beautiful grey sofa" />
                    </div>
                </div>
                <div className="gridTwoSecond">
                    <div className='content'>
                        <p className='ProductTitle'>Kitchen</p>
                        <button onClick={() => Navigate('/categories/sittingroom')}>Shop now <FaArrowRight/></button>
                    </div>
                    <div className="productImage imgPrOne">
                        <img src={kittle} alt="a beautiful red kettle" />
                    </div>
                </div>
                <div className="gridThird">
                <div className='content'>
                        <p className='ProductTitle'>BedRoom</p>
                        <button onClick={() => Navigate('/categories/sittingroom')}>Shop now <FaArrowRight/></button>
                    </div>
                    <div className="productImage imgPrOne">
                        <img src={NightStand} alt="a beautiful wooden night-stand" />
                    </div>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Categorjues
