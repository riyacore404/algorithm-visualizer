import React from 'react'

const InfoPanel = ({ algorithm, stepCount, speed }) => {
  const estimateRuntime = (steps, speed) => {
    if (!steps || steps === 0) return "—";

    const ms = steps * speed;
    if (ms < 1000) return `${ms} ms`;
    return `${(ms / 1000).toFixed(2)} s`;
  };

  return (
    <div className="h-full bg-slate-800 rounded-xl p-4 text-center">
      <h2 className="text-xl font-semibold">
        {algorithm.name}
      </h2>

      <div>
        <h3 className="text-lg font-medium mb-1">
          Time Complexity
        </h3>

        <div className="space-y-1 text-sm mb-2">
          <p>Best: <span className="text-sky-400">{algorithm.time.best}</span></p>
          <p>Average: <span className="text-sky-400">{algorithm.time.average}</span></p>
          <p>Worst: <span className="text-sky-400">{algorithm.time.worst}</span></p>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-medium mb-1">
          Space Complexity
        </h3>

        <p className="text-sm mb-2">
          <span className="text-sky-400">{algorithm.space}</span>
        </p>
      </div>

      <div className="flex gap-2 text-xs justify-center">
        {algorithm.stable && (
          <span className="px-2 py-1 bg-green-600/20 text-green-400 rounded">
            Stable
          </span>
        )}
        {algorithm.inPlace && (
          <span className="px-2 py-1 bg-purple-600/20 text-purple-400 rounded">
            In-Place
          </span>
        )}
      </div>

      <p className="text-sm">
        Estimated Runtime:
        <span className="text-pink-400 ml-2">
          {estimateRuntime(stepCount, speed)}
        </span>
      </p>
    </div>
  )
}

export default InfoPanel