import React from "react";

function Poster() {
  return (
    <div className="px-28 mt-12 relative overflow-hidden">
      <div className="bg-indigo-600 flex">
        <div className="w-2/4 p-20 text-white">
          <h1 className="text-5xl  font-bold pr-14 mb-6">
            Start posting jobs today
          </h1>
          <p className="mb-6"> Start posting jobs for only $10.</p>
          <button className="text-indigo-600">Signup for free</button>
        </div>
        <div className="w-2/4 flex justify-center items-end">
          <img
            className="object-fill w-4/5 z-10"
            src="./images/dashbord.png"
            alt=""
          />
        </div>
            <div className="coener-div top-div"></div>
            <div className="coener-div bottom-div"></div>
      </div>
    </div>
  );
}

export default Poster;
