import React from "react";
import { Switch } from "antd";
import { RadarChartOutlined, FormOutlined, CopyOutlined } from "@ant-design/icons";
import "./selectPlan.css";

function SelectPlan({ selectedPlan, setSelectedPlan, setSelectPlanHasErrors }) {

  const validateError = (planObj) => {
    if(planObj.planName && planObj.planDuration && planObj.planPrice){
      setSelectPlanHasErrors(false);
    }
  }

  const onChange = (checked) => {
    let copySelectedPlan = {
      ...selectedPlan
    }
    if (checked) {
      document.getElementById("yearly").classList.add("selectedDuration");
      document.getElementById("monthly").classList.remove("selectedDuration");
      copySelectedPlan = {
        ...selectedPlan,
        planDuration: 12
      }
      setSelectedPlan(copySelectedPlan)
    } else {
      document.getElementById("monthly").classList.add("selectedDuration");
      document.getElementById("yearly").classList.remove("selectedDuration");
      copySelectedPlan = {
        ...selectedPlan,
        planDuration: 1
      }
      setSelectedPlan(copySelectedPlan)
    }
    validateError(copySelectedPlan)
  };
  const selectUserPlan = (e) => {
    const selectedPlanEl = e.target;
    const planes = document.getElementsByClassName("plan");
    for (let i = 0; i < planes.length; i++) {
      planes[i].classList.remove("planSelected");
    }
    selectedPlanEl.classList.add("planSelected");
    const selectedPlanObj = plansArray.filter(plan => plan.id === selectedPlanEl.id)
    const copy = {
      ...selectedPlan,
      planName: selectedPlanObj[0].planName,
      planPrice: selectedPlanObj[0].planPrice
    }
    setSelectedPlan(copy)
    validateError(copy)
  };

  const plansArray = [
    {
      icon: RadarChartOutlined,
      planName:"Arcade",
      id:"arcade",
      planPrice:"9"
    },
    {
      icon: FormOutlined,
      planName:"Advanced",
      id:"advanced",
      planPrice:"12"
    },
    {
      icon: CopyOutlined,
      planName:"Pro",
      id:"pro",
      planPrice:"15"
    }
  ]

  const getPlansComponent = () => {
    return plansArray.map(plan => {
      return (
        <div key={plan.id} id={plan.id} onClick={selectUserPlan} className={`plan ${selectedPlan.planName === plan.planName ? 'planSelected' : ''}`}>
          <div className="icons">
            <plan.icon />
          </div>
          {plan.planName}
          <h6 className="payment">`${plan.planPrice}/mo`</h6>
        </div>
      )
    })
  }

  return (
    <div className="selectPlan">
      {getPlansComponent()}
      <div className="planDurationSwitch">
        <span id="monthly">Monthly</span>
        <span className="switch">
          <Switch checked={selectedPlan.planDuration === 12 ? true : false} onChange={onChange} />
        </span>
        <span id="yearly" className="selectedDuration">
          Yearly
        </span>
      </div>
    </div>
  );
}

export default SelectPlan;
