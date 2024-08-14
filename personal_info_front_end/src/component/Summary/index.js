import React from "react";
import "./summary.css";

function Summary({ personalInfo, selectedPlan, selectedAddOns }) {
  const getAddons = () => {
    return selectedAddOns.map((addon) => {
      return (
        <div className="common addOnsRow" key={addon.addOnId}>
          <div>{addon.addOnName}</div>
          <div>{addon.addOnPrice}</div>
        </div>
      );
    });
  };

  const getTotal = () => {
    let total = selectedPlan.planDuration*selectedPlan.planPrice;
    selectedAddOns.forEach(addon => {
      total = total + addon.addOnPrice;
    });
    return total;
  }
  const duration = selectedPlan.planDuration == 1 ? 'Monthly' : 'Yearly'
  return (
    <div className="summary">
      <div className="common planNameDetails">
        <div className="planName">
          {selectedPlan.planName+'('+duration+')'}
        </div>
        <div className="planPrice">{'$'+selectedPlan.planPrice+'/mo'}</div>
      </div>
      <div className="horizontalLine" />
      {getAddons()}

      <div className="common total">
        <div>Total(per month)</div>
        <div className="finalPrice">{'+$'+getTotal()+'/mo'}</div>
      </div>

    </div>
  );
}

export default Summary;
