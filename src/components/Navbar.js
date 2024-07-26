import React, {useState, useEffect} from 'react';
import WhiteCamel from '../assets/white_camel.png';
import Logo from '../assets/logo.png';
import {Link} from 'react-router-dom';
import '../styles/navbar.css'
import ReorderIcon from '@mui/icons-material/Reorder';
import Button from '@mui/material/Button';

function Navbar() {
  const [openLinks, setOpenLinks] = useState(false);
  const [isWideScreen, setIsWideScreen] = useState(window.innerWidth > 700);
  const [isHovered, setIsHovered] = useState(false);

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
    <div className={`navbar ${isHovered ? 'hovered' : ''}`} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
      <div className='leftSide' id={openLinks ? "open" : "close"}>
        <p>Timothy Callen</p>
        <img src={WhiteCamel} alt="WhiteCamel"/>
        <div className='hidden-links'>
          <a href ='/'>Home</a>
          <a href ='#about'>About</a>
          <a href = '#work'>Work</a>
          <a href = '#contact'>Contact</a>
        </div>
      </div>

      <div className='middle'>
        <img src={WhiteCamel} alt="WhiteCamel"/>

      </div>

      <div className='rightSide'>
        {!isWideScreen && (
          <Button onClick={toggleNavbar}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="40" height="40">
                  <path d="M3 6h18M3 12h18M3 18h18" stroke="white" stroke-width="2" stroke-linecap="round"/>
                </svg>
          </Button>
        )}
        {isWideScreen && (
          <>
          <a href ='/'>Home</a>
          <a href ='#about'>About</a>
          <a href = '#work'>Work</a>
          <a href = '#contact'>Contact</a>
            {/* <Link to='/'> Home</Link>
            <Link to='/about'> About</Link>
            <Link to='/work'> Work</Link>
            <Link to='/contact'> Contact</Link> */}
          </>
        )}
      </div>
    </div>
  );
}

export default Navbar;
