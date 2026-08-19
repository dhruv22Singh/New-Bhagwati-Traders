import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, Bot, User, Minus, Maximize2, Trash2 } from 'lucide-react';
import { chatbotResponses } from '../../data/products';

// Intent matching rules — order matters (more specific first)
const intents = [
  { keys: ['birla opus', 'birla', 'opus', 'brand', 'kaunsa paint', 'konsa paint'], response: 'birlaOpus' },
  { keys: ['interior', 'andar', 'bedroom', 'living room', 'interior paint'], response: 'interior' },
  { keys: ['exterior', 'bahar', 'outside', 'exterior paint'], response: 'exterior' },
  { keys: ['waterproof', 'water proof', 'leakage', 'leak', 'seepage', 'damp'], response: 'waterproofing' },
  { keys: ['primer', 'base coat'], response: 'primer' },
  { keys: ['putty', 'wall putty', 'smoothing'], response: 'putty' },
  { keys: ['texture', 'textured', '3d wall', '3d paint'], response: 'texture' },
  { keys: ['designer', 'design finish', 'premium finish', 'luxury finish'], response: 'designer' },
  { keys: ['pop', 'plaster of paris', 'cornice', 'border'], response: 'pop' },
  { keys: ['pvc', 'pvc panel', 'pvc ceiling'], response: 'pvc' },
  { keys: ['gypsum', 'gypsum board', 'gypsum ceiling'], response: 'gypsum' },
  { keys: ['false ceiling', 'ceiling', 'chhat', 'chhat ke', 'chhajja'], response: 'falseCeiling' },
  { keys: ['wall care', 'wallcare', 'crack', 'sealer', 'wall sealer'], response: 'wallCare' },
  { keys: ['colour suggest', 'color suggest', 'kaunsa colour', 'konsa colour', 'colour for', 'color for', 'suggest colour', 'recommend colour'], response: 'colourSuggestion' },
  { keys: ['available', 'stock', 'in stock', 'milega', 'available hai'], response: 'availability' },
  { keys: ['price', 'cost', 'rate', 'kitne ka', 'kitna', 'kimat', 'daam', 'charges'], response: 'price' },
  { keys: ['location', 'address', 'kahan', 'kahaan', 'shop address', 'where', 'map'], response: 'location' },
  { keys: ['contact', 'phone', 'number', 'call', 'mobile', 'reach'], response: 'contact' },
  { keys: ['timing', 'time', 'open', 'close', 'khula', 'band', 'hours', 'kab khulta'], response: 'timing' },
  { keys: ['coverage', 'kitna cover', 'cover karta', 'sq ft per litre'], response: 'coverage' },
  { keys: ['quantity', 'how much paint', 'kitna paint', 'kitni paint', 'paint needed', 'calculate paint'], response: 'quantity' },
  { keys: ['service', 'services', 'kya kya', 'help karte', 'support'], response: 'services' },
  { keys: ['offer', 'discount', 'deal', 'scheme', 'kam price'], response: 'offers' },
  { keys: ['warranty', 'guarantee', 'guaranty', 'warrantea'], response: 'warranty' },
  { keys: ['deliver', 'delivery', 'home delivery', 'ghar bhej'], response: 'delivery' },
  { keys: ['difference', 'farq', 'antar', 'compare'], response: 'difference' },
  { keys: ['best', 'recommend', 'achha paint', 'accha paint', 'top paint'], response: 'best' },
  { keys: ['pay', 'payment', 'upi', 'qr code', 'pay kaise'], response: 'payment' },
  { keys: ['hi', 'hello', 'namaste', 'namaskar', 'hey', 'start'], response: 'greeting' },
];

function getResponse(message) {
  const msg = message.toLowerCase();
  for (const intent of intents) {
    if (intent.keys.some((k) => msg.includes(k))) {
      return chatbotResponses[intent.response];
    }
  }
  return chatbotResponses.default;
}

const quickQuestions = [
  'Which paint is best?',
  'Interior paint price?',
  'False ceiling cost?',
  'Free delivery?',
  'Store timing?',
  'Contact details?',
];

const STORAGE_KEY = 'nbt_chat_history';

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [minimized, setMinimized] = useState(false);
  const [messages, setMessages] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) return JSON.parse(saved);
    } catch {}
    return [{ role: 'bot', text: chatbotResponses.greeting }];
  });
  const [input, setInput] = useState('');
  const [typing, setTyping] = useState(false);
  const scrollRef = useRef(null);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(messages.slice(-50)));
    } catch {}
  }, [messages]);

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, typing, open]);

  const send = (text) => {
    const msg = (text || input).trim();
    if (!msg) return;
    setMessages((prev) => [...prev, { role: 'user', text: msg }]);
    setInput('');
    setTyping(true);
    const reply = getResponse(msg);
    // Simulate typing delay proportional to reply length
    const delay = Math.min(1200, Math.max(600, reply.length * 8));
    setTimeout(() => {
      setTyping(false);
      setMessages((prev) => [...prev, { role: 'bot', text: reply }]);
    }, delay);
  };

  const clearHistory = () => {
    setMessages([{ role: 'bot', text: chatbotResponses.greeting }]);
    try { localStorage.removeItem(STORAGE_KEY); } catch {}
  };

  return (
    <>
      {/* Toggle button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => { setOpen(!open); setMinimized(false); }}
        className="fixed bottom-24 right-6 z-50 w-14 h-14 rounded-full bg-primary-500 text-white shadow-glow flex items-center justify-center"
        aria-label="Chat with assistant"
      >
        <AnimatePresence mode="wait">
          {open ? <X key="x" size={24} /> : <MessageCircle key="msg" size={24} />}
        </AnimatePresence>
        {!open && (
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-accent-500 rounded-full border-2 border-white animate-pulse" />
        )}
      </motion.button>

      {/* Chat window */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="fixed bottom-40 right-6 z-50 w-[calc(100vw-3rem)] sm:w-96 bg-white rounded-3xl shadow-premium flex flex-col overflow-hidden border border-gray-100"
            style={{ height: minimized ? 'auto' : 'min(500px, 70vh)' }}
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-primary-500 to-primary-700 p-4 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                <Bot size={20} className="text-white" />
              </div>
              <div className="flex-1">
                <div className="text-white font-bold font-montserrat text-sm">NBT AI Assistant</div>
                <div className="text-white/70 text-xs flex items-center gap-1">
                  <span className="w-2 h-2 bg-green-400 rounded-full" /> Online · Replies instantly
                </div>
              </div>
              <button
                onClick={clearHistory}
                title="Clear chat"
                className="text-white/70 hover:text-white p-1.5 rounded-lg hover:bg-white/10 transition-colors"
              >
                <Trash2 size={16} />
              </button>
              <button
                onClick={() => setMinimized(!minimized)}
                title={minimized ? 'Maximize' : 'Minimize'}
                className="text-white/70 hover:text-white p-1.5 rounded-lg hover:bg-white/10 transition-colors"
              >
                {minimized ? <Maximize2 size={16} /> : <Minus size={16} />}
              </button>
            </div>

            {!minimized && (
              <>
                {/* Messages */}
                <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-gray-50/50">
                  {messages.map((m, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`flex gap-2 ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      {m.role === 'bot' && (
                        <div className="w-8 h-8 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0">
                          <Bot size={16} className="text-primary-500" />
                        </div>
                      )}
                      <div className={`max-w-[75%] px-3 py-2 rounded-2xl text-sm font-poppins whitespace-pre-line ${
                        m.role === 'user'
                          ? 'bg-primary-500 text-white rounded-br-sm'
                          : 'bg-white text-dark shadow-sm rounded-bl-sm'
                      }`}>
                        {m.text}
                      </div>
                      {m.role === 'user' && (
                        <div className="w-8 h-8 rounded-full bg-accent-100 flex items-center justify-center flex-shrink-0">
                          <User size={16} className="text-accent-500" />
                        </div>
                      )}
                    </motion.div>
                  ))}

                  {/* Typing indicator */}
                  <AnimatePresence>
                    {typing && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        className="flex gap-2 justify-start"
                      >
                        <div className="w-8 h-8 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0">
                          <Bot size={16} className="text-primary-500" />
                        </div>
                        <div className="bg-white rounded-2xl rounded-bl-sm shadow-sm px-4 py-3 flex gap-1">
                          {[0, 1, 2].map((d) => (
                            <motion.span
                              key={d}
                              className="w-2 h-2 bg-primary-400 rounded-full"
                              animate={{ y: [0, -6, 0], opacity: [0.4, 1, 0.4] }}
                              transition={{ duration: 0.9, repeat: Infinity, delay: d * 0.15 }}
                            />
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                  <div ref={scrollRef} />
                </div>

                {/* Quick questions */}
                <div className="px-4 pb-2 flex flex-wrap gap-1.5">
                  {quickQuestions.map((q) => (
                    <button
                      key={q}
                      onClick={() => send(q)}
                      className="text-xs bg-primary-50 text-primary-600 px-3 py-1.5 rounded-full hover:bg-primary-100 transition-colors font-poppins"
                    >
                      {q}
                    </button>
                  ))}
                </div>

                {/* Input */}
                <div className="p-3 border-t border-gray-100 flex gap-2 bg-white">
                  <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && send()}
                    placeholder="Type your question..."
                    className="flex-1 px-4 py-2.5 rounded-2xl bg-gray-100 focus:outline-none focus:ring-2 focus:ring-primary-500 text-sm font-poppins"
                  />
                  <button
                    onClick={() => send()}
                    className="w-10 h-10 rounded-2xl bg-primary-500 text-white flex items-center justify-center hover:bg-primary-600 transition-colors"
                    aria-label="Send message"
                  >
                    <Send size={16} />
                  </button>
                </div>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
