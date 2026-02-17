"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import LeadGenPopup from "../components/home/LeadGenPopup";
import {
    SiFlutter,
    SiReact,
    SiSwift,
    SiKotlin,
    SiDart,
    SiAndroidstudio,
    SiXcode,
    SiFirebase,
    SiGoogleplay,
    SiAppstore,
    SiGraphql,
    SiRedux,
    SiGo,
    SiFastlane,
    SiGradle,
    SiJest,
} from "react-icons/si";
import {
    HiOutlineDeviceMobile,
    HiOutlineLightningBolt,
    HiOutlineShieldCheck,
    HiOutlinePuzzle,
    HiOutlineRefresh,
    HiOutlineChartBar,
    HiOutlineChatAlt2,
    HiOutlinePhotograph,
    HiOutlineBell,
    HiOutlineLocationMarker,
    HiOutlineCash,
    HiOutlineHeart,
} from "react-icons/hi";

/* ────────────────────────────────────────────────
   DATA
   ──────────────────────────────────────────────── */

const technologies = [
    { icon: SiFlutter, name: "Flutter", color: "#02569B" },
    { icon: SiReact, name: "React Native", color: "#61DAFB" },
    { icon: SiSwift, name: "Swift", color: "#F05138" },
    { icon: SiKotlin, name: "Kotlin", color: "#7F52FF" },
    { icon: SiDart, name: "Dart", color: "#0175C2" },
    { icon: SiAndroidstudio, name: "Android Studio", color: "#3DDC84" },
    { icon: SiXcode, name: "Xcode", color: "#147EFB" },
    { icon: SiFirebase, name: "Firebase", color: "#FFCA28" },
    { icon: SiGoogleplay, name: "Google Play", color: "#414141" },
    { icon: SiAppstore, name: "App Store", color: "#0D96F6" },
    { icon: SiGraphql, name: "GraphQL", color: "#E10098" },
    { icon: SiRedux, name: "Redux", color: "#764ABC" },
    { icon: SiGo, name: "Go", color: "#00ADD8" },
    { icon: SiFastlane, name: "Fastlane", color: "#00F200" },
    { icon: SiGradle, name: "Gradle", color: "#02303A" },
    { icon: SiJest, name: "Jest", color: "#C21325" },
];

const projects = [
    {
        title: "FitPulse",
        category: "Health & Fitness",
        description: "Complete fitness tracker with workout plans, heart rate monitoring, progress rings, and community challenges.",
        image: "/mobile-dev/fitness.png",
        tech: ["Flutter", "Firebase", "Dart"],
        platform: "iOS & Android",
    },
    {
        title: "VaultPay",
        category: "Fintech",
        description: "Secure mobile banking with biometric auth, instant transfers, card management, and spending analytics.",
        image: "/mobile-dev/banking.png",
        tech: ["React Native", "Node.js", "GraphQL"],
        platform: "iOS & Android",
    },
    {
        title: "ConnectHub",
        category: "Social Media",
        description: "Feature-rich social platform with stories, real-time messaging, content feeds, and profile customization.",
        image: "/mobile-dev/social.png",
        tech: ["Swift", "Kotlin", "Firebase"],
        platform: "iOS & Android",
    },
    {
        title: "LearnFlow",
        category: "EdTech",
        description: "Interactive e-learning app with video courses, quizzes, progress tracking, and achievement badges.",
        image: "/mobile-dev/elearning.png",
        tech: ["Flutter", "Go", "PostgreSQL"],
        platform: "iOS & Android",
    },
    {
        title: "Wanderly",
        category: "Travel",
        description: "All-in-one travel companion with hotel booking, flight search, itinerary planning, and local guides.",
        image: "/mobile-dev/travel.png",
        tech: ["React Native", "Redux", "AWS"],
        platform: "iOS & Android",
    },
];

const devCycle = [
    {
        phase: "01",
        title: "Ideation & Research",
        description: "Market analysis, user personas, competitive research, and feature prioritization with MoSCoW method.",
        icon: "💡",
        color: "from-violet-500 to-purple-600",
    },
    {
        phase: "02",
        title: "UX Wireframing",
        description: "Low & high-fidelity wireframes, user flow mapping, interactive prototypes, and usability testing.",
        icon: "✏️",
        color: "from-blue-500 to-indigo-600",
    },
    {
        phase: "03",
        title: "UI Design",
        description: "Pixel-perfect mobile-first designs, design systems, micro-interactions, and platform-specific guidelines.",
        icon: "🎨",
        color: "from-pink-500 to-rose-600",
    },
    {
        phase: "04",
        title: "Development",
        description: "Clean architecture, state management, API integration, push notifications, and offline-first approach.",
        icon: "⚡",
        color: "from-amber-500 to-orange-600",
    },
    {
        phase: "05",
        title: "QA & Testing",
        description: "Unit, widget, and integration tests. Device lab testing, performance profiling, and security audits.",
        icon: "🔍",
        color: "from-emerald-500 to-teal-600",
    },
    {
        phase: "06",
        title: "Store Launch",
        description: "ASO optimization, store listing graphics, staged rollout, crash analytics, and post-launch monitoring.",
        icon: "🚀",
        color: "from-red-500 to-rose-600",
    },
];

const appTypes = [
    {
        icon: HiOutlineChatAlt2,
        title: "Social & Chat Apps",
        description: "Real-time messaging, stories, feeds, voice/video calls, and community features.",
        gradient: "from-purple-500 to-violet-600",
    },
    {
        icon: HiOutlineCash,
        title: "Fintech & Banking",
        description: "Secure transactions, biometric auth, crypto wallets, budgeting tools, and PCI compliance.",
        gradient: "from-emerald-500 to-teal-600",
    },
    {
        icon: HiOutlineHeart,
        title: "Health & Wellness",
        description: "Fitness tracking, telemedicine, mental health, wearable integration, and HIPAA compliance.",
        gradient: "from-rose-500 to-pink-600",
    },
    {
        icon: HiOutlinePhotograph,
        title: "Media & Entertainment",
        description: "Streaming, podcast players, photo editing, AR filters, and content creation tools.",
        gradient: "from-amber-500 to-orange-600",
    },
    {
        icon: HiOutlineBell,
        title: "On-Demand Services",
        description: "Ride-sharing, food delivery, home services with real-time tracking and payments.",
        gradient: "from-blue-500 to-indigo-600",
    },
    {
        icon: HiOutlineLocationMarker,
        title: "Travel & Navigation",
        description: "Booking platforms, itinerary management, offline maps, and AR-guided tours.",
        gradient: "from-cyan-500 to-blue-600",
    },
];

const features = [
    { icon: HiOutlineLightningBolt, title: "60fps Performance", description: "Buttery smooth animations on every device" },
    { icon: HiOutlineShieldCheck, title: "Bank-Grade Security", description: "Biometrics, encryption, and secure storage" },
    { icon: HiOutlinePuzzle, title: "Modular Architecture", description: "Clean, maintainable, scalable codebase" },
    { icon: HiOutlineRefresh, title: "OTA Updates", description: "Push updates without app store review" },
    { icon: HiOutlineChartBar, title: "Analytics Built-in", description: "Track engagement, retention, and conversions" },
    { icon: HiOutlineDeviceMobile, title: "Cross-Platform", description: "One codebase, iOS + Android + Web" },
];

const stats = [
    { value: 80, suffix: "+", label: "Apps Launched" },
    { value: 4.8, suffix: "★", label: "Avg Store Rating", decimal: true },
    { value: 2, suffix: "M+", label: "Total Downloads" },
    { value: 99.9, suffix: "%", label: "Crash-Free Rate", decimal: true },
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

function useCounter(target: number, duration = 2000, decimal = false) {
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
                setCount(decimal ? parseFloat(start.toFixed(1)) : Math.floor(start));
            }
        }, 16);
        return () => clearInterval(timer);
    }, [isInView, target, duration, decimal]);

    return { count, ref };
}

function StatCard({ value, suffix, label, decimal }: { value: number; suffix: string; label: string; decimal?: boolean }) {
    const { count, ref } = useCounter(value, 2000, decimal);
    return (
        <motion.div ref={ref} variants={staggerItem} className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-violet-500 to-purple-600 rounded-2xl opacity-0 group-hover:opacity-30 blur transition-opacity duration-500" />
            <div className="relative bg-slate-900/70 border border-slate-800 rounded-2xl p-6 text-center hover:border-violet-500/40 transition-all duration-300">
                <div className="text-3xl sm:text-4xl font-bold text-white mb-1">
                    {decimal ? count.toFixed(1) : count}
                    <span className="text-violet-400">{suffix}</span>
                </div>
                <div className="text-slate-400 text-sm font-medium">{label}</div>
            </div>
        </motion.div>
    );
}

/* ────────────────────────────────────────────────
   MAIN PAGE
   ──────────────────────────────────────────────── */

export default function MobileDevelopmentPage() {
    const [activeProject, setActiveProject] = useState(0);
    const [showPopup, setShowPopup] = useState(false);
    const heroRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
    const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
    const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

    // Auto-cycle projects
    useEffect(() => {
        const timer = setInterval(() => {
            setActiveProject((p) => (p >= projects.length - 1 ? 0 : p + 1));
        }, 4000);
        return () => clearInterval(timer);
    }, []);

    return (
        <main className="min-h-screen bg-[#0a0a1a]">
            <Navbar />

            {/* ═══════════════════════════════════════════
                SECTION 1 — HERO (Parallax + Phone Mockup)
                ═══════════════════════════════════════════ */}
            <section ref={heroRef} className="relative min-h-screen flex items-center overflow-hidden">
                {/* Animated background with purple tones */}
                <motion.div style={{ y: heroY }} className="absolute inset-0">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a1a] via-[#1a0a2e] to-[#0a0a1a]" />
                    <div className="absolute top-20 left-1/4 w-[500px] h-[500px] bg-violet-600/15 rounded-full blur-[120px]" />
                    <div className="absolute bottom-20 right-1/4 w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-[100px]" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-fuchsia-500/5 rounded-full blur-[150px]" />
                    {/* Grid pattern */}
                    <div
                        className="absolute inset-0 opacity-[0.04]"
                        style={{
                            backgroundImage: `linear-gradient(rgba(139,92,246,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(139,92,246,0.3) 1px, transparent 1px)`,
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
                                <span className="inline-flex items-center gap-2 px-4 py-2 bg-violet-500/10 border border-violet-500/30 rounded-full text-violet-400 text-sm font-medium mb-8">
                                    <span className="w-2 h-2 bg-violet-400 rounded-full animate-pulse" />
                                    Mobile App Development
                                </span>
                            </motion.div>

                            <motion.h1
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.7, delay: 0.1 }}
                                className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6 leading-[1.1] tracking-tight"
                            >
                                Apps That
                                <br />
                                <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-fuchsia-400 bg-clip-text text-transparent">
                                    Users Love
                                </span>
                                <br />
                                to Use
                            </motion.h1>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                className="text-lg sm:text-xl text-slate-400 max-w-lg mx-auto lg:mx-0 mb-10 leading-relaxed"
                            >
                                Native & cross-platform mobile apps built for performance,
                                beautiful UX, and millions of users. From MVP to scale.
                            </motion.p>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.3 }}
                                className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-12"
                            >
                                <button
                                    onClick={() => setShowPopup(true)}
                                    className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-violet-600 to-purple-600 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-violet-500/40 transition-all duration-300"
                                >
                                    Build Your App
                                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </button>
                                <Link
                                    href="#projects"
                                    className="inline-flex items-center gap-2 px-8 py-4 border border-slate-600 text-slate-300 font-semibold rounded-full hover:bg-slate-800/50 hover:border-violet-500/50 transition-all duration-300"
                                >
                                    See Our Apps
                                </Link>
                            </motion.div>

                            {/* Platform badges */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.5 }}
                                className="flex items-center justify-center lg:justify-start gap-3"
                            >
                                <span className="text-slate-500 text-sm">Available on:</span>
                                <div className="flex gap-2">
                                    <span className="px-3 py-1.5 bg-slate-800/60 border border-slate-700/50 rounded-full text-xs text-slate-300 font-medium flex items-center gap-1.5">
                                        <SiAppstore className="w-3.5 h-3.5" /> iOS
                                    </span>
                                    <span className="px-3 py-1.5 bg-slate-800/60 border border-slate-700/50 rounded-full text-xs text-slate-300 font-medium flex items-center gap-1.5">
                                        <SiGoogleplay className="w-3.5 h-3.5" /> Android
                                    </span>
                                </div>
                            </motion.div>
                        </div>

                        {/* Right — Phone Mockup Stack */}
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.9, delay: 0.3 }}
                            className="relative flex items-center justify-center"
                        >
                            {/* Glow */}
                            <div className="absolute w-80 h-80 bg-violet-500/20 rounded-full blur-[80px]" />

                            {/* Phone frame */}
                            <div className="relative w-[280px] sm:w-[300px]">
                                <div className="relative bg-slate-900 rounded-[3rem] p-3 border-2 border-slate-700/60 shadow-2xl shadow-violet-500/10">
                                    {/* Notch */}
                                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-slate-900 rounded-b-2xl z-20" />
                                    <div className="relative overflow-hidden rounded-[2.3rem] aspect-[9/19.5]">
                                        <Image
                                            src={projects[activeProject].image}
                                            alt={projects[activeProject].title}
                                            fill
                                            className="object-cover transition-all duration-700"
                                        />
                                    </div>
                                </div>

                                {/* Floating label */}
                                <motion.div
                                    key={activeProject}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.4 }}
                                    className="absolute -right-4 sm:-right-8 top-16 px-4 py-2 bg-violet-600/90 backdrop-blur-sm text-white text-sm font-semibold rounded-full shadow-lg"
                                >
                                    {projects[activeProject].category}
                                </motion.div>
                                <motion.div
                                    animate={{ y: [0, -8, 0] }}
                                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                    className="absolute -left-4 sm:-left-8 bottom-24 px-4 py-2 bg-slate-800 border border-violet-500/30 text-violet-400 text-sm font-semibold rounded-full shadow-lg"
                                >
                                    📱 {projects[activeProject].platform}
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
                        <div className="w-1.5 h-1.5 bg-violet-400 rounded-full" />
                    </motion.div>
                </motion.div>
            </section>

            {/* ═══════════════════════════════════════════
                SECTION 2 — TECHNOLOGY MARQUEE
                ═══════════════════════════════════════════ */}
            <section className="py-16 bg-[#0d0d20] border-y border-slate-800/50 overflow-hidden">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="section-container mb-8"
                >
                    <p className="text-center text-slate-500 text-sm font-semibold uppercase tracking-widest">
                        Our Mobile Tech Stack
                    </p>
                </motion.div>

                <div className="relative">
                    <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#0d0d20] to-transparent z-10" />
                    <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#0d0d20] to-transparent z-10" />

                    <div className="flex animate-marquee" style={{ width: "max-content" }}>
                        {[...technologies, ...technologies].map((tech, i) => (
                            <div key={`${tech.name}-${i}`} className="flex flex-col items-center justify-center mx-8 group cursor-pointer">
                                <div className="w-16 h-16 flex items-center justify-center rounded-2xl bg-slate-800/50 border border-slate-700/50 group-hover:border-violet-500/50 group-hover:bg-slate-800 transition-all duration-300 mb-2">
                                    <tech.icon className="w-8 h-8 transition-all duration-300 group-hover:scale-110" style={{ color: tech.color }} />
                                </div>
                                <span className="text-xs text-slate-500 group-hover:text-slate-300 transition-colors font-medium">{tech.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════
                SECTION 3 — WHY US (Feature Bento Grid)
                ═══════════════════════════════════════════ */}
            <section className="section-padding bg-[#0a0a1a]">
                <div className="section-container">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center max-w-3xl mx-auto mb-16"
                    >
                        <span className="inline-block px-4 py-2 bg-violet-500/10 border border-violet-500/30 rounded-full text-violet-400 text-sm font-semibold mb-4">
                            Why Choose Us
                        </span>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 tracking-tight">
                            Built for{" "}
                            <span className="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
                                Mobile-First
                            </span>
                        </h2>
                        <p className="text-lg text-slate-400">
                            Every decision we make optimizes for the mobile experience.
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
                                className={`group relative overflow-hidden rounded-2xl border border-slate-800 p-6 hover:border-violet-500/40 transition-all duration-500 ${i === 0 ? "sm:col-span-2 lg:col-span-1" : ""
                                    }`}
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-violet-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                <div className="relative z-10">
                                    <div className="w-12 h-12 rounded-xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                                        <f.icon className="w-6 h-6 text-violet-400" />
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
                SECTION 4 — PROJECTS (Card Gallery)
                ═══════════════════════════════════════════ */}
            <section id="projects" className="section-padding bg-[#0d0d20]">
                <div className="section-container">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center max-w-3xl mx-auto mb-16"
                    >
                        <span className="inline-block px-4 py-2 bg-violet-500/10 border border-violet-500/30 rounded-full text-violet-400 text-sm font-semibold mb-4">
                            Our Portfolio
                        </span>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 tracking-tight">
                            Apps We&apos;ve{" "}
                            <span className="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
                                Shipped
                            </span>
                        </h2>
                        <p className="text-lg text-slate-400">
                            Apps loved by millions — designed, developed, and launched by our team.
                        </p>
                    </motion.div>

                    {/* Horizontal scroll cards */}
                    <div className="relative">
                        <div className="flex gap-6 overflow-x-auto pb-6 scrollbar-hide snap-x snap-mandatory" style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}>
                            {projects.map((project, i) => (
                                <motion.div
                                    key={project.title}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1, duration: 0.5 }}
                                    className="flex-shrink-0 w-[340px] snap-center group"
                                >
                                    <div className="relative bg-slate-900/60 border border-slate-800 rounded-3xl overflow-hidden hover:border-violet-500/30 transition-all duration-500">
                                        {/* Image */}
                                        <div className="relative h-56 overflow-hidden">
                                            <Image
                                                src={project.image}
                                                alt={project.title}
                                                fill
                                                className="object-cover group-hover:scale-105 transition-transform duration-700"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-60" />
                                            <div className="absolute top-3 left-3 flex gap-2">
                                                <span className="px-2.5 py-1 bg-violet-500/80 backdrop-blur-sm text-white text-xs font-semibold rounded-full">
                                                    {project.category}
                                                </span>
                                            </div>
                                            <div className="absolute bottom-3 right-3">
                                                <span className="px-2.5 py-1 bg-slate-900/80 backdrop-blur-sm text-slate-300 text-xs font-medium rounded-full border border-slate-700/50">
                                                    {project.platform}
                                                </span>
                                            </div>
                                        </div>
                                        {/* Content */}
                                        <div className="p-5">
                                            <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                                            <p className="text-slate-400 text-sm leading-relaxed mb-4">{project.description}</p>
                                            <div className="flex flex-wrap gap-2">
                                                {project.tech.map((t) => (
                                                    <span key={t} className="px-2.5 py-1 bg-slate-800 border border-slate-700 text-slate-300 text-xs font-medium rounded-full">
                                                        {t}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                        {/* Scroll hint */}
                        <div className="flex items-center justify-center gap-2 mt-4 text-slate-500 text-sm">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
                            </svg>
                            Swipe to explore
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════
                SECTION 5 — MOBILE DEV LIFECYCLE (Vertical Timeline)
                ═══════════════════════════════════════════ */}
            <section className="section-padding bg-[#0a0a1a] relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-violet-500/5 rounded-full blur-[120px]" />
                <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-purple-500/5 rounded-full blur-[100px]" />

                <div className="section-container relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center max-w-3xl mx-auto mb-16"
                    >
                        <span className="inline-block px-4 py-2 bg-violet-500/10 border border-violet-500/30 rounded-full text-violet-400 text-sm font-semibold mb-4">
                            Development Process
                        </span>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 tracking-tight">
                            Mobile App{" "}
                            <span className="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
                                Development Cycle
                            </span>
                        </h2>
                        <p className="text-lg text-slate-400">
                            From first sketch to App Store — a proven process for building world-class mobile apps.
                        </p>
                    </motion.div>

                    {/* Alternating timeline */}
                    <div className="relative max-w-4xl mx-auto">
                        {/* Center line */}
                        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-violet-500/50 via-purple-500/30 to-transparent" />

                        <div className="space-y-8 md:space-y-0">
                            {devCycle.map((step, i) => {
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
                                        <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-[#0a0a1a] border-2 border-violet-500/50 items-center justify-center z-10">
                                            <span className="text-lg">{step.icon}</span>
                                        </div>

                                        {/* Card */}
                                        <div className={`w-full md:w-[calc(50%-3rem)] group`}>
                                            <div className={`bg-slate-900/50 border border-slate-800 rounded-2xl p-6 hover:border-violet-500/40 transition-all duration-500`}>
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
                SECTION 6 — TYPES OF MOBILE APPS
                ═══════════════════════════════════════════ */}
            <section className="section-padding bg-[#0d0d20]">
                <div className="section-container">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center max-w-3xl mx-auto mb-16"
                    >
                        <span className="inline-block px-4 py-2 bg-violet-500/10 border border-violet-500/30 rounded-full text-violet-400 text-sm font-semibold mb-4">
                            What We Build
                        </span>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 tracking-tight">
                            Any App,{" "}
                            <span className="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
                                Any Industry
                            </span>
                        </h2>
                        <p className="text-lg text-slate-400">
                            We bring mobile expertise to every industry and app category.
                        </p>
                    </motion.div>

                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                    >
                        {appTypes.map((app) => (
                            <motion.div key={app.title} variants={staggerItem} className="group relative">
                                <div className={`absolute -inset-0.5 bg-gradient-to-r ${app.gradient} rounded-2xl opacity-0 group-hover:opacity-20 blur transition-opacity duration-500`} />
                                <div className="relative bg-[#0a0a1a]/80 border border-slate-800 rounded-2xl p-8 hover:border-slate-700 transition-all duration-500 h-full">
                                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${app.gradient} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
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
                SECTION 7 — STATS
                ═══════════════════════════════════════════ */}
            <section className="py-20 bg-[#0a0a1a] relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-violet-500/5 via-transparent to-purple-500/5" />
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
            <section id="contact" className="section-padding bg-[#0d0d20]">
                <div className="section-container">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="relative overflow-hidden rounded-3xl p-10 md:p-16 text-center"
                    >
                        {/* CTA background */}
                        <div className="absolute inset-0 bg-gradient-to-br from-violet-600 via-purple-600 to-fuchsia-600" />
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
                                📱
                            </motion.div>
                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.15 }}
                                className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 tracking-tight"
                            >
                                Got an App Idea?
                                <br />
                                Let&apos;s Make It Real.
                            </motion.h2>
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.25 }}
                                className="text-lg text-white/80 max-w-2xl mx-auto mb-10"
                            >
                                Free consultation + project estimate. We&apos;ll help you define scope,
                                choose tech, and plan your MVP launch.
                            </motion.p>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.35 }}
                                className="flex flex-col sm:flex-row items-center justify-center gap-4"
                            >
                                <button
                                    onClick={() => setShowPopup(true)}
                                    className="group inline-flex items-center gap-2 px-8 py-4 bg-white text-purple-700 font-bold rounded-full hover:shadow-2xl hover:shadow-white/20 hover:-translate-y-0.5 transition-all duration-300"
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
                                    View Our Apps
                                </Link>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </section>

            <Footer />

            <LeadGenPopup isOpen={showPopup} onClose={() => setShowPopup(false)} />
        </main>
    );
}