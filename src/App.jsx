import Navbar from "./components/Navbar";
import ControlPanel from "./components/ControlPanel";
import VisualizerCanvas from "./components/VisualizerCanvas";
import InfoPanel from "./components/InfoPanel";
import { useState, useEffect, useRef } from "react";

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
    setArray(createRandomArray(size));
    setAnimationSteps([]);
    setCurrentStep(0);
    setIsPlaying(false);
  };


  const [animationSteps, setAnimationSteps] = useState([]);
  const [currentStep, setCurrentStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [speed, setSpeed] = useState(300);

  const runAnimation = () => {
    if (!isPlaying || currentStep >= animationSteps.length) {
      setIsPlaying(false);
      return;
    }

    const step = animationSteps[currentStep];

    if (step.type === "swap") {
      setArray((prev) => {
        const newArr = [...prev];
        const [i, j] = step.indices;
        [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
        return newArr;
      });
    }

    timeoutRef.current = setTimeout(() => {
      setCurrentStep((prev) => prev + 1);
    }, speed);
  };

  useEffect(() => {
    runAnimation();

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [currentStep, isPlaying, speed]);

  const testSteps = () => {
    setAnimationSteps([
      { type: "swap", indices: [0, 1] },
      { type: "swap", indices: [1, 2] },
      { type: "swap", indices: [2, 3] },
    ]);
    setCurrentStep(0);
    setIsPlaying(true);
  };

  const play = () => {
    if (!isPlaying) {
      testSteps();
    }
  };
  const pause = () => setIsPlaying(false);

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
