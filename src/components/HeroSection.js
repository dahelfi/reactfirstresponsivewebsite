import React from 'react'
import { Button } from './Button'
import '../styles/heroSection.scss'
import Powerplay from "../assets/vids/video-1.mp4"

function HeroSection() {
  return (
    <div className='hero-container'>
        {/* <video className="video" type="video/mp4" src={Powerplay} autoPlay loop muted /> */}
        <h1>ADVENTURE AWAITS</h1>
        <p>What are you wating for?</p>
        <div className='hero-btns'>
            <Button className="btns" buttonStyle='btn--outline' buttonSize='btn--large'>
                GET STARTED
            </Button>
            <Button className="btns" buttonStyle='btn--primary' buttonSize='btn--large'>
                WATCH TRAILER
            </Button>


        </div>
    </div>
  )
}

export default HeroSection