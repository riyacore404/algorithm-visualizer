import Navbar from "./components/Navbar";
import ControlPanel from "./components/ControlPanel";
import VisualizerCanvas from "./components/VisualizerCanvas";
import InfoPanel from "./components/InfoPanel";
import { useState, useEffect } from "react";

export default function App() {
  const createRandomArray = (size) =>
    Array.from({ length: size }, () =>
      Math.floor(Math.random() * 300) + 20
    );

  const [arraySize, setArraySize] = useState(50);
  const [array, setArray] = useState(() => createRandomArray(50));

  const generateArray = (size = arraySize) => {
    setArray(createRandomArray(size));
  };


  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <Navbar />

      <div className="p-4 grid grid-cols-1 lg:grid-cols-12 gap-4 items-start">
        <div className="lg:col-span-3 h-full">
          <ControlPanel
            arraySize={arraySize}
            setArraySize={setArraySize}
            generateArray={generateArray}
          />
        </div>

        <div className="lg:col-span-6 h-full">
          <VisualizerCanvas array={array} />
        </div>

        <div className="lg:col-span-3 h-full">
          <InfoPanel />
        </div>
      </div>
    </div>
  );
}
