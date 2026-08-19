import { MapPin, Phone, Mail, MessageCircle, Globe, Share2, Play } from 'lucide-react';

const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Products', href: '#products' },
  { label: 'False Ceiling', href: '#false-ceiling' },
  { label: 'Colours', href: '#colours' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Contact', href: '#contact' },
];

export default function Footer() {
  return (
    <footer className="bg-dark text-white pt-16 pb-8 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-1" style={{ background: 'linear-gradient(90deg, #0057D9, #FF6B00, #D4AF37)' }} />

      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src="/WhatsApp_Image_2026-07-19_at_13.57.26.jpeg" alt="Logo" width="56" height="56" loading="lazy" className="w-14 h-14 rounded-full object-cover" />
              <div>
                <div className="font-bold font-montserrat text-lg">न्यू भगवती ट्रेडर्स</div>
                <div className="text-xs text-gray-300 font-poppins">New Bhagwati Traders</div>
              </div>
            </div>
            <p className="text-sm text-gray-400 font-poppins leading-relaxed">
              Your trusted authorized Birla Opus dealer for premium paints & complete false ceiling solutions in Pawai, Bihar.
            </p>
            <div className="flex gap-3 mt-4">
              <a href="#" aria-label="Facebook" className="w-9 h-9 rounded-full bg-white/10 hover:bg-primary-500 flex items-center justify-center transition-colors">
                <Globe size={16} />
              </a>
              <a href="#" aria-label="Instagram" className="w-9 h-9 rounded-full bg-white/10 hover:bg-accent-500 flex items-center justify-center transition-colors">
                <Share2 size={16} />
              </a>
              <a href="https://wa.me/919958914873" aria-label="WhatsApp" className="w-9 h-9 rounded-full bg-white/10 hover:bg-green-500 flex items-center justify-center transition-colors">
                <MessageCircle size={16} />
              </a>
              <a href="#" aria-label="YouTube" className="w-9 h-9 rounded-full bg-white/10 hover:bg-red-500 flex items-center justify-center transition-colors">
                <Play size={16} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold font-montserrat mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="text-sm text-gray-400 hover:text-accent-400 font-poppins transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-bold font-montserrat mb-4">Products</h3>
            <ul className="space-y-2 text-sm text-gray-300 font-poppins">
              <li>Interior & Exterior Paints</li>
              <li>Waterproofing Solutions</li>
              <li>Wall Putty & Primer</li>
              <li>Gypsum Boards & PVC Panels</li>
              <li>POP & Ceiling Accessories</li>
              <li>Wood Coatings & Enamel</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold font-montserrat mb-4">Contact</h3>
            <ul className="space-y-3 text-sm text-gray-300 font-poppins">
              <li className="flex items-start gap-2">
                <MapPin size={16} className="text-accent-400 mt-0.5 flex-shrink-0" />
                <span>Pawai, Amarpur Road (Banka) SH-85, Shahkund, Bihar – 813101</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} className="text-accent-400 flex-shrink-0" />
                <a href="tel:8271805067" className="hover:text-accent-400">8271805067</a>
              </li>
              <li className="flex items-center gap-2">
                <MessageCircle size={16} className="text-green-400 flex-shrink-0" />
                <a href="https://wa.me/919958914873" className="hover:text-green-400">9958914873</a>
              </li>
              <li className="flex items-center gap-2">
  <Mail size={16} className="text-accent-400 flex-shrink-0" />
  <a 
    href="https://mail.google.com/mail/?view=cm&fs=1&to=newbhagwatitrader@gmail.com" 
    target="_blank" 
    rel="noopener noreferrer"
    className="hover:text-accent-400 break-all"
  >
    newbhagwatitrader@gmail.com
  </a>
</li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-400 font-poppins text-center md:text-left">
            © {new Date().getFullYear()} न्यू भगवती ट्रेडर्स (New Bhagwati Traders). All rights reserved.
          </p>
          <p className="text-xs text-gray-400 font-poppins">
            Authorized Birla Opus Dealer · Pawai, Bihar
          </p>
        </div>
      </div>
    </footer>
  );
}
