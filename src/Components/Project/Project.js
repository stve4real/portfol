
import 'bootstrap/js/dist/tab'
import './Project.css'
import Aos from 'aos'
import 'aos/dist/aos.css'
import React, { useEffect } from 'react'


function Project() {
  useEffect(() => {
    Aos.init({ duration: 1600})
  }, [])
  return (
    <div className='bg-dark w-100 project' id='project'>
      <div className='container '>
        <h3 className='px-2 pt-5 text-align-center justify-content-center w-50 text-white'><span>0.3 </span>
        My Project
        </h3>
        <div className="row row-cols-1 row-cols-md-3 g-4 p-5 text-center">
  <div className="col" data-aos="fade-left">
    <div className="card py-10">
      <img src="/Images/Host%20Bro.%20Sylvester%20.jpeg" className="card-img-top project-image" alt="Sylvester" />
      <div className="card-body">
        <h5 className="card-title">Job Portal</h5>
        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <button className='bg-transparent'>Click For More</button>
      </div>

    </div>
  </div>
  <div className="col " data-aos="zoom-in">
    <div className="card">
      <img src="/Images/premium.png.avif" className="card-img-top project-image" alt="..." />
      <div className="card-body">
        <h5 className="card-title">Online Vote</h5>
        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      <button className='bg-transparent'>Click For More</button>
      </div>
      </div>

    </div>
  <div className="col" data-aos="fade-right">
    <div className="card">
      <img src="/Images/premium1_png.avif" className="card-img-top project-image" alt="..." />
      <div className="card-body">
        <h5 className="card-title">Social Media</h5>
        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
      <button className='bg-transparent'>Click For More</button>
      </div>
      </div>
    </div>
  </div>
  </div>
  </div>
  )
}

export default Project