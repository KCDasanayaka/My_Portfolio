import React, { Component } from 'react'
import profNav from '../../assets/CVProfilePic.2.png'
import "./navBar.css";

function NavBar() {
  

    return (
      <div className='navBar'>
        <div className="navLeft">
            <img src={profNav} alt=' ' className='navImage'/>
            <p className='navHead'>Kavindu.</p>
        </div>
        <div className="navRight">
    
        </div>
      </div>
    )
  
}

export default NavBar;
