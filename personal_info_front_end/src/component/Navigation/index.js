import React from 'react'
import "./navigation.css"
import Step from '../Step'

function getSteps(steps, selectedState){
  const stepComponents =  steps.map((data, index) => {
    return (
      <Step key={index} stepNumber={index+1} stepDetail={data} selected={selectedState === index+1} />
    )
  })
  return stepComponents;
}

function Navigation({steps, selectedState}) {
  return (
    <div className="navigation">
      {getSteps(steps, selectedState)}
      {/* <Step stepNumber={1} stepDetail="YOUR INFO"  selected={true}/>
      <Step stepNumber={2} stepDetail="SELECT PLAN" />
      <Step stepNumber={3} stepDetail="ADD-ONS" />
      <Step stepNumber={4} stepDetail="SUMMARY" /> */}
    </div>
  )
}

export default Navigation
