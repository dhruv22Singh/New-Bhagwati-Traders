import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import {
  MapPin,
  Phone,
  MessageSquare,
  Mail,
  Clock,
  ExternalLink,
  Send,
} from "lucide-react";

const Contact = () => {
  // Form State
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  // Handle Input Change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Send Email
  const handleSubmit = (e) => {
    e.preventDefault();

    setLoading(true);

    emailjs
      .send(
        "service_ihbdkwg",
        "template_juea0qw",
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
        },
        "BF_vRclp_JXXkAYrz"
      )
      .then(() => {
        alert("✅ Enquiry Sent Successfully!");

        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
        });
      })
      .catch(() => {
        alert("❌ Failed to send enquiry.");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const MAP_URL = "https://maps.app.goo.gl/TxcYuKHEKRXZ4j4A8";
  const PHONE_NUMBER = "8271805067";
  const WHATSAPP_NUMBER = "919958914873";
  const EMAIL_ADDRESS = "newbhagwatitrader@gmail.com";
  const GMAIL_URL = `https://mail.google.com/mail/?view=cm&fs=1&to=${EMAIL_ADDRESS}`;

  return (
    <section
      className="py-20 bg-neutral-950 text-white relative overflow-hidden"
      id="contact"
    >
      {/* Background Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-amber-500/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="text-center mb-14">
          <span className="text-amber-400 text-xs font-semibold tracking-widest uppercase bg-amber-400/10 px-4 py-1.5 rounded-full border border-amber-400/20 inline-block mb-3">
            GET IN TOUCH
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-neutral-100">
            संपर्क <span className="text-amber-400">करें</span>
          </h2>
          <p className="mt-3 text-neutral-400 text-sm sm:text-base max-w-xl mx-auto">
            Have a question or need a quote? We're here to help you transform
            your space.
          </p>
        </div>

        {/* Two Column Layout: Left Details + Right Enquiry Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* LEFT SIDE: Contact Cards + Map (7 Cols) */}
          <div className="lg:col-span-7 space-y-6">
            {/* Address */}
            <a
              href={MAP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 rounded-2xl bg-neutral-900/60 border border-neutral-800/80 backdrop-blur-xl hover:border-amber-500/40 hover:-translate-y-0.5 transition-all duration-300 group block cursor-pointer"
            >
              <div className="flex items-start justify-between">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/20 shrink-0 group-hover:scale-105 transition-transform">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-neutral-100 mb-1 group-hover:text-amber-400 transition-colors">
                      Our Address
                    </h3>
                    <p className="text-neutral-400 leading-relaxed text-xs sm:text-sm">
                      Pawai, Amarpur Road (Banka) SH-85
                      <br />
                      Shahkund, Pawai, Bihar – 813101
                    </p>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-neutral-500 group-hover:text-amber-400 transition-colors shrink-0 mt-1" />
              </div>
            </a>

            {/* Call & WhatsApp Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <a
                href={`tel:${PHONE_NUMBER}`}
                className="p-5 rounded-2xl bg-neutral-900/60 border border-neutral-800/80 backdrop-blur-xl hover:border-amber-500/40 hover:-translate-y-0.5 transition-all duration-300 group block cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/20 shrink-0 group-hover:scale-105 transition-transform">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[10px] font-medium text-neutral-400 uppercase tracking-wider">
                      Call Us
                    </p>
                    <p className="text-base font-bold text-neutral-100 group-hover:text-amber-400 transition-colors">
                      {PHONE_NUMBER}
                    </p>
                  </div>
                </div>
              </a>

              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-5 rounded-2xl bg-neutral-900/60 border border-neutral-800/80 backdrop-blur-xl hover:border-emerald-500/40 hover:-translate-y-0.5 transition-all duration-300 group block cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 shrink-0 group-hover:scale-105 transition-transform">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[10px] font-medium text-neutral-400 uppercase tracking-wider">
                      WhatsApp
                    </p>
                    <p className="text-base font-bold text-neutral-100 group-hover:text-emerald-400 transition-colors">
                      9958914873
                    </p>
                  </div>
                </div>
              </a>
            </div>

            {/* Email & Business Hours Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <a
                href={GMAIL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="p-5 rounded-2xl bg-neutral-900/60 border border-neutral-800/80 backdrop-blur-xl hover:border-amber-500/40 hover:-translate-y-0.5 transition-all duration-300 group block cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/20 shrink-0 group-hover:scale-105 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="overflow-hidden">
                    <p className="text-[10px] font-medium text-neutral-400 uppercase tracking-wider">
                      Email Us
                    </p>
                    <p className="text-xs font-semibold text-neutral-100 group-hover:text-amber-400 transition-colors truncate">
                      {EMAIL_ADDRESS}
                    </p>
                  </div>
                </div>
              </a>

              <div className="p-5 rounded-2xl bg-neutral-900/60 border border-neutral-800/80 backdrop-blur-xl">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/20 shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[10px] font-medium text-neutral-400 uppercase tracking-wider">
                      Business Hours
                    </p>
                    <p className="text-xs font-semibold text-neutral-100">
                      Mon – Sun: 8:00 AM – 8:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Map */}
            <div className="rounded-2xl border border-neutral-800 overflow-hidden bg-neutral-900/60 backdrop-blur-xl relative h-56 sm:h-64">
              <a
                href={MAP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute top-3 left-3 z-10 px-3 py-1.5 rounded-lg bg-neutral-950/80 border border-neutral-700 text-[11px] font-semibold text-amber-400 flex items-center gap-1.5 hover:bg-neutral-900 transition-colors backdrop-blur-md"
              >
                Open in Maps <ExternalLink className="w-3 h-3" />
              </a>
              <iframe
                title="Google Map Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3612.871988891584!2d86.8285!3d25.1085!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDA2JzMwLjYiTiA4NsKwNDknNDIuNiJF!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{
                  border: 0,
                  filter: "invert(90%) hue-rotate(180deg) contrast(100%)",
                }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full opacity-90"
              ></iframe>
            </div>
          </div>

          {/* RIGHT SIDE: Quick Enquiry Form (5 Cols) */}
          <div className="lg:col-span-5">
            <div className="p-6 sm:p-8 rounded-2xl bg-neutral-900/80 border border-neutral-800 backdrop-blur-xl shadow-2xl h-full flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold text-neutral-100 mb-2 flex items-center gap-2">
                  <Send className="w-5 h-5 text-amber-400" /> Quick Enquiry
                </h3>
                <p className="text-xs text-neutral-400 mb-6">
                  Send us a message and we'll get back to you shortly.
                </p>

                <form className="space-y-4" onSubmit={handleSubmit}>
                  <div>
                    <label className="block text-xs font-medium text-neutral-300 mb-1.5">
                      Your Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your name"
                      required
                      className="w-full px-4 py-3 rounded-xl bg-neutral-950 border border-neutral-800 text-neutral-100 text-xs focus:outline-none focus:border-amber-500 transition-colors placeholder:text-neutral-600"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-neutral-300 mb-1.5">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter email address"
                      required
                      className="w-full px-4 py-3 rounded-xl bg-neutral-950 border border-neutral-800 text-neutral-100 text-xs focus:outline-none focus:border-amber-500 transition-colors placeholder:text-neutral-600"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-neutral-300 mb-1.5">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Enter mobile number"
                      required
                      className="w-full px-4 py-3 rounded-xl bg-neutral-950 border border-neutral-800 text-neutral-100 text-xs focus:outline-none focus:border-amber-500 transition-colors placeholder:text-neutral-600"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-neutral-300 mb-1.5">
                      Requirement / Message
                    </label>
                    <textarea
                      rows="4"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      placeholder="Tell us what you need (Paints, False Ceiling, Waterproofing...)"
                      className="w-full px-4 py-3 rounded-xl bg-neutral-950 border border-neutral-800 text-neutral-100 text-xs focus:outline-none focus:border-amber-500 transition-colors placeholder:text-neutral-600 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 text-neutral-950 font-bold text-xs uppercase tracking-wider hover:from-amber-400 hover:to-amber-500 transition-all duration-300 shadow-lg shadow-amber-500/20 disabled:opacity-60 mt-2"
                  >
                    {loading ? "Sending..." : "Send Message"}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;