import React from 'react'

export default function VisualizerCanvas ({ array, activeIndices, pivotIndex = null, mergeRange = null }) {
  const getBarColor = (idx) => {
    if (pivotIndex === idx) return "bg-yellow-400";

    if (mergeRange) {
      if (idx >= mergeRange.left && idx <= mergeRange.mid)
        return "bg-purple-400";
      if (idx > mergeRange.mid && idx <= mergeRange.right)
        return "bg-green-400";
    }

    if (activeIndices.includes(idx)) return "bg-red-400";

    return "bg-sky-400";
  };


  return (
    <div className="h-100 bg-slate-800 rounded-xl p-4 flex flex-col gap-4 overflow-hidden">
      <h2 className="text-xl font-semibold text-center">
        Visualizer
      </h2>

      <div className="flex-1 flex items-end justify-center gap-1">
        {array.map((value, idx) => {
          return (
            <div
              key={idx}
              className={`rounded-sm transition-all duration-200 ${getBarColor(
                idx
              )}`}
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

