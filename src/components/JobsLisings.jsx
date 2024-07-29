import React, { useEffect, useState } from "react";


import JobListing from "./JobListing";
import axios from "axios";
import Spinner from "./Spinner";

const JobsLisings = ({ isHome = false }) => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

//   Fetching data useEffect
//   useEffect(() => {
//     const fetchJobs = async () => {
//       try {
//         const res = await fetch("http://localhost:5000/jobs");
//         const data = await res.json();
//         setJobs(data);
//       } catch (error) {
//         console, log("Error fetching data", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchJobs();
//   }, []);

// Fetching using axios
 useEffect(() => {
    const fetchJobs = async () => {

        // if the url in Homepage then show just 3 card if not show
        const apiUrl = isHome ? 'http://localhost:5000/jobs?_limit=3'
        : 'http://localhost:5000/jobs'
      try {
        const response = await axios.get(apiUrl);
        setJobs(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);



  const jobListings = isHome ? jobs.slice(0, 3) : jobs;
  return (
    <section className="bg-blue-50 px-4 py-10">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
          {isHome ? "Recent Jobs" : "Browse Jobs"}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {loading ? (
            <h2>Loading</h2>
          ) : (
            <>
            {/* this is how to maping the data from the jobs json server */}
              {jobs.map((job) => (
                <JobListing key={job.id} job={job} />
              ))}
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default JobsLisings;
