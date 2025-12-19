import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, useScroll } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

const navItems = [
  { id: "hero", label: "Home", color: "from-indigo-500/20" },
  { id: "about", label: "About", color: "from-purple-500/20" },
  { id: "project", label: "Projects", color: "from-cyan-500/20" },
  { id: "service", label: "Services", color: "from-emerald-500/20" },
  { id: "contact", label: "Contact", color: "from-pink-500/20" },
];

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("hero");
  const [hidden, setHidden] = useState(false);
  const [bg, setBg] = useState(navItems[0].color);
  const lastY = useRef(0);

  const { scrollYProgress } = useScroll();

  /* ================= SCROLL HANDLER ================= */
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setHidden(y > lastY.current && y > 120);
      lastY.current = y;

      navItems.forEach((item) => {
        const section = document.getElementById(item.id);
        if (!section) return;

        const rect = section.getBoundingClientRect();
        if (rect.top <= 140 && rect.bottom >= 140) {
          setActive(item.id);
          setBg(item.color);
        }
      });
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* ================= ROUTER + SCROLL ================= */
  const handleNav = (item) => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        document
          .getElementById(item.id)
          ?.scrollIntoView({ behavior: "smooth" });
      }, 200);
    } else {
      document.getElementById(item.id)?.scrollIntoView({ behavior: "smooth" });
    }

    setActive(item.id);
    setBg(item.color);
    setOpen(false);
  };

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: hidden ? -120 : 0, opacity: 1 }}
        transition={{ duration: 0.45 }}
        className="fixed top-6 left-1/2 z-50
        w-[calc(100%-2rem)] -translate-x-1/2"
      >
        <div
          className="relative mx-auto max-w-7xl rounded-2xl border
          border-white/15 bg-[#020617]/70 backdrop-blur-xl"
        >
          {/* MORPH BG */}
          <div
            className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${bg}
            opacity-60 blur-xl transition-all duration-700`}
          />

          <div className="relative flex items-center justify-between px-6 py-3">
            {/* LOGO */}
            <button
              onClick={() => handleNav(navItems[0])}
              className="font-semibold text-white"
            >
              DamaValerian<span className="text-indigo-400">.</span>
            </button>

            {/* DESKTOP */}
            <nav className="hidden md:flex gap-10">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNav(item)}
                  className="relative text-sm text-white/70 hover:text-white"
                >
                  {item.label}
                  {active === item.id && (
                    <motion.span
                      layoutId="dot"
                      className="absolute -bottom-2 left-1/2
                      h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-indigo-400"
                    />
                  )}
                </button>
              ))}
            </nav>

            {/* MOBILE */}
            <button
              onClick={() => setOpen(!open)}
              className="md:hidden rounded-lg border border-white/10 p-2"
            >
              {open ? <X /> : <Menu />}
            </button>
          </div>

          {/* SCROLL PROGRESS */}
          <motion.div
            style={{ scaleX: scrollYProgress }}
            className="h-[2px] origin-left bg-indigo-400"
          />
        </div>
      </motion.header>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="fixed top-28 left-1/2 z-40
            w-[calc(100%-2rem)] -translate-x-1/2
            rounded-2xl bg-[#020617]/90 backdrop-blur-xl"
          >
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNav(item)}
                className="block w-full px-6 py-4 text-left text-white/70 hover:text-white"
              >
                {item.label}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
