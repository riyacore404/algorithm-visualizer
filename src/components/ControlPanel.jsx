import React from 'react'

export default function ControlPanel ({ arraySize, setArraySize, generateArray }) {
  return (
    <div className="h-full bg-slate-800 rounded-xl p-4 text-center">
      <h2 className="text-xl font-semibold"> Controls </h2>

      <div>
        <label className="block mb-2 text-sm">
          Array Size: <span className="font-bold"> { arraySize } </span>
        </label>

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
   </div>
  );
}

