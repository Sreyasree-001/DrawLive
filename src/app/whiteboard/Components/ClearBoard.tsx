"use client"
import { FaUndo } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const ClearBoard = () => {
  return (
    <>
    <div className="flex flex-row justify-center items-center space-x-1">
        <div className=""><FaUndo/></div>
        <div className=""><MdDelete/></div>
    </div>
    </>
  )
}

export default ClearBoard