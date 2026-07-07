"use client";

import { useState, useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import {
    HiOutlineCode,
    HiOutlineDeviceMobile,
    HiOutlineTemplate,
    HiOutlineChartBar,
    HiOutlineGlobeAlt,
    HiOutlineCube,
    HiOutlineVideoCamera,
    HiOutlineLightningBolt,
    HiOutlineShieldCheck,
    HiOutlineUserGroup,
    HiOutlineTrendingUp,
    HiOutlineArrowRight,
    HiOutlineCheckCircle,
    HiOutlineSparkles,
    HiOutlineStar,
} from "react-icons/hi";

/* ────────────────────────────────────────────────
   DATA
   ──────────────────────────────────────────────── */

const services = [
    {
        icon: HiOutlineCode,
        title: "Web Development",
        tagline: "Websites that convert visitors into customers",
        description:
            "From blazing-fast landing pages to complex SaaS platforms — we build pixel-perfect, high-performance web applications using React, Next.js, and Node.js.",
        features: ["Custom Web Apps", "E-Commerce Stores", "SaaS Platforms", "CMS & Portals"],
        href: "/web-development",
        gradient: "from-cyan-500 to-teal-500",
        bgGlow: "bg-cyan-500/10",
        border: "border-cyan-500/30",
        tag: "Most Popular",
    },
    {
        icon: HiOutlineDeviceMobile,
        title: "Mobile Development",
        tagline: "Apps your users will love to open",
        description:
            "Native iOS & Android apps and cross-platform solutions that deliver exceptional performance and seamless user experiences across every device.",
        features: ["iOS & Android Apps", "React Native", "Flutter", "App Store Launch"],
        href: "/mobile-development",
        gradient: "from-violet-500 to-purple-600",
        bgGlow: "bg-violet-500/10",
        border: "border-violet-500/30",
        tag: null,
    },
    {
        icon: HiOutlineTemplate,
        title: "UI/UX Design",
        tagline: "Design that users feel and remember",
        description:
            "Intuitive, beautiful interfaces from user research to pixel-perfect delivery. Figma prototypes, design systems, usability testing, and motion design.",
        features: ["Figma Prototypes", "Design Systems", "UX Research", "Motion Design"],
        href: "/ui-ux-design",
        gradient: "from-rose-500 to-pink-600",
        bgGlow: "bg-rose-500/10",
        border: "border-rose-500/30",
        tag: null,
    },
    {
        icon: HiOutlineCube,
        title: "Web3 Development",
        tagline: "Build the decentralised future",
        description:
            "Smart contracts, DeFi protocols, NFT platforms, and dApps on Ethereum, Solana, and more. From token creation to full blockchain integrations.",
        features: ["Smart Contracts", "dApps", "NFT Platforms", "DeFi Protocols"],
        href: "/web3-development",
        gradient: "from-amber-500 to-orange-500",
        bgGlow: "bg-amber-500/10",
        border: "border-amber-500/30",
        tag: "Trending",
    },
    {
        icon: HiOutlineChartBar,
        title: "SEO & Marketing",
        tagline: "Rank higher. Grow faster.",
        description:
            "Technical SEO, on-page optimisation, link building, and content strategy to drive organic traffic and get your business to the top of Google.",
        features: ["Technical SEO", "Link Building", "Content Strategy", "Local SEO"],
        href: "/seo-&-marketing",
        gradient: "from-emerald-500 to-green-600",
        bgGlow: "bg-emerald-500/10",
        border: "border-emerald-500/30",
        tag: null,
    },
    {
        icon: HiOutlineVideoCamera,
        title: "Digital Marketing",
        tagline: "Content that drives real results",
        description:
            "PPC advertising, social media management, Reels & Shorts production, email campaigns, and data-driven growth strategies for measurable ROI.",
        features: ["PPC Campaigns", "Social Media", "Video Content", "Email Marketing"],
        href: "/digital-marketing",
        gradient: "from-pink-500 to-fuchsia-600",
        bgGlow: "bg-pink-500/10",
        border: "border-pink-500/30",
        tag: null,
    },
    {
        icon: HiOutlineGlobeAlt,
        title: "Domain & Hosting",
        tagline: "Your digital home, rock-solid",
        description:
            "Fast SSD hosting, domain registration, SSL certificates, and 99.9% uptime guarantee. Everything you need to keep your online presence running.",
        features: ["SSD Hosting", "Domain Registration", "SSL Certificates", "99.9% Uptime"],
        href: "/domain-&-hosting",
        gradient: "from-indigo-500 to-blue-600",
        bgGlow: "bg-indigo-500/10",
        border: "border-indigo-500/30",
        tag: null,
    },
];

const whyUs = [
    {
        icon: HiOutlineLightningBolt,
        title: "Fast Delivery",
        description: "Agile sprints with transparent progress. We hit deadlines without cutting corners.",
        gradient: "from-amber-500 to-orange-500",
    },
    {
        icon: HiOutlineShieldCheck,
        title: "Quality Guaranteed",
        description: "Every project goes through rigorous QA — performance, security, and cross-device testing.",
        gradient: "from-emerald-500 to-teal-500",
    },
    {
        icon: HiOutlineUserGroup,
        title: "Expert Team",
        description: "Senior engineers, designers, and marketers who've worked across 20+ industries.",
        gradient: "from-violet-500 to-purple-500",
    },
    {
        icon: HiOutlineTrendingUp,
        title: "Growth Focused",
        description: "We don't just build, we strategise. Every decision is tied to your business goals.",
        gradient: "from-rose-500 to-pink-500",
    },
    {
        icon: HiOutlineSparkles,
        title: "Premium Design",
        description: "Award-level aesthetics on every project. Design that wows and converts.",
        gradient: "from-cyan-500 to-blue-500",
    },
    {
        icon: HiOutlineStar,
        title: "Long-term Partnership",
        description: "We're in it for the long haul — ongoing support, updates, and strategic advice.",
        gradient: "from-fuchsia-500 to-pink-500",
    },
];

const stats = [
    { value: "150+", label: "Projects Delivered" },
    { value: "120+", label: "Happy Clients" },
    { value: "7", label: "Core Services" },
    { value: "5+", label: "Years Experience" },
];

const process = [
    {
        step: "01",
        title: "Discovery Call",
        description: "We learn your goals, audience, and vision in a free consultation session.",
        icon: "🎯",
    },
    {
        step: "02",
        title: "Strategy & Proposal",
        description: "You get a detailed project plan, tech stack recommendation, and transparent pricing.",
        icon: "📋",
    },
    {
        step: "03",
        title: "Design & Build",
        description: "Iterative design and development with weekly updates and your feedback at every stage.",
        icon: "⚡",
    },
    {
        step: "04",
        title: "Launch & Support",
        description: "Smooth go-live, SEO setup, and ongoing maintenance so you're never left alone.",
        icon: "🚀",
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
    hidden: { opacity: 0, y: 28 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

/* ────────────────────────────────────────────────
   MAIN PAGE
   ──────────────────────────────────────────────── */

export default function ServicesPage() {
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
                {/* Background */}
                <motion.div style={{ y: heroY }} className="absolute inset-0">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#08080f] via-[#0d0820] to-[#08080f]" />
                    <div className="absolute top-20 left-1/4 w-[600px] h-[600px] bg-violet-600/12 rounded-full blur-[130px]" />
                    <div className="absolute bottom-20 right-1/4 w-[500px] h-[500px] bg-cyan-500/8 rounded-full blur-[120px]" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-fuchsia-500/5 rounded-full blur-[160px]" />
                    {/* Dot grid */}
                    <div
                        className="absolute inset-0 opacity-[0.03]"
                        style={{
                            backgroundImage: `radial-gradient(circle, #a78bfa 1px, transparent 1px)`,
                            backgroundSize: "32px 32px",
                        }}
                    />
                </motion.div>

                <motion.div style={{ opacity: heroOpacity }} className="relative z-10 section-container pt-32 pb-24">
                    <div className="max-w-5xl mx-auto text-center">
                        {/* Badge */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <span className="inline-flex items-center gap-2 px-5 py-2.5 bg-violet-500/10 border border-violet-500/30 rounded-full text-violet-400 text-sm font-semibold mb-8">
                                <span className="w-2 h-2 bg-violet-400 rounded-full animate-pulse" />
                                Full-Service Digital Agency
                            </span>
                        </motion.div>

                        {/* Headline */}
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.1 }}
                            className="text-5xl sm:text-6xl lg:text-8xl font-bold text-white mb-8 leading-[1.05] tracking-tight"
                        >
                            Every Service
                            <br />
                            <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">
                                Your Business
                            </span>
                            <br />
                            Needs to Win
                        </motion.h1>

                        {/* Sub */}
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="text-xl sm:text-2xl text-slate-400 max-w-3xl mx-auto mb-12 leading-relaxed"
                        >
                            From idea to launch and beyond — web, mobile, design, marketing, and Web3
                            under one roof. One team. Zero hand-offs. Infinite growth.
                        </motion.p>

                        {/* CTAs */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
                        >
                            <button
                                className="group inline-flex items-center gap-2 px-10 py-5 bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white font-bold text-lg rounded-full hover:shadow-2xl hover:shadow-violet-500/40 hover:-translate-y-0.5 transition-all duration-300"
                            >
                                Get Free Consultation
                                <HiOutlineArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </button>
                            <Link
                                href="#services"
                                className="inline-flex items-center gap-2 px-10 py-5 border border-slate-600 text-slate-300 font-semibold text-lg rounded-full hover:bg-[#111111]/50 hover:border-violet-500/50 transition-all duration-300"
                            >
                                Explore Services
                            </Link>
                        </motion.div>

                        {/* Stats Row */}
                        <motion.div
                            variants={staggerContainer}
                            initial="hidden"
                            animate="visible"
                            className="grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-2xl mx-auto"
                        >
                            {stats.map((stat) => (
                                <motion.div key={stat.label} variants={staggerItem} className="text-center">
                                    <div className="text-3xl sm:text-4xl font-bold text-white mb-1">{stat.value}</div>
                                    <div className="text-neutral-400 text-xs font-medium uppercase tracking-wider">{stat.label}</div>
                                </motion.div>
                            ))}
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
                        <div className="w-1.5 h-1.5 bg-violet-400 rounded-full" />
                    </motion.div>
                </motion.div>
            </section>

            {/* ═══════════════════════════════════════════
                SERVICES GRID
                ═══════════════════════════════════════════ */}
            <section id="services" className="section-padding bg-[#08080f]">
                <div className="section-container">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center max-w-3xl mx-auto mb-20"
                    >
                        <span className="inline-block px-4 py-2 bg-violet-500/10 border border-violet-500/30 rounded-full text-violet-400 text-sm font-semibold mb-4">
                            What We Do
                        </span>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-5 tracking-tight">
                            Services Built for{" "}
                            <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
                                Modern Businesses
                            </span>
                        </h2>
                        <p className="text-lg text-slate-400">
                            Everything you need to launch, grow, and dominate your market — delivered by
                            specialists who&apos;ve done it for 150+ companies.
                        </p>
                    </motion.div>

                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                    >
                        {services.map((service) => (
                            <motion.div key={service.title} variants={staggerItem} className="group relative">
                                {/* Gradient border on hover */}
                                <div className={`absolute -inset-0.5 bg-gradient-to-r ${service.gradient} rounded-3xl opacity-0 group-hover:opacity-30 blur transition-opacity duration-500`} />

                                <div className="relative bg-black/60 backdrop-blur-sm border border-slate-800 rounded-3xl p-8 hover:border-slate-700 transition-all duration-500 h-full flex flex-col">
                                    {/* Tag */}
                                    {service.tag && (
                                        <span className={`absolute top-6 right-6 px-3 py-1 bg-gradient-to-r ${service.gradient} text-white text-xs font-bold rounded-full`}>
                                            {service.tag}
                                        </span>
                                    )}

                                    {/* Icon */}
                                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                                        <service.icon className="w-8 h-8 text-white" />
                                    </div>

                                    {/* Content */}
                                    <div className="flex-1">
                                        <p className={`text-xs font-semibold uppercase tracking-widest mb-2 bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent`}>
                                            {service.tagline}
                                        </p>
                                        <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
                                        <p className="text-slate-400 text-sm leading-relaxed mb-6">
                                            {service.description}
                                        </p>

                                        {/* Feature chips */}
                                        <div className="flex flex-wrap gap-2 mb-6">
                                            {service.features.map((f) => (
                                                <span
                                                    key={f}
                                                    className="flex items-center gap-1.5 px-3 py-1 bg-[#111111]/80 border border-slate-700/60 text-slate-300 text-xs font-medium rounded-full"
                                                >
                                                    <HiOutlineCheckCircle className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                                                    {f}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* CTA Link */}
                                    <Link
                                        href={service.href}
                                        aria-label={`Learn more about ${service.title}`}
                                        className={`inline-flex items-center gap-2 text-sm font-semibold bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent group-hover:gap-3 transition-all duration-300`}
                                    >
                                        Learn More
                                        <HiOutlineArrowRight className={`w-4 h-4 bg-gradient-to-r ${service.gradient} group-hover:translate-x-1 transition-transform`} style={{ color: "transparent", background: "linear-gradient(to right, currentColor, currentColor)", WebkitBackgroundClip: "text" }} />
                                    </Link>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════
                WHY CHOOSE US
                ═══════════════════════════════════════════ */}
            <section className="section-padding bg-[#0c0c18] relative overflow-hidden">
                <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-violet-500/5 rounded-full blur-[120px]" />
                <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-cyan-500/5 rounded-full blur-[100px]" />

                <div className="section-container relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center max-w-3xl mx-auto mb-16"
                    >
                        <span className="inline-block px-4 py-2 bg-violet-500/10 border border-violet-500/30 rounded-full text-violet-400 text-sm font-semibold mb-4">
                            Why NextModernLabs
                        </span>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 tracking-tight">
                            The Agency Built{" "}
                            <span className="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
                                for Results
                            </span>
                        </h2>
                        <p className="text-lg text-slate-400">
                            We don&apos;t just deliver projects — we deliver outcomes.
                        </p>
                    </motion.div>

                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
                    >
                        {whyUs.map((item) => (
                            <motion.div key={item.title} variants={staggerItem} className="group">
                                <div className="bg-black/50 border border-slate-800 rounded-2xl p-7 hover:border-slate-700 hover:bg-black/70 transition-all duration-300 h-full">
                                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                                        <item.icon className="w-6 h-6 text-white" />
                                    </div>
                                    <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                                    <p className="text-slate-400 text-sm leading-relaxed">{item.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════
                HOW IT WORKS (PROCESS)
                ═══════════════════════════════════════════ */}
            <section className="section-padding bg-[#08080f]">
                <div className="section-container">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center max-w-3xl mx-auto mb-16"
                    >
                        <span className="inline-block px-4 py-2 bg-violet-500/10 border border-violet-500/30 rounded-full text-violet-400 text-sm font-semibold mb-4">
                            How We Work
                        </span>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 tracking-tight">
                            From Idea to{" "}
                            <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
                                Live Product
                            </span>
                        </h2>
                        <p className="text-lg text-slate-400">
                            A simple, transparent process designed to get you results fast.
                        </p>
                    </motion.div>

                    <div className="relative max-w-5xl mx-auto">
                        {/* Connecting line */}
                        <div className="hidden lg:block absolute top-20 left-[calc(12.5%+1rem)] right-[calc(12.5%+1rem)] h-0.5 bg-gradient-to-r from-transparent via-violet-500/40 to-transparent" />

                        <motion.div
                            variants={staggerContainer}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
                        >
                            {process.map((step, i) => (
                                <motion.div key={step.step} variants={staggerItem} className="relative text-center">
                                    {/* Icon circle */}
                                    <div className="relative mx-auto mb-6 w-20 h-20 rounded-2xl bg-gradient-to-br from-violet-500/20 to-fuchsia-500/20 border border-violet-500/30 flex flex-col items-center justify-center">
                                        <span className="text-2xl">{step.icon}</span>
                                        <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-gradient-to-br from-violet-500 to-fuchsia-500 flex items-center justify-center text-white text-[10px] font-bold">
                                            {i + 1}
                                        </span>
                                    </div>
                                    <h3 className="text-lg font-bold text-white mb-3">{step.title}</h3>
                                    <p className="text-slate-400 text-sm leading-relaxed">{step.description}</p>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════
                TRUST STRIP
                ═══════════════════════════════════════════ */}
            <section className="py-16 bg-[#0c0c18] border-y border-slate-800/50">
                <div className="section-container">
                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="grid grid-cols-2 sm:grid-cols-4 gap-8 text-center"
                    >
                        {[
                            { emoji: "⚡", text: "48-Hour Response Guarantee" },
                            { emoji: "🔒", text: "Airtight NDAs & IP Protection" },
                            { emoji: "✅", text: "100% Satisfaction Policy" },
                            { emoji: "🌍", text: "Global Client Base" },
                        ].map((item) => (
                            <motion.div key={item.text} variants={staggerItem} className="flex flex-col items-center gap-3">
                                <span className="text-3xl">{item.emoji}</span>
                                <span className="text-slate-400 text-sm font-medium">{item.text}</span>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════
                FAQ
                ═══════════════════════════════════════════ */}
            <section className="section-padding bg-[#08080f]">
                <div className="section-container">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center max-w-3xl mx-auto mb-16"
                    >
                        <span className="inline-block px-4 py-2 bg-violet-500/10 border border-violet-500/30 rounded-full text-violet-400 text-sm font-semibold mb-4">
                            FAQ
                        </span>
                        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 tracking-tight">
                            Common{" "}
                            <span className="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
                                Questions
                            </span>
                        </h2>
                    </motion.div>

                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="max-w-3xl mx-auto space-y-4"
                    >
                        {[
                            {
                                q: "How long does a typical project take?",
                                a: "Timelines vary by scope — a landing page can launch in 1–2 weeks, while a full SaaS platform typically takes 8–16 weeks. We provide a detailed timeline in our proposal.",
                            },
                            {
                                q: "Do you work with startups or only enterprises?",
                                a: "Both. We've worked with solo founders on their first product and with established companies scaling their platforms. We adapt our process and pricing to fit your stage.",
                            },
                            {
                                q: "What does the free consultation include?",
                                a: "A 30-minute strategy call where we dig into your goals, challenges, and vision. You'll leave with clarity on the right approach, tech stack, and a rough scope estimate — no strings attached.",
                            },
                            {
                                q: "Can you handle the full project or just one part?",
                                a: "Either way. We can take ownership of the entire product (design → dev → marketing) or plug into your existing team for a specific service. You choose what you need.",
                            },
                            {
                                q: "What happens after the project launches?",
                                a: "We offer ongoing maintenance, performance monitoring, feature iterations, and growth support. Most clients stay with us long-term as their technology partner.",
                            },
                        ].map((faq, i) => (
                            <FAQItem key={i} question={faq.q} answer={faq.a} />
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════
                CTA
                ═══════════════════════════════════════════ */}
            <section className="section-padding bg-[#0c0c18]">
                <div className="section-container">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="relative overflow-hidden rounded-3xl p-10 md:p-16 text-center"
                    >
                        {/* BG */}
                        <div className="absolute inset-0 bg-gradient-to-br from-violet-600 via-fuchsia-600 to-cyan-600" />
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.15),transparent_60%)]" />
                        <div className="absolute top-10 left-10 w-24 h-24 border border-white/10 rounded-full" />
                        <div className="absolute bottom-10 right-10 w-36 h-36 border border-white/10 rounded-full" />

                        <div className="relative z-10">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                className="text-5xl mb-6"
                            >
                                🚀
                            </motion.div>
                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 }}
                                className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 tracking-tight"
                            >
                                Ready to Build
                                <br />
                                Something Great?
                            </motion.h2>
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                                className="text-lg text-white/80 max-w-2xl mx-auto mb-10"
                            >
                                Start with a free consultation. Tell us your idea — we&apos;ll tell you exactly
                                how to make it happen.
                            </motion.p>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3 }}
                                className="flex flex-col sm:flex-row items-center justify-center gap-4"
                            >
                                <button
                                    className="group inline-flex items-center gap-2 px-10 py-4 bg-black text-violet-700 font-bold rounded-full hover:shadow-2xl hover:shadow-white/20 hover:-translate-y-0.5 transition-all duration-300"
                                >
                                    Get Free Consultation
                                    <HiOutlineArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </button>
                                <Link
                                    href="https://wa.me/+917903350593"
                                    target="_blank"
                                    className="inline-flex items-center gap-2 px-10 py-4 border-2 border-white/30 text-white font-semibold rounded-full hover:bg-white/10 transition-all duration-300"
                                >
                                    WhatsApp Us
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

/* ────────────────────────────────────────────────
   FAQ ACCORDION ITEM
   ──────────────────────────────────────────────── */

function FAQItem({ question, answer }: { question: string; answer: string }) {
    const [open, setOpen] = useState(false);

    return (
        <motion.div variants={staggerItem} className="group">
            <button
                onClick={() => setOpen(!open)}
                className="w-full flex items-center justify-between gap-4 p-6 bg-black/60 border border-slate-800 rounded-2xl hover:border-violet-500/40 transition-all duration-300 text-left"
                aria-expanded={open}
            >
                <span className="text-white font-semibold text-sm sm:text-base leading-snug">{question}</span>
                <span className={`flex-shrink-0 w-8 h-8 rounded-full border border-slate-700 flex items-center justify-center text-slate-400 transition-all duration-300 ${open ? "rotate-45 border-violet-500 text-violet-400" : ""}`}>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                </span>
            </button>
            {open && (
                <motion.div
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.25 }}
                    className="px-6 py-5 text-slate-400 text-sm leading-relaxed border border-t-0 border-slate-800 rounded-b-2xl bg-black/30 -mt-2"
                >
                    {answer}
                </motion.div>
            )}
        </motion.div>
    );
}