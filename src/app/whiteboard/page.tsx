"use client";

import {useState} from "react";
import Board from "./Components/Board";
import Navbar from "./Components/Navbar";
import Taskbar from "./Components/Taskbar";
import {useSelector} from "react-redux";

const WhiteBoard = () => {
  const [colorSelected, setColorSelected] = useState();
  const strokeColor = useSelector((state: any) => state.board.strokeColor);
  return (
    <>
      <div className=" m-5">
        <Navbar />
        <div>color : {strokeColor}</div>
        <Taskbar SelectedColor={setColorSelected} />
        <div className=" flex justify-center items-center">
          <Board color={strokeColor} />
        </div>
      </div>
    </>
  );
};

export default WhiteBoard;
