import Navbar from "./components/Navbar";
import ControlPanel from "./components/ControlPanel";
import VisualizerCanvas from "./components/VisualizerCanvas";
import InfoPanel from "./components/InfoPanel";

export default function App() {
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <Navbar />

      <div className="p-4 grid grid-cols-1 lg:grid-cols-12 gap-4">
        <div className="lg:col-span-3 h-full">
          <ControlPanel />
        </div>

        <div className="lg:col-span-6 h-full">
          <VisualizerCanvas />
        </div>

        <div className="lg:col-span-3 h-full">
          <InfoPanel />
        </div>
      </div>
    </div>
  );
}
