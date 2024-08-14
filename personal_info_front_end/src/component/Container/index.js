import {React, useState} from 'react'
import Navigation from '../Navigation';
import BodyComponent from '../BodyComponent';
import './container.css';

function Container() {
  const steps = ["YOUR INFO", "SELECT PLAN", "ADD-ONS", "SUMMARY"];
  const headers = [
    {
      title: "Personal info",
      description: "Please provide your name, email address, and phone number."
    },
    {
      title: "Select your plan",
      description: "You have the option of monthly or yearly billing."
    },
    {
      title: "Pick add-ons",
      description: "Add-ons help enhance your gaming experience."
    },
    {
      title: "Finishing up",
      description: "Double-check everything looks OK before confirming."
    },
    {
      title: "Thank you!",
      description: "Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel Free to email us at support@loremgaming.com."
    },
  ]
  const [selectedState, setSelectedState] = useState(1);

  const [title, setTitle] = useState(headers[0].title);
  const [description, setDescription] = useState(headers[0].description);
  return (
    <div className='container'>
      <Navigation steps={steps} selectedState={selectedState} />
      <BodyComponent 
        title={title} 
        description={description} 
        selectedState={selectedState} 
        setSelectedState={setSelectedState} 
        setTitle={setTitle} 
        setDescription={setDescription}
        headers={headers} />
    </div>
  )
}

export default Container
