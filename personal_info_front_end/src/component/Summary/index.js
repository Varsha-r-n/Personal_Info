import React from "react";
import { Select } from "antd";
import "./summary.css";

function Summary() {
  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };

  return (
    <div className="summary">
      <div className="SummarySelect">
        <Select
          defaultValue={"Arcade(Monthly)"}
          style={{ width: 200 }}
          onChange={handleChange}
          options={[
            {
              label: <span>Online service</span>,
              value: "Online service",
            },
            {
              label: <span>Larger storage</span>,
              value: "Larger storage",
            },
            {
              label: <span>Customizable Profile</span>,
              value: "Customizable Profile",
            },
          ]}
        />
      </div>
    </div>
  );
}

export default Summary;
