import React from 'react'
import ProfilePicture from '../assets/HeadPhoto.jpg';
import '../styles/about.css';
import Desert from '../assets/DesertLandscape.png';



function About() {
  return (
    <section className='about-hero' style = {{backgroundImage: `url(${Desert})`}}>
        <div className='about-content'>
            <div className='about-text'>
                <h1>Text</h1>
            </div>

            <div className='profile-picture'>
                <div className='profile-container'>
                    <img src={ProfilePicture} alt="ProfilePicture"/>
                </div>
            </div>
        </div>
    </section>

  )
}

export default About
