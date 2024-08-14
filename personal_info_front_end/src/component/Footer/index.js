import React from "react";
import "./footer.css";

function Footer({
  pageNum,
  setSelectedState,
  setTitle,
  setDescription,
  headers,
  personalInfoHasErrors,
  selectPlanHasErrors,
  pickAddOnsHasErrors,
}) {
  const changeStep = (where) => {
    let newPageNumber;
    if (where == "next") {
      newPageNumber = pageNum + 1;
    } else {
      newPageNumber = pageNum - 1;
    }
    if (pageNum == 1 && personalInfoHasErrors) {
      alert('Fix erros on the first page')
    } 
    else if(pageNum == 2 && selectPlanHasErrors){
      alert('Fix erros on the second page')
    } 
    else if(pageNum == 3 && pickAddOnsHasErrors){
      alert('Fix erros on the third page')
    } 
    else {
      setSelectedState(newPageNumber);
      setTitle(headers[newPageNumber - 1].title);
      setDescription(headers[newPageNumber - 1].description);
    }
  };

  return (
    <div className="footer">
      {pageNum != 1 && pageNum != 5 && (
        <button className="goBack" onClick={() => changeStep("previous")}>
          {" "}
          Go Back
        </button>
      )}
      {pageNum != 5 && (
        <button className="nextStep" onClick={() => changeStep("next")}>
          {pageNum == 4 ? "Confirm" : "Next Step"}
        </button>
      )}
    </div>
  );
}

export default Footer;
