import React from 'react'
import './header.css'
function Header({title, description}) {
  return (
    <div className='header'>
      <div className='title'>{title}</div>
      <div className='description'>{description}</div>
    </div>
  )
}

export default Header
