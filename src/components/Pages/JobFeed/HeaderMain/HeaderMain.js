import React from "react";
import jobImage from "../../../../images/jobimage.png";

const HeaderMain = () => {
  return (
    <div className="row my-3">
      <div className="col-md-5 offset-md-1">
        <img className="img-fluid" src={jobImage} alt="" />
      </div>
      <div className="col-md-5 offset-md-1 d-flex align-items-center">
        <div>
          <h1>Your Experience Starts</h1>
          <h1>From Here</h1>
        </div>
      </div>
    </div>
  );
};

export default HeaderMain;
