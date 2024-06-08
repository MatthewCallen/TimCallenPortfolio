import React from 'react';
import {Link} from 'react-router-dom';
import '../styles/home.css';
import Background from '../assets/rock.jpg';

function Home() {
  return (
    <section className='hero' style = {{backgroundImage: `url(${Background})`}}>
      <div className ="content">
        <div className='text'>
          <h2>Hello, I'm</h2>
          <h1>Timothy Callen</h1>
          <h3>Saudi Arabia Specialist</h3>
          <div className='about-button'>
            <a href='/About'>Get to know me</a>  
          </div>
        </div>

      </div>
    </section>

  )
}

export default Home
