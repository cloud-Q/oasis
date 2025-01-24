import React, { useContext } from 'react';
import './ProductGrid.scss';
import data from '../../../Assets/Data/data';
import { useNavigate } from 'react-router';
import { FaArrowRight } from 'react-icons/fa';
import MyContext from '../../Context'; 

const ProductGrid = () => {
  const Navigate = useNavigate();

  // Access the context values
  const { currentProduct, addProductToCart } = useContext(MyContext);

  const AddinCart = (product) => {
    addProductToCart(product); // Add product to the global cart
    console.log('Current Cart:', currentProduct);
  };

  return (
    <>
      <div className="mainProductSec">
        <div className="ProductContainer">
          <div className="titleNFeatures">
            <h4 className="productTitle">Top Products</h4>
            <select name="productFilters" id="productFilters">
              <option value="Recent">Most Recent</option>
            </select>
          </div>

          <div className="ProductGridSection">
            {data.map(({ id, img, title, cost, colors }) => (
              <div className="productItem" key={id}>
                <div className="productImageContainer">
                  <img
                    src={img}
                    alt={title}
                    onClick={() => Navigate(`/categories/sittingroom/${title}`)}
                  />
                  <button
                    className="addPrdt"
                    onClick={() =>
                      AddinCart({ id, img, title, cost, colors }) // Pass the product object to AddinCart
                    }
                  >
                    Add to Cart <FaArrowRight />
                  </button>
                </div>
                <div className="productInfoContainer">
                  <p className="productTitle">{title}</p>
                  <p className="price">{`$${cost}`}</p>
                </div>
                <div className="colorOptionsContainer">
                  {colors.map(({ colorId, colorImg }) => (
                    <div className="colorOption" key={colorId}>
                      <img src={colorImg} alt={`Color ${colorId}`} />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="endContainer">
        <div className="endSection">
          <p className="progtessDescription">Showing 20 of 48 results</p>
          <p className="progressBar"></p>
          <button className="showMorebtn">Show More</button>
        </div>
      </div>
    </>
  );
};

export default ProductGrid;
