import React from "react";

const Navbar = () => {
  return (
    <div className="flex align-middle justify-center pt-4 pb-4">
      <ul className="flex gap-2 text-orange-800 w-max  bg-slate-700 px-2 rounded-lg ">
        <a href="#"><li className="p-2 text-sm shadow-none text-slate-500 border-slate-500 hover:text-slate-200 rounded-xl duration-300 ease-in hover:ease-out">Home</li></a>
        <a href="#"><li className="p-2 text-sm shadow-none text-slate-500 border-slate-500 hover:text-slate-200 rounded-xl duration-300 ease-in hover:ease-out">About</li></a>
        <a href="#"><li className="p-2 text-sm shadow-none text-slate-500 border-slate-500 hover:text-slate-200 rounded-xl duration-300 ease-in hover:ease-out">District</li></a>
        <a href="#"><li className="p-2 text-sm shadow-none text-slate-500 border-slate-500 hover:text-slate-200 rounded-xl duration-300 ease-in hover:ease-out">Clubs</li></a>
        <a href="#"><li className="p-2 text-sm shadow-none text-slate-500 border-slate-500 hover:text-slate-200 rounded-xl duration-300 ease-in hover:ease-out">Portal</li></a>
        <a href="#"><li className="p-2 text-sm shadow-none text-slate-500 border-slate-500 hover:text-slate-200 rounded-xl duration-300 ease-in hover:ease-out">Contact</li></a>
      </ul>
    </div>
  );
};

export default Navbar;






