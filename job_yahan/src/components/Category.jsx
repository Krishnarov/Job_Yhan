import React from "react";

function Category() {
  const categoryData = [
    {
      logo: "./images/hr.png",
      title: "Human Resource",
      jobs: "346 jobs available",
    },
    {
      logo: "./images/hr.png",
      title: "Human Resource",
      jobs: "346 jobs available",
    },
    {
      logo: "./images/hr.png",
      title: "Human Resource",
      jobs: "346 jobs available",
    },
    {
      logo: "./images/hr.png",
      title: "Human Resource",
      jobs: "346 jobs available",
    },
    {
      logo: "./images/hr.png",
      title: "Human Resource",
      jobs: "346 jobs available",
    },
    {
      logo: "./images/hr.png",
      title: "Human Resource",
      jobs: "346 jobs available",
    },
    {
      logo: "./images/hr.png",
      title: "Human Resource",
      jobs: "346 jobs available",
    },
    {
      logo: "./images/hr.png",
      title: "Human Resource",
      jobs: "346 jobs available",
    },
  ];
  return (
    <div className="px-28 ">
      <div className="flex items-center justify-between">
        <h2 className="text-5xl font-black ">
          Explore by <span className="text-sky-500">category</span>
        </h2>
        <div className="flex items-center text-indigo-600">
          Show all jobs <i className="ri-arrow-right-line"></i>
        </div>
      </div>
      <div >
      <div className=" flex justify-center gap-6 flex-wrap mt-12">
        {categoryData.map((item, index) => (
          <div key={index} className="flex justify-center items-center hover-catgri">
            <div className="p-4 border">
              <img className="h-12 mb-5" src={item.logo} alt="" />
              <div className="w-52">
              <p className="text-xl mb-3 font-bold ">{item.title}</p>
              <div className="text-sm flex items-center justify-between">{item.jobs}<i className="ri-arrow-right-line"></i></div>

              </div>
            </div>
          </div>
        ))}
      </div>
      </div>
    </div>
  );
}

export default Category;
