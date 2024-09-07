import React, { Component } from 'react'
import profNav from '../../assets/CVProfilePic.2.png'
import PropTypes from 'prop-types'

function NavBar() {
  

    return (
      <div className='navBar'>
        <div className="navLeft">
            <img src={profNav} alt=' '/>
            <p className='navHead'>Kavindu.</p>
        </div>
        <div className="navRight">
            <ul>
                <li>Say hi!</li>
                <li></li>
            </ul>
        </div>
      </div>
    )
  
}

export default navBar
