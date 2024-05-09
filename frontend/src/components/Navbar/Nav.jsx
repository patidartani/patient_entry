import React from 'react'
import "./Nav.css"
import NavLogo from "../../assets/images/NavLogo.webp"
import DashBoard from '../Dashboard/DashBoard'


const Nav = () => {
  return (
    <div className='Nav'>
     <div className="navbar">       
          <div className="Navlogo">
                    <img  src={NavLogo} alt="" />
                    <h5> Patient Records</h5>
          </div>
         
   
</div>

<DashBoard />
</div>
  )
}

export default Nav