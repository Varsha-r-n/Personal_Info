import React from 'react'
import './step.css'
function Step({stepNumber, stepDetail, selected=false}) {
  return (
    <div className='step'>
      <div className={selected ? 'selected' : 'number'}>{stepNumber}</div>
      <div className='stepDetailContainer'>
        <div className='stepNumber'>STEP {stepNumber}</div>
        <div className='stepDetail'>{stepDetail}</div>
      </div>
    </div>
  )
}

export default Step
