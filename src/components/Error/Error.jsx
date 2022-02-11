import React from 'react'
import { Link } from 'react-router-dom'
import "./error.css"
const Error = () => {
  return (
    <div className='error-wrap'>
      <Link to="/" >
    <button className='btn-home'>Volver al inicio</button>
      </Link>
    </div>
  )
}

export default Error