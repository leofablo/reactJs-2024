import React from "react";
import Hero from "../components/Hero";
import HomeCards from "../components/HomeCards";
import JobsLisings from "../components/JobsLisings";
import ViewAllJobs from "../components/ViewAllJobs";

const HomePage = () => {
  return (
    <>
      <Hero />
      <HomeCards />
      <JobsLisings isHome={true} />
      <ViewAllJobs />
    </>
  );
};

export default HomePage;
