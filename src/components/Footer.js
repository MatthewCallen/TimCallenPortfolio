import React from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import '../styles/footer.css'

function Footer() {
  return (
    <div className='footer'>
        <div className='socialMedia'>
            {" "}
            <a href ="https://www.linkedin.com/in/tim-callen-014934206/">
                <LinkedInIcon />
            </a>
            <a href="mailto:timcallen1964@gmail.com">
                <EmailIcon/>
            </a>
        </div>
        <p>&copy; 2024 timcallen.com</p>
    </div>
  )
}

export default Footer
