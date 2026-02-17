"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import {
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiTypescript,
  SiTailwindcss,
  SiMongodb,
  SiPostgresql,
  SiDocker,
  SiAmazonwebservices,
  SiFirebase,
  SiFigma,
  SiGithub,
  SiWordpress,
  SiVuedotjs,
  SiAngular,
  SiPython,
} from "react-icons/si";
import {
  HiOutlineCode,
  HiOutlineGlobeAlt,
  HiOutlineShoppingCart,
  HiOutlineCube,
  HiOutlineDeviceMobile,
  HiOutlineChartBar,
  HiOutlineLightBulb,
  HiOutlineClipboardList,
  HiOutlineColorSwatch,
  HiOutlineCog,
  HiOutlineShieldCheck,
} from "react-icons/hi";

/* ────────────────────────────────────────────────
   DATA
   ──────────────────────────────────────────────── */

const technologies = [
  { icon: SiReact, name: "React", color: "#61DAFB" },
  { icon: SiNextdotjs, name: "Next.js", color: "#ffffff" },
  { icon: SiNodedotjs, name: "Node.js", color: "#339933" },
  { icon: SiTypescript, name: "TypeScript", color: "#3178C6" },
  { icon: SiTailwindcss, name: "Tailwind", color: "#06B6D4" },
  { icon: SiMongodb, name: "MongoDB", color: "#47A248" },
  { icon: SiPostgresql, name: "PostgreSQL", color: "#4169E1" },
  { icon: SiDocker, name: "Docker", color: "#2496ED" },
  { icon: SiAmazonwebservices, name: "AWS", color: "#FF9900" },
  { icon: SiFirebase, name: "Firebase", color: "#FFCA28" },
  { icon: SiFigma, name: "Figma", color: "#F24E1E" },
  { icon: SiGithub, name: "GitHub", color: "#ffffff" },
  { icon: SiWordpress, name: "WordPress", color: "#21759B" },
  { icon: SiVuedotjs, name: "Vue.js", color: "#4FC08D" },
  { icon: SiAngular, name: "Angular", color: "#DD0031" },
  { icon: SiPython, name: "Python", color: "#3776AB" },
];

const projects = [
  {
    title: "LuxeCart E-Commerce",
    category: "E-Commerce",
    description:
      "Full-stack e-commerce platform with real-time inventory, Stripe payments, and admin dashboard.",
    image: "/web-dev/ecommerce.png",
    tech: ["Next.js", "MongoDB", "Stripe"],
  },
  {
    title: "DataPulse Analytics",
    category: "SaaS Dashboard",
    description:
      "Enterprise SaaS analytics dashboard with real-time data, custom reports, and team management.",
    image: "/web-dev/saas-dashboard.png",
    tech: ["React", "Node.js", "PostgreSQL"],
  },
  {
    title: "Aura Solutions",
    category: "Corporate Website",
    description:
      "Premium corporate website with CMS, career portal, and multi-language support.",
    image: "/web-dev/corporate.png",
    tech: ["Next.js", "WordPress", "AWS"],
  },
  {
    title: "FoodDash PWA",
    category: "Progressive Web App",
    description:
      "Mobile-first food delivery PWA with real-time order tracking and push notifications.",
    image: "/web-dev/food-delivery.png",
    tech: ["React", "Firebase", "PWA"],
  },
  {
    title: "EstateVista",
    category: "Web Portal",
    description:
      "Real estate listing platform with advanced search, virtual tours, and agent dashboard.",
    image: "/web-dev/realestate.png",
    tech: ["Next.js", "PostgreSQL", "Docker"],
  },
  {
    title: "HealthConnect",
    category: "Healthcare Platform",
    description:
      "Telemedicine portal with video consultations, appointment booking, and patient records.",
    image: "/web-dev/healthcare.png",
    tech: ["React", "Node.js", "MongoDB"],
  },
];

const lifecycleSteps = [
  {
    number: "01",
    icon: HiOutlineLightBulb,
    title: "Discovery & Research",
    description:
      "We analyze your business goals, target audience, competitors, and define project scope with clear KPIs.",
    color: "from-amber-500 to-orange-500",
  },
  {
    number: "02",
    icon: HiOutlineClipboardList,
    title: "Planning & Strategy",
    description:
      "Detailed roadmap with wireframes, tech stack selection, architecture design, and sprint planning.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    number: "03",
    icon: HiOutlineColorSwatch,
    title: "UI/UX Design",
    description:
      "Pixel-perfect designs in Figma with interactive prototypes, design systems, and user testing.",
    color: "from-purple-500 to-pink-500",
  },
  {
    number: "04",
    icon: HiOutlineCode,
    title: "Development",
    description:
      "Agile sprints with clean, scalable code. CI/CD, code reviews, and transparent progress updates.",
    color: "from-green-500 to-emerald-500",
  },
  {
    number: "05",
    icon: HiOutlineShieldCheck,
    title: "Testing & QA",
    description:
      "Comprehensive testing — unit, integration, performance, security, and cross-browser compatibility.",
    color: "from-red-500 to-rose-500",
  },
  {
    number: "06",
    icon: HiOutlineCog,
    title: "Launch & Support",
    description:
      "Smooth deployment, monitoring setup, SEO optimization, and ongoing maintenance & support.",
    color: "from-indigo-500 to-violet-500",
  },
];

const webAppTypes = [
  {
    icon: HiOutlineGlobeAlt,
    title: "Landing Pages",
    description:
      "High-converting single-page sites optimized for lead generation, campaigns, and product launches.",
    gradient: "from-cyan-500 to-blue-500",
  },
  {
    icon: HiOutlineCode,
    title: "Corporate Websites",
    description:
      "Professional multi-page websites with CMS, career portals, blogs, and advanced SEO.",
    gradient: "from-blue-500 to-indigo-500",
  },
  {
    icon: HiOutlineShoppingCart,
    title: "E-Commerce Stores",
    description:
      "Feature-rich online stores with payment gateways, inventory management, and analytics.",
    gradient: "from-emerald-500 to-teal-500",
  },
  {
    icon: HiOutlineCube,
    title: "SaaS Products",
    description:
      "Scalable software-as-a-service platforms with subscriptions, dashboards, and API integrations.",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    icon: HiOutlineDeviceMobile,
    title: "Progressive Web Apps",
    description:
      "App-like web experiences with offline support, push notifications, and native feel.",
    gradient: "from-orange-500 to-rose-500",
  },
  {
    icon: HiOutlineChartBar,
    title: "Web Portals & Dashboards",
    description:
      "Data-driven portals with role-based access, real-time analytics, and workflow management.",
    gradient: "from-violet-500 to-fuchsia-500",
  },
];

const stats = [
  { value: 150, suffix: "+", label: "Projects Delivered" },
  { value: 120, suffix: "+", label: "Happy Clients" },
  { value: 25, suffix: "+", label: "Technologies" },
  { value: 5, suffix: "+", label: "Years Experience" },
];

/* ────────────────────────────────────────────────
   ANIMATION VARIANTS
   ──────────────────────────────────────────────── */

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: "easeOut" },
  }),
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

const staggerItem = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

/* ────────────────────────────────────────────────
   COUNTER HOOK
   ──────────────────────────────────────────────── */

function useCounter(target: number, duration = 2000) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [isInView, target, duration]);

  return { count, ref };
}

/* ────────────────────────────────────────────────
   COMPONENTS
   ──────────────────────────────────────────────── */

function StatCard({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const { count, ref } = useCounter(value);
  return (
    <div ref={ref} className="text-center">
      <div className="text-4xl sm:text-5xl font-bold text-white mb-2">
        {count}
        <span className="text-cyan-400">{suffix}</span>
      </div>
      <div className="text-slate-400 text-sm font-medium uppercase tracking-wider">
        {label}
      </div>
    </div>
  );
}

/* ────────────────────────────────────────────────
   MAIN PAGE
   ──────────────────────────────────────────────── */

export default function WebDevelopmentPage() {
  const [sliderIndex, setSliderIndex] = useState(0);
  const maxSlide = projects.length - 1;

  // Auto-play slider
  useEffect(() => {
    const timer = setInterval(() => {
      setSliderIndex((prev) => (prev >= maxSlide ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, [maxSlide]);

  return (
    <main className="min-h-screen bg-slate-950">
      <Navbar />

      {/* ═══════════════════════════════════════════
                SECTION 1 — HERO
                ═══════════════════════════════════════════ */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950" />
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "2s" }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/5 rounded-full blur-3xl" />
          {/* Dot grid */}
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `radial-gradient(circle, #ffffff 1px, transparent 1px)`,
              backgroundSize: "30px 30px",
            }}
          />
        </div>

        <div className="relative z-10 section-container pt-28 pb-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left */}
            <div className="text-center lg:text-left">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <span className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-cyan-400 text-sm font-medium mb-8">
                  <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
                  Web Development Services
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight tracking-tight"
              >
                We Craft{" "}
                <span className="bg-gradient-to-r from-cyan-400 via-teal-400 to-emerald-400 bg-clip-text text-transparent">
                  Digital Experiences
                </span>
                <br />
                That Convert
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-lg sm:text-xl text-slate-400 max-w-xl mx-auto lg:mx-0 mb-10 leading-relaxed"
              >
                From stunning landing pages to complex SaaS platforms — we build
                pixel-perfect, high-performance web applications that drive real
                business results.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-4"
              >
                <Link
                  href="#contact"
                  className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-teal-500 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-cyan-500/40 transition-all duration-300"
                >
                  Start Your Project
                  <svg
                    className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <Link
                  href="#projects"
                  className="inline-flex items-center gap-2 px-8 py-4 border border-slate-600 text-slate-300 font-semibold rounded-full hover:bg-slate-800/50 hover:border-cyan-500/50 transition-all duration-300"
                >
                  View Our Work
                </Link>
              </motion.div>
            </div>

            {/* Right — Code decoration */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative hidden lg:block"
            >
              <div className="absolute -inset-8 bg-gradient-to-r from-cyan-500/20 to-teal-500/20 rounded-3xl blur-3xl" />
              <div className="relative bg-slate-900/80 backdrop-blur-sm rounded-2xl border border-slate-700/60 p-6 shadow-2xl">
                {/* Terminal header */}
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                  <span className="ml-3 text-slate-500 text-sm font-mono">web-app.tsx</span>
                </div>
                <pre className="text-sm font-mono leading-relaxed overflow-hidden">
                  <code>
                    <span className="text-purple-400">{"import"}</span>
                    <span className="text-slate-300">{" { "}</span>
                    <span className="text-cyan-400">NextApp</span>
                    <span className="text-slate-300">{" } "}</span>
                    <span className="text-purple-400">from</span>
                    <span className="text-emerald-400">{" 'next'"}</span>
                    <span className="text-slate-500">;</span>
                    {"\n\n"}
                    <span className="text-purple-400">{"export default"}</span>
                    <span className="text-blue-400">{" function "}</span>
                    <span className="text-yellow-400">App</span>
                    <span className="text-slate-300">{"() {"}</span>
                    {"\n"}
                    <span className="text-slate-500">{"  // "}</span>
                    <span className="text-slate-600">Build something amazing</span>
                    {"\n"}
                    <span className="text-purple-400">{"  return"}</span>
                    <span className="text-slate-300">{" ("}</span>
                    {"\n"}
                    <span className="text-slate-300">{"    <"}</span>
                    <span className="text-cyan-400">Layout</span>
                    <span className="text-slate-300">{">"}</span>
                    {"\n"}
                    <span className="text-slate-300">{"      <"}</span>
                    <span className="text-cyan-400">Hero</span>
                    <span className="text-slate-300">{" />"}</span>
                    {"\n"}
                    <span className="text-slate-300">{"      <"}</span>
                    <span className="text-cyan-400">Features</span>
                    <span className="text-slate-300">{" />"}</span>
                    {"\n"}
                    <span className="text-slate-300">{"      <"}</span>
                    <span className="text-cyan-400">Pricing</span>
                    <span className="text-slate-300">{" />"}</span>
                    {"\n"}
                    <span className="text-slate-300">{"    </"}</span>
                    <span className="text-cyan-400">Layout</span>
                    <span className="text-slate-300">{">"}</span>
                    {"\n"}
                    <span className="text-slate-300">{"  );"}</span>
                    {"\n"}
                    <span className="text-slate-300">{"}"}</span>
                  </code>
                </pre>
              </div>
              {/* Floating badges */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -right-4 px-4 py-2 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-full text-white text-sm font-semibold shadow-lg shadow-cyan-500/30"
              >
                ⚡ Fast Performance
              </motion.div>
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-4 -left-4 px-4 py-2 bg-slate-800 border border-cyan-500/30 rounded-full text-cyan-400 text-sm font-semibold shadow-lg"
              >
                🔒 Secure & Scalable
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-6 h-10 border-2 border-slate-500 rounded-full flex justify-center pt-2"
          >
            <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full" />
          </motion.div>
        </motion.div>
      </section>

      {/* ═══════════════════════════════════════════
                SECTION 2 — TECHNOLOGY MARQUEE
                ═══════════════════════════════════════════ */}
      <section className="py-16 bg-slate-900/50 border-y border-slate-800 overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="section-container mb-8"
        >
          <p className="text-center text-slate-500 text-sm font-semibold uppercase tracking-widest">
            Technologies We Master
          </p>
        </motion.div>

        <div className="relative">
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-slate-950 to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-slate-950 to-transparent z-10" />

          <div className="flex animate-marquee" style={{ width: "max-content" }}>
            {[...technologies, ...technologies].map((tech, i) => (
              <div
                key={`${tech.name}-${i}`}
                className="flex flex-col items-center justify-center mx-8 group cursor-pointer"
              >
                <div className="w-16 h-16 flex items-center justify-center rounded-2xl bg-slate-800/50 border border-slate-700/50 group-hover:border-cyan-500/50 group-hover:bg-slate-800 transition-all duration-300 mb-2">
                  <tech.icon
                    className="w-8 h-8 transition-all duration-300 group-hover:scale-110"
                    style={{ color: tech.color }}
                  />
                </div>
                <span className="text-xs text-slate-500 group-hover:text-slate-300 transition-colors duration-300 font-medium">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
                SECTION 3 — PROJECTS SLIDER
                ═══════════════════════════════════════════ */}
      <section id="projects" className="section-padding bg-slate-950">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="inline-block px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-cyan-400 text-sm font-semibold mb-4">
              Our Portfolio
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 tracking-tight">
              Projects That{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">
                Speak Results
              </span>
            </h2>
            <p className="text-lg text-slate-400">
              Real-world web applications we&apos;ve built for clients across industries.
            </p>
          </motion.div>

          {/* Slider */}
          <div className="relative">
            <div className="overflow-hidden rounded-3xl">
              <motion.div
                className="flex"
                animate={{ x: `-${sliderIndex * 100}%` }}
                transition={{ type: "spring", stiffness: 100, damping: 20 }}
              >
                {projects.map((project, i) => (
                  <div key={project.title} className="w-full flex-shrink-0 px-2">
                    <div className="grid md:grid-cols-2 gap-8 bg-slate-900/60 backdrop-blur-sm border border-slate-800 rounded-3xl overflow-hidden">
                      {/* Image */}
                      <div className="relative h-64 md:h-96 overflow-hidden">
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-cover hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute top-4 left-4">
                          <span className="px-3 py-1 bg-cyan-500/90 text-white text-xs font-semibold rounded-full backdrop-blur-sm">
                            {project.category}
                          </span>
                        </div>
                      </div>
                      {/* Info */}
                      <div className="flex flex-col justify-center p-6 md:p-10">
                        <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                          {project.title}
                        </h3>
                        <p className="text-slate-400 leading-relaxed mb-6">
                          {project.description}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {project.tech.map((t) => (
                            <span
                              key={t}
                              className="px-3 py-1 bg-slate-800 border border-slate-700 text-slate-300 text-xs font-medium rounded-full"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <button
                onClick={() => setSliderIndex((p) => Math.max(0, p - 1))}
                className="w-12 h-12 flex items-center justify-center rounded-full border border-slate-700 text-slate-400 hover:text-white hover:border-cyan-500 transition-all duration-300"
                aria-label="Previous project"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              <div className="flex gap-2">
                {projects.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setSliderIndex(i)}
                    className={`h-2 rounded-full transition-all duration-300 ${i === sliderIndex
                        ? "w-8 bg-cyan-500"
                        : "w-2 bg-slate-700 hover:bg-slate-600"
                      }`}
                    aria-label={`Go to project ${i + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={() => setSliderIndex((p) => Math.min(maxSlide, p + 1))}
                className="w-12 h-12 flex items-center justify-center rounded-full border border-slate-700 text-slate-400 hover:text-white hover:border-cyan-500 transition-all duration-300"
                aria-label="Next project"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
                SECTION 4 — WEB DEV LIFECYCLE
                ═══════════════════════════════════════════ */}
      <section className="section-padding bg-slate-900 relative overflow-hidden">
        {/* Background pattern */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />

        <div className="section-container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="inline-block px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-cyan-400 text-sm font-semibold mb-4">
              Our Process
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 tracking-tight">
              Web Development{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">
                Lifecycle
              </span>
            </h2>
            <p className="text-lg text-slate-400">
              A battle-tested process delivering exceptional results — from first idea to launch and beyond.
            </p>
          </motion.div>

          {/* Timeline */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative"
          >
            {/* Connecting line */}
            <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-slate-700 to-transparent" />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {lifecycleSteps.map((step) => (
                <motion.div key={step.number} variants={staggerItem} className="group">
                  <div className="bg-slate-800/40 backdrop-blur-sm border border-slate-700/60 rounded-2xl p-7 hover:border-cyan-500/40 hover:bg-slate-800/60 transition-all duration-500 h-full">
                    <div className="flex items-center gap-4 mb-4">
                      <div
                        className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}
                      >
                        <step.icon className="w-7 h-7 text-white" />
                      </div>
                      <span className="text-3xl font-bold text-slate-700 group-hover:text-slate-600 transition-colors">
                        {step.number}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
                SECTION 5 — TYPES OF WEB APPS
                ═══════════════════════════════════════════ */}
      <section className="section-padding bg-slate-950">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="inline-block px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-cyan-400 text-sm font-semibold mb-4">
              What We Build
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 tracking-tight">
              From Landing Page to{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">
                Enterprise SaaS
              </span>
            </h2>
            <p className="text-lg text-slate-400">
              We build every type of web application your business needs.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {webAppTypes.map((app) => (
              <motion.div key={app.title} variants={staggerItem} className="group relative">
                {/* Gradient border glow */}
                <div className={`absolute -inset-0.5 bg-gradient-to-r ${app.gradient} rounded-2xl opacity-0 group-hover:opacity-20 blur transition-opacity duration-500`} />

                <div className="relative bg-slate-900/70 border border-slate-800 rounded-2xl p-8 hover:border-slate-700 transition-all duration-500 h-full">
                  <div
                    className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${app.gradient} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                  >
                    <app.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{app.title}</h3>
                  <p className="text-slate-400 leading-relaxed text-sm">{app.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
                SECTION 6 — STATS / TRUST
                ═══════════════════════════════════════════ */}
      <section className="py-20 bg-slate-900 border-y border-slate-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-transparent to-teal-500/5" />
        <div className="section-container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {stats.map((stat) => (
              <StatCard key={stat.label} {...stat} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
                SECTION 7 — CTA
                ═══════════════════════════════════════════ */}
      <section id="contact" className="section-padding bg-slate-950">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative overflow-hidden rounded-3xl p-10 md:p-16 text-center"
          >
            {/* CTA background */}
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-600 via-teal-600 to-emerald-600" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.15),transparent_60%)]" />

            <div className="relative z-10">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 tracking-tight"
              >
                Ready to Build Your
                <br />
                Next Big Thing?
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-lg text-white/80 max-w-2xl mx-auto mb-10"
              >
                Let&apos;s turn your vision into a high-performance web application.
                Get a free consultation and project estimate today.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-col sm:flex-row items-center justify-center gap-4"
              >
                <Link
                  href="mailto:hello@nextmodernlabs.com"
                  className="group inline-flex items-center gap-2 px-8 py-4 bg-white text-teal-700 font-bold rounded-full hover:shadow-2xl hover:shadow-white/20 hover:-translate-y-0.5 transition-all duration-300"
                >
                  Get Free Consultation
                  <svg
                    className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <Link
                  href="#projects"
                  className="inline-flex items-center gap-2 px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-full hover:bg-white/10 transition-all duration-300"
                >
                  View Case Studies
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}