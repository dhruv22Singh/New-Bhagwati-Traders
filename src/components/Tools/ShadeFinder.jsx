import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Wand2, Home, Search, Copy, Check } from 'lucide-react';
import { shadeFinder, colourShades } from '../../data/products';

const fadeUp = { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0 } };

const rooms = Object.keys(shadeFinder);
const styles = ['Modern', 'Royal', 'Minimal', 'Luxury'];
const families = ['All', 'Blues', 'Oranges', 'Greens', 'Pinks', 'Neutrals', 'Yellows'];

export default function ShadeFinder() {
  const [room, setRoom] = useState('');
  const [style, setStyle] = useState('');
  const [palette, setPalette] = useState(null);
  const [search, setSearch] = useState('');
  const [family, setFamily] = useState('All');
  const [copied, setCopied] = useState(null);

  const findShade = () => {
    if (!room || !style) {
      alert('Please select a room and style.');
      return;
    }
    setPalette(shadeFinder[room][style]);
  };

  const copyHex = (hex, name) => {
    navigator.clipboard?.writeText(hex);
    setCopied(name || hex);
    setTimeout(() => setCopied(null), 1500);
  };

  // Filtered shades for search + family view
  const filteredShades = colourShades.filter((c) => {
    const matchSearch = !search || c.name.toLowerCase().includes(search.toLowerCase()) || c.hex.toLowerCase().includes(search.toLowerCase());
    const matchFamily = family === 'All' || c.family === family;
    return matchSearch && matchFamily;
  });

  return (
    <motion.div variants={fadeUp} className="bg-white rounded-3xl p-6 md:p-8 shadow-premium border border-gray-100">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 rounded-2xl bg-primary-50 text-primary-500 flex items-center justify-center">
          <Wand2 size={22} />
        </div>
        <div>
          <h3 className="text-xl font-bold font-montserrat text-dark">Shade Finder</h3>
          <p className="text-sm text-gray-500 font-poppins">Search shades, filter by family, or get palette recommendations</p>
        </div>
      </div>

      {/* Search bar */}
      <div className="relative mb-4">
        <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search Birla Opus shades by name or code..."
          className="w-full pl-10 pr-4 py-2.5 rounded-xl border-2 border-gray-100 focus:border-primary-500 focus:outline-none font-poppins text-sm"
        />
      </div>

      {/* Family filter */}
      <div className="flex flex-wrap gap-2 mb-5">
        {families.map((f) => (
          <button
            key={f}
            onClick={() => setFamily(f)}
            className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
              family === f
                ? 'bg-primary-500 text-white'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      {/* Shade cards grid */}
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-2 mb-6 max-h-44 overflow-y-auto p-1">
        {filteredShades.length === 0 ? (
          <div className="col-span-full text-center py-6 text-sm text-gray-400 font-poppins">
            No shades found for "{search}"
          </div>
        ) : (
          filteredShades.map((c) => (
            <motion.div
              key={c.name}
              whileHover={{ y: -3 }}
              onClick={() => copyHex(c.hex, c.name)}
              className="bg-gray-50 rounded-xl overflow-hidden cursor-pointer shadow-sm hover:shadow-premium transition-shadow"
              title={`Copy ${c.hex}`}
            >
              <div className="h-12 relative" style={{ background: c.hex }}>
                {copied === c.name && (
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <Check size={14} className="text-white" />
                  </div>
                )}
              </div>
              <div className="p-1.5">
                <div className="text-[10px] font-semibold font-montserrat text-dark truncate">{c.name}</div>
                <div className="text-[9px] text-gray-400 font-poppins uppercase flex items-center gap-0.5">
                  <Copy size={8} /> {c.hex}
                </div>
              </div>
            </motion.div>
          ))
        )}
      </div>

      {/* Divider */}
      <div className="border-t border-gray-100 pt-5">
        <div className="text-xs font-semibold text-gray-600 font-poppins mb-3 flex items-center gap-2">
          <Home size={14} className="text-primary-500" /> Or get a recommended palette
        </div>

        <div className="mb-4">
          <label className="text-xs font-semibold text-gray-600 font-poppins mb-2 block">Select Room</label>
          <div className="flex flex-wrap gap-2">
            {rooms.map((r) => (
              <button key={r} onClick={() => setRoom(r)}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                  room === r ? 'bg-primary-500 text-white shadow-glow' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}>
                {r}
              </button>
            ))}
          </div>
        </div>

        <div className="mb-6">
          <label className="text-xs font-semibold text-gray-600 font-poppins mb-2 block">Select Style</label>
          <div className="flex flex-wrap gap-2">
            {styles.map((s) => (
              <button key={s} onClick={() => setStyle(s)}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                  style === s ? 'bg-accent-500 text-white shadow-glow-accent' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}>
                {s}
              </button>
            ))}
          </div>
        </div>

        <button onClick={findShade} className="btn-primary w-full">Find My Shades</button>

        <AnimatePresence>
          {palette && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="mt-6"
            >
              <div className="flex items-center gap-2 mb-3">
                <Home size={16} className="text-primary-500" />
                <span className="text-sm font-semibold text-dark font-poppins">
                  Recommended for {room} — {style} style
                </span>
              </div>
              <div className="grid grid-cols-5 gap-2">
                {palette.map((hex, i) => (
                  <motion.div
                    key={hex + i}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.1 }}
                    onClick={() => copyHex(hex)}
                    className="aspect-square rounded-xl shadow-sm cursor-pointer hover:scale-110 transition-transform relative"
                    style={{ background: hex }}
                    title={`Copy ${hex}`}
                  >
                    {copied === hex && (
                      <div className="absolute inset-0 bg-black/40 rounded-xl flex items-center justify-center">
                        <Check size={16} className="text-white" />
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
              <p className="text-xs text-gray-400 mt-3 font-poppins">
                These shades work beautifully for {room.toLowerCase()} spaces with a {style.toLowerCase()} aesthetic. Click any colour to copy its code.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
