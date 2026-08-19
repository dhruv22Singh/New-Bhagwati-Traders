import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Tag, TrendingUp, Star, ChevronDown, Award, Users, Package, Clock,
} from 'lucide-react';

const fadeUp = { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0 } };

const stats = [
  { icon: Users, value: 1000, suffix: '+', label: 'Happy Customers' },
  { icon: Package, value: 2000, suffix: '+', label: 'Colour Shades' },
  { icon: Award, value: 15, suffix: '+', label: 'Years Experience' },
  { icon: Clock, value: 100, suffix: '%', label: 'Genuine Products' },
];

const offers = [
  { title: 'Monsoon Sale', desc: 'Up to 20% off on waterproofing products', tag: 'Limited Time', color: 'primary' },
  { title: 'Bulk Order Discount', desc: 'Special rates for contractors & builders', tag: 'Ongoing', color: 'accent' },
  { title: 'Free Delivery', desc: 'On all orders above ₹40,000', tag: 'Popular', color: 'primary' },
];

const trendingColours = [
  { name: 'Royal Azure', hex: '#0057D9' },
  { name: 'Sunset Orange', hex: '#FF6B00' },
  { name: 'Forest Green', hex: '#228B22' },
  { name: 'Golden Hour', hex: '#D4AF37' },
  { name: 'Rose Blush', hex: '#FFB6C1' },
  { name: 'Charcoal', hex: '#36454F' },
];

const brands = ['Birla Opus', 'Birla White', 'Dr. Fixit', 'Gypstech', 'USG Boral', 'Saint-Gobain'];

const faqs = [
  {
    q: 'Are your paints genuine Birla Opus products?',
    a: 'Yes, 100%. We are an authorized Birla Opus dealer. Every product comes with manufacturer warranty and original packaging.',
  },
  {
    q: 'Do you offer free home delivery?',
    a: 'Yes! Free home delivery on all orders above ₹40,000 within Pawai, Shahkund, Amarpur and nearby areas. Smaller orders have nominal delivery charges.',
  },
  {
    q: 'Can you help me choose the right colour?',
    a: 'Absolutely. We offer free colour consultation with our experts. We can also match any shade you like using our shade matching service.',
  },
  {
    q: 'What false ceiling materials do you stock?',
    a: 'We stock everything: Gypsum boards, PVC panels, ceiling channels, metal frames, POP materials, and all ceiling accessories — all under one roof.',
  },
  {
    q: 'Do you support contractors and bulk orders?',
    a: 'Yes, we have special pricing and dedicated support for painting contractors, builders, and bulk orders. Contact us for a custom quote.',
  },
  {
    q: 'Can you visit my site for assessment?',
    a: 'Yes, we offer free site visits to assess your project requirements and recommend the best products and quantities.',
  },
];

function StatCounter({ icon: Icon, value, suffix, label }) {
  const [count, setCount] = useState(0);
  return (
    <motion.div
      onViewportEnter={() => {
        let start = 0;
        const duration = 1500;
        const step = value / (duration / 16);
        const timer = setInterval(() => {
          start += step;
          if (start >= value) { setCount(value); clearInterval(timer); }
          else setCount(Math.floor(start));
        }, 16);
      }}
      viewport={{ once: true }}
      variants={fadeUp}
      className="text-center"
    >
      <div className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center mx-auto mb-3">
        <Icon size={24} className="text-accent-400" />
      </div>
      <div className="text-3xl md:text-4xl font-black text-white font-montserrat">
        {count}{suffix}
      </div>
      <div className="text-sm text-white/60 font-poppins mt-1">{label}</div>
    </motion.div>
  );
}

function FAQItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <motion.div variants={fadeUp} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
      <button onClick={() => setOpen(!open)} className="w-full p-5 flex items-center justify-between text-left">
        <span className="font-semibold font-poppins text-dark text-sm md:text-base">{q}</span>
        <ChevronDown size={18} className={`text-primary-500 transition-transform flex-shrink-0 ${open ? 'rotate-180' : ''}`} />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <p className="px-5 pb-5 text-sm text-gray-600 font-poppins leading-relaxed">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function PremiumSections() {
  return (
    <>
      {/* Stats banner */}
      <section className="py-16 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #001d4a 0%, #003a94 100%)' }}>
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: 'radial-gradient(circle at 25% 25%, white 1px, transparent 1px)',
          backgroundSize: '30px 30px',
        }} />
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {stats.map((s) => (
              <StatCounter key={s.label} {...s} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Offers */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
            className="text-center mb-12"
          >
            <motion.div variants={fadeUp}>
              <span className="text-accent-500 font-semibold text-sm tracking-widest uppercase font-poppins flex items-center justify-center gap-2">
                <Tag size={16} /> Latest Offers
              </span>
              <h2 className="section-heading mt-2">Special Offers & Deals</h2>
            </motion.div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
            className="grid md:grid-cols-3 gap-6"
          >
            {offers.map((offer) => (
              <motion.div
                key={offer.title}
                variants={fadeUp}
                whileHover={{ y: -8 }}
                className="relative p-6 rounded-3xl overflow-hidden group cursor-pointer"
                style={{
                  background: offer.color === 'primary'
                    ? 'linear-gradient(135deg, #0057D9, #003a94)'
                    : 'linear-gradient(135deg, #FF6B00, #d95b00)',
                }}
              >
                <div className="absolute -top-8 -right-8 w-32 h-32 rounded-full bg-white/10 blur-2xl group-hover:bg-white/20 transition-all" />
                <span className="inline-block bg-white/20 backdrop-blur-md text-white text-xs font-bold px-3 py-1 rounded-full mb-4">
                  {offer.tag}
                </span>
                <h3 className="text-2xl font-bold font-montserrat text-white mb-2">{offer.title}</h3>
                <p className="text-white/80 font-poppins text-sm">{offer.desc}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Trending colours */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
            className="mt-16"
          >
            <motion.div variants={fadeUp} className="flex items-center gap-2 mb-6">
              <TrendingUp size={20} className="text-accent-500" />
              <h3 className="text-2xl font-bold font-montserrat text-dark">Trending Colours This Season</h3>
            </motion.div>
            <motion.div
              variants={{ visible: { transition: { staggerChildren: 0.05 } } }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4"
            >
              {trendingColours.map((c) => (
                <motion.div
                  key={c.name}
                  variants={fadeUp}
                  whileHover={{ y: -5 }}
                  className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-premium transition-shadow"
                >
                  <div className="h-24" style={{ background: c.hex }} />
                  <div className="p-3">
                    <div className="text-sm font-semibold font-montserrat text-dark truncate">{c.name}</div>
                    <div className="text-xs text-gray-400 font-poppins uppercase">{c.hex}</div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Brands */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
            className="mt-16"
          >
            <motion.div variants={fadeUp} className="flex items-center gap-2 mb-6">
              <Star size={20} className="text-accent-500" />
              <h3 className="text-2xl font-bold font-montserrat text-dark">Brands We Carry</h3>
            </motion.div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
              {brands.map((brand, i) => (
                <motion.div
                  key={brand}
                  variants={fadeUp}
                  whileHover={{ scale: 1.05 }}
                  className="bg-gray-50 rounded-2xl p-6 text-center border border-gray-100 hover:border-primary-200 hover:bg-white transition-all cursor-pointer"
                >
                  <span className="font-bold font-montserrat text-gray-700">{brand}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50/30">
        <div className="max-w-3xl mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
            className="text-center mb-10"
          >
            <motion.div variants={fadeUp}>
              <span className="text-accent-500 font-semibold text-sm tracking-widest uppercase font-poppins">
                FAQs
              </span>
              <h2 className="section-heading mt-2">Frequently Asked Questions</h2>
            </motion.div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{ visible: { transition: { staggerChildren: 0.05 } } }}
            className="space-y-3"
          >
            {faqs.map((faq) => (
              <FAQItem key={faq.q} {...faq} />
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
}
