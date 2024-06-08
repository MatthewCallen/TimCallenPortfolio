import React from 'react'
import ProfilePicture from '../assets/HeadPhoto.jpg';
import '../styles/about.css';



function About() {
  return (
    <section className='hero'>
        <div className='content'>
            <div className='text'>  
                <h1>This is the about page</h1>
            </div>

            <div className ='profile-pic'>
                <img src={ProfilePicture} alt="Profile Picture"/>
            </div>
        </div>
    </section>

  )
}

export default About
