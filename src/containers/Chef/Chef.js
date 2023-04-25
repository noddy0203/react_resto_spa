import React from 'react'
import "./chef.css"
import { SubHeading} from '../../components'
import { images } from '../../constants'

const Chef = () => {
  return (
   <div className="app_bg app_wrapper section_padding">
    <div className="app_wrapper_img app_wrapper_img-reverse">
      <img src={images.chef} alt="chef_img" />
    </div>

    <div className="app_wrapper_info">
      <SubHeading title="Chef's Word" />
      <h1 className="headtext_cormorant">What We Believe In</h1>
      <div className="app_chef-content">
        <div className="app_chef-content-quote">
          <img src={images.quote} alt="quote_img" />
          <p className="p_opensans">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, est!</p>
        </div>
        <p className="p_opensans">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus quo debitis labore dolor tempora deserunt molestias corrupti tenetur nesciunt quia.</p>
      </div>
      <div className="app_chef-sign">
        <p>Kevin Luo</p>
        <p className="p_opensans">Chef & Founder</p>
        <img src={images.sign} alt="chef_sign" />
      </div>
    </div>
   </div>
  )
}

export default Chef