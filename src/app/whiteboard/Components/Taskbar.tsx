"use client";

import {useDispatch, useSelector} from "react-redux";
import ClearBoard from "./ClearBoard";
import ColorSelect from "./ColorSelect";
import ToolSelect from "./ToolSelect";
import {setStrokeThickness} from "@/lib/redux/store";

const Taskbar = ({SelectedColor}: any) => {
  const strokeThickness = useSelector(
    (state: any) => state.board.strokeThickness
  );
  const dispatch = useDispatch();
  return (
    <>
      <div className="flex flex-row gap-5 justify-center items-center p-2 lg:gap-24">
        <ToolSelect />
        <ColorSelect SelectedColor={SelectedColor} />
        <ClearBoard />
        <div className="">
          <label className="mx-5">Thickness</label>
          <input
            value={strokeThickness}
            onChange={(e) => {
              dispatch(setStrokeThickness(e.target.value));
            }}
            type="number"
            placeholder="Thickness"
            className=" border border-black w-16 p-3"
          />
        </div>
      </div>
    </>
  );
};

export default Taskbar;
