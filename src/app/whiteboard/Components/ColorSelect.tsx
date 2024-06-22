"use client";

import { useEffect, useState } from "react";


const ColorSelect = () => {
  const [isTrue, setIstrue] = useState(false);
  const [color, setColor] = useState("black");

  useEffect(()=>{
    setIstrue(true);
  },[])
    
  return (
    <>
      <div>
        {isTrue ? <>
          <input
        type="color"
        value={color}
        className="w-12 cursor-pointer"
        title="Pick color"
        suppressHydrationWarning={true}
        onChange={(e) => setColor(e.target.value)}
        />
        </>: <></>}
      </div>
    </>
  );
};

export default ColorSelect;
