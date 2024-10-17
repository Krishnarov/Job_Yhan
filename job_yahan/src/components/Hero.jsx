import React, { useState } from "react";

function Hero() {
  const locations = ["Lucknow", "Delhi", "goa", "azamgarh"];
  const [locetiondata, setlocationdata] = useState("");
  const [searchjob, setsearchjob] = useState("");
 
  
  const handelsearch = () => {
    console.log("location :- " + locetiondata);
    console.log("search jobs" + searchjob);
  };
  return (
    <div className="px-28 mt-12 bg-slate-100 overflow-hidden">
      <div className="flex relative ">
        <div className="w-2/5  mt-32">
          <h1 className="font-black text-6xl">
            Discover morethen <span className="text-sky-500">50000+Jobs</span>
          </h1>
          <img src="./images/line.png" alt="" />
          <p className="mt-8 text-xl">
            Great platform for the job seeker that searching for new career
            heights and passionate about startups.
          </p>
        </div>
        <div className="w-3/5 bg-i-hero px-16 overflow-hidden	">
          <img className="px-12 pt-10" src="./images/man.png" alt="" />
          <div className="cornor-hero-div"></div>
        </div>
        <div className="absolute top-2/3 w-3/5 p-4 shadow bg-white flex items-center gap-3">
          <div className="flex items-center gap-4 w-2/5">
            <i className="ri-search-line text-2xl"></i>
            <input
              className="border-b w-full h-12"
              placeholder="Job title or keyword"
              type="text"
              name="searchjobs"
              onChange={(j) => setsearchjob(j.target.value)}
              
              id=""
            />
          </div>
          <div className="flex items-center gap-4 w-2/5">
            <i className="ri-map-pin-line text-2xl"></i>
            <select
              name=""
              id=""
              className="border-b h-12 w-full outline-0 "
              onChange={(l) => setlocationdata(l.target.value)}
            >
                <option value="" disabled >--Select locations --</option>
              {locations.map((city, index) => (
                <option value={city} key={index}>
                  {city}
                </option>
              ))}
            </select>
          </div>
          <div className="w-1/3 flex justify-end items-cente text-center">
            <button
              onClick={handelsearch}
              className="bg-indigo-600 hover:text-indigo-600  text-white hover:bg-transparent border-2 border-indigo-600 "
            >
              Search my job
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
