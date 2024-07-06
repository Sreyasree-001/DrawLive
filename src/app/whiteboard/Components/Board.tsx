"use client";

import {clearCanvas} from "@/lib/redux/store";
import React, {useRef, useState, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";

const Board = ({color}: any) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const dispatch = useDispatch();
  const clrCanvas = useSelector((state: any) => state.board.clear);
  const strokeThickness = useSelector(
    (state: any) => state.board.strokeThickness
  );

  useEffect(() => {
    if (clrCanvas) {
      const canvas = canvasRef.current;
      if (!canvas) return;

      const context = canvas.getContext("2d");
      if (!context) return;

      context.clearRect(0, 0, canvas.width, canvas.height);
      dispatch(clearCanvas());
    }
  }, [clrCanvas]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext("2d");
    if (!context) return;

    context.strokeStyle = color;
    context.lineCap = "round";
    context.lineJoin = "round";
    context.lineWidth = parseInt(strokeThickness);
  }, [color, strokeThickness]);

  const startDrawing = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext("2d");
    if (!context) return;

    context.beginPath();
    context.moveTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
    setIsDrawing(true);
  };

  const draw = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (!isDrawing) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext("2d");
    if (!context) return;

    context.lineTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
    context.stroke();
  };

  const stopDrawing = () => {
    setIsDrawing(false);
  };

  // console.log(typeof color);

  return (
    <div>
      {/* <div>{color}</div> */}
      <canvas
        ref={canvasRef}
        width={window.innerWidth - 50}
        height={window.innerHeight - 50}
        onMouseDown={startDrawing}
        onMouseMove={draw}
        onMouseUp={stopDrawing}
        onMouseLeave={stopDrawing}
        style={{border: ` 1px solid black`}}
      />
    </div>
  );
};

export default Board;
