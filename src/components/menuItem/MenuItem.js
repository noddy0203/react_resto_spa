import React from 'react'
import "./menuItem.css"

const MenuItem = ({ title, tags, price }) => {
  return (
    <>
      <div className="app_menuitem">
        <div className="app_menuitem-head">
          <div className="app_menuitem-name">
            <p className="p_cormorant" style={{ color: "#DCCA87" }}>{title}</p>
          </div>
          
          <div className='app_menuItem-dash' />

          <div className="app_menuitem-price">
            <p className="p-cormorant" style={{ color: "#DCCA87" }}>{price}</p>
          </div>
        </div>
        <div className="app_menuitem-sub">
          <p className="p_opensans" style={{ color: "#AAA" }}>{tags}</p>
        </div>

      </div>
    </>
  )
}

export default MenuItem