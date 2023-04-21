import React from 'react'
import "./subheading.css"
import {images} from "../../constants"
const SubHeading = ({title}) => {
  return (
    <div style={{marginBottom:"1rem"}}>
       <p className="p_cormorant">
        {title}
       </p>
       <img src={images.spoon} alt="spoon_img" className='spoon_img' />
    </div>
  )
}

export default SubHeading