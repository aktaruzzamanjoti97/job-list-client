import React from "react";

const JobListChild = ({ post }) => {
  return (
    <div class="card">
      {/* <div class="card-header">{post.jobInfo?.srName}</div> */}
      <div class="card-body">
        <h5 class="card-title">{post.jobInfo?.srName}</h5>
        <p class="card-text">
          With supporting text below as a natural lead-in to additional content.
        </p>
        <a href="#" class="btn btn-primary">
          Go somewhere
        </a>
      </div>
    </div>
  );
};

export default JobListChild;
