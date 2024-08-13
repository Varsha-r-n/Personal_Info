import React from "react";
import "./footer.css";
function Footer({ pageNum }) {
  return (
    <div className="footer">
      {pageNum != 1 && <button className="goBack"> Go Back</button>}
      <button className="nextStep">{pageNum==4 ? 'Confirm' : 'Next Step'}</button>
    </div>
  );
}

export default Footer;
