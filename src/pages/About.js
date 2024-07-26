import React from 'react'
import ProfilePicture from '../assets/HeadPhoto.png';
import '../styles/about.css';
import Rock from '../assets/rock.jpg';



function About() {
  return (
    <div className='about-content'>
        <div className='about-title'>
            <h1>All About Me</h1>
        </div>

        <div className='profile-picture'>
            <div className='profile-container'>
                <img src={ProfilePicture} alt="ProfilePicture"/>
            </div>
            <div className = "about-text">
                  <p>Tim Callen is a visiting fellow at the Arab Gulf States Institute in Washington. 
                    Callen is a former assistant director in the Middle East and Central Asia department 
                    at the International Monetary Fund. He served as the IMF’s mission chief for Saudi 
                    Arabia and as the chief of the Gulf Cooperation Council countries’ division from 2012-21. 
                    He was responsible for the IMF’s engagement with the government of Saudi Arabia and for 
                    the institution’s research and publications on the country. He also led the IMF’s research 
                    program on the GCC region. From 2021-22, he served as special advisor to the executive 
                    director for Saudi Arabia at the IMF’s Executive Board. Callen’s research interests focus 
                    on oil exporting countries and include prospects and policies for economic diversification 
                    away from oil, frameworks and institutions to limit procyclical fiscal policy, and appropriate 
                    exchange rate policies. Callen joined the IMF in 1993 and also worked in the Asia and Pacific, 
                    Communications, and Research departments. Before joining the IMF, he worked in the Economic 
                    Departments at the Bank of England and the Reserve Bank of Australia and at Hambros Bank. He holds 
                    a bachelor’s in economics from the University of Essex and a master’s in economics from the University 
                    of Warwick.</p>
                </div>
        </div>
    </div>

  )
}

export default About
