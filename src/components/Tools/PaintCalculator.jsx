import { useState } from 'react';
import { motion } from 'framer-motion';
import { Calculator, RefreshCw, AlertCircle } from 'lucide-react';

const fadeUp = { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0 } };

export default function PaintCalculator() {
  const [height, setHeight] = useState('');
  const [width, setWidth] = useState('');
  const [walls, setWalls] = useState('1');
  const [doors, setDoors] = useState('0');
  const [windows, setWindows] = useState('0');
  const [result, setResult] = useState(null);
  const [error, setError] = useState('');

  const COVERAGE = 140; // sq ft per litre, 2 coats
  const PRICE_PER_LITRE = 350;
  const DOOR_AREA = 21; // 7ft x 3ft
  const WINDOW_AREA = 12; // 4ft x 3ft

  const calculate = () => {
    const h = parseFloat(height);
    const w = parseFloat(width);
    const numWalls = parseFloat(walls);
    const numDoors = parseFloat(doors) || 0;
    const numWindows = parseFloat(windows) || 0;

    if (!h || !w || !numWalls || h <= 0 || w <= 0 || numWalls <= 0) {
      setError('Please enter valid wall height, width, and number of walls.');
      setResult(null);
      return;
    }
    if (numDoors < 0 || numWindows < 0) {
      setError('Doors and windows cannot be negative.');
      setResult(null);
      return;
    }

    setError('');
    const grossArea = h * w * numWalls;
    const doorArea = numDoors * DOOR_AREA;
    const windowArea = numWindows * WINDOW_AREA;
    const netArea = Math.max(0, grossArea - doorArea - windowArea);
    const litres = Math.max(1, Math.ceil(netArea / COVERAGE));
    const cost = litres * PRICE_PER_LITRE;
    const coats = 2;
    const coveragePerCoat = netArea / (litres / coats);

    setResult({ grossArea, netArea, litres, cost, coveragePerCoat, coats });
  };

  const reset = () => {
    setHeight(''); setWidth(''); setWalls('1'); setDoors('0'); setWindows('0');
    setResult(null); setError('');
  };

  return (
    <motion.div variants={fadeUp} className="bg-white rounded-3xl p-6 md:p-8 shadow-premium border border-gray-100">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 rounded-2xl bg-primary-50 text-primary-500 flex items-center justify-center">
          <Calculator size={22} />
        </div>
        <div>
          <h3 className="text-xl font-bold font-montserrat text-dark">Paint Quantity Calculator</h3>
          <p className="text-sm text-gray-500 font-poppins">Estimate paint needed for your walls</p>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="text-xs font-semibold text-gray-600 font-poppins">Wall Height (ft) *</label>
          <input type="number" value={height} onChange={(e) => setHeight(e.target.value)}
            placeholder="e.g. 10" min="0" step="0.1"
            className="w-full mt-1 px-4 py-2.5 rounded-xl border-2 border-gray-100 focus:border-primary-500 focus:outline-none font-poppins text-sm" />
        </div>
        <div>
          <label className="text-xs font-semibold text-gray-600 font-poppins">Wall Width (ft) *</label>
          <input type="number" value={width} onChange={(e) => setWidth(e.target.value)}
            placeholder="e.g. 12" min="0" step="0.1"
            className="w-full mt-1 px-4 py-2.5 rounded-xl border-2 border-gray-100 focus:border-primary-500 focus:outline-none font-poppins text-sm" />
        </div>
        <div>
          <label className="text-xs font-semibold text-gray-600 font-poppins">Number of Walls *</label>
          <input type="number" value={walls} onChange={(e) => setWalls(e.target.value)} min="1"
            className="w-full mt-1 px-4 py-2.5 rounded-xl border-2 border-gray-100 focus:border-primary-500 focus:outline-none font-poppins text-sm" />
        </div>
        <div>
          <label className="text-xs font-semibold text-gray-600 font-poppins">Number of Doors</label>
          <input type="number" value={doors} onChange={(e) => setDoors(e.target.value)} min="0"
            placeholder="e.g. 1"
            className="w-full mt-1 px-4 py-2.5 rounded-xl border-2 border-gray-100 focus:border-primary-500 focus:outline-none font-poppins text-sm" />
        </div>
        <div>
          <label className="text-xs font-semibold text-gray-600 font-poppins">Number of Windows</label>
          <input type="number" value={windows} onChange={(e) => setWindows(e.target.value)} min="0"
            placeholder="e.g. 2"
            className="w-full mt-1 px-4 py-2.5 rounded-xl border-2 border-gray-100 focus:border-primary-500 focus:outline-none font-poppins text-sm" />
        </div>
      </div>

      {error && (
        <div className="mt-4 flex items-center gap-2 text-sm text-red-600 bg-red-50 px-4 py-2.5 rounded-xl font-poppins">
          <AlertCircle size={16} /> {error}
        </div>
      )}

      <div className="flex gap-3 mt-6">
        <button onClick={calculate} className="btn-primary flex-1">Calculate</button>
        <button onClick={reset} className="px-4 py-3 rounded-2xl bg-gray-100 text-gray-600 hover:bg-gray-200 transition-all" aria-label="Reset">
          <RefreshCw size={18} />
        </button>
      </div>

      {result && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-6 p-5 rounded-2xl bg-gradient-to-br from-primary-50 to-accent-50/30 border border-primary-100"
        >
          <h4 className="font-bold text-dark font-montserrat mb-3">Estimated Results</h4>
          <div className="grid grid-cols-2 gap-3 text-sm">
            <div className="bg-white p-3 rounded-xl">
              <div className="text-gray-400 text-xs">Total Wall Area</div>
              <div className="font-bold text-dark">{result.grossArea.toFixed(1)} sq ft</div>
            </div>
            <div className="bg-white p-3 rounded-xl">
              <div className="text-gray-400 text-xs">Paintable Area</div>
              <div className="font-bold text-dark">{result.netArea.toFixed(1)} sq ft</div>
            </div>
            <div className="bg-white p-3 rounded-xl">
              <div className="text-gray-400 text-xs">Coverage ({result.coats} coats)</div>
              <div className="font-bold text-dark">{result.coveragePerCoat.toFixed(0)} sq ft/litre</div>
            </div>
            <div className="bg-white p-3 rounded-xl">
              <div className="text-gray-400 text-xs">Paint Required</div>
              <div className="font-bold text-primary-500">{result.litres} litres</div>
            </div>
            <div className="bg-white p-3 rounded-xl col-span-2">
              <div className="text-gray-400 text-xs">Estimated Cost</div>
              <div className="font-bold text-accent-500 text-lg">₹{result.cost.toLocaleString('en-IN')}</div>
            </div>
          </div>
          <p className="text-xs text-gray-400 mt-3 font-poppins">*Estimates only. Actual coverage varies with surface & application. Price based on avg ₹{PRICE_PER_LITRE}/litre. Buy extra 5-10% for touch-ups.</p>
        </motion.div>
      )}
    </motion.div>
  );
}
