import React from 'react'
import "./aboutUs.css"
import { images } from "../../constants"

const AboutUs = () => {
  return (
    <div className='app_aboutus app_bg flex_center section_padding' id='about'>
      <div className="app_aboutus-overlay flex_center">
        <img src={images.G} alt="g_img" />
      </div>
      <div className="app_aboutus-content flex_center">
        <div className="app_aboutus-content_about">
          <h1 className='headtext_cormorant'>About US</h1>
          <img src={images.spoon} alt="spoon_img" className='spoon_img' />
          <p className='p_opensans'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem
            architecto quis accusamus accusantium autem est odio numquam, quaerat id! Aut.</p>
          <button type='button' className='custom_button'>Know More</button>
        </div>

        <div className="app_aboutus-content_knife flex_center">
          <img src={images.knife} alt="knife_img" />
        </div>

        <div className="app_aboutus-content_history">
          <h1 className="headtext_cormorant">Our History</h1>
          <img src={images.spoon} alt="spn_img" />
          <p className="p_opensans">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, commodi? Nobis nesciunt 
          nisi voluptas ab a expedita veritatis voluptate non.</p>
          <button type='button' className="custom_button">Know More</button>
        </div>
      </div>
    </div>
  )
}

export default AboutUs