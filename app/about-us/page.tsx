"use client";

import { useState, useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import {
    HiOutlineLightBulb,
    HiOutlineGlobeAlt,
    HiOutlineHeart,
    HiOutlineShieldCheck,
    HiOutlineTrendingUp,
    HiOutlineUserGroup,
    HiOutlineSparkles,
    HiOutlineClock,
    HiOutlineArrowRight,
    HiOutlineCheckCircle,
    HiOutlineStar,
    HiOutlineCode,
} from "react-icons/hi";
import { FaLinkedinIn, FaTwitter, FaGithub } from "react-icons/fa";

/* ────────────────────────────────────────────────
   DATA
   ──────────────────────────────────────────────── */

const stats = [
    { value: "5+", label: "Years in Business" },
    { value: "150+", label: "Projects Delivered" },
    { value: "120+", label: "Happy Clients" },
    { value: "20+", label: "Countries Reached" },
];

const values = [
    {
        icon: HiOutlineHeart,
        title: "Client-First",
        description: "Your success is our metric. We obsess over outcomes, not outputs.",
        gradient: "from-rose-500 to-pink-500",
    },
    {
        icon: HiOutlineShieldCheck,
        title: "Radical Transparency",
        description: "No hidden fees, no smoke and mirrors. Just honest communication at every step.",
        gradient: "from-emerald-500 to-teal-500",
    },
    {
        icon: HiOutlineLightBulb,
        title: "Innovation First",
        description: "We stay ahead of the curve so our clients never fall behind it.",
        gradient: "from-amber-500 to-orange-500",
    },
    {
        icon: HiOutlineTrendingUp,
        title: "Growth Mindset",
        description: "We build for scale — every architecture decision is made with tomorrow in mind.",
        gradient: "from-cyan-500 to-blue-500",
    },
    {
        icon: HiOutlineUserGroup,
        title: "Team Spirit",
        description: "Great products are built by great teams. We invest deeply in our people.",
        gradient: "from-violet-500 to-purple-500",
    },
    {
        icon: HiOutlineSparkles,
        title: "Craft & Quality",
        description: "We sweat the details because details are what separate good from great.",
        gradient: "from-fuchsia-500 to-pink-500",
    },
];

const founders = [
    {
        name: "Masoom Shaik",
        role: "CEO & Co-Founder",
        bio: "A visionary entrepreneur with 5+ years of experience in digital product strategy and business development. Noor leads the company's vision, client relationships, and growth strategy — turning ambitious ideas into profitable digital businesses.",
        image: "/team/founder-1.png",
        fallback: "NS",
        gradient: "from-cyan-500 to-teal-500",
        linkedin: "#",
        twitter: "#",
        github: "#",
        tags: ["Product Strategy", "Business Development", "Leadership"],
    },
    {
        name: "Zeeshan Siddique",
        role: "CTO & Co-Founder",
        bio: "Full-stack engineer and system architect with a deep love for clean code and elegant solutions. Aarav oversees all engineering decisions, technical hiring, and ensures every product is built with performance, security, and scalability at its core.",
        image: "/team/founder-2.png",
        fallback: "AM",
        gradient: "from-violet-500 to-purple-500",
        linkedin: "#",
        twitter: "#",
        github: "#",
        tags: ["Architecture", "Full-Stack", "Engineering"],
    },
];

const team = [
    {
        name: "Swati Ranjan",
        role: "Lead UI/UX Designer",
        image: "/team/team-1.png",
        fallback: "PK",
        gradient: "from-rose-500 to-pink-500",
    },
    {
        name: "Rohan Das",
        role: "Senior Frontend Engineer",
        image: "/team/team-2.png",
        fallback: "RD",
        gradient: "from-cyan-500 to-blue-500",
    },
    {
        name: "Shamshad Khan",
        role: "SEO & Marketing Lead",
        image: "/team/team-3.png",
        fallback: "AS",
        gradient: "from-amber-500 to-orange-500",
    },
    {
        name: "Masoom Shaik",
        role: "Mobile Developer",
        image: "/team/team-4.png",
        fallback: "KV",
        gradient: "from-emerald-500 to-teal-500",
    },
    {
        name: "Parth",
        role: "Web3 & Blockchain Lead",
        image: "/team/team-5.png",
        fallback: "SJ",
        gradient: "from-violet-500 to-fuchsia-500",
    },
    {
        name: "Nafeesh ahmad",
        role: "Project Manager",
        image: "/team/team-6.png",
        fallback: "ZK",
        gradient: "from-fuchsia-500 to-pink-500",
    },
];

const roadmap = [
    {
        year: "2020",
        quarter: "Founded",
        title: "The Beginning",
        description: "NextModernLabs was founded with a single mission — to make world-class digital products accessible to every business, not just Fortune 500 companies.",
        icon: "🌱",
        done: true,
    },
    {
        year: "2021",
        quarter: "Q3",
        title: "First 25 Clients",
        description: "Scaled to 25+ clients across India and the US, launched our first SaaS platform for a fintech startup, and grew the core team to 8 people.",
        icon: "🚀",
        done: true,
    },
    {
        year: "2022",
        quarter: "Q1",
        title: "Expanded to Web3",
        description: "Launched our Web3 & Blockchain division, delivering smart contract audits, NFT platforms, and DeFi integrations for clients in 5 countries.",
        icon: "⛓️",
        done: true,
    },
    {
        year: "2023",
        quarter: "Q2",
        title: "100+ Projects Milestone",
        description: "Crossed 100 projects delivered. Opened our dedicated Design Studio, hired senior UX researchers, and established our design-led product process.",
        icon: "🏆",
        done: true,
    },
    {
        year: "2024",
        quarter: "Q4",
        title: "AI Integration Practice",
        description: "Launched our AI engineering vertical — helping clients integrate LLMs, RAG pipelines, and intelligent automation into their existing products.",
        icon: "🤖",
        done: true,
    },
    {
        year: "2025",
        quarter: "In Progress",
        title: "Global Expansion",
        description: "Establishing partnerships in the UAE and UK markets, growing to 25+ full-time team members, and launching our first SaaS product under the NextModernLabs brand.",
        icon: "🌍",
        done: false,
    },
    {
        year: "2026",
        quarter: "Vision",
        title: "Product Studio",
        description: "Transform into a hybrid agency + product studio — shipping our own suite of developer tools and AI-powered business applications alongside client work.",
        icon: "✨",
        done: false,
    },
];

/* ────────────────────────────────────────────────
   ANIMATION VARIANTS
   ──────────────────────────────────────────────── */

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
};

const staggerItem = {
    hidden: { opacity: 0, y: 25 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const fadeInLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const fadeInRight = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

/* ────────────────────────────────────────────────
   AVATAR COMPONENT (handles missing images gracefully)
   ──────────────────────────────────────────────── */

function Avatar({ src, alt, fallback, gradient, size = "lg" }: {
    src: string;
    alt: string;
    fallback: string;
    gradient: string;
    size?: "lg" | "xl";
}) {
    const [imgError, setImgError] = useState(false);
    const dim = size === "xl" ? 200 : 120;
    const textSize = size === "xl" ? "text-4xl" : "text-2xl";
    const containerClass = size === "xl" ? "w-48 h-48 sm:w-56 sm:h-56" : "w-24 h-24";

    if (imgError) {
        return (
            <div className={`${containerClass} rounded-2xl bg-gradient-to-br ${gradient} flex items-center justify-center`}>
                <span className={`${textSize} font-bold text-white`}>{fallback}</span>
            </div>
        );
    }

    return (
        <div className={`${containerClass} rounded-2xl overflow-hidden relative`}>
            <Image
                src={src}
                alt={alt}
                width={dim}
                height={dim}
                className="object-cover w-full h-full"
                onError={() => setImgError(true)}
            />
        </div>
    );
}

/* ────────────────────────────────────────────────
   MAIN PAGE
   ──────────────────────────────────────────────── */

export default function AboutUsPage() {
    const heroRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
    const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
    const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

    return (
        <main className="min-h-screen bg-[#08080f]">
            <Navbar />

            {/* ═══════════════════════════════════════════
                HERO
                ═══════════════════════════════════════════ */}
            <section ref={heroRef} className="relative min-h-screen flex items-center overflow-hidden">
                {/* Animated BG */}
                <motion.div style={{ y: heroY }} className="absolute inset-0">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#08080f] via-[#081820] to-[#08080f]" />
                    <div className="absolute top-20 left-1/3 w-[600px] h-[600px] bg-cyan-600/12 rounded-full blur-[140px]" />
                    <div className="absolute bottom-20 right-1/3 w-[500px] h-[500px] bg-teal-500/8 rounded-full blur-[120px]" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-emerald-500/4 rounded-full blur-[160px]" />
                    {/* Subtle hex grid feel */}
                    <div
                        className="absolute inset-0 opacity-[0.025]"
                        style={{
                            backgroundImage: `linear-gradient(rgba(6,182,212,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(6,182,212,0.4) 1px, transparent 1px)`,
                            backgroundSize: "60px 60px",
                        }}
                    />
                </motion.div>

                <motion.div style={{ opacity: heroOpacity }} className="relative z-10 section-container pt-32 pb-24">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        {/* Left */}
                        <div>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                            >
                                <span className="inline-flex items-center gap-2 px-5 py-2.5 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-cyan-400 text-sm font-semibold mb-8">
                                    <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
                                    About NextModernLabs
                                </span>
                            </motion.div>

                            <motion.h1
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.7, delay: 0.1 }}
                                className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-7 leading-[1.05] tracking-tight"
                            >
                                We&apos;re the Team
                                <br />
                                <span className="bg-gradient-to-r from-cyan-400 via-teal-400 to-emerald-400 bg-clip-text text-transparent">
                                    Behind the Code
                                </span>
                            </motion.h1>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                className="text-xl text-slate-400 max-w-xl mb-10 leading-relaxed"
                            >
                                NextModernLabs is a modern digital agency on a mission to make
                                world-class technology accessible to every business — from scrappy
                                startups to scaling enterprises.
                            </motion.p>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.3 }}
                                className="flex flex-col sm:flex-row gap-4"
                            >
                                <button
                                    className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-teal-500 text-white font-bold rounded-full hover:shadow-2xl hover:shadow-cyan-500/40 hover:-translate-y-0.5 transition-all duration-300"
                                >
                                    Work With Us
                                    <HiOutlineArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </button>
                                <Link
                                    href="#team"
                                    className="inline-flex items-center gap-2 px-8 py-4 border border-slate-600 text-slate-300 font-semibold rounded-full hover:bg-[#111111]/50 hover:border-cyan-500/50 transition-all duration-300"
                                >
                                    Meet the Team
                                </Link>
                            </motion.div>
                        </div>

                        {/* Right — Stats Card */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            className="relative hidden lg:block"
                        >
                            <div className="absolute -inset-8 bg-gradient-to-r from-cyan-500/15 to-teal-500/15 rounded-3xl blur-3xl" />
                            <div className="relative bg-black/80 backdrop-blur-sm rounded-3xl border border-slate-700/60 p-8 shadow-2xl">
                                {/* Header */}
                                <div className="flex items-center gap-2 mb-6">
                                    <div className="w-3 h-3 rounded-full bg-red-500" />
                                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                                    <div className="w-3 h-3 rounded-full bg-green-500" />
                                    <span className="ml-3 text-neutral-400 text-sm font-mono">company-stats.json</span>
                                </div>

                                {/* Stats grid */}
                                <div className="grid grid-cols-2 gap-4 mb-6">
                                    {stats.map((stat) => (
                                        <div key={stat.label} className="bg-[#111111]/60 rounded-xl p-4 border border-slate-700/50">
                                            <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                                            <div className="text-neutral-400 text-xs font-medium">{stat.label}</div>
                                        </div>
                                    ))}
                                </div>

                                {/* Tag cloud */}
                                <div className="flex flex-wrap gap-2">
                                    {["React", "Next.js", "Figma", "Web3", "Node.js", "AI/ML", "Flutter", "AWS"].map((t) => (
                                        <span key={t} className="px-3 py-1 bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-medium rounded-full">
                                            {t}
                                        </span>
                                    ))}
                                </div>

                                {/* Floating badge */}
                                <motion.div
                                    animate={{ y: [0, -6, 0] }}
                                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                                    className="absolute -top-4 -right-4 px-4 py-2 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-full text-white text-sm font-bold shadow-lg shadow-cyan-500/30"
                                >
                                    🏆 Top Agency 2025
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
                        transition={{ duration: 2, repeat: Infinity }}
                        className="w-6 h-10 border-2 border-slate-600 rounded-full flex justify-center pt-2"
                    >
                        <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full" />
                    </motion.div>
                </motion.div>
            </section>

            {/* ═══════════════════════════════════════════
                ABOUT US SECTION
                ═══════════════════════════════════════════ */}
            <section className="section-padding bg-[#0c0c18]">
                <div className="section-container">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        {/* Left */}
                        <motion.div
                            variants={fadeInLeft}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                        >
                            <span className="inline-block px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-cyan-400 text-sm font-semibold mb-6">
                                Our Story
                            </span>
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 tracking-tight leading-tight">
                                Built on the Belief That{" "}
                                <span className="bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
                                    Technology Levels the Playing Field
                                </span>
                            </h2>
                            <div className="space-y-4 text-slate-400 leading-relaxed">
                                <p>
                                    NextModernLabs was founded in 2020 with a simple but bold idea: great software
                                    shouldn&apos;t only be available to companies with deep pockets. We started as a
                                    two-person team taking on freelance projects from a shared co-working space in
                                    Bangalore — and haven&apos;t looked back since.
                                </p>
                                <p>
                                    Today we&apos;re a full-service digital agency of 20+ specialists — engineers,
                                    designers, marketers, and strategists — working with clients across India, the US,
                                    UAE, and the UK. We&apos;ve delivered 150+ projects across fintech, healthcare,
                                    e-commerce, education, and Web3.
                                </p>
                                <p>
                                    What makes us different isn&apos;t just our technical skill — it&apos;s our
                                    relentless obsession with client outcomes. We don&apos;t ship features; we ship results.
                                </p>
                            </div>

                            <div className="mt-8 flex flex-wrap gap-3">
                                {["Est. 2020", "Bangalore, India", "Remote-First", "20+ Team Members"].map((t) => (
                                    <span key={t} className="flex items-center gap-2 px-4 py-2 bg-[#111111]/60 border border-slate-700/50 text-slate-300 text-sm rounded-full">
                                        <HiOutlineCheckCircle className="w-4 h-4 text-emerald-400" />
                                        {t}
                                    </span>
                                ))}
                            </div>
                        </motion.div>

                        {/* Right — Values */}
                        <motion.div
                            variants={staggerContainer}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
                        >
                            {values.map((value) => (
                                <motion.div key={value.title} variants={staggerItem} className="group">
                                    <div className="bg-black/60 border border-slate-800 rounded-2xl p-5 hover:border-slate-700 transition-all duration-300 h-full">
                                        <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${value.gradient} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300`}>
                                            <value.icon className="w-5 h-5 text-white" />
                                        </div>
                                        <h3 className="text-white font-bold text-sm mb-1">{value.title}</h3>
                                        <p className="text-neutral-400 text-xs leading-relaxed">{value.description}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════
                VISION & MISSION
                ═══════════════════════════════════════════ */}
            <section className="section-padding bg-[#08080f] relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/4 via-transparent to-teal-500/4" />
                <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-cyan-500/6 rounded-full blur-[120px]" />

                <div className="section-container relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center max-w-3xl mx-auto mb-16"
                    >
                        <span className="inline-block px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-cyan-400 text-sm font-semibold mb-4">
                            What Drives Us
                        </span>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
                            Vision &{" "}
                            <span className="bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">
                                Mission
                            </span>
                        </h2>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                        {/* Vision */}
                        <motion.div
                            variants={fadeInLeft}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="relative group"
                        >
                            <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-3xl opacity-0 group-hover:opacity-20 blur transition-opacity duration-500" />
                            <div className="relative bg-black/60 border border-slate-800 rounded-3xl p-10 h-full hover:border-cyan-500/30 transition-all duration-300">
                                <div className="text-5xl mb-6">🔭</div>
                                <div className="inline-block px-3 py-1 bg-cyan-500/15 border border-cyan-500/30 rounded-full text-cyan-400 text-xs font-bold mb-4 uppercase tracking-wider">
                                    Vision
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-4">The North Star</h3>
                                <p className="text-slate-400 leading-relaxed text-lg">
                                    To become the most trusted technology partner for the next
                                    generation of startups and growing companies worldwide — a studio
                                    where ambitious ideas meet exceptional execution.
                                </p>
                                <div className="mt-8 pt-6 border-t border-slate-800">
                                    <p className="text-neutral-400 text-sm italic">
                                        &ldquo;Technology is the great equaliser. We exist to make sure more
                                        businesses can use it to their full potential.&rdquo;
                                    </p>
                                    <p className="text-cyan-400 text-sm font-semibold mt-2">— Noor Shanu, CEO</p>
                                </div>
                            </div>
                        </motion.div>

                        {/* Mission */}
                        <motion.div
                            variants={fadeInRight}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="relative group"
                        >
                            <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-3xl opacity-0 group-hover:opacity-20 blur transition-opacity duration-500" />
                            <div className="relative bg-black/60 border border-slate-800 rounded-3xl p-10 h-full hover:border-emerald-500/30 transition-all duration-300">
                                <div className="text-5xl mb-6">🎯</div>
                                <div className="inline-block px-3 py-1 bg-emerald-500/15 border border-emerald-500/30 rounded-full text-emerald-400 text-xs font-bold mb-4 uppercase tracking-wider">
                                    Mission
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-4">What We Do Every Day</h3>
                                <p className="text-slate-400 leading-relaxed text-lg">
                                    To help businesses grow through clean design, smart engineering,
                                    and data-driven strategies — delivering pixel-perfect products
                                    that solve real problems and create real value.
                                </p>
                                <div className="mt-8 space-y-3">
                                    {["Build products that outlast trends", "Prioritise outcomes over outputs", "Partner, not just deliver"].map((item) => (
                                        <div key={item} className="flex items-center gap-3 text-slate-300 text-sm">
                                            <HiOutlineCheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                                            {item}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════
                FOUNDERS
                ═══════════════════════════════════════════ */}
            <section className="section-padding bg-[#0c0c18]">
                <div className="section-container">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center max-w-3xl mx-auto mb-16"
                    >
                        <span className="inline-block px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-cyan-400 text-sm font-semibold mb-4">
                            Leadership
                        </span>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 tracking-tight">
                            Meet Our{" "}
                            <span className="bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">
                                Founders
                            </span>
                        </h2>
                        <p className="text-lg text-slate-400">
                            Two builders who turned a shared belief into a global agency.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                        {founders.map((founder, i) => (
                            <motion.div
                                key={founder.name}
                                variants={i % 2 === 0 ? fadeInLeft : fadeInRight}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                className="group relative"
                            >
                                <div className={`absolute -inset-0.5 bg-gradient-to-r ${founder.gradient} rounded-3xl opacity-0 group-hover:opacity-20 blur transition-opacity duration-500`} />
                                <div className="relative bg-black/60 border border-slate-800 rounded-3xl p-8 hover:border-slate-700 transition-all duration-300">
                                    <div className="flex items-start gap-6 mb-6">
                                        {/* Avatar */}
                                        <div className="relative flex-shrink-0">
                                            <Avatar
                                                src={founder.image}
                                                alt={founder.name}
                                                fallback={founder.fallback}
                                                gradient={founder.gradient}
                                                size="lg"
                                            />
                                            <div className={`absolute -bottom-2 -right-2 w-7 h-7 rounded-full bg-gradient-to-br ${founder.gradient} flex items-center justify-center`}>
                                                <HiOutlineStar className="w-3.5 h-3.5 text-white" />
                                            </div>
                                        </div>

                                        <div className="flex-1">
                                            <h3 className="text-2xl font-bold text-white mb-1">{founder.name}</h3>
                                            <p className={`text-sm font-semibold bg-gradient-to-r ${founder.gradient} bg-clip-text text-transparent mb-3`}>
                                                {founder.role}
                                            </p>
                                            {/* Social links */}
                                            <div className="flex gap-2">
                                                {[
                                                    { icon: FaLinkedinIn, href: founder.linkedin, label: `${founder.name} LinkedIn` },
                                                    { icon: FaTwitter, href: founder.twitter, label: `${founder.name} Twitter` },
                                                    { icon: FaGithub, href: founder.github, label: `${founder.name} GitHub` },
                                                ].map(({ icon: Icon, href, label }) => (
                                                    <a
                                                        key={label}
                                                        href={href}
                                                        aria-label={label}
                                                        className="w-8 h-8 rounded-lg bg-[#111111] border border-slate-700 flex items-center justify-center text-slate-400 hover:text-white hover:border-cyan-500/50 transition-all duration-300"
                                                    >
                                                        <Icon className="w-3.5 h-3.5" />
                                                    </a>
                                                ))}
                                            </div>
                                        </div>
                                    </div>

                                    <p className="text-slate-400 text-sm leading-relaxed mb-5">{founder.bio}</p>

                                    {/* Tags */}
                                    <div className="flex flex-wrap gap-2">
                                        {founder.tags.map((tag) => (
                                            <span key={tag} className="px-3 py-1 bg-[#111111]/80 border border-slate-700/60 text-slate-300 text-xs font-medium rounded-full">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════
                ROADMAP
                ═══════════════════════════════════════════ */}
            <section className="section-padding bg-[#08080f] relative overflow-hidden">
                <div className="absolute right-0 top-0 w-[400px] h-[400px] bg-teal-500/5 rounded-full blur-[120px]" />
                <div className="absolute left-0 bottom-0 w-[300px] h-[300px] bg-cyan-500/5 rounded-full blur-[100px]" />

                <div className="section-container relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center max-w-3xl mx-auto mb-16"
                    >
                        <span className="inline-block px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-cyan-400 text-sm font-semibold mb-4">
                            Our Journey
                        </span>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 tracking-tight">
                            From Garage to{" "}
                            <span className="bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
                                Global Agency
                            </span>
                        </h2>
                        <p className="text-lg text-slate-400">
                            Five years of milestones — and we&apos;re just getting started.
                        </p>
                    </motion.div>

                    {/* Timeline */}
                    <div className="relative max-w-4xl mx-auto">
                        {/* Vertical line */}
                        <div className="absolute left-6 sm:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-500/60 via-teal-500/40 to-transparent -translate-x-1/2" />

                        <div className="space-y-10">
                            {roadmap.map((milestone, i) => {
                                const isLeft = i % 2 === 0;
                                return (
                                    <motion.div
                                        key={milestone.year + milestone.title}
                                        variants={isLeft ? fadeInLeft : fadeInRight}
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{ once: true, margin: "-60px" }}
                                        className={`relative flex items-start gap-6 sm:gap-0 ${isLeft ? "sm:flex-row" : "sm:flex-row-reverse"}`}
                                    >
                                        {/* Card — half width on desktop */}
                                        <div className={`flex-1 sm:w-[calc(50%-3rem)] pl-16 sm:pl-0 ${isLeft ? "sm:pr-12" : "sm:pl-12"}`}>
                                            <div className={`relative bg-black/60 border rounded-2xl p-6 transition-all duration-300 ${milestone.done ? "border-slate-700 hover:border-cyan-500/30" : "border-dashed border-slate-700/60"}`}>
                                                {/* Year + quarter */}
                                                <div className="flex items-center gap-3 mb-3">
                                                    <span className="text-cyan-400 font-bold text-sm">{milestone.year}</span>
                                                    <span className={`px-2 py-0.5 rounded-full text-xs font-semibold ${milestone.done ? "bg-emerald-500/15 text-emerald-400 border border-emerald-500/30" : "bg-amber-500/15 text-amber-400 border border-amber-500/30"}`}>
                                                        {milestone.quarter}
                                                    </span>
                                                </div>
                                                <h3 className="text-lg font-bold text-white mb-2">{milestone.title}</h3>
                                                <p className="text-slate-400 text-sm leading-relaxed">{milestone.description}</p>
                                            </div>
                                        </div>

                                        {/* Dot (hidden on mobile — we use left border line instead) */}
                                        <div className="hidden sm:flex absolute left-1/2 -translate-x-1/2 top-6 w-14 h-14 rounded-2xl bg-[#08080f] border-2 border-cyan-500/40 items-center justify-center z-10 text-2xl">
                                            {milestone.icon}
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════
                CORE TEAM
                ═══════════════════════════════════════════ */}
            <section id="team" className="section-padding bg-[#0c0c18]">
                <div className="section-container">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center max-w-3xl mx-auto mb-16"
                    >
                        <span className="inline-block px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-cyan-400 text-sm font-semibold mb-4">
                            The Crew
                        </span>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 tracking-tight">
                            Our Core{" "}
                            <span className="bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">
                                Team
                            </span>
                        </h2>
                        <p className="text-lg text-slate-400">
                            20+ specialists across engineering, design, and marketing — united by a passion for building great things.
                        </p>
                    </motion.div>

                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5"
                    >
                        {team.map((member) => (
                            <motion.div key={member.name} variants={staggerItem} className="group text-center">
                                <div className="relative mx-auto mb-4 inline-block">
                                    {/* Avatar fallback with gradient initials */}
                                    <div className={`w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br ${member.gradient} flex items-center justify-center text-white text-xl font-bold group-hover:scale-105 transition-transform duration-300 shadow-lg`}>
                                        {member.fallback}
                                    </div>
                                    {/* Online dot */}
                                    <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-emerald-500 rounded-full border-2 border-[#0c0c18] flex items-center justify-center">
                                        <div className="w-2 h-2 bg-black rounded-full" />
                                    </div>
                                </div>
                                <h3 className="text-white font-semibold text-sm mb-1">{member.name}</h3>
                                <p className="text-neutral-400 text-xs leading-tight">{member.role}</p>
                            </motion.div>
                        ))}

                        {/* You? card */}
                        <motion.div variants={staggerItem} className="group text-center">
                            <div className="w-20 h-20 mx-auto rounded-2xl border-2 border-dashed border-slate-600 group-hover:border-cyan-500/60 flex items-center justify-center mb-4 transition-all duration-300">
                                <span className="text-2xl">✨</span>
                            </div>
                            <p className="text-neutral-400 text-xs font-medium">Could be you!</p>
                            <Link href="#contact" className="text-cyan-400 text-xs hover:text-cyan-300 transition-colors">
                                We&apos;re hiring →
                            </Link>
                        </motion.div>
                    </motion.div>

                    {/* Team fact strip */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-6"
                    >
                        {[
                            { icon: "🌏", text: "Remote-first, globally distributed" },
                            { icon: "📚", text: "$2,000 annual learning budget per person" },
                            { icon: "⚡", text: "Async-first with daily standups" },
                            { icon: "🎉", text: "Annual team retreats & offsites" },
                        ].map((item) => (
                            <div key={item.text} className="bg-black/40 border border-slate-800 rounded-2xl p-5 text-center">
                                <div className="text-3xl mb-2">{item.icon}</div>
                                <p className="text-slate-400 text-xs leading-relaxed">{item.text}</p>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════
                CTA
                ═══════════════════════════════════════════ */}
            <section id="contact" className="section-padding bg-[#08080f]">
                <div className="section-container">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="relative overflow-hidden rounded-3xl p-10 md:p-16 text-center"
                    >
                        {/* BG */}
                        <div className="absolute inset-0 bg-gradient-to-br from-cyan-600 via-teal-600 to-emerald-600" />
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.12),transparent_60%)]" />
                        <div className="absolute top-8 right-8 w-28 h-28 border border-white/10 rounded-full" />
                        <div className="absolute bottom-8 left-8 w-40 h-40 border border-white/10 rounded-full" />

                        <div className="relative z-10">
                            <div className="text-5xl mb-6">🤝</div>
                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 }}
                                className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 tracking-tight"
                            >
                                Let&apos;s Build Something
                                <br />
                                Great Together
                            </motion.h2>
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                                className="text-lg text-white/80 max-w-2xl mx-auto mb-10"
                            >
                                Whether you have a detailed brief or just a napkin sketch of an idea —
                                we&apos;d love to hear it. Get in touch for a no-strings-attached conversation.
                            </motion.p>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3 }}
                                className="flex flex-col sm:flex-row items-center justify-center gap-4"
                            >
                                <button
                                    className="group inline-flex items-center gap-2 px-10 py-4 bg-black text-teal-700 font-bold rounded-full hover:shadow-2xl hover:shadow-white/30 hover:-translate-y-0.5 transition-all duration-300"
                                >
                                    Get Free Consultation
                                    <HiOutlineArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </button>
                                <Link
                                    href="/services"
                                    className="inline-flex items-center gap-2 px-10 py-4 border-2 border-white/30 text-white font-semibold rounded-full hover:bg-white/10 transition-all duration-300"
                                >
                                    View Our Services
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