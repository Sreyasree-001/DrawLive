"use client";

import {setStrokeColor} from "@/lib/redux/store";
import {useEffect, useState} from "react";
import {useDispatch} from "react-redux";

const ColorSelect = ({SelectedColor}: any) => {
  const [isTrue, setIstrue] = useState(false);
  const [color, setColor] = useState("black");
  const dispatch = useDispatch();
  useEffect(() => {
    setIstrue(true);
  }, []);

  return (
    <>
      <div>
        {isTrue ? (
          <>
            <input
              type="color"
              value={color}
              className="w-12 cursor-pointer"
              title="Pick color"
              suppressHydrationWarning={true}
              onChange={(e) => {
                setColor(e.target.value);
                SelectedColor(e.target.value);
                dispatch(setStrokeColor(e.target.value));
              }}
            />
          </>
        ) : (
          <></>
        )}
      </div>
    </>
  );
};

export default ColorSelect;
