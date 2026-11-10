import React, { useEffect } from 'react'
import 'bootstrap/js/dist/tab'
import './Experience.css'
import Aos from 'aos'
import 'aos/dist/aos.css'

function Experience() {
  useEffect(() => {
    Aos.init({ duration:1800})
  }, [])
  return (

    
         <div id='services' className='experience d-flex align-items-center flex-column justify-content-center vh-100 bg-dark text-white'>
            <div className='w-50 mt-5 ' data-aos="zoom-in">
         <h2><span>.02</span>Where I've Worked</h2>
        <div className="d-flex mt-5 text-white ">
  <div className="nav flex-column nav-pills me-3 border-start " id="v-pills-tab" role="tablist" aria-orientation="vertical">
    <button className="nav-link active " id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#v-pills-home" type="button" role="tab" aria-controls="v-pills-home" aria-selected="true">Home</button>
    <button className="nav-link" id="v-pills-profile-tab" data-bs-toggle="pill" data-bs-target="#v-pills-profile" type="button" role="tab" aria-controls="v-pills-profile" aria-selected="false">Profile</button>
    <button className="nav-link" id="v-pills-messages-tab" data-bs-toggle="pill" data-bs-target="#v-pills-messages" type="button" role="tab" aria-controls="v-pills-messages" aria-selected="false">Messages</button>
    <button className="nav-link" id="v-pills-settings-tab" data-bs-toggle="pill" data-bs-target="#v-pills-settings" type="button" role="tab" aria-controls="v-pills-settings" aria-selected="false">Settings</button>
  </div>
  <div className="tab-content" id="v-pills-tabContent">
    <div className="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">
        <h3> Engineer @ <a href='#'>Comsis</a></h3>
        <span>Dec 2019- April 2020</span>
      <p>
        <span>→ </span>
        write morden, performance, maintain code for a divers array of client and internal project
      </p>

       <p>
        <span>→ </span>
        write morden, performance, maintain code for a divers array of client and internal project
      </p>

       <p>
        <span>→ </span>
        write morden, performance, maintain code for a divers array of client and internal project
      </p>
    </div>
    <div className="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">
        <h3> Engineer@ <a href='#'></a>HBT</h3>
      <p>
        <span>→ </span>
        write morden, performance, maintain code for a divers array of client and internal project
      </p>
       <p>
        <span>→ </span>
        write morden, performance, maintain code for a divers array of client and internal project
      </p>
       <p>
        <span>→ </span>
        write morden, performance, maintain code for a divers array of client and internal project
      </p>
    </div>

    <div className="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab">
 <h3> Engineer@ <a href='#'></a>CRSTW</h3>
      <p>
        <span>→ </span>
        write morden, performance, maintain code for a divers array of client and internal project
      </p>
       <p>
        <span>→ </span>
        write morden, performance, maintain code for a divers array of client and internal project
      </p>
       <p>
        <span>→ </span>
        write morden, performance, maintain code for a divers array of client and internal project
      </p>
    </div>

    <div className="tab-pane fade" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab">
     <h4> Engineer@ <a href='#'></a>WFP</h4>
      <p>
        <span>→ </span>
        write morden, performance, maintain code for a divers array of client and internal project
      </p>
       <p>
        <span>→ </span>
        write morden, performance, maintain code for a divers array of client and internal project
      </p>
       <p>
        <span>→ </span>
        write morden, performance, maintain code for a divers array of client and internal project
      </p>
       <p>
        <span>→ </span>
        write morden, performance, maintain code for a divers array of client and internal project
      </p>
    </div>
  </div>
</div>
</div>
</div>


  )
}

export default Experience