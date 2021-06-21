import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import JobListChild from "../JobListChild/JobListChild";

const JobList = () => {

  const [employeePost, setEmployeePost] = useState([]);


  useEffect(() => {
    fetch(`https://radiant-island-56726.herokuapp.com/postShow`)
    .then(res => res.json())
    .then(data => {
      console.log(data);
      setEmployeePost(data)
    })
  }, []);

  return (
    <div className="container">

      
        {employeePost.map((post) => (
          <JobListChild post={post}/>
        ))}
      

      {/* <div class="card">
        <div class="card-header">Featured</div>
        <div class="card-body">
          <h5 class="card-title">Special title treatment</h5>
          <p class="card-text">
            With supporting text below as a natural lead-in to additional
            content.
          </p>
          <a href="#" class="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div> */}
      
    </div>
  );
};

export default JobList;
