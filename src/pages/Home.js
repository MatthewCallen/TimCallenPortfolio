import React from 'react';
import {Link} from 'react-router-dom';

function Home() {
  return (
    <div className = 'home'>
      <div className = 'header-container'>
        <h2>Hello, I'm</h2>
        <h1>Timothy Callen</h1>
        <h3>Saudi Arabia Specialist</h3>
        <Link to ='/about'>
          <button>About Me</button>
        </Link>
      </div>
    </div>
  )
}

export default Home
