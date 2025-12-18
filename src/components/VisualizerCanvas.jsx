import React from 'react'
import { useState, useEffect } from "react";

export default function VisualizerCanvas ({ array }) {
  return (
    <div className="h-[400px] bg-slate-800 rounded-xl p-4 flex flex-col gap-4 overflow-hidden">
      <h2 className="text-xl font-semibold text-center">
        Visualizer
      </h2>

      <div className="flex-1 flex items-end justify-center gap-1">
        {array.map((value, idx) => (
          <div
            key={idx}
            className="bg-sky-400 rounded-sm transition-all"
            style={{
              height: `${Math.min(value, 360)}px`,
              width: "10px",
            }}
          />
        ))}
      </div>
    </div>
  )
}

