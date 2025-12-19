import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Instagram, Linkedin, Github } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-[#020617] text-white overflow-hidden">
      {/* FLOATING BACKGROUND LIGHT */}
      <motion.div
        className="absolute -z-10 inset-0"
        animate={{
          background: [
            "radial-gradient(900px circle at 20% 0%, rgba(99,102,241,0.22), transparent 65%)",
            "radial-gradient(900px circle at 80% 20%, rgba(168,85,247,0.22), transparent 65%)",
          ],
        }}
        transition={{ duration: 16, repeat: Infinity, ease: "linear" }}
      />

      <div className="mx-auto max-w-7xl px-6 py-28 space-y-24">
        {/* MARQUEE STATEMENT */}
        <div className="overflow-hidden border-y border-white/10 py-6">
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="flex w-max gap-12 text-xl md:text-2xl font-semibold text-white/60"
          >
            {[...Array(2)].map((_, i) => (
              <span key={i} className="flex gap-12">
                <span>Open for collaboration</span>
                <span className="text-indigo-400">•</span>
                <span>Design × Motion × Frontend</span>
                <span className="text-indigo-400">•</span>
                <span>Let’s build something meaningful</span>
              </span>
            ))}
          </motion.div>
        </div>

        {/* MAIN SPLIT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-end">
          {/* LEFT — BIG CTA */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-7"
          >
            <h2 className="text-4xl md:text-5xl xl:text-6xl font-bold leading-tight">
              Have a project
              <br />
              in mind?
            </h2>

            <p className="mt-6 max-w-md text-lg text-white/60">
              I’m always open to discussing new ideas, collaborations, or
              product challenges.
            </p>

            <button
              className="group mt-10 inline-flex items-center gap-3 rounded-xl
              bg-white px-7 py-4 text-sm font-semibold text-black
              hover:bg-indigo-400 hover:text-white transition
              shadow-xl"
            >
              Let’s talk
              <ArrowUpRight
                size={18}
                className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </button>
          </motion.div>

          {/* RIGHT — INFO */}
          <div className="lg:col-span-5 space-y-10">
            {/* BRAND */}
            <div>
              <div className="text-lg font-semibold">DamaValerian.</div>
              <div className="mt-1 text-sm text-white/40">
                Frontend Developer & UI Designer
              </div>
            </div>

            {/* SOCIAL */}
            <div className="flex items-center gap-5">
              {[
                { icon: Instagram, label: "Instagram" },
                { icon: Linkedin, label: "LinkedIn" },
                { icon: Github, label: "GitHub" },
              ].map((item, i) => (
                <motion.a
                  key={i}
                  href="#"
                  whileHover={{ y: -4 }}
                  className="rounded-2xl border border-white/10
                    bg-white/5 backdrop-blur-xl p-4
                    hover:border-indigo-400/60
                    hover:shadow-[0_0_30px_rgba(99,102,241,0.35)]
                    transition"
                >
                  <item.icon size={18} />
                </motion.a>
              ))}
            </div>

            {/* META */}
            <div className="text-xs text-white/30">
              © {new Date().getFullYear()} — All rights reserved
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
