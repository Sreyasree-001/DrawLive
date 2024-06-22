"use client";

import ClearBoard from "./ClearBoard";
import ColorSelect from "./ColorSelect";
import ToolSelect from "./ToolSelect";

const Taskbar = () => {
  return (
    <>
      <div className="flex flex-row space-x-10 justify-center items-center p-2 lg:space-x-24">
        <ToolSelect/>
        <ColorSelect/>
        <ClearBoard/>
      </div>
    </>
  );
};

export default Taskbar;
