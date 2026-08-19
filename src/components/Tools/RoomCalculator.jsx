import { useState } from 'react';
import { motion } from 'framer-motion';
import { Ruler, RefreshCw, AlertCircle } from 'lucide-react';

const fadeUp = { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0 } };

export default function RoomCalculator() {
  const [length, setLength] = useState('');
  const [width, setWidth] = useState('');
  const [height, setHeight] = useState('');
  const [result, setResult] = useState(null);
  const [error, setError] = useState('');

  const COVERAGE = 140;
  const PRICE = 350;

  const calculate = () => {
    const l = parseFloat(length);
    const w = parseFloat(width);
    const h = parseFloat(height);
    if (!l || !w || !h || l <= 0 || w <= 0 || h <= 0) {
      setError('Please enter valid length, width, and height.');
      setResult(null);
      return;
    }
    setError('');
    const wallArea = 2 * (l + w) * h;
    const ceilingArea = l * w;
    const totalArea = wallArea + ceilingArea;
    const litres = Math.max(1, Math.ceil(totalArea / COVERAGE));
    const cost = litres * PRICE;
    setResult({ wallArea, ceilingArea, totalArea, litres, cost });
  };

  const reset = () => { setLength(''); setWidth(''); setHeight(''); setResult(null); setError(''); };

  return (
    <motion.div variants={fadeUp} className="bg-white rounded-3xl p-6 md:p-8 shadow-premium border border-gray-100">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 rounded-2xl bg-accent-50 text-accent-500 flex items-center justify-center">
          <Ruler size={22} />
        </div>
        <div>
          <h3 className="text-xl font-bold font-montserrat text-dark">Room Area Calculator</h3>
          <p className="text-sm text-gray-500 font-poppins">Calculate total paintable area of a room</p>
        </div>
      </div>

      <div className="grid sm:grid-cols-3 gap-4">
        <div>
          <label className="text-xs font-semibold text-gray-600 font-poppins">Length (ft) *</label>
          <input type="number" value={length} onChange={(e) => setLength(e.target.value)} placeholder="e.g. 12" min="0" step="0.1"
            className="w-full mt-1 px-4 py-2.5 rounded-xl border-2 border-gray-100 focus:border-accent-500 focus:outline-none font-poppins text-sm" />
        </div>
        <div>
          <label className="text-xs font-semibold text-gray-600 font-poppins">Width (ft) *</label>
          <input type="number" value={width} onChange={(e) => setWidth(e.target.value)} placeholder="e.g. 10" min="0" step="0.1"
            className="w-full mt-1 px-4 py-2.5 rounded-xl border-2 border-gray-100 focus:border-accent-500 focus:outline-none font-poppins text-sm" />
        </div>
        <div>
          <label className="text-xs font-semibold text-gray-600 font-poppins">Height (ft) *</label>
          <input type="number" value={height} onChange={(e) => setHeight(e.target.value)} placeholder="e.g. 10" min="0" step="0.1"
            className="w-full mt-1 px-4 py-2.5 rounded-xl border-2 border-gray-100 focus:border-accent-500 focus:outline-none font-poppins text-sm" />
        </div>
      </div>

      {error && (
        <div className="mt-4 flex items-center gap-2 text-sm text-red-600 bg-red-50 px-4 py-2.5 rounded-xl font-poppins">
          <AlertCircle size={16} /> {error}
        </div>
      )}

      <div className="flex gap-3 mt-6">
        <button onClick={calculate} className="btn-accent flex-1">Calculate</button>
        <button onClick={reset} className="px-4 py-3 rounded-2xl bg-gray-100 text-gray-600 hover:bg-gray-200 transition-all" aria-label="Reset">
          <RefreshCw size={18} />
        </button>
      </div>

      {result && (
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
          className="mt-6 p-5 rounded-2xl bg-gradient-to-br from-accent-50 to-primary-50/30 border border-accent-100">
          <h4 className="font-bold text-dark font-montserrat mb-3">Room Calculation</h4>
          <div className="grid grid-cols-2 gap-3 text-sm">
            <div className="bg-white p-3 rounded-xl">
              <div className="text-gray-400 text-xs">Wall Area</div>
              <div className="font-bold text-dark">{result.wallArea.toFixed(1)} sq ft</div>
            </div>
            <div className="bg-white p-3 rounded-xl">
              <div className="text-gray-400 text-xs">Ceiling Area</div>
              <div className="font-bold text-dark">{result.ceilingArea.toFixed(1)} sq ft</div>
            </div>
            <div className="bg-white p-3 rounded-xl">
              <div className="text-gray-400 text-xs">Total Area</div>
              <div className="font-bold text-primary-500">{result.totalArea.toFixed(1)} sq ft</div>
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
          <p className="text-xs text-gray-400 mt-3 font-poppins">*Estimates only. Coverage: {COVERAGE} sq ft/litre (2 coats). Price: ₹{PRICE}/litre avg.</p>
        </motion.div>
      )}
    </motion.div>
  );
}
