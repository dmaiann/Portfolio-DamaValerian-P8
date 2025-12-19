import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Radiant Portfolio",
    desc: "A motion-driven personal portfolio experience.",
    tag: "Frontend / Motion",
    image: "Project/Portfolio.png",
  },
  {
    title: "SportID",
    desc: "Scalable UI system for consistent products.",
    tag: "UI System",
    image: "Project/SportID.png",
  },
  {
    title: "Carbon Lens",
    desc: "Product-focused SaaS interface design.",
    tag: "Product Design",
    image: "Project/CarbonLens.png",
  },
];

export default function Projects() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });

  return (
    <section
      ref={ref}
      className="relative min-h-[260vh] bg-[#020617] overflow-hidden"
    >
      {/* SOFT BACKGROUND ACCENT */}
      <motion.div
        className="absolute inset-0 -z-10"
        style={{
          background: useTransform(
            scrollYProgress,
            [0, 1],
            [
              "radial-gradient(900px circle at 20% 10%, rgba(99,102,241,0.18), transparent 65%)",
              "radial-gradient(900px circle at 80% 60%, rgba(99,102,241,0.18), transparent 65%)",
            ]
          ),
        }}
      />

      <div className="mx-auto max-w-7xl px-6 pt-40">
        {/* HEADER — SAME STYLE AS OTHER PAGES */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-3xl mb-32"
        >
          <span className="inline-block mb-4 rounded-full border border-indigo-500/40 bg-indigo-500/10 px-4 py-1 text-sm text-indigo-400">
            Projects
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
            Selected work that blends
            <span className="text-indigo-400"> design</span> and
            <span className="text-indigo-400"> interaction</span>.
          </h2>

          <p className="mt-6 text-lg text-white/70">
            A curated selection of projects focused on clarity, motion, and
            usability.
          </p>
        </motion.div>
      </div>

      {/* STACKED PROJECTS */}
      <div className="relative">
        {projects.map((project, i) => {
          const y = useTransform(
            scrollYProgress,
            [i * 0.25, (i + 1) * 0.25],
            [120, 0]
          );

          return (
            <motion.div
              key={i}
              style={{ y }}
              className="sticky top-32 mx-auto max-w-6xl px-6 mb-32"
            >
              <div
                className="group relative overflow-hidden rounded-3xl
                border border-white/10 bg-white/5 backdrop-blur-xl
                transition hover:bg-white/10"
              >
                {/* IMAGE */}
                <div className="relative h-[420px] overflow-hidden">
                  <img
                    src={project.image}
                    className="h-full w-full object-cover
                    transition-transform duration-700
                    group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                </div>

                {/* CONTENT */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 p-10">
                  <div>
                    <span className="text-sm text-indigo-400">
                      {project.tag}
                    </span>
                    <h3 className="mt-2 text-3xl font-semibold text-white">
                      {project.title}
                    </h3>
                    <p className="mt-4 text-white/70">{project.desc}</p>
                  </div>

                  <div className="flex md:justify-end items-end">
                    <button
                      className="group inline-flex items-center gap-2
                      rounded-xl border border-white/10 bg-white/5
                      px-6 py-3 text-sm font-medium text-white
                      hover:border-indigo-400/50 hover:bg-indigo-500/10
                      transition"
                    >
                      View case study
                      <ArrowUpRight
                        size={16}
                        className="transition-transform
                        group-hover:translate-x-1 group-hover:-translate-y-1"
                      />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      <div className="h-[40vh]" />
    </section>
  );
}
