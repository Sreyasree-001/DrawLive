"use client";
import { FaPencil } from "react-icons/fa6";
import { FaPenNib } from "react-icons/fa6";
import { FaPaintBrush } from "react-icons/fa";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";


const ToolSelect = () => {
  const [tool, setTool] = useState(<FaPencil/>);
  return (
    <>
      <div>
        <Select>
          <SelectTrigger className="w-[70px] cursor-pointer" title="Select tool">
            <SelectValue placeholder={tool}/>
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="pencil" title="Pencil" className="cursor-pointer">
              <FaPencil />
            </SelectItem>
            <SelectItem value="pen" title="Pen" className="cursor-pointer">
              <FaPenNib />
            </SelectItem>
            <SelectItem value="brush" title="Brush" className="cursor-pointer">
              <FaPaintBrush />
            </SelectItem>
          </SelectContent>
        </Select>
      </div>
    </>
  );
};

export default ToolSelect;
