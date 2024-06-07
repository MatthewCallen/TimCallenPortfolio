import React from 'react';
import Camel from '../assets/camel.png';
import {Link} from 'react-router-dom';
import '../styles/navbar.css'

function Navbar() {
  return (
    <div className='navbar'>
        <div className = 'leftSide'>
            <p>Timothy Callen</p>
        </div>

        <div className='middle'>
          <img src={Camel} alt="Camel"/>
        </div>

        <div className='rightSide'>
            <Link to ='/'> Home</Link>
            <Link to ='/menu'> Menu</Link>
            <Link to ='/about'> About</Link>
            <Link to ='/contact'> Contact</Link>
        </div>        

      
    </div>
  )
}

export default Navbar;
