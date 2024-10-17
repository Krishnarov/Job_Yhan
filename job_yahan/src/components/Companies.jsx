import React from "react";

function Companies() {
  const CompaniesData = [
    { name: "Vodafone Idea", title: "Vodafone Idea Limited", logo: "https://www.myvi.in/content/dam/vodafoneideadigital/homespyder/Vi-logo.svg" },
    { name: "Intel", title: "Intel", logo: "https://www.myvi.in/content/dam/vodafoneideadigital/homespyder/Vi-logo.svg" },
    { name: "Tesla", title: "Automotive company", logo: "https://www.myvi.in/content/dam/vodafoneideadigital/homespyder/Vi-logo.svg" },
    { name: "AMD", title: "IT corporation", logo: "https://www.myvi.in/content/dam/vodafoneideadigital/homespyder/Vi-logo.svg" },
    { name: "Tata Consultancy Services", title: "IT company", logo:"https://www.myvi.in/content/dam/vodafoneideadigital/homespyder/Vi-logo.svg" },
  ];
  return (
    <div className="px-28 py-4">
      <p className="text-sm">Companies we helped grow</p>
      <div className="grid grid-cols-5 py-4 gap-6">
      {CompaniesData.map((data,index)=>(
        <div key={index} className=" text-xs text-center">
            <div className="flex justify-center">
            <img className="aspect-square object-cover object-center" src={data.logo} alt={data.name} />
            </div>
            {data.name}
        </div>
      ))}
      </div>
      
    </div>
  );
}

export default Companies;
