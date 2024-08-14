import React from "react";
import "./footer.css";

function Footer({ pageNum, setSelectedState, setTitle, setDescription, headers }) {

  const changeStep = (where) => {
    console.log("-------------", where);
    let newPageNumber;
    if(where == 'next'){
      newPageNumber = pageNum+1;
    }else{
      newPageNumber = pageNum-1;
    }
    setSelectedState(newPageNumber)
    setTitle(headers[newPageNumber-1].title);
    setDescription(headers[newPageNumber-1].description)
  }

  return (
    <div className="footer">
      {pageNum != 1 && pageNum != 5 && <button className="goBack" onClick={() => changeStep('previous')}> Go Back</button>}
      {pageNum != 5 && <button className="nextStep" onClick={() => changeStep('next')}>{pageNum==4 ? 'Confirm' : 'Next Step'}</button>}
    </div>
  );
}

export default Footer;
