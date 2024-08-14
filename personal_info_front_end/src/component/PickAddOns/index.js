import React from "react";
import "./pickAddOns.css";
import { Checkbox } from "antd";
function PickAddOns({selectedAddOns, setSelectedAddOns, setPickAddOnsHasErrors}) {

  const addOnPlans = [
    {
      addOnId: "onlineService",
      addOnName: "Online service",
      addOnPrice: 1,
    },
    {
      addOnId: "largeStorage",
      addOnName: "Larger storage",
      addOnPrice: 2,
    },
    {
      addOnId: "customizableProfile",
      addOnName: "Customizable profile",
      addOnPrice: 2,
    },
  ]
  const setAddOns = (e) => {
    const addOn = e.target;
    const filteredAddOn = addOnPlans.filter(data => data.addOnId === addOn.id);
    if(addOn.checked){
      const finalList = [...selectedAddOns, filteredAddOn[0]]
      setSelectedAddOns(finalList);
      setPickAddOnsHasErrors(false);
    }else{
      const filteredItems = selectedAddOns.filter(data => data.addOnId != addOn.id)
      setSelectedAddOns([...filteredItems]);
      if(filteredItems.length === 0){
        setPickAddOnsHasErrors(true);
      }
    }
  }

  return (
    <div className="pickAddOns">
      
      <div className="addOnes">
        <div className="checkBox">
          <Checkbox id="onlineService" checked={selectedAddOns.filter(data => data.addOnId === 'onlineService').length > 0} onChange={setAddOns} />
        </div>
        <div className="service"> Online service</div>
        <div className="serviceDetails"> Access to multiplayer games</div>
        <div className="monthlyCharges">+$1/mo</div>
      </div>

      <div className="addOnes">
        <div className="checkBox">
          <Checkbox id="largeStorage" checked={selectedAddOns.filter(data => data.addOnId === 'largeStorage').length > 0} onChange={setAddOns} />
        </div>
        <div className="service">Larger storage</div>
        <div className="serviceDetails">Extra 1TB of cloud save</div>
        <div className="monthlyCharges">+$2/mo</div>
      </div>

      <div className="addOnes">
        <div className="checkBox">
          <Checkbox id="customizableProfile" checked={selectedAddOns.filter(data => data.addOnId === 'customizableProfile').length > 0} onChange={setAddOns} />
        </div>
        <div className="service">Customizable profile</div>
        <div className="serviceDetails">Custom theme on your profile</div>
        <div className="monthlyCharges">+$2/mo</div>
      </div>
    </div>
  );
}

export default PickAddOns;
