import React from 'react'
import "./specialMenu.css"
import {images , data} from "../../constants"
import { SubHeading, MenuItem } from '../../components'
const SpecialMenu = () => {
  return (
    <>
    <div className="app_specialMenu flex_center section_padding" id='menu'>
      <div className="app_specialMenu-title">
        <SubHeading title="Menu That Fits Your Palatte"/>
        <h1 className="headtext_cormorant">Today's Special</h1>
      </div>
      <div className="app_specialMenu-menu">
        <div className="app_specialMenu-menu_wine flex_center">
             <p className='app_specialMenu_menu_heading'>Wine & Beer</p>
             <div className="app_specialMenu_menu_items">
            {
             data.wines.map((item, index)=>
               <MenuItem key={item.wines+index} title={item.wines} tags={item.tags}/>
             )}
             </div>
        </div>

        <div className="app_specialMenu-menu_img">
          <img src={images.menu} alt="menu_img" />
        </div>

        <div className="app_specialMenu-menu_cocktails flex_center">
             <p className='app_specialMenu_menu_heading'>Cocktails</p>
             <div className="app_specialMenu_menu_items">
            {
             data.cocktails.map((cocktails, index)=>
             <MenuItem key={cocktails.wines+index} title={cocktails.wines} tags={cocktails.tags}/>
              
             )}
             </div>
        </div>

      </div>

<div style={{marginTop:"15px"}}>
     <button type='button' className='custom_button'>View More</button>
</div>

    </div>
    </>
  )
}

export default SpecialMenu