import React from 'react'

export default function ControlPanel ({ arraySize, setArraySize, generateArray, play, pause, speed, setSpeed, selectedAlgo, setSelectedAlgo, isPlaying }) {
  return (
    <div className="h-full bg-slate-800 rounded-xl p-4 text-center">
      <h2 className="text-xl font-semibold"> Controls </h2>

      <div>
        <label className="block mb-2 text-sm">
          Array Size: <span className="font-bold"> { arraySize } </span>
        </label>

        <select
          value={selectedAlgo}
          onChange={(e) => setSelectedAlgo(e.target.value)}
          className="w-full p-2 bg-slate-800 rounded border border-slate-700"
        >
          <option value="bubble">Bubble Sort</option>
          <option value="selection">Selection Sort</option>
          <option value="insertion">Insertion Sort</option>
          <option value="merge">Merge Sort</option>
          <option value="quick">Quick Sort</option>
          <option value="heap">Heap Sort</option>
          <option value="radix">Radix Sort</option>
        </select>

        <input
          type="range"
          min="10"
          max="100"
          value={arraySize}
          onChange={(e) => {
            const size = Number(e.target.value);
            setArraySize(size);
            generateArray(size);
          }}
          className="w-full"
        />
      </div>

      <button
        onClick={() => generateArray()}
        className="w-full bg-sky-500 hover:bg-sky-600 transition rounded-lg py-2 font-medium">
        Generate New Array
      </button>

      <div className="flex gap-2">
        <button
          onClick={play}
          disabled={isPlaying}
          className="flex-1 bg-green-500 hover:bg-green-600 rounded-lg py-2"
        >
          Play
        </button>

        <button
          onClick={pause}
          className="flex-1 bg-red-500 hover:bg-red-600 rounded-lg py-2"
        >
          Pause
        </button>
      </div>

      <div>
        <label className="block mb-2 text-sm">
          Speed: <span className="font-bold"> { speed } ms</span>
        </label> 

        <input
          type="range"
          min="1"
          max="1000"
          step="50"
          value={speed}
          onChange={(e) => setSpeed(Number(e.target.value))}
          className="w-full"
        />
      </div>
   </div>
  );
}

