import React from 'react'
import { useNavigate, useParams } from 'react-router'
import './BreadCrumb.scss'

import { IoIosArrowForward } from "react-icons/io";

const Breadcrumb = () => {

    const Navigate = useNavigate();

    const {firstpage, secondpage, thirdpage} = useParams();
  return (
    <div className="BreadCrumbNavigation">
                        <div className="breadCrumbSec">
                            <ul>
                                <li onClick={() => Navigate('/')}>Home Page</li>
                                <IoIosArrowForward/>
                                {
                                  firstpage && <>
                                  <li onClick={() => Navigate(`/`)}>{firstpage}</li>
                                  <IoIosArrowForward/>
                                  </>
                                }
                                {
                                  secondpage && <>
                                  <li onClick={() => Navigate(`/${firstpage}/${secondpage}`)}>{`${secondpage}`}</li>
                                  <IoIosArrowForward/>
                                  </>
                                }
                                {
                                  thirdpage && <>
                                  <li onClick={() => Navigate(`/${firstpage}/${secondpage}/${thirdpage}`)}>{`${thirdpage}`}</li>
                                  <IoIosArrowForward/>
                                  
                                  </>
                                }
                                
    
                            </ul>
                        </div>
                    </div>
  )
}

export default Breadcrumb
