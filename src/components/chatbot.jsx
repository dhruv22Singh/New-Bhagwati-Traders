import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Bot, User, Phone, Sparkles, ChevronRight } from 'lucide-react';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: 'bot', text: 'नमस्ते! 🙏 न्यू भगवती ट्रेडर्स में आपका स्वागत है। मैं आपका AI असिस्टेंट हूँ। नीचे दिए गए बटनों में से अपना सवाल चुनें!' }
  ]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef(null);

  // 6 Smart Quick Questions
  const quickQuestions = [
    { id: 1, label: "🏠 Best Interior Colors", query: "Best aesthetic colours for interior" },
    { id: 2, label: "🏢 Best Exterior Colors", query: "Best colour for exterior" },
    { id: 3, label: "💰 Primer < ₹2000", query: "Best primer under 2000" },
    { id: 4, label: "👤 Owner Details", query: "Owner details" },
    { id: 5, label: "📍 Shop Address", query: "Shop address" },
    { id: 6, label: "🏗️ False Ceiling Price", query: "False Ceiling price" }
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const getBotResponse = (userMsg) => {
    const msg = userMsg.toLowerCase();

    if (msg.includes('interior')) return 'Trend में अभी "Warm Neutrals" (जैसे Cream, Off-white, और Pastel Shades) चल रहे हैं। ये घर को बड़ा और प्रीमियम लुक देते हैं। Birla Opus की प्रीमियम इंटीरियर रेंज इसके लिए बेस्ट है!';
    
    if (msg.includes('exterior')) return 'Exterior के लिए ' + '"WeatherShield" रेंज बेस्ट है। ट्रेंडिंग कलर्स में "Light Grey", "Earthy Sand", और "Classic White" हैं, जो धूप में चमकते भी हैं और घर को ठंडा भी रखते हैं।';
    
    if (msg.includes('primer')) return '2000 के अंदर Birla Opus का "Water-based Exterior/Interior Sealer" सबसे बेस्ट है। यह दीवार की पकड़ मजबूत करता है और पेंट को नमी (dampness) से बचाता है।';
    
    if (msg.includes('owner')) return 'न्यू भगवती ट्रेडर्स के मालिक अनुभवी हैं और 8+ सालों से पेंट्स और कंस्ट्रक्शन मटेरियल के क्षेत्र में अपनी क्वालिटी सर्विस दे रहे हैं। हमारा मोटो है - "क्वालिटी और विश्वास"!';
    
    if (msg.includes('address') || msg.includes('shop')) return '📍 हमारी दुकान: न्यू भगवती ट्रेडर्स, बिरला ओपस ऑथराइज्ड डीलर।\n🗺️ पता: [Pawai ,Amarpur, Road (Banka) SH 15, Shahkund, Pawai, Bihar 813101]\n📍 नियर: [opp. Bhagwati library]\nbihar pawai में बेस्ट डील्स देते हैं!';
    
    if (msg.includes('ceiling') || msg.includes('price')) return `False Ceiling के रेट डिज़ाइन और मटेरियल पर निर्भर करते हैं:\n\n1. POP (Murga Jali) – ₹120 - ₹260\n2. Gypsum Board – ₹130 - ₹230\n3. PVC Panel – ₹100 - ₹170\n4. Fluted Panel – ₹130 - ₹190\n5. WPC (Louver) – ₹240 - ₹350\n6. 2x2 Tiles – ₹120\n7. POP Design – ₹150\n8. POP Wall Punning – ₹80 - ₹180\n\nअगर आप बल्क (Bulk) में सामान लेते हैं तो आपके लिए प्राइस कम हो जाएगा। अधिक जानकारी के लिए कॉल करें।`;
  };

  const handleSend = (query) => {
    const userMessage = { sender: 'user', text: query };
    setMessages((prev) => [...prev, userMessage]);
    
    setTimeout(() => {
      const botReply = getBotResponse(query);
      setMessages((prev) => [...prev, { sender: 'bot', text: botReply }]);
    }, 500);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[9999] flex flex-col items-end">
      {isOpen && (
        <div className="w-[350px] h-[550px] bg-neutral-950/95 backdrop-blur-2xl border border-amber-500/30 rounded-3xl shadow-2xl flex flex-col overflow-hidden mb-4 animate-in slide-in-from-bottom-10">
          
          <div className="p-4 bg-gradient-to-b from-neutral-900 to-neutral-950 border-b border-amber-500/20 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-full bg-amber-500/20 border border-amber-400 flex items-center justify-center text-amber-400"><Bot /></div>
              <div>
                <h3 className="text-sm font-bold text-white">NBT AI Assistant</h3>
                <p className="text-[9px] text-amber-400 uppercase tracking-widest">Active & Online</p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)}><X className="w-5 h-5 text-neutral-400" /></button>
          </div>

          <div className="flex-1 p-4 overflow-y-auto space-y-4">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`p-3 rounded-2xl max-w-[85%] text-xs leading-5 ${msg.sender === 'user' ? 'bg-amber-500 text-black rounded-tr-none' : 'bg-neutral-900 text-white rounded-tl-none border border-neutral-700'}`}>
                  {msg.text}
                </div>
              </div>
            ))}
            
            {/* Quick Question Buttons */}
            <div className="pt-2 flex flex-col gap-2">
              <p className="text-[10px] text-neutral-500 uppercase mb-1">Select a quick question:</p>
              <div className="grid grid-cols-2 gap-2">
                {quickQuestions.map((q) => (
                  <button 
                    key={q.id}
                    onClick={() => handleSend(q.query)}
                    className="p-2 bg-neutral-900 hover:bg-amber-500 hover:text-black border border-neutral-700 rounded-lg text-[10px] text-left transition-all font-medium flex items-center justify-between"
                  >
                    {q.label} <ChevronRight className="w-3 h-3" />
                  </button>
                ))}
              </div>
            </div>
            <div ref={messagesEndRef} />
          </div>

          <div className="p-3 bg-neutral-900 border-t border-neutral-800 text-center">
            <a href="tel:8271805067" className="text-xs text-amber-400 font-bold hover:underline">📞 Click to Call 8271805067</a>
          </div>
        </div>
      )}

      <button onClick={() => setIsOpen(!isOpen)} className="p-4 rounded-full bg-amber-500 text-black shadow-lg shadow-amber-500/30 hover:scale-110 transition-transform">
        {isOpen ? <X /> : <MessageSquare />}
      </button>
    </div>
  );
};

export default Chatbot;