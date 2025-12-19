import React, { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const services = [
  {
    title: "Frontend Development",
    desc: "Modern, scalable interfaces.",
    detail:
      "React, Tailwind, Framer Motion, performance optimization, accessibility-first UI.",
    accent: "from-indigo-400 to-violet-500",
  },
  {
    title: "UI / UX Design",
    desc: "Human-centered & conversion-focused.",
    detail: "Wireframing, visual systems, typography, UX flow validation.",
    accent: "from-fuchsia-400 to-purple-500",
  },
  {
    title: "Motion & Interaction",
    desc: "Interfaces that feel alive.",
    detail: "Micro-interactions, scroll animations, cinematic transitions.",
    accent: "from-sky-400 to-cyan-500",
  },
  {
    title: "Design System",
    desc: "Scalable & reusable systems.",
    detail: "Component tokens, variants, documentation, Storybook-ready.",
    accent: "from-emerald-400 to-teal-500",
  },
];

function ServiceCard({ service, index, activeIndex, setActiveIndex }) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    margin: "-40% 0px -40% 0px",
  });

  useEffect(() => {
    if (isInView) setActiveIndex(index);
  }, [isInView]);

  const isActive = activeIndex === index;

  return (
    <motion.div
      ref={ref}
      layout
      onClick={() => setActiveIndex(isActive ? null : index)}
      className={`group cursor-pointer rounded-3xl border backdrop-blur-xl
        transition-all duration-500
        ${
          isActive
            ? "border-white/20 bg-white/10 shadow-[0_40px_120px_rgba(0,0,0,0.6)]"
            : "border-white/10 bg-white/5 opacity-60 hover:opacity-90"
        }`}
    >
      <div className="p-8">
        {/* Accent bar */}
        <div
          className={`mb-6 h-[3px] w-16 rounded-full bg-gradient-to-r ${service.accent}`}
        />

        <div className="flex items-start justify-between gap-6">
          <div>
            <h3 className="text-2xl font-semibold text-white">
              {service.title}
            </h3>
            <p className="mt-2 text-white/60">{service.desc}</p>
          </div>

          <ArrowUpRight
            size={18}
            className={`mt-1 transition-transform duration-300
              ${
                isActive
                  ? "rotate-45"
                  : "group-hover:translate-x-1 group-hover:-translate-y-1"
              }
            `}
          />
        </div>

        {/* EXPAND */}
        <AnimatePresence>
          {isActive && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <p className="mt-6 border-t border-white/10 pt-6 text-white/70 leading-relaxed">
                {service.detail}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

export default function Services() {
  const [activeIndex, setActiveIndex] = useState(0);

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

      <div className="relative mx-auto max-w-7xl px-6 py-32 grid grid-cols-1 lg:grid-cols-12 gap-20">
        {/* LEFT — EDITORIAL */}
        <div className="lg:col-span-5 flex flex-col justify-center">
          <span className="mb-6 inline-block rounded-full border border-indigo-500/30 bg-indigo-500/10 px-4 py-1 text-sm text-indigo-400 w-fit">
            Services
          </span>

          <h1 className="text-5xl md:text-6xl xl:text-7xl font-bold leading-tight">
            Designing
            <br />
            digital
            <span className="text-indigo-400"> excellence</span>.
          </h1>

          <p className="mt-8 max-w-md text-lg text-white/60">
            I help brands and products stand out through thoughtful design,
            strong visual hierarchy, and performance-driven execution.
          </p>
        </div>

        {/* RIGHT — STACKED SERVICES */}
        <div className="lg:col-span-7 flex flex-col gap-8">
          {services.map((service, i) => (
            <ServiceCard
              key={i}
              service={service}
              index={i}
              activeIndex={activeIndex}
              setActiveIndex={setActiveIndex}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
