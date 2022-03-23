import React from 'react'
import '../styles/services.scss'

export default function Services() {
  return (
    <div className='services-container'>
        <h1>Checkout these Epic Destinations</h1>
        
        <div className='images-container'>
            <div className='card-element big-size'>
                <div className='image-element'>
                    <img className=" big-size" src={require('../assets/images/img-9.jpg')}/>
                    <div className='explanation'><h5>Adventure</h5></div>

                </div>
                
             
                    <h4>Explore the hidden waterfall deep into the Amazon Jungle</h4>
               
            </div>

            <div className='card-element big-size'>
                <div className='image-element '>
                    <img className='big-size' src={require('../assets/images/img-2.jpg')}/>
                    <div className='explanation'><h5>Luxury</h5></div>

                </div>
                
                
                    <h4>Travel through the Islands of Bali in a Private Cruise</h4>
            
            </div>

        </div>
        <div className='images-container'>
            <div className='card-element small-size'>
                <div className='image-element '>
                    <img className="small-size" src={require('../assets/images/img-3.jpg')}/>
                    <div className='explanation'><h5>Mystery</h5></div>

                </div>
                
             
                    <h4>Set sail in the Atlantic Ocean visiting Uncharted Waters</h4>
               
            </div>

            <div className='card-element small-size'>
                <div className='image-element '>
                    <img className="small-size" src={require('../assets/images/img-4.jpg')}/>
                    <div className='explanation'><h5>Adventure</h5></div>

                </div>
                
                
                    <h4>Experience Football on Top of the Himalayan Mountains</h4>
            
            </div>

            <div className='card-element small-size'>
                <div className='image-element '>
                    <img className='small-size' src={require('../assets/images/img-8.jpg')}/>
                    <div className='explanation'><h5>Adventure</h5></div>

                </div>
                
                
                    <h4>Ride through the Sahara with a guided camel tour</h4>
            
            </div>

        </div>


    </div>
  )
}
