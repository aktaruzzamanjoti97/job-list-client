import React from "react";
import { Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";

const Employer = () => {

    let history = useHistory();

    function handleClick() {
        history.push("/employeeForm");
      }


  return (

    
    <div className="container py-5">
      <h2 className="text-center text-success">Select Your Plan</h2>
      <div class="card-group">
        <div class="card p-3">
          {/* <img src="..." class="card-img-top" alt="..." /> */}
          <div class="card-body">
            <h5 class="card-title text-center">Premium Account</h5>
            <p class="card-text">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
            <p class="card-text">
              <small class="text-muted">Last updated 3 mins ago</small>
            </p>
            <Button onClick={handleClick}>Select Premium</Button>
          </div>
        </div>
        <div class="card p-3">
          {/* <img src="..." class="card-img-top" alt="..." /> */}
          <div class="card-body">
            <h5 class="card-title text-center">Standard Account</h5>
            <p class="card-text">
              This card has supporting text below as a natural lead-in to
              additional content.
            </p>
            <p class="card-text">
              <small class="text-muted">Last updated 3 mins ago</small>
            </p>
            <Button  onClick={handleClick}>Select Standard</Button>
          </div>
        </div>
        <div class="card p-3">
          {/* <img src="..." class="card-img-top" alt="..." /> */}
          <div class="card-body">
            <h5 class="card-title text-center">Basic Account</h5>
            <p class="card-text">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This card has even longer content
              than the first to show that equal height action.
            </p>
            <p class="card-text">
              <small class="text-muted">Last updated 3 mins ago</small>
            </p>
            <Button  onClick={handleClick}>Select Basic</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Employer;
