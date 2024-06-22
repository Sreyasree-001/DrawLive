"use client"

import Board from "./Components/Board"
import Navbar from "./Components/Navbar"
import Taskbar from "./Components/Taskbar"


const page = () => {
  return (
    <>
    <div>
      <Navbar/>
      <Taskbar/>
      <Board/>
    </div>
    </>
  )
}

export default page