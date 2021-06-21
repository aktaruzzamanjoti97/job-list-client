import React from "react";
import Header from "../Header/Header";
import JobList from "../JobList/JobList";
import Navigation from "../Navigation/Navigation";
import SearchBar from "../SearchBar/SearchBar";

const Home = () => {
  return (
    <div>
      <Header />
      {/* <Navigation /> */}
      <SearchBar />
      <JobList />
    </div>
  );
};

export default Home;