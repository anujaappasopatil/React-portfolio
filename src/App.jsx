import React, { useEffect } from 'react'
import Navebar from './Component/Navebar'
import Home from './Component/Home'
import Experience from './Component/Experience'
import Skill from './Component/Skill'
import Project from './Component/Project'
import contact from './Component/Contact'
import Contact from './Component/Contact'
import Aos from 'aos';
import 'aos/dist/aos.css'; 
function App() {
  useEffect(() => {
    Aos.init()
  }, [])
  return (
    <>
      <Navebar />
      <div className="container">
        <Home />
        <Experience />
        <Skill />
        <Project />
        <Contact />
      </div>
    </>

  )
}

export default App
