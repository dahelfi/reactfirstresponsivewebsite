import React from 'react'
import { Button } from './Button'
import '../styles/contactMe.scss'

function ContactMe() {
    return (
        <div className='contactMe-section'>
            <h1>CONTACT US</h1>
            <div className='contactMe-elements'>
                <form>
                    <div>
                        <div style={{width:"50px"}}>
                            <label>Name</label>
                        </div>
                        
                        <textarea required  name="name"  rows="1" placeholder="Enter your name"/> 
                    </div>
 
                    <div>
                        <div style={{width:"50px"}}>
                            <label>Email</label>
                        </div>
                        
                        <textarea required  name="name"  rows="1" placeholder="Enter your Email"/> 
                    </div>
                    
                    <div>
                        <div style={{width:"50px"}}>
                            <label>Message</label>
                        </div>
                        
                        <textarea required  name="name"  rows="10" placeholder="Enter your Message"/> 
                    </div>

                    <Button className="btns" buttonStyle='btn--primary' buttonSize='btn--large'>
                        Send
                    </Button>


                </form>

            </div>


        </div>
    )
}

export default ContactMe
