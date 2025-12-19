import { motion } from "framer-motion";
import { ArrowUpRight, Mail, Linkedin, Instagram } from "lucide-react";
import React from "react";

export default function Contact() {
  return (
    <section className="relative min-h-screen bg-[#020617] text-white overflow-hidden">
      {/* BACKGROUND MORPH */}
      <motion.div
        className="absolute inset-0 -z-10"
        animate={{
          background: [
            "radial-gradient(1200px circle at 20% 10%, rgba(99,102,241,0.18), transparent 60%)",
            "radial-gradient(1200px circle at 80% 30%, rgba(139,92,246,0.18), transparent 60%)",
            "radial-gradient(1200px circle at 50% 20%, rgba(99,102,241,0.18), transparent 60%)",
          ],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />

      <div className="relative mx-auto max-w-7xl px-6 py-32 grid grid-cols-1 lg:grid-cols-12 gap-16">
        {/* LEFT — STATEMENT */}
        <div className="lg:col-span-6 flex flex-col justify-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 inline-block rounded-full border border-indigo-500/30 bg-indigo-500/10 px-4 py-1 text-sm text-indigo-400 w-fit"
          >
            Contact
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl xl:text-7xl font-bold leading-tight"
          >
            Let’s create
            <br />
            something
            <span className="text-indigo-400"> meaningful</span>.
          </motion.h1>

          <p className="mt-8 max-w-lg text-lg text-white/60">
            Whether it’s a product idea, collaboration, or just a quick hello —
            I’m always open to meaningful conversations.
          </p>

          {/* SOCIAL INLINE */}
          <div className="mt-12 flex items-center gap-6">
            <SocialLink icon={<Linkedin size={18} />} label="LinkedIn" />
            <SocialLink icon={<Instagram size={18} />} label="Instagram" />
            <SocialLink icon={<Mail size={18} />} label="Email" />
          </div>
        </div>

        {/* RIGHT — FLOATING FORM */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:col-span-6 relative"
        >
          <div className="absolute -inset-10 bg-indigo-500/20 blur-3xl rounded-full" />

          <div className="relative rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-10 shadow-[0_40px_120px_rgba(0,0,0,0.6)]">
            <h2 className="text-2xl font-semibold mb-8">
              Start a conversation
            </h2>

            <form className="space-y-6">
              <Input label="Name" placeholder="Your name" />
              <Input label="Email" placeholder="you@email.com" />
              <Textarea
                label="Message"
                placeholder="Tell me about your idea..."
              />

              <button
                type="submit"
                className="group inline-flex items-center gap-2 rounded-lg bg-indigo-500 px-6 py-3 text-sm font-semibold hover:bg-indigo-400 transition shadow-lg shadow-indigo-500/30"
              >
                Send Message
                <ArrowUpRight
                  size={16}
                  className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* COMPONENTS */

function Input({ label, placeholder }) {
  return (
    <div>
      <label className="block text-sm text-white/60 mb-2">{label}</label>
      <input
        placeholder={placeholder}
        className="w-full rounded-lg border border-white/10 bg-[#020617] px-4 py-3 text-sm focus:border-indigo-500 focus:outline-none"
      />
    </div>
  );
}

function Textarea({ label, placeholder }) {
  return (
    <div>
      <label className="block text-sm text-white/60 mb-2">{label}</label>
      <textarea
        rows={5}
        placeholder={placeholder}
        className="w-full rounded-lg border border-white/10 bg-[#020617] px-4 py-3 text-sm focus:border-indigo-500 focus:outline-none"
      />
    </div>
  );
}

function SocialLink({ icon, label }) {
  return (
    <a
      href="#"
      className="group flex items-center gap-2 text-white/60 hover:text-white transition"
    >
      <span className="rounded-full border border-white/10 bg-white/5 p-2 group-hover:border-indigo-400/50 transition">
        {icon}
      </span>
      {label}
    </a>
  );
}
