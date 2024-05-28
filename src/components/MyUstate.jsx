import React, { useState } from "react";

const MyUstate = () => {
    const [Person, setPerson] = useState({
      name: "sumit",
      village: "dhana kalan",
      city: "Hansi",
      state: "Haryana",
      pinCode: "125033",
    });
    const update =()=>{
        setPerson((prev)=>{
            return { ...prev, name:"surender" };
        })
    }
  return (
    <div className="h-screen flex justify-center items-center flex-col gap-4">
      <h1 className=" uppercase font-bold text-3xl">
        my name is {Person.name}
      </h1>
      <h2 className="font-medium text-lg">
        village:{Person.village}, city:{Person.city};,state:{Person.state}
        ;,pincode:
        {Person.pinCode}
      </h2>
      <button
        onClick={update}
        className="px-3 py-2 bg-blue-600 text-white hover:bg-red-600 transition-all duration-300"
      >
        Update
      </button>
    </div>
  );
};

export default MyUstate;
