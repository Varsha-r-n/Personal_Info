import {React, useState} from 'react'
import Navigation from '../Navigation';
import BodyComponent from '../BodyComponent';
import './container.css';

function Container() {
  const steps = ["YOUR INFO", "SELECT PLAN", "ADD-ONS", "SUMMARY"];
  const [selectedState, setSelectedState] = useState(2); 

  const [title, setTile] = useState("Personal info");
  const [description, setDescription] = useState("Please provide your name, email address, and phone number.");
  return (
    <div className='container'>
      <Navigation steps={steps} selectedState={selectedState} />
      <BodyComponent title={title} description={description} selectedState={selectedState} />
    </div>
  )
}

export default Container
