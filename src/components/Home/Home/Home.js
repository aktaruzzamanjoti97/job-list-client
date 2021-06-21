import { Button } from "react-bootstrap";
import React from "react";
import jobPhoto from "../../../images/jobsearch.jpg";
import { useHistory } from "react-router-dom";

const Home = () => {
  let history = useHistory();

  function handleAdmin() {
    history.push("/admin");
  };

  function handleEmployer() {
    history.push("/employer");
  };

  function handleJobSeeker() {
    history.push("/jobSeeker");
  }



  return (
    <div className="container">
      <div className="py-5">
        <h1 className="text-center py-2">Job Search</h1>
        <div className="row">
          <div className="col-md-6">
            <img className="img-fluid" src={jobPhoto} alt="" />
          </div>
          <div className="col-md-6">
            <div className="text-center">
              <h4>Select Your Category</h4>
              <div className="m-3 p-3">
                <Button onClick={handleAdmin} variant="success">Admin</Button>
              </div>
              <div className="m-3 p-3">
                <Button onClick={handleEmployer} variant="info">Employer</Button>
              </div>
              <div className="m-3 p-3">
                <Button onClick={handleJobSeeker} variant="secondary">Job Seeker</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
