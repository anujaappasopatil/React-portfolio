import React from 'react'
import projects from './Data/projects.json'

const Project = () => {
  return (
    <>
      <div className="container projects-my-3" id='projects'>
        <h1>Projects</h1>
        <div className="row d-flex justify-content-center align-content-center" >
          {projects.map((data) => (<>
            <div key={data.id} className='my-3 col-md-3 mx-3'>
              <div className="card bg-dark text-light" data-aos="flip-right"
          data-aos-duration="1000" style={{width:'18rem',border:'1px solid yellow',boxShadow:'5px 5px 10px 10px rgba(101,175,10,0.5)'}}>
                <div className="img d-flex justify-content-center align-content-center p-3">
                <img src={data.imageSrc} className="card-img-top" alt="..." style={{width:'250px', height:'200px',border:'2px solid yellow',borderRadius:'10px',}}/>
                </div>
               
                  <div className="card-body" >
                    <h5 className="card-title text-center">{data.title}</h5>
                    <p className="card-text">{data.description}</p>
                    <a href={data.demo} className="btn btn-primary">Demo</a>
                    <a href={data.source} className="btn btn-primary "style={{background:'yellow',color:'black',marginLeft:'20px'}}>code</a>
                   
                  </div>
              </div>
            </div>
          </>))}
        </div>
      </div>
    </>
  )
}

export default Project
