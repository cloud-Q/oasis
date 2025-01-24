import React from 'react'
import './Gallert.scss'
import image1 from '../../../Assets/Images/Gallery IMAGES/Gallery-Image.png'
import image2 from '../../../Assets/Images/Gallery IMAGES/Gallery-Image (1).png'
import image3 from '../../../Assets/Images/Gallery IMAGES/Gallery-Image (2).png'
import image4 from '../../../Assets/Images/Gallery IMAGES/Gallery-Image (3).png'
import image5 from '../../../Assets/Images/Gallery IMAGES/Gallery-Image (4).png'
import image6 from '../../../Assets/Images/Gallery IMAGES/Gallery-Image (5).png'
import image7 from '../../../Assets/Images/Gallery IMAGES/Gallery-Image (6).png'
import image8 from '../../../Assets/Images/Gallery IMAGES/Gallery-Image (7).png'
import image9 from '../../../Assets/Images/Gallery IMAGES/Gallery-Image (8).png'

import options from '../../../Assets/Data/galleryoptionbuttons';



const Gallery = () => {
    return (
        <div className='GallaryContainer'>
            <div className="GallerySec">
                <div className="GalleryHeading">
                    <h3>Design inspiration and modern home ideas</h3>
                </div>
                <div className="GalleryOptionSection">
                    <button className='primaryBtn btn'>All</button>
                    {
                        options.map((i)=> <button key={i.id} className='otherBtn btn'>{i.category}</button>)
                    }
                    
                </div>

{/*further update:-- convert the imgContainer height from px to % so it can be responsive */}
                <div className="ImageGrids">
                    <div className="firsrRow">
                        <div className="img1 imgContainer"><img src={image1} alt="skibbdi"  /></div>
                        <div className="img4 imgContainer"><img src={image4} alt="skibbdi"  /></div>
                        <div className="img7 imgContainer"><img src={image7} alt="skibbdi"  /></div>

                    </div>
                    <div className="secondRow">
                        <div className="img2 imgContainer"><img src={image2} alt="skibbdi"  /></div>
                        <div className="img5 imgContainer"><img src={image5} alt="skibbdi"  /></div>
                        <div className="img8 imgContainer"><img src={image8} alt="skibbdi"  /></div>

                    </div>
                    <div className="thirdRow">
                        <div className="img3 imgContainer"><img src={image3} alt="skibbdi"  /></div>
                        <div className="img6 imgContainer"><img src={image6} alt="skibbdi"  /></div>
                        <div className="img9 imgContainer"><img src={image9} alt="skibbdi"  /></div>

                    </div>

                </div>

            </div>

            <div className="endContainer">
        <div className="endSection">
          <p className='progtessDescription'>Showing 9 of 16 results</p>
          <p className='progressBar'></p>
          <button className='showMorebtn'>Show More</button>
        </div>
      </div>

        </div>
    )
}

export default Gallery
