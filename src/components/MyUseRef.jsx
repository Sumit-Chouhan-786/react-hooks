import React, { useEffect, useRef, useState } from "react";

const MyUseRef = () => {
  const [value, setValue] = useState(0);
  const inputEle= useRef()
  const btnClick =()=>{
    console.log(inputEle.current);
    inputEle.current.style.background="blue"
  }
  const count = useRef(0);
  useEffect(()=>{
    count.current = count.current+1
  })
  return (
    <div className="h-screen flex justify-center items-center flex-col gap-4">
      <div>
        <button
          onClick={() => {
            setValue((prev) => prev + 1);
          }}
          className="bg-blue-600 px-3 py-2 h-[40px] w-[100px]"
        >
          +1
        </button>
        <h1>{value}</h1>
        <button
          onClick={() => {
            setValue((prev) => prev - 1);
          }}
          className="bg-red-600 px-3 py-2 h-[40px] w-[100px]"
        >
          -1
        </button>
        <h2>Render Count:{count.current}</h2>
      </div>
      <div className="flex flex-col justify-center">
        <h1 className="pb-3">this is another example of useref hook</h1>
        <input className="border" type="text" ref={inputEle} />
        <button className="bg-green-300 mt-3" onClick={btnClick}>click me</button>
      </div>
    </div>
  );
};

export default MyUseRef;
