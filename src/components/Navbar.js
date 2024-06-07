import React, {useState, useEffect} from 'react';
import Camel from '../assets/camel.png';
import Logo from '../assets/logo.png';
import {Link} from 'react-router-dom';
import '../styles/navbar.css'
import ReorderIcon from '@mui/icons-material/Reorder';
import Button from '@mui/material/Button';


function Navbar() {
  const [openLinks, setOpenLinks] = useState(false); //states re-render website when state changes (true or false boolean value)
  const [isWideScreen, setIsWideScreen] = useState(window.innerWidth > 700);

useEffect(() => {
  const handleResize = () => {
    setIsWideScreen(window.innerWidth > 700);
    if (window.innerWidth > 700) {
      setOpenLinks(false);
    }
  };

  window.addEventListener('resize', handleResize);

  return () => {
    window.removeEventListener('resize', handleResize);
  };
}, []);



  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  }
  return (
    <div className='navbar'>
        <div className = 'leftSide' id = {openLinks ? "open" : "close"}>
            <p>Timothy Callen</p>
            <img src={Logo} alt ="Logo"/>
            <div className='hidden-links'>
              <Link to ='/'> Home</Link>
              <Link to ='/menu'> Menu</Link>
              <Link to ='/about'> About</Link>
              <Link to ='/contact'> Contact</Link>
            </div>
        </div>

        <div className='middle'>
          <img src={Camel} alt="Camel"/>
        </div>

        <div className='rightSide'>
            <Link to ='/'> Home</Link>
            <Link to ='/menu'> Menu</Link>
            <Link to ='/about'> About</Link>
            <Link to ='/contact'> Contact</Link>
            <Button onClick = {toggleNavbar}>
              <ReorderIcon />
            </Button>
        </div>        

      
    </div>
  )
}

export default Navbar;
