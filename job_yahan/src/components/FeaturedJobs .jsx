import React from "react";
import Category from "./Category";

function FeaturedJobs() {
  const jobsdata = [
    {
      logo: "https://img.icons8.com/ios-glyphs/30/mac-os.png",
      time: "Full time",
      title: "Email Marketing",
      company: "Apple",
      address: "Lucknow ,India",
      dec: "Revolut is looking for Email Marketing to help team ma ...",
      category: [" Marketing ", " Design "],
    },
    {
      logo: "https://img.icons8.com/ios-glyphs/30/mac-os.png",
      time: "Full time",
      title: "Email Marketing",
      company: "Apple",
      address: "Lucknow ,India",
      dec: "Revolut is looking for Email Marketing to help team ma ...",
      category: ["Marketing"],
    },
    {
      logo: "https://img.icons8.com/ios-glyphs/30/mac-os.png",
      time: "Full time",
      title: "Email Marketing",
      company: "Apple",
      address: "Lucknow ,India",
      dec: "Revolut is looking for Email Marketing to help team ma ...",
      category: ["Marketing", "Design"],
    },
    {
      logo: "https://img.icons8.com/ios-glyphs/30/mac-os.png",
      time: "Full time",
      title: "Email Marketing",
      company: "Apple",
      address: "Lucknow ,India",
      dec: "Revolut is looking for Email Marketing to help team ma ...",
      category: ["Marketing", "Design"],
    },
    {
      logo: "https://img.icons8.com/ios-glyphs/30/mac-os.png",
      time: "Full time",
      title: "Email Marketing",
      company: "Apple",
      address: "Lucknow ,India",
      dec: "Revolut is looking for Email Marketing to help team ma ...",
      category: ["Marketing", "Design"],
    },
    {
      logo: "https://img.icons8.com/ios-glyphs/30/mac-os.png",
      time: "Full time",
      title: "Email Marketing",
      company: "Apple",
      address: "Lucknow ,India",
      dec: "Revolut is looking for Email Marketing to help team ma ...",
      category: ["Marketing", "Design"],
    },
    {
      logo: "https://img.icons8.com/ios-glyphs/30/mac-os.png",
      time: "Full time",
      title: "Email Marketing",
      company: "Apple",
      address: "Lucknow ,India",
      dec: "Revolut is looking for Email Marketing to help team ma ...",
      category: ["Marketing", "Design"],
    },
    {
      logo: "https://img.icons8.com/ios-glyphs/30/mac-os.png",
      time: "Full time",
      title: "Email Marketing",
      company: "Apple",
      address: "Lucknow ,India",
      dec: "Revolut is looking for Email Marketing to help team ma ...",
      category: ["Marketing", "Design"],
    },
  ];
  return (
    <div className="px-28 mt-12">
      <div className="flex items-center justify-between mb-12">
        <h2 className="text-5xl font-black ">
          Featured <span className="text-sky-500">jobs</span>
        </h2>
        <div className="flex items-center text-indigo-600">
          Show all jobs <i className="ri-arrow-right-line"></i>
        </div>
      </div>

      <div className=" flex justify-center gap-6 flex-wrap mt-12">
        {jobsdata.map((item, index) => (
          <div
            key={index}
            className="flex justify-center items-center hover-catgri"
          >
            <div className="p-4 border">
              <div className="flex justify-between">
                <img className="h-12 mb-5" src={item.logo} alt="" />
                <div className="px-2 h-8 text-indigo-600 font-bold  border-2 border-indigo-600">
                  {item.time}
                </div>
              </div>
              <div className="w-52">
                <p className="text-xl font-bold ">{item.title}</p>
                
                <div className="text-sm flex items-center gap-2">
                  {item.company}<li>{item.address}</li>
                </div>
                <p className="text-slate-500 mt-2">{item.dec}</p>
              </div>
              <div className="flex ">
                {item.category}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FeaturedJobs;
