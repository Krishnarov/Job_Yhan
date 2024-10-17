import React, { useEffect, useState } from "react";

function NavBar() {
  const [sticky ,setSticky]=useState(false)
  useEffect(()=>{
    const heandlscroll=()=>{
      if(window.scrollY>0){
        setSticky(true)
      }else{
        setSticky(false)
      }
    }
    window.addEventListener("scroll",heandlscroll)
    return ()=>{
      window.addEventListener("scroll",heandlscroll)
    }
  },[])
  return (
    <div className={`py-2 px-28 bg-slate-100 fixed top-0 left-0 right-0 z-50 ${sticky ? " shadow-md duration-300 transition-all ease-in-out":""}`}>
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <div className="px-4 py-1 bg-indigo-600 text-white rounded-full font-black text-xl">
            j
          </div>
          <div className="font-black text-2xl ml-3">JOB_YAHNA</div>

          <div className="flex items-center gap-4 ml-8">
            <div>Find Jobs</div>
            <div>Browse Companies</div>
          </div>
        </div>
        <div className="flex items-center gap-4">
            <button className="bg-slate-100 text-indigo-600 hover:bg-indigo-600 hover:text-white border-2 border-indigo-600 ">Login</button>
            <button className="bg-indigo-600 hover:text-indigo-600  text-white hover:bg-transparent border-2 border-indigo-600 ">Signup</button>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
