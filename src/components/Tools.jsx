import React, { useState, useMemo } from 'react';

export default function Tools() {
  // Custom Paint Calculator States
  const [length, setLength] = useState('');
  const [width, setWidth] = useState('');
  const [height, setHeight] = useState('10');
  const [doors, setDoors] = useState(1);
  const [windows, setWindows] = useState(2);
  const [coats, setCoats] = useState(2);
  const [paintType, setPaintType] = useState('interior');

  // Exact Single Room Paint Calculation Logic (Memoized)
  const netArea = useMemo(() => {
    const l = Math.max(0, parseFloat(length) || 0);
    const w = Math.max(0, parseFloat(width) || 0);
    const h = Math.max(0, parseFloat(height) || 0);
    const d = Math.max(0, parseInt(doors) || 0);
    const win = Math.max(0, parseInt(windows) || 0);

    if (l === 0 && w === 0) return 0;

    // Calculation includes Ceiling Area (l * w) + 4 Walls Area
    const grossWallArea = (2 * (l + w) * h) + (l * w);
    const deductions = (d * 21) + (win * 12);
    return Math.max(0, grossWallArea - deductions);
  }, [length, width, height, doors, windows]);

  const estimatedQty = useMemo(() => {
    if (netArea === 0) return '0';

    let coveragePerLitre = 130;
    if (paintType === 'exterior') coveragePerLitre = 110;
    if (paintType === 'primer') coveragePerLitre = 140;
    if (paintType === 'putty') coveragePerLitre = 15;

    return ((netArea * coats) / coveragePerLitre).toFixed(1);
  }, [netArea, paintType, coats]);

  // Bucket Packs Suggestion Breakdown (Memoized)
  const bucketBreakup = useMemo(() => {
    let req = Math.ceil(parseFloat(estimatedQty));
    if (req <= 0 || isNaN(req)) return [];

    let buckets = [];
    const sizes = [20, 10, 4, 1];

    sizes.forEach((size) => {
      const count = Math.floor(req / size);
      if (count > 0) {
        buckets.push(`${count} x ${size}${paintType === 'putty' ? 'Kg' : 'L'}`);
        req %= size;
      }
    });

    return buckets;
  }, [estimatedQty, paintType]);

  return (
    <section id="tools" className="py-20 bg-neutral-950 text-white relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center space-y-3 mb-12">
          <span className="text-amber-400 text-xs md:text-sm tracking-widest uppercase font-semibold flex items-center justify-center gap-2">
            ✦ Smart Painting Tools
          </span>
          <h2 className="text-3xl md:text-5xl font-light">
            स्मार्ट पेंटिंग <span className="font-semibold text-amber-400">टूल</span>
          </h2>
          <p className="text-neutral-400 max-w-xl mx-auto text-sm md:text-base">
            अपने कमरे की नाप के अनुसार पेंट की सटीक मात्रा जानें।
          </p>
        </div>

        {/* Tool Content Container */}
        <div className="max-w-4xl mx-auto bg-neutral-900/60 border border-white/10 rounded-3xl p-6 md:p-10 backdrop-blur-2xl shadow-2xl relative overflow-hidden">
          
          <div className="space-y-8 animate-fadeIn">
            <div className="border-b border-white/10 pb-6">
              <h3 className="text-xl font-semibold text-white">Custom Wall Calculator </h3>
              <p className="text-xs text-neutral-400">कमरे की नाप डालें और दरवाज़े-खिड़की माइनस करके सही मात्रा जानें</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              
              {/* Inputs Section */}
              <div className="space-y-5">
                <div>
                  <label htmlFor="paint-type" className="block text-xs font-medium text-amber-300 mb-2">पेंट का प्रकार (Paint Type)</label>
                  <select
                    id="paint-type"
                    value={paintType}
                    onChange={(e) => setPaintType(e.target.value)}
                    className="w-full bg-neutral-800/90 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-amber-400 transition-all text-sm"
                  >
                    <option value="interior">Interior Wall Paint (कमरे के अंदर)</option>
                    <option value="exterior">Exterior Weather Proof (बाहरी दीवार)</option>
                    <option value="primer">Primer Coat (प्राइमर)</option>
                    <option value="putty">Wall Putty (वाल पुट्टी)</option>
                  </select>
                </div>

                <div className="grid grid-cols-3 gap-3">
                  <div>
                    <label htmlFor="length" className="block text-xs text-neutral-300 mb-1">लंबाई (Feet)</label>
                    <input
                      id="length"
                      type="number"
                      min="0"
                      placeholder="e.g. 12"
                      value={length}
                      onChange={(e) => setLength(e.target.value)}
                      className="w-full bg-neutral-800/80 border border-white/10 rounded-xl px-3 py-2 text-white text-sm focus:border-amber-400 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label htmlFor="width" className="block text-xs text-neutral-300 mb-1">चौड़ाई (Feet)</label>
                    <input
                      id="width"
                      type="number"
                      min="0"
                      placeholder="e.g. 10"
                      value={width}
                      onChange={(e) => setWidth(e.target.value)}
                      className="w-full bg-neutral-800/80 border border-white/10 rounded-xl px-3 py-2 text-white text-sm focus:border-amber-400 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label htmlFor="height" className="block text-xs text-neutral-300 mb-1">ऊँचाई (Feet)</label>
                    <input
                      id="height"
                      type="number"
                      min="0"
                      placeholder="10"
                      value={height}
                      onChange={(e) => setHeight(e.target.value)}
                      className="w-full bg-neutral-800/80 border border-white/10 rounded-xl px-3 py-2 text-white text-sm focus:border-amber-400 focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="doors" className="block text-xs text-neutral-300 mb-1">दरवाजे (Doors)</label>
                    <input
                      id="doors"
                      type="number"
                      min="0"
                      value={doors}
                      onChange={(e) => setDoors(e.target.value)}
                      className="w-full bg-neutral-800/80 border border-white/10 rounded-xl px-3 py-2 text-white text-sm focus:border-amber-400 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label htmlFor="windows" className="block text-xs text-neutral-300 mb-1">खिड़कियाँ (Windows)</label>
                    <input
                      id="windows"
                      type="number"
                      min="0"
                      value={windows}
                      onChange={(e) => setWindows(e.target.value)}
                      className="w-full bg-neutral-800/80 border border-white/10 rounded-xl px-3 py-2 text-white text-sm focus:border-amber-400 focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-amber-300 mb-2">कोट की संख्या (Number of Coats)</label>
                  <div className="flex gap-3">
                    {[1, 2, 3].map((num) => (
                      <button
                        key={num}
                        type="button"
                        onClick={() => setCoats(num)}
                        className={`flex-1 py-2 rounded-xl text-xs font-medium border transition-all ${
                          coats === num
                            ? 'bg-amber-400/20 border-amber-400 text-amber-300 font-semibold'
                            : 'bg-neutral-800 border-white/5 text-neutral-400 hover:bg-neutral-700'
                        }`}
                      >
                        {num} {num === 1 ? 'Coat' : 'Coats'}
                      </button>
                    ))}
                  </div>
                </div>

              </div>

              {/* Output Section */}
              <div className="bg-gradient-to-br from-amber-500/10 via-neutral-900 to-neutral-900 p-6 rounded-2xl border border-amber-500/20 flex flex-col justify-between space-y-6">
                
                <div className="space-y-4" aria-live="polite">
                  <div className="flex items-center justify-between border-b border-white/10 pb-3">
                    <span className="text-xs text-neutral-400">Net Wall Area (शुद्ध क्षेत्रफल):</span>
                    <span className="text-sm font-mono text-amber-300">{netArea} Sq. Ft.</span>
                  </div>

                  <div className="text-center pt-2">
                    <span className="text-xs text-neutral-400 uppercase tracking-widest block mb-1">
                      कुल पेंट की आवश्यकता
                    </span>
                    <div className="text-4xl md:text-5xl font-bold text-amber-400">
                      {estimatedQty} <span className="text-xl font-normal text-white">{paintType === 'putty' ? 'Kg' : 'Litre'}</span>
                    </div>
                  </div>
                </div>

                {bucketBreakup.length > 0 && (
                  <div className="bg-neutral-950/80 border border-white/10 p-4 rounded-xl space-y-2">
                    <span className="text-[11px] text-amber-400 font-semibold uppercase tracking-wider block">
                      📦 बाजार से खरीदें (Suggested Packs):
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {bucketBreakup.map((pack, i) => (
                        <span key={i} className="bg-neutral-800 text-white text-xs px-3 py-1 rounded-full border border-white/10 font-mono">
                          {pack}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                <p className="text-[11px] text-neutral-500 text-center italic">
                  *यह गणना बिरला ओपस के मानक कवरेज एरिया पर आधारित है। यह दीवार की (Condition) नई और पुरानी स्थिति के हिसाब से ऊपर या नीचे (कम या ज्यादा) हो सकती है।
                </p>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}