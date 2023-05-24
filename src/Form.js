import "./FormStyles.css"

import React from 'react'

const Form = () => {
  return (
    <div className="form">
      <form>
      <label>Your Name</label>
      <input type="text"></input>
      <label>Email</label>
      <input type="email"></input>
      <label>Your Phone number</label>
      <input type="number"></input>
      <label>Message</label>
      <textarea rows="6" placeholder="Type your message here"/>
      <button className="bttn">Submit</button>
      </form>
    </div>
  )
}

export default Form
