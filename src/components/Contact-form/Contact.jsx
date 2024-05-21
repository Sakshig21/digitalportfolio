import React from 'react'
import './Contact.css'
import {AiFillGithub,AiFillLinkedin,AiFillInstagram} from "react-icons/ai"
import { NavLink } from 'react-router-dom'

const Contact = () => {
  return (
    <div className="container-fluid contact_wrapper" id='contact'>
        <div className="title">
            <h1 className='title_head contact_title'>GET IN TOUCH</h1>
            <p className='title_para contact-para'>Contact Me</p>
            </div>
            <div className="row contact_row">
                <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                    <form action="https://formspree.io/f/moqoakww" method='POST'>
                      
                        <input type="text"  className='form_input' name = "username"placeholder='Your Name.....'/> <br />
                     
                        <input type="number" className='form_input'  name = "username" placeholder='Your Phone No.....' /> <br />
                        
                        <input type="email" name="email" id=""  className='form_input'placeholder='Your Email Address' /> <br />
                        
                        <input type="text" name="message" id=""  className='form_input' placeholder='Your Message here...'/> <br />
                        <button className='submit-btn' value="Submit">Submit</button>
                    </form>


                    
                </div>
            </div>
    </div>
  )
}

export default Contact
