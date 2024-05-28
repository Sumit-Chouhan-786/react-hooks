import React, { useEffect, useState } from "react";

const MyUseeffect = () => {
    const [count ,setCount ]=useState(0);
    useEffect(() => {
      setTimeout(() => {
        setCount((count) => count + 1);
      },1000);
    }, []);
  return (
    <div className="h-screen flex justify-center items-center flex-col gap-4 bg-black text-white">
      <h1 className="text-4xl">i have render {count} times</h1>
    </div>
  );
};

export default MyUseeffect;
