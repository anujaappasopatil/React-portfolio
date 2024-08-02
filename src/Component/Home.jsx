import React, { useEffect, useRef } from 'react'
import pdf from '../pdf/resume.pdf'
import hero from './Data/hero.json'
import Typed from "typed.js";


const Home = () => {
  const TypedRef = useRef(null)
  useEffect(() =>{
    const options ={
      strings:["Welcome to my portfolio.","My name is Anuja Patil.","I'am full stack  developer.","Web developer"],
      typeSpeed:50,
      backSpeed:50,
      loop:true
    }

    const typed = new Typed(TypedRef.current,options)
    return () =>{
      typed.destroy()
    }
  },[])
  return (
    <>
      <div className="container home" id='home'>
      <div className="left"  data-aos="fade-right"
      data-aos-duration ="1000">
        <h1 ref={TypedRef}> </h1>
        <a href={pdf} download="Resume.pdf" className="btn btn-outline-warning my-3">Download Resume</a>

      </div>
      <div className="right"  data-aos="fade-left"
      data-aos-duration ="1000">
        <div className="img">
          <img src={`/assests/${hero.imgSrc}`} alt="hero" />
        </div>
      </div>
      </div>
    </>
  )
}

export default Home
