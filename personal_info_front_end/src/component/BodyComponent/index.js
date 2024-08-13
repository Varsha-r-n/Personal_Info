import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import PersonalInfo from "../PersonalInfo";
import "./bodyComponent.css"
function BodyComponent({title, description, selectedState}) {
  return (
    <div className="bodyComponent">
      <Header title={title} description={description} />
      <PersonalInfo />
      <Footer pageNum={selectedState} />
    </div>
  );
}

export default BodyComponent;
