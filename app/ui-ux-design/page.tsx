"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import {
    SiFigma,
    SiAdobexd,
    SiSketch,
    SiAdobephotoshop,
    SiAdobeillustrator,
    SiInvision,
    SiFramer,
    SiCanva,
    SiAdobeaftereffects,
    SiMiro,
    SiNotion,
    SiWebflow,
    SiStorybook,
    SiCss3,
    SiTailwindcss,
    SiMaterialdesign,
} from "react-icons/si";
import {
    HiOutlineColorSwatch,
    HiOutlineEye,
    HiOutlineLightBulb,
    HiOutlineTemplate,
    HiOutlinePuzzle,
    HiOutlineDeviceMobile,
    HiOutlineCursorClick,
    HiOutlineSparkles,
    HiOutlineClipboardList,
    HiOutlineCode,
    HiOutlineRefresh,
    HiOutlineShieldCheck,
    HiOutlinePresentationChartBar,
    HiOutlineUserGroup,
    HiOutlineDocumentText,
    HiOutlineAdjustments,
    HiOutlinePhotograph,
    HiOutlineGlobeAlt,
} from "react-icons/hi";

/* ────────────────────────────────────────────────
   DATA
   ──────────────────────────────────────────────── */

const technologies = [
    { icon: SiFigma, name: "Figma", color: "#F24E1E" },
    { icon: SiAdobexd, name: "Adobe XD", color: "#FF61F6" },
    { icon: SiSketch, name: "Sketch", color: "#F7B500" },
    { icon: SiAdobephotoshop, name: "Photoshop", color: "#31A8FF" },
    { icon: SiAdobeillustrator, name: "Illustrator", color: "#FF9A00" },
    { icon: SiInvision, name: "InVision", color: "#FF3366" },
    { icon: SiFramer, name: "Framer", color: "#0055FF" },
    { icon: SiCanva, name: "Canva", color: "#00C4CC" },
    { icon: SiAdobeaftereffects, name: "After Effects", color: "#9999FF" },
    { icon: SiMiro, name: "Miro", color: "#FFD02F" },
    { icon: SiNotion, name: "Notion", color: "#ffffff" },
    { icon: SiWebflow, name: "Webflow", color: "#4353FF" },
    { icon: SiMaterialdesign, name: "Material Design", color: "#757575" },
    { icon: SiStorybook, name: "Storybook", color: "#FF4785" },
    { icon: SiCss3, name: "CSS3", color: "#1572B6" },
    { icon: SiTailwindcss, name: "Tailwind", color: "#06B6D4" },
];

const projects = [
    {
        title: "FinVault Dashboard",
        category: "Fintech UI",
        description:
            "Complete financial dashboard redesign with data visualization, portfolio analytics, and seamless transaction flows.",
        image: "/web-dev/saas-dashboard.png",
        tech: ["Figma", "Prototyping", "Design System"],
    },
    {
        title: "MediCare App",
        category: "Healthcare UX",
        description:
            "Mobile-first healthcare app with appointment booking, telemedicine, and patient portal with accessibility-first design.",
        image: "/web-dev/healthcare.png",
        tech: ["Adobe XD", "User Research", "A/B Testing"],
    },
    {
        title: "ShopLux E-Commerce",
        category: "E-Commerce UI",
        description:
            "Luxury e-commerce experience with 3D product views, personalized recommendations, and streamlined checkout.",
        image: "/web-dev/ecommerce.png",
        tech: ["Figma", "Framer", "Motion Design"],
    },
    {
        title: "EduSpark Platform",
        category: "EdTech UX",
        description:
            "Interactive learning platform with gamified progress tracking, video lessons, and collaborative workspaces.",
        image: "/mobile-dev/elearning.png",
        tech: ["Sketch", "InVision", "User Testing"],
    },
    {
        title: "TravelWise",
        category: "Travel UX",
        description:
            "End-to-end travel booking experience with interactive maps, itinerary builder, and offline-ready design.",
        image: "/mobile-dev/travel.png",
        tech: ["Figma", "Miro", "Journey Mapping"],
    },
    {
        title: "SocialPulse",
        category: "Social Media UI",
        description:
            "Modern social media interface with stories, real-time feeds, content creation tools, and dark mode design system.",
        image: "/mobile-dev/social.png",
        tech: ["Figma", "After Effects", "Micro-animations"],
    },
];

const designProcess = [
    {
        phase: "01",
        title: "Discovery & Research",
        description:
            "User interviews, competitor analysis, stakeholder workshops, persona development, and defining success metrics.",
        icon: "🔍",
        color: "from-rose-500 to-pink-600",
    },
    {
        phase: "02",
        title: "Information Architecture",
        description:
            "Site maps, user flows, content strategy, card sorting, and establishing intuitive navigation patterns.",
        icon: "🗂️",
        color: "from-amber-500 to-orange-600",
    },
    {
        phase: "03",
        title: "Wireframing",
        description:
            "Low and high-fidelity wireframes, layout exploration, responsive grids, and rapid iteration with stakeholder feedback.",
        icon: "✏️",
        color: "from-blue-500 to-indigo-600",
    },
    {
        phase: "04",
        title: "Visual Design",
        description:
            "Pixel-perfect UI, color systems, typography scales, iconography, illustrations, and comprehensive design tokens.",
        icon: "🎨",
        color: "from-rose-500 to-fuchsia-600",
    },
    {
        phase: "05",
        title: "Prototyping & Testing",
        description:
            "Interactive prototypes, usability testing, A/B experiments, heatmap analysis, and data-driven design refinements.",
        icon: "⚡",
        color: "from-emerald-500 to-teal-600",
    },
    {
        phase: "06",
        title: "Design Handoff",
        description:
            "Developer-ready specs, design system documentation, asset exports, animation guides, and ongoing design support.",
        icon: "🚀",
        color: "from-violet-500 to-purple-600",
    },
];

const designServices = [
    {
        icon: HiOutlineTemplate,
        title: "Web App Design",
        description:
            "Responsive, conversion-optimized interfaces for SaaS dashboards, landing pages, and enterprise platforms.",
        gradient: "from-rose-500 to-pink-600",
    },
    {
        icon: HiOutlineDeviceMobile,
        title: "Mobile App Design",
        description:
            "Native iOS & Android designs following platform guidelines with delightful micro-interactions.",
        gradient: "from-violet-500 to-purple-600",
    },
    {
        icon: HiOutlineColorSwatch,
        title: "Design Systems",
        description:
            "Scalable component libraries, design tokens, style guides, and Storybook integration for consistent UIs.",
        gradient: "from-amber-500 to-orange-600",
    },
    {
        icon: HiOutlineCursorClick,
        title: "UX Research & Audit",
        description:
            "Heuristic evaluations, usability testing, user interviews, and data-backed UX recommendations.",
        gradient: "from-blue-500 to-indigo-600",
    },
    {
        icon: HiOutlineSparkles,
        title: "Motion & Interaction",
        description:
            "Micro-animations, page transitions, loading states, and interactive prototypes that bring UIs to life.",
        gradient: "from-emerald-500 to-teal-600",
    },
    {
        icon: HiOutlinePhotograph,
        title: "Brand Identity",
        description:
            "Logo design, brand guidelines, visual language, and cohesive brand experiences across all touchpoints.",
        gradient: "from-fuchsia-500 to-pink-600",
    },
];

const features = [
    { icon: HiOutlineEye, title: "User-Centered", description: "Every pixel driven by real user needs" },
    { icon: HiOutlinePuzzle, title: "Systematic Design", description: "Reusable components & design tokens" },
    { icon: HiOutlineAdjustments, title: "Accessible", description: "WCAG 2.1 compliant, inclusive by default" },
    { icon: HiOutlineRefresh, title: "Iterative Process", description: "Rapid prototyping & continuous testing" },
    { icon: HiOutlinePresentationChartBar, title: "Data-Driven", description: "Decisions backed by analytics & research" },
    { icon: HiOutlineGlobeAlt, title: "Cross-Platform", description: "Consistent experience on every device" },
];

const stats = [
    { value: 200, suffix: "+", label: "Designs Delivered" },
    { value: 95, suffix: "%", label: "Client Satisfaction" },
    { value: 40, suffix: "+", label: "Design Awards" },
    { value: 5, suffix: "+", label: "Years Experience" },
];

/* ────────────────────────────────────────────────
   ANIMATION VARIANTS
   ──────────────────────────────────────────────── */

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const staggerItem = {
    hidden: { opacity: 0, y: 25 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const slideInLeft = {
    hidden: { opacity: 0, x: -60 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const slideInRight = {
    hidden: { opacity: 0, x: 60 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } },
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

function StatCard({ value, suffix, label }: { value: number; suffix: string; label: string }) {
    const { count, ref } = useCounter(value);
    return (
        <motion.div ref={ref} variants={staggerItem} className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-rose-500 to-pink-600 rounded-2xl opacity-0 group-hover:opacity-30 blur transition-opacity duration-500" />
            <div className="relative bg-black/70 border border-slate-800 rounded-2xl p-6 text-center hover:border-rose-500/40 transition-all duration-300">
                <div className="text-3xl sm:text-4xl font-bold text-white mb-1">
                    {count}
                    <span className="text-rose-400">{suffix}</span>
                </div>
                <div className="text-slate-400 text-sm font-medium">{label}</div>
            </div>
        </motion.div>
    );
}

/* ────────────────────────────────────────────────
   MAIN PAGE
   ──────────────────────────────────────────────── */

export default function UIUXDesignPage() {
    const [sliderIndex, setSliderIndex] = useState(0);
    const maxSlide = projects.length - 1;
    const heroRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
    const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
    const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

    // Auto-play slider
    useEffect(() => {
        const timer = setInterval(() => {
            setSliderIndex((prev) => (prev >= maxSlide ? 0 : prev + 1));
        }, 5000);
        return () => clearInterval(timer);
    }, [maxSlide]);

    return (
        <main className="min-h-screen bg-[#0a0a12]">
            <Navbar />

            {/* ═══════════════════════════════════════════
                SECTION 1 — HERO
                ═══════════════════════════════════════════ */}
            <section ref={heroRef} className="relative min-h-screen flex items-center overflow-hidden">
                {/* Animated background with rose/pink tones */}
                <motion.div style={{ y: heroY }} className="absolute inset-0">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a12] via-[#1a0a18] to-[#0a0a12]" />
                    <div className="absolute top-20 left-1/4 w-[500px] h-[500px] bg-rose-600/15 rounded-full blur-[120px]" />
                    <div className="absolute bottom-20 right-1/4 w-[400px] h-[400px] bg-pink-500/10 rounded-full blur-[100px]" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-fuchsia-500/5 rounded-full blur-[150px]" />
                    {/* Grid pattern */}
                    <div
                        className="absolute inset-0 opacity-[0.04]"
                        style={{
                            backgroundImage: `linear-gradient(rgba(244,63,94,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(244,63,94,0.3) 1px, transparent 1px)`,
                            backgroundSize: "60px 60px",
                        }}
                    />
                </motion.div>

                <motion.div style={{ opacity: heroOpacity }} className="relative z-10 section-container pt-28 pb-20">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        {/* Left */}
                        <div className="text-center lg:text-left">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                            >
                                <span className="inline-flex items-center gap-2 px-4 py-2 bg-rose-500/10 border border-rose-500/30 rounded-full text-rose-400 text-sm font-medium mb-8">
                                    <span className="w-2 h-2 bg-rose-400 rounded-full animate-pulse" />
                                    UI/UX Design Services
                                </span>
                            </motion.div>

                            <motion.h1
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.7, delay: 0.1 }}
                                className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6 leading-[1.1] tracking-tight"
                            >
                                Design That
                                <br />
                                <span className="bg-gradient-to-r from-rose-400 via-pink-400 to-fuchsia-400 bg-clip-text text-transparent">
                                    Users Feel
                                </span>
                                <br />
                                & Remember
                            </motion.h1>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                className="text-lg sm:text-xl text-slate-400 max-w-lg mx-auto lg:mx-0 mb-10 leading-relaxed"
                            >
                                We create intuitive, beautiful, and conversion-driven interfaces that
                                delight users and accelerate business growth — from research to pixel-perfect delivery.
                            </motion.p>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.3 }}
                                className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-12"
                            >
                                <button
                                    className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-rose-600 to-pink-600 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-rose-500/40 transition-all duration-300"
                                >
                                    Start Your Design
                                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </button>
                                <Link
                                    href="#projects"
                                    className="inline-flex items-center gap-2 px-8 py-4 border border-slate-600 text-slate-300 font-semibold rounded-full hover:bg-[#111111]/50 hover:border-rose-500/50 transition-all duration-300"
                                >
                                    View Portfolio
                                </Link>
                            </motion.div>

                            {/* Service badges */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.5 }}
                                className="flex items-center justify-center lg:justify-start gap-3"
                            >
                                <span className="text-neutral-400 text-sm">We design for:</span>
                                <div className="flex gap-2">
                                    <span className="px-3 py-1.5 bg-[#111111]/60 border border-slate-700/50 rounded-full text-xs text-slate-300 font-medium flex items-center gap-1.5">
                                        🖥️ Web
                                    </span>
                                    <span className="px-3 py-1.5 bg-[#111111]/60 border border-slate-700/50 rounded-full text-xs text-slate-300 font-medium flex items-center gap-1.5">
                                        📱 Mobile
                                    </span>
                                    <span className="px-3 py-1.5 bg-[#111111]/60 border border-slate-700/50 rounded-full text-xs text-slate-300 font-medium flex items-center gap-1.5">
                                        🎨 Brand
                                    </span>
                                </div>
                            </motion.div>
                        </div>

                        {/* Right — Design Tool Mockup */}
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.9, delay: 0.3 }}
                            className="relative flex items-center justify-center"
                        >
                            {/* Glow */}
                            <div className="absolute w-80 h-80 bg-rose-500/20 rounded-full blur-[80px]" />

                            {/* Design tool mockup */}
                            <div className="relative w-full max-w-md">
                                <div className="absolute -inset-8 bg-gradient-to-r from-rose-500/20 to-pink-500/20 rounded-3xl blur-3xl" />
                                <div className="relative bg-black/80 backdrop-blur-sm rounded-2xl border border-slate-700/60 p-6 shadow-2xl">
                                    {/* Window header */}
                                    <div className="flex items-center gap-2 mb-5">
                                        <div className="w-3 h-3 rounded-full bg-red-500" />
                                        <div className="w-3 h-3 rounded-full bg-yellow-500" />
                                        <div className="w-3 h-3 rounded-full bg-green-500" />
                                        <span className="ml-3 text-neutral-400 text-sm font-mono">design-system.fig</span>
                                    </div>

                                    {/* Design mockup content */}
                                    <div className="space-y-4">
                                        {/* Color palette */}
                                        <div>
                                            <p className="text-neutral-400 text-xs font-semibold uppercase tracking-wider mb-2">Color Palette</p>
                                            <div className="flex gap-2">
                                                {["bg-rose-500", "bg-pink-500", "bg-fuchsia-500", "bg-violet-500", "bg-[#111111]", "bg-black"].map((c, i) => (
                                                    <div key={i} className={`w-10 h-10 rounded-xl ${c} ${c === "bg-black" ? "border border-slate-700" : ""}`} />
                                                ))}
                                            </div>
                                        </div>

                                        {/* Typography */}
                                        <div>
                                            <p className="text-neutral-400 text-xs font-semibold uppercase tracking-wider mb-2">Typography</p>
                                            <p className="text-white text-2xl font-bold mb-1">Heading Bold</p>
                                            <p className="text-slate-300 text-sm">Body text — Inter, 16px / 1.6</p>
                                        </div>

                                        {/* Component preview */}
                                        <div>
                                            <p className="text-neutral-400 text-xs font-semibold uppercase tracking-wider mb-2">Components</p>
                                            <div className="flex gap-2 items-center">
                                                <div className="px-4 py-2 bg-gradient-to-r from-rose-500 to-pink-500 rounded-full text-white text-xs font-semibold">Primary Button</div>
                                                <div className="px-4 py-2 border border-slate-600 rounded-full text-slate-300 text-xs font-semibold">Secondary</div>
                                                <div className="w-8 h-8 rounded-lg bg-rose-500/20 border border-rose-500/30 flex items-center justify-center">
                                                    <HiOutlineSparkles className="w-4 h-4 text-rose-400" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Floating badges */}
                                <motion.div
                                    animate={{ y: [0, -8, 0] }}
                                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                                    className="absolute -top-4 -right-4 px-4 py-2 bg-gradient-to-r from-rose-500 to-pink-500 rounded-full text-white text-sm font-semibold shadow-lg shadow-rose-500/30"
                                >
                                    🎨 Pixel Perfect
                                </motion.div>
                                <motion.div
                                    animate={{ y: [0, 8, 0] }}
                                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                                    className="absolute -bottom-4 -left-4 px-4 py-2 bg-[#111111] border border-rose-500/30 rounded-full text-rose-400 text-sm font-semibold shadow-lg"
                                >
                                    ✨ User-Centered
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>

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
                        className="w-6 h-10 border-2 border-slate-600 rounded-full flex justify-center pt-2"
                    >
                        <div className="w-1.5 h-1.5 bg-rose-400 rounded-full" />
                    </motion.div>
                </motion.div>
            </section>

            {/* ═══════════════════════════════════════════
                SECTION 2 — DESIGN TOOLS MARQUEE
                ═══════════════════════════════════════════ */}
            <section className="py-16 bg-[#0d0d18] border-y border-slate-800/50 overflow-hidden">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="section-container mb-8"
                >
                    <p className="text-center text-neutral-400 text-sm font-semibold uppercase tracking-widest">
                        Design Tools We Master
                    </p>
                </motion.div>

                <div className="relative">
                    <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#0d0d18] to-transparent z-10" />
                    <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#0d0d18] to-transparent z-10" />

                    <div className="flex animate-marquee" style={{ width: "max-content" }}>
                        {[...technologies, ...technologies].map((tech, i) => (
                            <div key={`${tech.name}-${i}`} className="flex flex-col items-center justify-center mx-8 group cursor-pointer">
                                <div className="w-16 h-16 flex items-center justify-center rounded-2xl bg-[#111111]/50 border border-slate-700/50 group-hover:border-rose-500/50 group-hover:bg-[#111111] transition-all duration-300 mb-2">
                                    <tech.icon className="w-8 h-8 transition-all duration-300 group-hover:scale-110" style={{ color: tech.color }} />
                                </div>
                                <span className="text-xs text-neutral-400 group-hover:text-slate-300 transition-colors font-medium">{tech.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════
                SECTION 3 — WHY US (Feature Bento Grid)
                ═══════════════════════════════════════════ */}
            <section className="section-padding bg-[#0a0a12]">
                <div className="section-container">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center max-w-3xl mx-auto mb-16"
                    >
                        <span className="inline-block px-4 py-2 bg-rose-500/10 border border-rose-500/30 rounded-full text-rose-400 text-sm font-semibold mb-4">
                            Why Choose Us
                        </span>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 tracking-tight">
                            Design With{" "}
                            <span className="bg-gradient-to-r from-rose-400 to-fuchsia-400 bg-clip-text text-transparent">
                                Purpose & Craft
                            </span>
                        </h2>
                        <p className="text-lg text-slate-400">
                            Every pixel serves a purpose. Every interaction tells a story.
                        </p>
                    </motion.div>

                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
                    >
                        {features.map((f, i) => (
                            <motion.div
                                key={f.title}
                                variants={staggerItem}
                                className={`group relative overflow-hidden rounded-2xl border border-slate-800 p-6 hover:border-rose-500/40 transition-all duration-500 ${i === 0 ? "sm:col-span-2 lg:col-span-1" : ""
                                    }`}
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-rose-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                <div className="relative z-10">
                                    <div className="w-12 h-12 rounded-xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                                        <f.icon className="w-6 h-6 text-rose-400" />
                                    </div>
                                    <h3 className="text-lg font-bold text-white mb-1">{f.title}</h3>
                                    <p className="text-slate-400 text-sm">{f.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════
                SECTION 4 — PORTFOLIO SLIDER
                ═══════════════════════════════════════════ */}
            <section id="projects" className="section-padding bg-[#0d0d18]">
                <div className="section-container">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center max-w-3xl mx-auto mb-16"
                    >
                        <span className="inline-block px-4 py-2 bg-rose-500/10 border border-rose-500/30 rounded-full text-rose-400 text-sm font-semibold mb-4">
                            Our Portfolio
                        </span>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 tracking-tight">
                            Designs That{" "}
                            <span className="bg-gradient-to-r from-rose-400 to-fuchsia-400 bg-clip-text text-transparent">
                                Inspire & Convert
                            </span>
                        </h2>
                        <p className="text-lg text-slate-400">
                            Real-world UI/UX projects crafted for clients across industries.
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
                                {projects.map((project) => (
                                    <div key={project.title} className="w-full flex-shrink-0 px-2">
                                        <div className="grid md:grid-cols-2 gap-8 bg-black/60 backdrop-blur-sm border border-slate-800 rounded-3xl overflow-hidden">
                                            {/* Image */}
                                            <div className="relative h-64 md:h-96 overflow-hidden">
                                                <Image
                                                    src={project.image}
                                                    alt={project.title}
                                                    fill
                                                    className="object-cover hover:scale-105 transition-transform duration-700"
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                                                <div className="absolute top-4 left-4">
                                                    <span className="px-3 py-1 bg-rose-500/90 text-white text-xs font-semibold rounded-full backdrop-blur-sm">
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
                                                            className="px-3 py-1 bg-[#111111] border border-slate-700 text-slate-300 text-xs font-medium rounded-full"
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
                                className="w-12 h-12 flex items-center justify-center rounded-full border border-slate-700 text-slate-400 hover:text-white hover:border-rose-500 transition-all duration-300"
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
                                            ? "w-8 bg-rose-500"
                                            : "w-2 bg-slate-700 hover:bg-slate-600"
                                            }`}
                                        aria-label={`Go to project ${i + 1}`}
                                    />
                                ))}
                            </div>

                            <button
                                onClick={() => setSliderIndex((p) => Math.min(maxSlide, p + 1))}
                                className="w-12 h-12 flex items-center justify-center rounded-full border border-slate-700 text-slate-400 hover:text-white hover:border-rose-500 transition-all duration-300"
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
                SECTION 5 — DESIGN PROCESS (Vertical Timeline)
                ═══════════════════════════════════════════ */}
            <section className="section-padding bg-[#0a0a12] relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-rose-500/5 rounded-full blur-[120px]" />
                <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-pink-500/5 rounded-full blur-[100px]" />

                <div className="section-container relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center max-w-3xl mx-auto mb-16"
                    >
                        <span className="inline-block px-4 py-2 bg-rose-500/10 border border-rose-500/30 rounded-full text-rose-400 text-sm font-semibold mb-4">
                            Our Process
                        </span>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 tracking-tight">
                            Design{" "}
                            <span className="bg-gradient-to-r from-rose-400 to-fuchsia-400 bg-clip-text text-transparent">
                                Process & Methodology
                            </span>
                        </h2>
                        <p className="text-lg text-slate-400">
                            A research-driven, iterative process that delivers designs users love — from discovery to handoff.
                        </p>
                    </motion.div>

                    {/* Alternating timeline */}
                    <div className="relative max-w-4xl mx-auto">
                        {/* Center line */}
                        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-rose-500/50 via-pink-500/30 to-transparent" />

                        <div className="space-y-8 md:space-y-0">
                            {designProcess.map((step, i) => {
                                const isLeft = i % 2 === 0;
                                return (
                                    <motion.div
                                        key={step.phase}
                                        variants={isLeft ? slideInLeft : slideInRight}
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{ once: true, margin: "-50px" }}
                                        className={`relative flex items-center md:mb-12 ${isLeft ? "md:justify-start" : "md:justify-end"}`}
                                    >
                                        {/* Timeline dot */}
                                        <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-[#0a0a12] border-2 border-rose-500/50 items-center justify-center z-10">
                                            <span className="text-lg">{step.icon}</span>
                                        </div>

                                        {/* Card */}
                                        <div className={`w-full md:w-[calc(50%-3rem)] group`}>
                                            <div className={`bg-black/50 border border-slate-800 rounded-2xl p-6 hover:border-rose-500/40 transition-all duration-500`}>
                                                <div className="flex items-center gap-3 mb-3">
                                                    <span className={`text-sm font-bold px-3 py-1 rounded-full bg-gradient-to-r ${step.color} text-white`}>
                                                        Phase {step.phase}
                                                    </span>
                                                    <span className="md:hidden text-xl">{step.icon}</span>
                                                </div>
                                                <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                                                <p className="text-slate-400 text-sm leading-relaxed">{step.description}</p>
                                            </div>
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════
                SECTION 6 — TYPES OF DESIGN SERVICES
                ═══════════════════════════════════════════ */}
            <section className="section-padding bg-[#0d0d18]">
                <div className="section-container">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center max-w-3xl mx-auto mb-16"
                    >
                        <span className="inline-block px-4 py-2 bg-rose-500/10 border border-rose-500/30 rounded-full text-rose-400 text-sm font-semibold mb-4">
                            What We Offer
                        </span>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 tracking-tight">
                            End-to-End{" "}
                            <span className="bg-gradient-to-r from-rose-400 to-fuchsia-400 bg-clip-text text-transparent">
                                Design Services
                            </span>
                        </h2>
                        <p className="text-lg text-slate-400">
                            From user research to design systems — we cover every aspect of UI/UX design.
                        </p>
                    </motion.div>

                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                    >
                        {designServices.map((service) => (
                            <motion.div key={service.title} variants={staggerItem} className="group relative">
                                <div className={`absolute -inset-0.5 bg-gradient-to-r ${service.gradient} rounded-2xl opacity-0 group-hover:opacity-20 blur transition-opacity duration-500`} />
                                <div className="relative bg-[#0a0a12]/80 border border-slate-800 rounded-2xl p-8 hover:border-slate-700 transition-all duration-500 h-full">
                                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                                        <service.icon className="w-7 h-7 text-white" />
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                                    <p className="text-slate-400 leading-relaxed text-sm">{service.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════
                SECTION 7 — STATS
                ═══════════════════════════════════════════ */}
            <section className="py-20 bg-[#0a0a12] relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-rose-500/5 via-transparent to-pink-500/5" />
                <div className="section-container relative z-10">
                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="grid grid-cols-2 lg:grid-cols-4 gap-4"
                    >
                        {stats.map((stat) => (
                            <StatCard key={stat.label} {...stat} />
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════
                SECTION 8 — CTA
                ═══════════════════════════════════════════ */}
            <section id="contact" className="section-padding bg-[#0d0d18]">
                <div className="section-container">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="relative overflow-hidden rounded-3xl p-10 md:p-16 text-center"
                    >
                        {/* CTA background */}
                        <div className="absolute inset-0 bg-gradient-to-br from-rose-600 via-pink-600 to-fuchsia-600" />
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.15),transparent_60%)]" />
                        {/* Floating circles */}
                        <div className="absolute top-10 left-10 w-20 h-20 border border-white/10 rounded-full" />
                        <div className="absolute bottom-10 right-10 w-32 h-32 border border-white/10 rounded-full" />
                        <div className="absolute top-1/2 right-1/4 w-16 h-16 border border-white/5 rounded-full" />

                        <div className="relative z-10">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.1 }}
                                className="text-5xl mb-6"
                            >
                                🎨
                            </motion.div>
                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.15 }}
                                className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 tracking-tight"
                            >
                                Ready to Elevate
                                <br />
                                Your User Experience?
                            </motion.h2>
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.25 }}
                                className="text-lg text-white/80 max-w-2xl mx-auto mb-10"
                            >
                                Free design consultation + project estimate. We&apos;ll help you define your
                                design strategy, create user flows, and craft pixel-perfect interfaces.
                            </motion.p>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.35 }}
                                className="flex flex-col sm:flex-row items-center justify-center gap-4"
                            >
                                <button
                                    className="group inline-flex items-center gap-2 px-8 py-4 bg-black text-pink-700 font-bold rounded-full hover:shadow-2xl hover:shadow-white/20 hover:-translate-y-0.5 transition-all duration-300"
                                >
                                    Get Free Consultation
                                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </button>
                                <Link
                                    href="#projects"
                                    className="inline-flex items-center gap-2 px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-full hover:bg-white/10 transition-all duration-300"
                                >
                                    View Our Designs
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