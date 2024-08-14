import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import PersonalInfo from "../PersonalInfo";
import SelectPlan from "../SelectPlan";
import PickAddOns from "../PickAddOns";
import Summary from "../Summary";
import ThankYou from "../ThankYou";
import "./bodyComponent.css"
function BodyComponent({title, description, selectedState, setSelectedState, setTitle, setDescription, headers}) {
  return (
    <div className="bodyComponent">
      <Header title={title} description={description} />
      {selectedState == 1 && <PersonalInfo />}
      {selectedState == 2 && <SelectPlan />}
      {selectedState == 3 && <PickAddOns />}
      {selectedState == 4 && <Summary />}
      {selectedState == 5 && <ThankYou />}
      <Footer pageNum={selectedState} setSelectedState={setSelectedState} setTitle={setTitle} setDescription={setDescription} headers={headers} />
    </div>
  );
}

export default BodyComponent;
