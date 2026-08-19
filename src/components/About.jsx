import { motion } from 'framer-motion';
import { CheckCircle2, Award, Users, Sparkles, ShieldCheck } from 'lucide-react';

const features = [
  { icon: CheckCircle2, text: 'Genuine Products — 100% Original Birla Opus' },
  { icon: Award, text: 'Best Quality — Premium Grade Materials' },
  { icon: Sparkles, text: 'Affordable Prices — Best Rates Guaranteed' },
  { icon: Users, text: 'Expert Advice — Professional Colour Consultation' },
  { icon: ShieldCheck, text: 'Trusted by 1000+ Customers in Bihar' },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export default function About() {
  return (
    <section id="about" className="py-24 bg-gradient-to-br from-gray-50 to-blue-50/30">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Images */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
            className="relative"
          >
            <motion.div variants={fadeUp} className="relative">
              <img
                src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=700"
                alt="Premium paint showroom interior"loading="lazy"
                className="w-full h-80 object-cover rounded-3xl shadow-premium "
              />
              <div className="absolute -bottom-6 -right-6 w-48 h-48 rounded-2xl overflow-hidden shadow-premium border-4 border-white">
                <img
                  src="https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=300"
                  alt="Exterior painting"loading="lazy"
                  className="w-full h-full object-cover "
                />
              </div>
            </motion.div>

            {/* Floating badge */}
            <motion.div
              variants={fadeUp}
              className="absolute -top-4 -left-4 bg-primary-500 text-white rounded-2xl p-4 shadow-glow"
            >
              <div className="text-2xl font-black font-montserrat">8+</div>
              <div className="text-xs font-poppins">Years Experience</div>
            </motion.div>

            {/* Logo watermark */}
            <motion.div
              variants={fadeUp}
              className="absolute bottom-16 -left-8 hidden lg:block"
            >
              <img src="/logo.svg" alt="Logo"loading="lazy" className="w-20 h-20 rounded-full shadow-2xl" />
            </motion.div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          >
            <motion.div variants={fadeUp}>
              <span className="text-accent-500 font-semibold text-sm tracking-widest uppercase font-poppins">
                Our Story
              </span>
              <h2 className="section-heading mt-2">हमारे बारे में</h2>
              <p className="text-gray-500 text-lg mt-2 font-hind">About Us</p>
            </motion.div>

            <motion.p variants={fadeUp} className="text-gray-600 mt-6 leading-relaxed font-poppins">
              <strong className="text-dark">New Bhagwati Traders (न्यू भगवती ट्रेडर्स)</strong> is an authorized 
              dealer of Birla Opus Paints and premium building materials, proudly serving the people of Pawai, 
              Shahkund, Amarpur, and surrounding areas in Bihar.
            </motion.p>

            <motion.p variants={fadeUp} className="text-gray-600 mt-4 leading-relaxed font-poppins">
              We provide <strong>genuine, premium-quality products</strong> — from interior and exterior paints 
              to complete false ceiling solutions — all under one roof. Our experienced team offers 
              <strong> free colour consultation</strong>, contractor support, and expert guidance to help you 
              transform your space beautifully.
            </motion.p>

            <motion.ul variants={fadeUp} className="mt-8 space-y-3">
              {features.map(({ icon: Icon, text }) => (
                <li key={text} className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-xl bg-primary-50 flex items-center justify-center flex-shrink-0">
                    <Icon size={16} className="text-primary-500" />
                  </span>
                  <span className="text-dark font-medium font-poppins text-sm">{text}</span>
                </li>
              ))}
            </motion.ul>

            <motion.div variants={fadeUp} className="mt-8 flex gap-4">
              <a href="#contact" onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }); }}
                className="btn-primary">
                Get Free Consultation
              </a>
              <a href="tel:8271805067" className="btn-accent">
                Call Us Now
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
