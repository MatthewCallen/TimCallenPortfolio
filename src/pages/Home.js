import React from 'react';
import {Link} from 'react-router-dom';
import '../styles/home.css';
import Rock from '../assets/rock.jpg';

function Home() {
  return (
    <section className='hero' style = {{backgroundImage: `url(${Rock})`}}>
      <div className ="content">
        <div className='text'>
          <h2>Hello, I'm</h2>
          <h1>Tim Callen</h1>
          <h3>Saudi Arabia Economist</h3>
          <div className='about-button'>
            <a href='#about'>Get to know me</a>  
          </div>
        </div>

      </div>
    </section>

  )
}

export default Home
