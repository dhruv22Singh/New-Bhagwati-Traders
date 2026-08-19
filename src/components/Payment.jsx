import React, { useState } from "react";
import { motion } from "framer-motion";
import qrImage from "../assets/qr.jpeg";
import {
  ShieldCheck,
  Copy,
  Check,
  QrCode,
  Smartphone,
  ArrowRight,
  Lock,
  Zap,
  BadgeCheck,
  MessageCircle,
} from "lucide-react";
import {
  SiGooglepay,
  SiPhonepe,
  SiPaytm,
} from "react-icons/si";

export default function Payment() {
  const [copied, setCopied] = useState(false);

  const upiId = "9958914873@pthdfc";
  const whatsapp = "9958914873";
  const upilink = `upi://pay?pa=${upiId}&pn=New%20Bhagwati%20Traders&cu=INR`;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(upiId);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <section
      id="payment"
      className="relative overflow-hidden bg-black px-5 py-20 text-white"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-yellow-500/10 blur-[120px]" />
        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-amber-400/10 blur-[140px]" />
      </div>

      <div className="relative mx-auto max-w-6xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mb-14 text-center"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-yellow-500/30 bg-yellow-500/10 px-5 py-2 backdrop-blur-xl">
            <ShieldCheck className="h-5 w-5 text-yellow-400" />
            <span className="text-sm font-medium tracking-wide text-yellow-300">
              Secure Payment Gateway
            </span>
          </div>

          <h2 className="bg-gradient-to-r from-yellow-200 via-yellow-400 to-yellow-100 bg-clip-text text-4xl font-black text-transparent md:text-5xl">
            Secure UPI Payment
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-gray-400">
            Fast, Secure & Trusted UPI Payment for New Bhagwati Traders.
          </p>
        </motion.div>

        {/* Main Card */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="rounded-[32px] border border-yellow-500/20 bg-white/5 p-8 shadow-[0_0_60px_rgba(255,215,0,0.08)] backdrop-blur-2xl"
        >
          <div className="grid gap-10 lg:grid-cols-2">
            {/* Left */}
            <div>
              {/* UPI */}
              <div className="rounded-3xl border border-yellow-500/20 bg-white/5 p-6 backdrop-blur-xl">
                <h3 className="mb-4 text-xl font-bold text-yellow-300">
                  UPI ID
                </h3>

                <div className="rounded-2xl border border-yellow-500/20 bg-black/40 p-5">
                  <p className="break-all text-lg font-semibold tracking-wide">
                    {upiId}
                  </p>
                </div>

                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleCopy}
                  className={`mt-6 flex w-full items-center justify-center gap-3 rounded-2xl px-6 py-4 font-semibold transition-all duration-300 ${
                    copied
                      ? "bg-green-600 text-white"
                      : "bg-gradient-to-r from-yellow-400 to-amber-500 text-black hover:shadow-[0_0_35px_rgba(255,215,0,0.45)]"
                  }`}
                >
                  {copied ? (
                    <>
                      <Check size={20} />
                      Copied!
                    </>
                  ) : (
                    <>
                      <Copy size={20} />
                      Copy UPI ID
                    </>
                  )}
                </motion.button>

                <motion.a
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.96 }}
                  href={upilink}
                  className="mt-5 flex w-full items-center justify-center gap-3 rounded-2xl border border-yellow-500/30 bg-black px-6 py-4 font-bold text-yellow-300 transition-all hover:border-yellow-400 hover:bg-yellow-500/10 hover:shadow-[0_0_35px_rgba(255,215,0,0.25)]"
                >
                  <Smartphone size={22} />
                  Pay Now
                  <ArrowRight size={18} />
                </motion.a>
              </div>

              {/* Apps */}
              <div className="mt-8">
                <h3 className="mb-5 text-xl font-bold text-yellow-300">
                  Payment Apps
                </h3>

                <div className="grid grid-cols-3 gap-4">
                  {[
                    {
                      name: "Google Pay",
                      icon: <SiGooglepay className="text-4xl text-white" />,
                    },
                    {
                      name: "PhonePe",
                      icon: <SiPhonepe className="text-4xl text-white" />,
                    },
                    {
                      name: "Paytm",
                      icon: <SiPaytm className="text-4xl text-white" />,
                    },
                  ].map((item) => (
                    <motion.div
                      key={item.name}
                      whileHover={{
                        y: -8,
                        scale: 1.05,
                      }}
                      className="rounded-3xl border border-yellow-500/20 bg-white/5 p-5 text-center backdrop-blur-xl transition-all duration-300 hover:border-yellow-400 hover:shadow-[0_0_30px_rgba(255,215,0,0.25)]"
                    >
                      <div className="flex justify-center">{item.icon}</div>

                      <p className="mt-3 text-sm font-semibold">
                        {item.name}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right */}
            <div>
              <div className="mx-auto max-w-sm rounded-3xl border border-yellow-500/30 bg-white p-4 shadow-[0_0_30px_rgba(255,215,0,0.25)]">
                <img
                  src={qrImage}
                  alt="UPI QR Code"
                  width="300"
                  height="300"
                  loading="lazy"
                  className="w-full rounded-2xl object-contain"
                />
              </div>

              {/* Security */}
              <div className="mt-8">
                <h3 className="mb-5 text-xl font-bold text-yellow-300">
                  Security
                </h3>

                <div className="grid gap-4">
                  {[
                    {
                      icon: <Lock className="text-yellow-400" />,
                      title: "100% Secure",
                    },
                    {
                      icon: <Zap className="text-yellow-400" />,
                      title: "Instant Payment",
                    },
                    {
                      icon: <BadgeCheck className="text-yellow-400" />,
                      title: "UPI Verified",
                    },
                  ].map((item) => (
                    <motion.div
                      key={item.title}
                      whileHover={{ x: 8 }}
                      className="flex items-center gap-4 rounded-2xl border border-yellow-500/20 bg-white/5 p-5 backdrop-blur-xl hover:border-yellow-400 hover:shadow-[0_0_30px_rgba(255,215,0,0.20)]"
                    >
                      <div className="rounded-xl bg-yellow-500/10 p-3">
                        {item.icon}
                      </div>

                      <span className="font-semibold">{item.title}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Note */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-12 rounded-3xl border border-yellow-500/20 bg-gradient-to-r from-yellow-500/10 to-transparent p-6 backdrop-blur-xl"
          >
            <div className="flex flex-col items-center justify-between gap-5 md:flex-row">
              <div className="flex items-center gap-4">
                <div className="rounded-2xl bg-yellow-500/10 p-3">
                  <MessageCircle className="text-yellow-400" />
                </div>

                <div>
                  <h4 className="font-bold text-yellow-300">
                    Payment Confirmation
                  </h4>

                  <p className="text-sm text-gray-300">
                    After payment please share your Transaction ID on WhatsApp.
                  </p>
                </div>
              </div>

              <a
                href={`https://wa.me/91${whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl bg-gradient-to-r from-yellow-400 to-amber-500 px-7 py-3 font-bold text-black"
              >
                WhatsApp: {whatsapp}
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}