import React from 'react'
import { FaLinkedin } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import { IoLogoGithub } from "react-icons/io5";

const Contact = () => {
  return (
    <>
    <div className="container contact" id='contact'>
      <h1>Contact Me</h1>
      <div className="contact-icon" data-aos="zoom-in-up"
          data-aos-duration="1000">
        <a href="https://www.linkedin.com/in/anuja-a-patil-906b332aa/" target='_blank' className="items">
        <FaLinkedin className="icons" />
        </a>
        <a href="mailto:anujap700@gmail.com" target='_blank' className="items">
        <IoIosMail className="icons" />
        </a>
        <a href="https://github.com/anujaappasopatil" target='_blank' className="items">
        <IoLogoGithub className="icons" />
        </a>
       
      </div>
    </div>
      
    </>
  )
}

export default Contact
