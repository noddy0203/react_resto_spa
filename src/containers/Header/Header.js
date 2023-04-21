import React from 'react';
import "./header.css";
import {SubHeading} from "../../components/index";
import {images} from "../../constants";

const Header = () => {
  return (
    <div className='app_header app_wrapper section_padding' id='home'>
      <div className='app_wrapper_info'>
         <SubHeading title="Chase the new flavour"/>
         <h1 className='app_header-h1'>The Key To Fine Dinning</h1>
         <p className='p_opensans' style={{margin:"2rem 0"}}>Sit tellus lobortis sed senectus vivamus molestie.
          Condimentum volutpat morbi facilisis quam scelerisque sapien. Et, penatibus aliquam amet tellus </p>
          <button type='button' className='custom_button'>Explore Now</button>
      </div>
      <div className="app_wrapper_img">
             <img src={images.welcome} alt="wlcmimg" />
      </div>
    </div>
  )
}

export default Header