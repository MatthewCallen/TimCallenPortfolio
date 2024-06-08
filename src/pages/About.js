import React from 'react'
import ProfilePicture from '../assets/HeadPhoto.jpg';
import '../styles/about.css';



function About() {
  return (
    <section className='about-hero'>
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
