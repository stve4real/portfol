import React, { useEffect } from 'react'
import './About.css'
import Aos from 'aos'
import 'aos/dist/aos.css'

function About() {
useEffect(() => {
  Aos.init({ duration: 1600})
}, [])





  return (
    <section className='about bg-dark text-light w-100 vh-100' id='about'>
        <div className='row wrapper'>
            <div className='about_text col-12 col-md-6' data-aos="center-out">
         <h1><span>01.</span>About me</h1>
         <p>
            Hello, My name is Sylvester and i enjoy creating things that live on internet.
            My internet in web development started back in 2025, when i decieded to try 
            editing custom Blogger theme- turns out hacking together a custom roblog
            button  taught me a lot about HTML & css!  
            </p>
            <p>
                i also recently lunched a course that covers everything you nedd to build a
               web app with the specific Api using Node & React.
               Here are a few technology i've been working with recently
            </p>
            <div className='row technology'>
             <div className='col-6'>
                <p>*<span></span>JavaScript</p>
                <p>*<span></span>React JS</p>
                <p>*<span></span>Node.JS</p>
             </div>
              <div className='col-6'>
                <p>*<span></span>TypeScript</p>
                <p>*<span></span>Bootstrap</p>
                <p>*<span></span>WordPress</p>
             </div>
            </div>
            </div>

            <div className='about_image col-12 col-md-6' data-aos="center-out">
              <img src="/Images/Apostle.png.jpeg" alt="Sylvester Sunday" className='img-fluid' />
            </div>
        </div>
    </section>
  )
}
export default About