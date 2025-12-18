import React from 'react'

export default function VisualizerCanvas ({ array, activeIndices }) {
  return (
    <div className="h-[400px] bg-slate-800 rounded-xl p-4 flex flex-col gap-4 overflow-hidden">
      <h2 className="text-xl font-semibold text-center">
        Visualizer
      </h2>

      <div className="flex-1 flex items-end justify-center gap-1">
        {array.map((value, idx) => {
          const isActive = activeIndices.includes(idx);

          return (
            <div
              key={idx}
              className={`rounded-sm transition-all duration-150 ${
                isActive ? "bg-red-400" : "bg-sky-400"
              }`}
              style={{
                height: `${value}px`,
                width: "10px",
              }}
            />
          );
        })}
      </div>
    </div>
  )
}

