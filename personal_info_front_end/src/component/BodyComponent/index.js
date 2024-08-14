import {React, useState} from "react";
import Header from "../Header";
import Footer from "../Footer";
import PersonalInfo from "../PersonalInfo";
import SelectPlan from "../SelectPlan";
import PickAddOns from "../PickAddOns";
import Summary from "../Summary";
import ThankYou from "../ThankYou";
import "./bodyComponent.css"
function BodyComponent({title, description, selectedState, setSelectedState, setTitle, setDescription, headers,name,phone,email}) {

  const [personalInfo, setPersonalInfo] = useState({name:"", phone:"", email:""});
  const [selectedPlan, setSelectedPlan] = useState({planName:"", planPrice:0, planDuration:12});
  const [selectedAddOns, setSelectedAddOns] = useState([]);
  const [personalInfoHasErrors, setPersonalInfoHasErrors] = useState(true);
  const [selectPlanHasErrors, setSelectPlanHasErrors] = useState(true);
  const [pickAddOnsHasErrors, setPickAddOnsHasErrors] = useState(true);
  return (
    <div className="bodyComponent">
      <Header title={title} description={description} />
      {selectedState == 1 && <PersonalInfo setPersonalInfo={setPersonalInfo} personalInfo={personalInfo} setPersonalInfoHasErrors={setPersonalInfoHasErrors} />}
      {selectedState == 2 && <SelectPlan selectedPlan={selectedPlan} setSelectedPlan={setSelectedPlan} setSelectPlanHasErrors={setSelectPlanHasErrors} />}
      {selectedState == 3 && <PickAddOns selectedAddOns={selectedAddOns} setSelectedAddOns={setSelectedAddOns} setPickAddOnsHasErrors={setPickAddOnsHasErrors} />}
      {selectedState == 4 && <Summary personalInfo={personalInfo} selectedPlan={selectedPlan} selectedAddOns={selectedAddOns} />}
      {selectedState == 5 && <ThankYou />}
      <Footer 
        pageNum={selectedState} 
        setSelectedState={setSelectedState} 
        setTitle={setTitle} 
        setDescription={setDescription} 
        headers={headers} 
        personalInfoHasErrors={personalInfoHasErrors}
        selectPlanHasErrors={selectPlanHasErrors}
        pickAddOnsHasErrors={pickAddOnsHasErrors}
        />
    </div>
  );
}

export default BodyComponent;
