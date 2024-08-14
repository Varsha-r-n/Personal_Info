import React from 'react'
import { CheckCircleOutlined } from '@ant-design/icons'
import './thankyou.css'
function ThankYou({title, description}) {
  return (
    <div className='thankyou'>
      <div className='checkCircle'><CheckCircleOutlined className='alignCenter' /></div>
      <div className='title1'>{title}</div>
      <div className='thanksDiscription'>{description}</div>
    </div>
  )
}

export default ThankYou
