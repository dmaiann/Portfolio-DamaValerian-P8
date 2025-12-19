import React from "react";
import { motion } from "framer-motion";
import TypingText from "../assets/TypingText";
import { ArrowDown, Linkedin, Instagram, Github } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-[#020617] overflow-hidden">
      {/* BACKGROUND */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(1000px_circle_at_20%_25%,rgba(99,102,241,0.25),transparent_60%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#020617] via-[#020617]/80 to-[#020617]" />
      </div>

      {/* FLOATING GLOW */}
      <motion.div
        animate={{ y: [0, -30, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute right-[-15%] top-[10%]
        h-[520px] w-[520px] rounded-full bg-indigo-500/20 blur-[140px]"
      />

      <div className="relative mx-auto max-w-7xl px-8 pt-40 pb-32">
        <div className="grid grid-cols-12 items-center gap-y-24">
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="col-span-12 lg:col-span-7"
          >
            <span
              className="inline-block mb-6 rounded-full
              border border-indigo-500/40 bg-indigo-500/10
              px-4 py-1 text-sm text-indigo-400"
            >
              Hello There!
            </span>

            <h1 className="text-5xl md:text-6xl xl:text-7xl font-bold leading-[1.05] text-white">
              I design & build
              <br />
              digital experiences
              <br />
              <span className="text-indigo-400">
                <TypingText />
              </span>
            </h1>

            <p className="mt-8 max-w-xl text-lg text-white/70 leading-relaxed">
              Crafting interfaces and systems with clarity, emotion, and
              long-term usability.
            </p>

            <div className="mt-12 flex items-center gap-8">
              <button
                className="rounded-xl bg-indigo-500 px-7 py-4 text-sm font-semibold
                text-white shadow-lg shadow-indigo-500/30
                hover:bg-indigo-400 transition"
              >
                View selected work
              </button>

              <span className="text-sm text-white/40">
                Available for collaboration
              </span>
            </div>
          </motion.div>

          {/* RIGHT – SOCIAL RAIL */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
            className="col-span-12 lg:col-span-5 flex lg:justify-end"
          >
            <div className="relative flex flex-col items-center gap-4">
              {/* CAPSULE */}
              <div
                className="flex flex-col gap-3 rounded-full
                border border-white/10 bg-white/5
                px-3 py-4 backdrop-blur-xl
                shadow-lg shadow-black/20"
              >
                {[
                  {
                    icon: Linkedin,
                    label: "LinkedIn",
                    url: "https://www.linkedin.com/in/USERNAME_KAMU",
                  },
                  {
                    icon: Instagram,
                    label: "Instagram",
                    url: "https://www.instagram.com/USERNAME_KAMU",
                  },
                  {
                    icon: Github,
                    label: "GitHub",
                    url: "https://github.com/USERNAME_KAMU",
                  },
                ].map((item, i) => (
                  <motion.a
                    key={i}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={item.label}
                    whileHover={{ scale: 1.12 }}
                    whileTap={{ scale: 0.95 }}
                    className="group relative flex h-11 w-11 items-center
                    justify-center rounded-full
                    bg-white/5 border border-white/10
                    hover:border-indigo-500/50
                    hover:bg-indigo-500/15 transition"
                  >
                    <item.icon
                      size={18}
                      className="text-white/70
                      group-hover:text-indigo-400 transition"
                    />

                    {/* TOOLTIP */}
                    <span
                      className="pointer-events-none absolute right-14
                      whitespace-nowrap rounded-md
                      bg-black/80 px-3 py-1 text-xs text-white/80
                      opacity-0 translate-x-2
                      group-hover:opacity-100 group-hover:translate-x-0
                      transition"
                    >
                      {item.label}
                    </span>
                  </motion.a>
                ))}
              </div>

              {/* VERTICAL LINE */}
              <motion.div
                initial={{ height: 0 }}
                animate={{ height: 96 }}
                transition={{ delay: 1, duration: 0.8 }}
                className="w-px bg-gradient-to-b
                from-white/30 via-white/10 to-transparent"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* SCROLL INDICATOR */}
      <motion.div
        animate={{ y: [0, 14, 0] }}
        transition={{ repeat: Infinity, duration: 1.6 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2
        text-white/50 flex flex-col items-center gap-2"
      >
        <ArrowDown size={20} />
        <span className="text-xs tracking-widest uppercase">Scroll</span>
      </motion.div>
    </section>
  );
}
