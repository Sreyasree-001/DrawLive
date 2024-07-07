"use client";
import {clearCanvas} from "@/lib/redux/store";
import {FaUndo} from "react-icons/fa";
import {MdDelete} from "react-icons/md";
import {useDispatch} from "react-redux";

const ClearBoard = () => {
  const dispatch = useDispatch();
  return (
    <>
      <div className="flex flex-row items-center gap-5 p-3 justify-center">
        <div className=" cursor-pointer">
          <FaUndo size={20} />
        </div>
        <div
          className=" cursor-pointer"
          onClick={() => {
            dispatch(clearCanvas());
          }}
        >
          <MdDelete size={24} />
        </div>
      </div>
    </>
  );
};

export default ClearBoard;
