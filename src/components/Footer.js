import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/footer.scss'

export default function Footer() {
  return (
    <div className='footer-section'>
        <div className='logo-section'>
            <h1>TRVL</h1>
            <img src={require('../assets/images/globe-3-64 (1).png')}/>
        </div>

        <div className='links-section'>
            <Link  style={{color:"white", textDecoration:"none"}} to='/'>Datenschutz</Link>
            <Link style={{color:"white", textDecoration:"none"}} to='/'>Impressum</Link>

        </div>
        
        <div className='icons-section'>
            <img src={require('../assets/images/instagram-48.png')}/>
            <img src={require('../assets/images/facebook-48.png')}/>
            <img src={require('../assets/images/linkedin-48.png')}/>
            <img src={require('../assets/images/youtube-48.png')}/>

        </div>


    </div>
  )
}
