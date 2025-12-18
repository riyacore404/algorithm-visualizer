import Navbar from "./components/Navbar";
import ControlPanel from "./components/ControlPanel";
import VisualizerCanvas from "./components/VisualizerCanvas";
import InfoPanel from "./components/InfoPanel";
import { useState, useEffect, useRef } from "react";

import { ALGORITHMS } from "./algorithms";

export default function App() {
  const timeoutRef = useRef(null);

  // to create a random array of the set size i.e. no. of bars
  // auto-generates an array of size 50 : initially when the site loads 
  const createRandomArray = (size) =>
    Array.from({ length: size }, () => {
      const val = Math.floor(Math.random() * 300) + 20;
      return Math.min(val, 360);
    });

  const [arraySize, setArraySize] = useState(50);
  const [array, setArray] = useState(() => createRandomArray(50));

  // to generate a random array of the set size i.e. no. of bars
  const generateArray = (size = arraySize) => {
    // Kill running timeout
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    // Stop animation engine
    setIsPlaying(false);

    // Resume animation engine
    setHasStarted(false);

    // Reset animation state
    setAnimationSteps([]);
    setCurrentStep(0);
    setActiveIndices([]);

    // Generate fresh array
    setArray(createRandomArray(size));
  };

  const [activeIndices, setActiveIndices] = useState([]);
  const [animationSteps, setAnimationSteps] = useState([]);
  const [currentStep, setCurrentStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const [speed, setSpeed] = useState(300);

  const [selectedAlgo, setSelectedAlgo] = useState("bubble");

  const isSorted = (arr) => {
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] < arr[i - 1]) return false;
    }
    return true;
  };


  useEffect(() => {
    if (!isPlaying) return;

    if (currentStep >= animationSteps.length) {
      setIsPlaying(false);
      setActiveIndices([]);
      return;
    }

    const step = animationSteps[currentStep];

    if (step.type === "compare") {
      setActiveIndices(step.indices);
    }

    if (step.type === "swap") {
      setArray((prev) => {
        const newArr = [...prev];
        const [i, j] = step.indices;
        [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
        return newArr;
      });

      setActiveIndices(step.indices);
    }

    timeoutRef.current = setTimeout(() => {
      setCurrentStep((prev) => prev + 1);
    }, speed);

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [currentStep, isPlaying, speed, animationSteps]);

  const play = () => {
    if (isPlaying) return;

    if (isSorted(array)) {
      console.log("Array already sorted");
      return;
    }

    if (hasStarted && currentStep < animationSteps.length) {
      setIsPlaying(true);
      return;
    }

    const algo = ALGORITHMS[selectedAlgo];
    const steps = algo.fn(array);

    setAnimationSteps(steps);
    setCurrentStep(0);
    setHasStarted(true);
    setIsPlaying(true);
  };
  
  const pause = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsPlaying(false);
  };

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <Navbar />

      <div className="p-4 grid grid-cols-1 lg:grid-cols-12 gap-4">
        <div className="lg:col-span-3 h-full">
          <ControlPanel
            arraySize={arraySize}
            setArraySize={setArraySize}
            generateArray={generateArray}
            play={play}
            pause={pause}
            speed={speed}
            setSpeed={setSpeed}
            selectedAlgo = {selectedAlgo}
            setSelectedAlgo = {setSelectedAlgo}
            isPlaying = {isPlaying}
          />
        </div>

        <div className="lg:col-span-6 h-full">
          <VisualizerCanvas 
            array={array} 
            activeIndices={activeIndices}
          />
        </div>

        <div className="lg:col-span-3 h-full">
          <InfoPanel 
            algorithm={ALGORITHMS[selectedAlgo]} 
          />
        </div>
      </div>
    </div>
  );
}
