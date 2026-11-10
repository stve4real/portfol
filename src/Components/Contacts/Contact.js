import React from 'react'
import './Contact.css'

function Contacts() {
  return (
    
    <div className=' contact w-100 vh-100 bg-dark  d-flex flex-column  justity-content-center align-items-center pt-5 ' id='contact'>
      <div className=' w-50  text-white text-center '>
      <p className='what fs-10'><span className='what'>0.4 </span>This is what next</p>
      <h1>Get in Touch</h1>
      <p className='detail'>Although I'm not currently looking for any more oppourtunities 
        my inbox is always open. whether you have a questionor just want to say hi, I'll best to get yoy
      </p>
      <button className='bg-transparent text-primary'>Say Hello</button>

    </div> 
    </div>
  )
}

export default Contacts
