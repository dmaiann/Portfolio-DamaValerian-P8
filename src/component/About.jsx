import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import React from "react";

/* ================= DATA ================= */
const stories = [
  {
    title: "Design with intention",
    desc: "Every interface starts with clarity, not decoration.",
  },
  {
    title: "Motion as guidance",
    desc: "Motion exists to guide attention, not to distract.",
  },
  {
    title: "Systems over screens",
    desc: "Scalable systems always outlast pretty visuals.",
  },
];

const skills = [
  "React",
  "Tailwind CSS",
  "Framer Motion",
  "UI Engineering",
  "Design System",
  "UX Thinking",
  "JavaScript",
  "TypeScript",
  "HTML & CSS",
  "Git & GitHub",
  "Figma",
  "Accessibility",
];

/* ================= PAGE ================= */
export default function About() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  return (
    <>
      {/* ================= PINNED NARRATIVE ================= */}
      <section ref={ref} id="about" className="relative h-[300vh] bg-[#020617]">
        <div className="sticky top-0 h-screen flex items-center overflow-hidden">
          {/* BACKGROUND MORPH */}
          <motion.div
            className="absolute inset-0"
            style={{ opacity: scrollYProgress }}
          >
            <div
              className="absolute left-1/2 top-1/2
              h-[700px] w-[1000px]
              -translate-x-1/2 -translate-y-1/2
              rounded-full bg-indigo-500/20 blur-[180px]"
            />
          </motion.div>

          <div className="relative mx-auto max-w-7xl px-6 w-full">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-20 items-center">
              {/* LEFT — STORY */}
              <div className="space-y-28">
                {stories.map((item, i) => {
                  const start = i / stories.length;
                  const end = start + 0.25;

                  const opacity = useTransform(
                    scrollYProgress,
                    [start, end],
                    [0, 1]
                  );
                  const y = useTransform(
                    scrollYProgress,
                    [start, end],
                    [60, 0]
                  );

                  return (
                    <motion.div key={i} style={{ opacity, y }}>
                      <h3 className="text-3xl font-semibold text-white mb-4">
                        {item.title}
                      </h3>
                      <p className="text-lg text-white/60 max-w-lg leading-relaxed">
                        {item.desc}
                      </p>
                    </motion.div>
                  );
                })}
              </div>

              {/* PROGRESS LINE */}
              <div className="relative hidden lg:block">
                <div className="h-[300px] w-[2px] bg-white/10 rounded-full" />
                <motion.div
                  style={{ scaleY: scrollYProgress }}
                  className="absolute top-0 left-0 w-[2px] origin-top
                  bg-gradient-to-b from-indigo-400 to-cyan-400"
                />
              </div>

              {/* RIGHT — STICKY VISUAL */}
              <div className="relative">
                <div
                  className="absolute -inset-16
                  rounded-3xl bg-indigo-500/20 blur-3xl"
                />

                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ type: "spring", stiffness: 200 }}
                  className="relative rounded-3xl
                  border border-white/10
                  bg-white/5 backdrop-blur-xl
                  p-10 shadow-2xl"
                >
                  <span
                    className="inline-block mb-4 rounded-full
                    border border-white/10 bg-white/5
                    px-4 py-1 text-sm text-white/60"
                  >
                    About Me
                  </span>

                  <h4 className="text-2xl font-semibold text-white mb-6">
                    Calm. Structured. Scalable.
                  </h4>

                  <p className="text-white/60 leading-relaxed">
                    I build interfaces that feel effortless and intentional.
                    <br />
                    <br />
                    Focused on clarity, motion systems, and performance-aware
                    UI.
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SKILL MARQUEE (UPGRADED) ================= */}
      <section className="relative bg-[#020617] py-32 overflow-hidden">
        {/* FADE MASK */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#020617] to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#020617] to-transparent z-10" />

        {/* DIVIDER */}
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 26,
            repeat: Infinity,
            ease: "linear",
          }}
          className="flex gap-8 w-max px-6"
        >
          {[...skills, ...skills].map((skill, i) => (
            <div
              key={i}
              className="group rounded-full border border-white/10
              bg-white/5 backdrop-blur-md
              px-8 py-4
              text-sm font-medium tracking-wide
              text-white/70
              transition-all
              hover:text-white
              hover:border-indigo-400/50
              hover:shadow-[0_0_30px_rgba(99,102,241,0.45)]"
            >
              {skill}
            </div>
          ))}
        </motion.div>
      </section>
    </>
  );
}
