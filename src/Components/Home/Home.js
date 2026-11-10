import React from 'react'
import 'bootstrap-icons/font/bootstrap-icons.css'
import './Home.css'
import Typewriter from 'typewriter-effect'

function Home() {
  return (
    <div className="home bg-dark w-100 vh-100" id="home">
      <div className="icons-container">
        <ul className='icons text-white'>
          <li>
            <a href="/">
              <i className="bi bi-github"></i>
            </a>
          </li>

          <li>
            <a href="/">
              <i className="bi bi-facebook"></i>
            </a>
          </li>

          <li>
            <a href="/">
              <i className="class=bi bi-envelope-at"></i>
            </a>
          </li>

          <li>
            <a href="/">
              <i className="bi bi-github"></i>
            </a>
          </li>
        </ul>
      </div>

      <div className='email-container'>
        <p>Your email@example.com</p>
      </div>
   
   <main>
    <p className='hi_name
    '>Hi, my name is </p>
    <h1 className='h1_name'>Sylvester Sunday</h1>
    <h2>
      <Typewriter
       options={{
        autoStart:true,
        loop:true,
        delay:180,
        strings:[ 
          "i build things  for the web","i am a web developer","i code for Africa and the world generally"
        ],
       }}
       
       />
    </h2>
    <p className='details'>i'm a software engineer specilizating in building( and occasionally designing)<br/>
     exceptional digital experiences. currently, I'm focused on building accessible,<br />
     human-centered products
    </p>
    <button className='bg-transparent'>click out More</button>
   </main>

    </div>
  )
}
export default Home