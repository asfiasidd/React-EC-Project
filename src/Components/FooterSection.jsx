import React from 'react'
import { FaTwitter, FaFacebook, FaInstagram, FaEnvelope } from 'react-icons/fa';

function FooterSection() {
  return (
  <>
    <footer className='mt-1' style={{ backgroundColor: 'rgb(202, 148, 224)', color: 'white', padding: '20px' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div>
          <h3 style={{color: 'black'}}>Contact Us</h3>
          <p style={{color: 'black'}}>Email: contact@example.com</p>
        </div>
        <div style={{ marginLeft: '20px' }}>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter size={25} style={{ color: 'black' }} />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebook size={25} style={{ color: 'black', marginLeft: '10px' }} />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram size={25} style={{ color: 'black', marginLeft: '10px' }} />
          </a>
          <a href="mailto:contact@example.com" target="_blank" rel="noopener noreferrer">
            <FaEnvelope size={25} style={{ color: 'black', marginLeft: '10px' }} />
          </a>
        </div>
      </div>
    </footer>


  </>

  )
}

export default FooterSection


