import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Upload, Image as ImageIcon, Sparkles, Eye, Repeat2, X } from 'lucide-react';
import { colourShades } from '../../data/products';

const fadeUp = { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0 } };

export default function ColourVisualizer() {
  const [image, setImage] = useState(null);
  const [selectedColour, setSelectedColour] = useState(colourShades[0].hex);
  const [opacity, setOpacity] = useState(50);
  const [showCompare, setShowCompare] = useState(false);
  const fileRef = useRef(null);

  const handleUpload = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        alert('Please upload an image under 5MB.');
        return;
      }
      const reader = new FileReader();
      reader.onload = (ev) => setImage(ev.target.result);
      reader.readAsDataURL(file);
    }
  };

  const selectedName = colourShades.find((c) => c.hex === selectedColour)?.name || selectedColour;

  return (
    <motion.div variants={fadeUp} className="bg-white rounded-3xl p-6 md:p-8 shadow-premium border border-gray-100">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 rounded-2xl bg-accent-50 text-accent-500 flex items-center justify-center">
          <Sparkles size={22} />
        </div>
        <div>
          <h3 className="text-xl font-bold font-montserrat text-dark">AI Paint Colour Visualizer</h3>
          <p className="text-sm text-gray-500 font-poppins">Upload a wall photo & preview paint colours</p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Upload / Preview */}
        <div>
          <div
            onClick={() => !image && fileRef.current?.click()}
            className="relative aspect-[4/3] rounded-2xl border-2 border-dashed border-gray-200 hover:border-primary-500 transition-colors overflow-hidden bg-gray-50 flex items-center justify-center"
            style={{ cursor: image ? 'default' : 'pointer' }}
          >
            {image ? (
              <>
                <img src={image} alt="Wall preview"loading="lazy" className="absolute inset-0 w-full h-full object-cover" />
                <div
                  className="absolute inset-0 transition-all duration-300"
                  style={{ background: selectedColour, opacity: opacity / 100, mixBlendMode: 'multiply' }}
                />
                <div className="absolute bottom-2 left-2 bg-black/60 text-white text-xs px-2 py-1 rounded-full font-poppins">
                  {selectedName} · {opacity}%
                </div>
                <div className="absolute top-2 right-2 flex gap-1.5">
                  <button
                    onClick={() => setShowCompare(!showCompare)}
                    title="Toggle before/after"
                    className="w-8 h-8 rounded-full bg-white/80 backdrop-blur-md text-dark flex items-center justify-center hover:bg-white transition-colors"
                  >
                    <Eye size={14} />
                  </button>
                  <button
                    onClick={() => { setImage(null); setShowCompare(false); }}
                    title="Remove image"
                    className="w-8 h-8 rounded-full bg-white/80 backdrop-blur-md text-red-500 flex items-center justify-center hover:bg-white transition-colors"
                  >
                    <X size={14} />
                  </button>
                </div>
                {showCompare && (
                  <div className="absolute top-2 left-2 right-12">
                    <img src={image} alt="Original"loading="lazy" className="w-1/2 h-20 object-cover rounded-lg border-2 border-white shadow-lg" />
                  </div>
                )}
              </>
            ) : (
              <div className="text-center p-6" onClick={() => fileRef.current?.click()}>
                <Upload size={36} className="mx-auto text-gray-300 mb-3" />
                <p className="text-sm text-gray-500 font-poppins">Click to upload a photo of your wall</p>
                <p className="text-xs text-gray-400 mt-1">JPG, PNG up to 5MB</p>
              </div>
            )}
          </div>
          <input ref={fileRef} type="file" accept="image/*" onChange={handleUpload} className="hidden" />

          {image && (
            <div className="mt-3 flex gap-2">
              <button
                onClick={() => fileRef.current?.click()}
                className="flex-1 flex items-center justify-center gap-2 text-sm font-semibold text-primary-500 bg-primary-50 hover:bg-primary-100 py-2.5 rounded-xl transition-colors font-poppins"
              >
                <Repeat2 size={16} /> Change Photo
              </button>
              <button
                onClick={() => setShowCompare(!showCompare)}
                className="flex-1 flex items-center justify-center gap-2 text-sm font-semibold text-accent-500 bg-accent-50 hover:bg-accent-100 py-2.5 rounded-xl transition-colors font-poppins"
              >
                <Eye size={16} /> {showCompare ? 'Hide' : 'Compare'} Original
              </button>
            </div>
          )}
        </div>

        {/* Controls */}
        <div>
          <div className="text-xs font-semibold text-gray-600 font-poppins mb-2">Choose a Colour</div>
          <div className="grid grid-cols-6 gap-2 max-h-32 overflow-y-auto p-1">
            {colourShades.map((c) => (
              <button
                key={c.name}
                onClick={() => setSelectedColour(c.hex)}
                title={c.name}
                className={`aspect-square rounded-lg transition-all ${
                  selectedColour === c.hex ? 'ring-2 ring-offset-2 ring-primary-500 scale-110' : 'hover:scale-105'
                }`}
                style={{ background: c.hex }}
              />
            ))}
          </div>

          <div className="mt-5">
            <div className="flex justify-between text-xs font-semibold text-gray-600 font-poppins mb-2">
              <span>Colour Intensity</span>
              <span>{opacity}%</span>
            </div>
            <input
              type="range" min="10" max="90" value={opacity}
              onChange={(e) => setOpacity(parseInt(e.target.value))}
              className="w-full accent-primary-500"
            />
          </div>

          <div className="mt-5 p-4 rounded-2xl bg-gradient-to-br from-primary-50 to-accent-50/30">
            <div className="flex items-center gap-2">
              <ImageIcon size={16} className="text-primary-500" />
              <span className="text-sm font-semibold text-dark">Selected: {selectedName}</span>
            </div>
            <p className="text-xs text-gray-500 mt-1 font-poppins">
              This is a colour overlay simulation. For precise colour matching, visit our showroom for a free consultation.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
