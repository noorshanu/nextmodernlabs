"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import LeadGenPopup from "../components/home/LeadGenPopup";
import {
    SiGoogleanalytics,
    SiGoogleads,
    SiGooglesearchconsole,
    SiSemrush,
    SiMailchimp,
    SiHubspot,
    SiWordpress,
    SiShopify,
    SiMeta,
    SiTiktok,
    SiLinkedin,
    SiGoogle,
    SiCanva,
    SiHootsuite,
    SiBuffer,
} from "react-icons/si";
import {
    HiOutlineChartBar,
    HiOutlineGlobeAlt,
    HiOutlineTrendingUp,
    HiOutlineSearchCircle,
    HiOutlineSpeakerphone,
    HiOutlineMail,
    HiOutlinePencilAlt,
    HiOutlineUserGroup,
    HiOutlineLightBulb,
    HiOutlineClipboardList,
    HiOutlineCog,
    HiOutlineShieldCheck,
    HiOutlineCursorClick,
    HiOutlineDocumentReport,
    HiOutlineLink,
    HiOutlineAnnotation,
    HiOutlineFilm,
    HiOutlinePhotograph,
} from "react-icons/hi";

/* ────────────────────────────────────────────────
   DATA
   ──────────────────────────────────────────────── */

const technologies = [
    { icon: SiGoogle, name: "Google", color: "#4285F4" },
    { icon: SiGoogleanalytics, name: "Analytics", color: "#E37400" },
    { icon: SiGoogleads, name: "Google Ads", color: "#4285F4" },
    { icon: SiGooglesearchconsole, name: "Search Console", color: "#458CF5" },
    { icon: SiSemrush, name: "Semrush", color: "#FF642D" },
    { icon: SiSemrush, name: "Moz", color: "#3992FF" },
    { icon: SiMailchimp, name: "Mailchimp", color: "#FFE01B" },
    { icon: SiHubspot, name: "HubSpot", color: "#FF7A59" },
    { icon: SiWordpress, name: "WordPress", color: "#21759B" },
    { icon: SiShopify, name: "Shopify", color: "#7AB55C" },
    { icon: SiMeta, name: "Meta Ads", color: "#0081FB" },
    { icon: SiTiktok, name: "TikTok", color: "#ffffff" },
    { icon: SiLinkedin, name: "LinkedIn", color: "#0A66C2" },
    { icon: SiCanva, name: "Canva", color: "#00C4CC" },
    { icon: SiHootsuite, name: "Hootsuite", color: "#143059" },
    { icon: SiBuffer, name: "Buffer", color: "#168EEA" },
];

const caseStudies = [
    {
        title: "TechVault SaaS",
        category: "SEO & Content",
        description:
            "Grew organic traffic by 340% in 6 months through technical SEO, content strategy, and targeted link building for a B2B SaaS platform.",
        image: "/web-dev/saas-dashboard.png",
        tech: ["SEO", "Content Marketing", "Link Building"],
        result: "340% Traffic Growth",
    },
    {
        title: "LuxeStyle E-Commerce",
        category: "PPC & Shopping",
        description:
            "Achieved 520% ROAS through Google Shopping campaigns, dynamic remarketing, and conversion rate optimization for a luxury fashion brand.",
        image: "/web-dev/ecommerce.png",
        tech: ["Google Ads", "Shopping", "CRO"],
        result: "520% ROAS",
    },
    {
        title: "MediCare Health",
        category: "Local SEO",
        description:
            "Dominated local search results across 15 locations with Google Business Profile optimization, local citations, and review management.",
        image: "/web-dev/healthcare.png",
        tech: ["Local SEO", "GBP", "Reviews"],
        result: "#1 Local Rankings",
    },
    {
        title: "EduSpark Academy",
        category: "Social Media",
        description:
            "Built a 200K+ engaged community through strategic social media marketing, influencer partnerships, and viral content campaigns.",
        image: "/mobile-dev/elearning.png",
        tech: ["Social Media", "Content", "Influencers"],
        result: "200K+ Followers",
    },
    {
        title: "FinPro Advisory",
        category: "Email & Automation",
        description:
            "Generated $1.2M in attributed revenue through automated email funnels, lead nurturing sequences, and personalized campaigns.",
        image: "/web-dev/corporate.png",
        tech: ["Email Marketing", "Automation", "CRM"],
        result: "$1.2M Revenue",
    },
];

const marketingProcess = [
    {
        phase: "01",
        title: "Audit & Discovery",
        description:
            "Comprehensive website audit, competitor analysis, keyword research, current performance benchmarking, and goal setting.",
        icon: "🔍",
        color: "from-emerald-500 to-green-600",
    },
    {
        phase: "02",
        title: "Strategy Development",
        description:
            "Custom marketing roadmap, channel selection, budget allocation, KPI definition, and campaign planning timeline.",
        icon: "📋",
        color: "from-blue-500 to-indigo-600",
    },
    {
        phase: "03",
        title: "Implementation",
        description:
            "Technical SEO fixes, content creation, campaign setup, tracking pixel installation, and automation workflows.",
        icon: "⚡",
        color: "from-amber-500 to-orange-600",
    },
    {
        phase: "04",
        title: "Content & Creative",
        description:
            "Blog posts, landing pages, ad creatives, social media content, email templates, and video production.",
        icon: "🎨",
        color: "from-rose-500 to-pink-600",
    },
    {
        phase: "05",
        title: "Optimization & Testing",
        description:
            "A/B testing, bid optimization, conversion tracking, heatmap analysis, and continuous performance tuning.",
        icon: "🔧",
        color: "from-violet-500 to-purple-600",
    },
    {
        phase: "06",
        title: "Reporting & Scale",
        description:
            "Monthly performance reports, ROI analysis, strategy refinement, budget scaling, and growth recommendations.",
        icon: "📈",
        color: "from-cyan-500 to-teal-600",
    },
];

const services = [
    {
        icon: HiOutlineSearchCircle,
        title: "Search Engine Optimization",
        description:
            "Technical SEO, on-page optimization, content strategy, and white-hat link building to dominate organic search results.",
        gradient: "from-emerald-500 to-green-600",
    },
    {
        icon: HiOutlineCursorClick,
        title: "Pay-Per-Click (PPC)",
        description:
            "Google Ads, Shopping campaigns, display advertising, and remarketing with data-driven bid management for maximum ROI.",
        gradient: "from-blue-500 to-indigo-600",
    },
    {
        icon: HiOutlineSpeakerphone,
        title: "Social Media Marketing",
        description:
            "Strategic social presence across Instagram, LinkedIn, TikTok, and Facebook with paid amplification and community building.",
        gradient: "from-violet-500 to-purple-600",
    },
    {
        icon: HiOutlinePencilAlt,
        title: "Content Marketing",
        description:
            "Blog strategy, SEO content, whitepapers, case studies, and thought leadership content that drives organic traffic and leads.",
        gradient: "from-amber-500 to-orange-600",
    },
    {
        icon: HiOutlineMail,
        title: "Email Marketing",
        description:
            "Automated drip campaigns, newsletter strategy, lead nurturing funnels, and personalized email flows that convert.",
        gradient: "from-rose-500 to-pink-600",
    },
    {
        icon: HiOutlineDocumentReport,
        title: "Analytics & CRO",
        description:
            "Google Analytics setup, conversion tracking, funnel optimization, A/B testing, and data-driven growth strategy.",
        gradient: "from-cyan-500 to-teal-600",
    },
];

const features = [
    { icon: HiOutlineTrendingUp, title: "ROI-Focused", description: "Every campaign optimized for measurable returns" },
    { icon: HiOutlineChartBar, title: "Data-Driven", description: "Decisions backed by analytics & real data" },
    { icon: HiOutlineGlobeAlt, title: "Multi-Channel", description: "Unified strategy across all digital channels" },
    { icon: HiOutlineLink, title: "White-Hat SEO", description: "Sustainable rankings with ethical practices" },
    { icon: HiOutlineAnnotation, title: "Content-First", description: "Quality content that ranks and converts" },
    { icon: HiOutlineUserGroup, title: "Dedicated Team", description: "Expert strategists assigned to your brand" },
];

const stats = [
    { value: 300, suffix: "+", label: "Campaigns Launched" },
    { value: 450, suffix: "%", label: "Avg. Traffic Growth" },
    { value: 10, suffix: "M+", label: "Ad Revenue Generated" },
    { value: 98, suffix: "%", label: "Client Retention" },
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
            <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-500 to-green-600 rounded-2xl opacity-0 group-hover:opacity-30 blur transition-opacity duration-500" />
            <div className="relative bg-slate-900/70 border border-slate-800 rounded-2xl p-6 text-center hover:border-emerald-500/40 transition-all duration-300">
                <div className="text-3xl sm:text-4xl font-bold text-white mb-1">
                    {count}
                    <span className="text-emerald-400">{suffix}</span>
                </div>
                <div className="text-slate-400 text-sm font-medium">{label}</div>
            </div>
        </motion.div>
    );
}

/* ────────────────────────────────────────────────
   MAIN PAGE
   ──────────────────────────────────────────────── */

export default function SEOMarketingPage() {
    const [activeCase, setActiveCase] = useState(0);
    const [showPopup, setShowPopup] = useState(false);
    const heroRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
    const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
    const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

    // Auto-cycle case studies
    useEffect(() => {
        const timer = setInterval(() => {
            setActiveCase((p) => (p >= caseStudies.length - 1 ? 0 : p + 1));
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    return (
        <main className="min-h-screen bg-[#060e0a]">
            <Navbar />

            {/* ═══════════════════════════════════════════
                SECTION 1 — HERO
                ═══════════════════════════════════════════ */}
            <section ref={heroRef} className="relative min-h-screen flex items-center overflow-hidden">
                {/* Animated background with emerald/green tones */}
                <motion.div style={{ y: heroY }} className="absolute inset-0">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#060e0a] via-[#0a1a10] to-[#060e0a]" />
                    <div className="absolute top-20 left-1/4 w-[500px] h-[500px] bg-emerald-600/15 rounded-full blur-[120px]" />
                    <div className="absolute bottom-20 right-1/4 w-[400px] h-[400px] bg-green-500/10 rounded-full blur-[100px]" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-teal-500/5 rounded-full blur-[150px]" />
                    {/* Grid pattern */}
                    <div
                        className="absolute inset-0 opacity-[0.04]"
                        style={{
                            backgroundImage: `linear-gradient(rgba(16,185,129,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(16,185,129,0.3) 1px, transparent 1px)`,
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
                                <span className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 border border-emerald-500/30 rounded-full text-emerald-400 text-sm font-medium mb-8">
                                    <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                                    SEO & Digital Marketing
                                </span>
                            </motion.div>

                            <motion.h1
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.7, delay: 0.1 }}
                                className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6 leading-[1.1] tracking-tight"
                            >
                                Rank Higher.
                                <br />
                                <span className="bg-gradient-to-r from-emerald-400 via-green-400 to-teal-400 bg-clip-text text-transparent">
                                    Grow Faster.
                                </span>
                                <br />
                                Convert More.
                            </motion.h1>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                className="text-lg sm:text-xl text-slate-400 max-w-lg mx-auto lg:mx-0 mb-10 leading-relaxed"
                            >
                                Data-driven SEO & marketing strategies that put your brand in front of
                                the right audience and turn clicks into customers.
                            </motion.p>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.3 }}
                                className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-12"
                            >
                                <button
                                    onClick={() => setShowPopup(true)}
                                    className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-emerald-600 to-green-600 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-emerald-500/40 transition-all duration-300"
                                >
                                    Get Free SEO Audit
                                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </button>
                                <Link
                                    href="#projects"
                                    className="inline-flex items-center gap-2 px-8 py-4 border border-slate-600 text-slate-300 font-semibold rounded-full hover:bg-slate-800/50 hover:border-emerald-500/50 transition-all duration-300"
                                >
                                    View Case Studies
                                </Link>
                            </motion.div>

                            {/* Channel badges */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.5 }}
                                className="flex items-center justify-center lg:justify-start gap-3"
                            >
                                <span className="text-slate-500 text-sm">Channels:</span>
                                <div className="flex gap-2">
                                    <span className="px-3 py-1.5 bg-slate-800/60 border border-slate-700/50 rounded-full text-xs text-slate-300 font-medium flex items-center gap-1.5">
                                        🔍 SEO
                                    </span>
                                    <span className="px-3 py-1.5 bg-slate-800/60 border border-slate-700/50 rounded-full text-xs text-slate-300 font-medium flex items-center gap-1.5">
                                        📢 PPC
                                    </span>
                                    <span className="px-3 py-1.5 bg-slate-800/60 border border-slate-700/50 rounded-full text-xs text-slate-300 font-medium flex items-center gap-1.5">
                                        📱 Social
                                    </span>
                                </div>
                            </motion.div>
                        </div>

                        {/* Right — Analytics Dashboard Mockup */}
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.9, delay: 0.3 }}
                            className="relative flex items-center justify-center"
                        >
                            {/* Glow */}
                            <div className="absolute w-80 h-80 bg-emerald-500/20 rounded-full blur-[80px]" />

                            {/* Dashboard mockup */}
                            <div className="relative w-full max-w-md">
                                <div className="absolute -inset-8 bg-gradient-to-r from-emerald-500/20 to-green-500/20 rounded-3xl blur-3xl" />
                                <div className="relative bg-slate-900/80 backdrop-blur-sm rounded-2xl border border-slate-700/60 p-6 shadow-2xl">
                                    {/* Window header */}
                                    <div className="flex items-center gap-2 mb-5">
                                        <div className="w-3 h-3 rounded-full bg-red-500" />
                                        <div className="w-3 h-3 rounded-full bg-yellow-500" />
                                        <div className="w-3 h-3 rounded-full bg-green-500" />
                                        <span className="ml-3 text-slate-500 text-sm font-mono">analytics-dashboard</span>
                                    </div>

                                    {/* Dashboard content */}
                                    <div className="space-y-4">
                                        {/* Traffic chart */}
                                        <div>
                                            <div className="flex items-center justify-between mb-2">
                                                <p className="text-slate-500 text-xs font-semibold uppercase tracking-wider">Organic Traffic</p>
                                                <span className="text-emerald-400 text-xs font-bold">↑ 340%</span>
                                            </div>
                                            <div className="flex items-end gap-1 h-16">
                                                {[20, 25, 30, 28, 35, 42, 50, 48, 60, 72, 85, 95].map((h, i) => (
                                                    <div
                                                        key={i}
                                                        className="flex-1 rounded-t bg-gradient-to-t from-emerald-600 to-emerald-400 transition-all duration-300 hover:opacity-80"
                                                        style={{ height: `${h}%` }}
                                                    />
                                                ))}
                                            </div>
                                            <div className="flex justify-between mt-1">
                                                <span className="text-slate-600 text-[10px]">Jan</span>
                                                <span className="text-slate-600 text-[10px]">Dec</span>
                                            </div>
                                        </div>

                                        {/* Key metrics */}
                                        <div className="grid grid-cols-3 gap-2">
                                            {[
                                                { label: "Keywords", value: "1,240", change: "+180" },
                                                { label: "CTR", value: "4.8%", change: "+1.2%" },
                                                { label: "Conv Rate", value: "3.2%", change: "+0.8%" },
                                            ].map((m) => (
                                                <div key={m.label} className="bg-slate-800/50 rounded-xl p-3 text-center">
                                                    <p className="text-white text-sm font-bold">{m.value}</p>
                                                    <p className="text-slate-500 text-[10px]">{m.label}</p>
                                                    <p className="text-emerald-400 text-[10px] font-semibold">{m.change}</p>
                                                </div>
                                            ))}
                                        </div>

                                        {/* Top ranking keywords */}
                                        <div>
                                            <p className="text-slate-500 text-xs font-semibold uppercase tracking-wider mb-2">Top Rankings</p>
                                            <div className="space-y-1.5">
                                                {[
                                                    { kw: "best saas platform", pos: "#1" },
                                                    { kw: "enterprise software", pos: "#2" },
                                                    { kw: "cloud solutions", pos: "#3" },
                                                ].map((r) => (
                                                    <div key={r.kw} className="flex items-center justify-between bg-slate-800/30 rounded-lg px-3 py-1.5">
                                                        <span className="text-slate-300 text-xs">{r.kw}</span>
                                                        <span className="text-emerald-400 text-xs font-bold">{r.pos}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Floating badges */}
                                <motion.div
                                    animate={{ y: [0, -8, 0] }}
                                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                                    className="absolute -top-4 -right-4 px-4 py-2 bg-gradient-to-r from-emerald-500 to-green-500 rounded-full text-white text-sm font-semibold shadow-lg shadow-emerald-500/30"
                                >
                                    📈 #1 Rankings
                                </motion.div>
                                <motion.div
                                    animate={{ y: [0, 8, 0] }}
                                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                                    className="absolute -bottom-4 -left-4 px-4 py-2 bg-slate-800 border border-emerald-500/30 rounded-full text-emerald-400 text-sm font-semibold shadow-lg"
                                >
                                    🚀 10x ROI
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
                        <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full" />
                    </motion.div>
                </motion.div>
            </section>

            {/* ═══════════════════════════════════════════
                SECTION 2 — TOOLS MARQUEE
                ═══════════════════════════════════════════ */}
            <section className="py-16 bg-[#081210] border-y border-slate-800/50 overflow-hidden">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="section-container mb-8"
                >
                    <p className="text-center text-slate-500 text-sm font-semibold uppercase tracking-widest">
                        Marketing Platforms We Master
                    </p>
                </motion.div>

                <div className="relative">
                    <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#081210] to-transparent z-10" />
                    <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#081210] to-transparent z-10" />

                    <div className="flex animate-marquee" style={{ width: "max-content" }}>
                        {[...technologies, ...technologies].map((tech, i) => (
                            <div key={`${tech.name}-${i}`} className="flex flex-col items-center justify-center mx-8 group cursor-pointer">
                                <div className="w-16 h-16 flex items-center justify-center rounded-2xl bg-slate-800/50 border border-slate-700/50 group-hover:border-emerald-500/50 group-hover:bg-slate-800 transition-all duration-300 mb-2">
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
            <section className="section-padding bg-[#060e0a]">
                <div className="section-container">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center max-w-3xl mx-auto mb-16"
                    >
                        <span className="inline-block px-4 py-2 bg-emerald-500/10 border border-emerald-500/30 rounded-full text-emerald-400 text-sm font-semibold mb-4">
                            Why Choose Us
                        </span>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 tracking-tight">
                            Marketing That{" "}
                            <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                                Delivers Results
                            </span>
                        </h2>
                        <p className="text-lg text-slate-400">
                            No vanity metrics — just measurable growth, real leads, and revenue impact.
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
                                className={`group relative overflow-hidden rounded-2xl border border-slate-800 p-6 hover:border-emerald-500/40 transition-all duration-500 ${i === 0 ? "sm:col-span-2 lg:col-span-1" : ""
                                    }`}
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                <div className="relative z-10">
                                    <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                                        <f.icon className="w-6 h-6 text-emerald-400" />
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
                SECTION 4 — CASE STUDIES (Card Gallery)
                ═══════════════════════════════════════════ */}
            <section id="projects" className="section-padding bg-[#081210]">
                <div className="section-container">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center max-w-3xl mx-auto mb-16"
                    >
                        <span className="inline-block px-4 py-2 bg-emerald-500/10 border border-emerald-500/30 rounded-full text-emerald-400 text-sm font-semibold mb-4">
                            Case Studies
                        </span>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 tracking-tight">
                            Campaigns That{" "}
                            <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                                Crushed Goals
                            </span>
                        </h2>
                        <p className="text-lg text-slate-400">
                            Real results from real campaigns — traffic, leads, and revenue we&apos;ve generated for clients.
                        </p>
                    </motion.div>

                    {/* Horizontal scroll cards */}
                    <div className="relative">
                        <div className="flex gap-6 overflow-x-auto pb-6 snap-x snap-mandatory" style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}>
                            {caseStudies.map((project, i) => (
                                <motion.div
                                    key={project.title}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1, duration: 0.5 }}
                                    className="flex-shrink-0 w-[360px] snap-center group"
                                >
                                    <div className="relative bg-slate-900/60 border border-slate-800 rounded-3xl overflow-hidden hover:border-emerald-500/30 transition-all duration-500">
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
                                                <span className="px-2.5 py-1 bg-emerald-500/80 backdrop-blur-sm text-white text-xs font-semibold rounded-full">
                                                    {project.category}
                                                </span>
                                            </div>
                                            <div className="absolute bottom-3 right-3">
                                                <span className="px-2.5 py-1 bg-emerald-500/90 backdrop-blur-sm text-white text-xs font-bold rounded-full">
                                                    {project.result}
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
                SECTION 5 — MARKETING PROCESS (Vertical Timeline)
                ═══════════════════════════════════════════ */}
            <section className="section-padding bg-[#060e0a] relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-emerald-500/5 rounded-full blur-[120px]" />
                <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-green-500/5 rounded-full blur-[100px]" />

                <div className="section-container relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center max-w-3xl mx-auto mb-16"
                    >
                        <span className="inline-block px-4 py-2 bg-emerald-500/10 border border-emerald-500/30 rounded-full text-emerald-400 text-sm font-semibold mb-4">
                            Our Process
                        </span>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 tracking-tight">
                            Growth{" "}
                            <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                                Marketing Framework
                            </span>
                        </h2>
                        <p className="text-lg text-slate-400">
                            A proven 6-phase framework that takes your brand from invisible to unstoppable.
                        </p>
                    </motion.div>

                    {/* Alternating timeline */}
                    <div className="relative max-w-4xl mx-auto">
                        {/* Center line */}
                        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-emerald-500/50 via-green-500/30 to-transparent" />

                        <div className="space-y-8 md:space-y-0">
                            {marketingProcess.map((step, i) => {
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
                                        <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-[#060e0a] border-2 border-emerald-500/50 items-center justify-center z-10">
                                            <span className="text-lg">{step.icon}</span>
                                        </div>

                                        {/* Card */}
                                        <div className={`w-full md:w-[calc(50%-3rem)] group`}>
                                            <div className={`bg-slate-900/50 border border-slate-800 rounded-2xl p-6 hover:border-emerald-500/40 transition-all duration-500`}>
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
                SECTION 6 — MARKETING SERVICES
                ═══════════════════════════════════════════ */}
            <section className="section-padding bg-[#081210]">
                <div className="section-container">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center max-w-3xl mx-auto mb-16"
                    >
                        <span className="inline-block px-4 py-2 bg-emerald-500/10 border border-emerald-500/30 rounded-full text-emerald-400 text-sm font-semibold mb-4">
                            What We Offer
                        </span>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 tracking-tight">
                            Full-Stack{" "}
                            <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                                Digital Marketing
                            </span>
                        </h2>
                        <p className="text-lg text-slate-400">
                            From organic search to paid ads — we cover every channel that drives growth.
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
                                <div className={`absolute -inset-0.5 bg-gradient-to-r ${service.gradient} rounded-2xl opacity-0 group-hover:opacity-20 blur transition-opacity duration-500`} />
                                <div className="relative bg-[#060e0a]/80 border border-slate-800 rounded-2xl p-8 hover:border-slate-700 transition-all duration-500 h-full">
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
            <section className="py-20 bg-[#060e0a] relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 via-transparent to-green-500/5" />
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
            <section id="contact" className="section-padding bg-[#081210]">
                <div className="section-container">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="relative overflow-hidden rounded-3xl p-10 md:p-16 text-center"
                    >
                        {/* CTA background */}
                        <div className="absolute inset-0 bg-gradient-to-br from-emerald-600 via-green-600 to-teal-600" />
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
                                🚀
                            </motion.div>
                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.15 }}
                                className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 tracking-tight"
                            >
                                Ready to Dominate
                                <br />
                                Your Market Online?
                            </motion.h2>
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.25 }}
                                className="text-lg text-white/80 max-w-2xl mx-auto mb-10"
                            >
                                Free SEO audit + marketing strategy session. We&apos;ll analyze your current
                                presence and build a roadmap to outrank your competition.
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
                                    className="group inline-flex items-center gap-2 px-8 py-4 bg-white text-emerald-700 font-bold rounded-full hover:shadow-2xl hover:shadow-white/20 hover:-translate-y-0.5 transition-all duration-300"
                                >
                                    Get Free SEO Audit
                                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </button>
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

            <LeadGenPopup isOpen={showPopup} onClose={() => setShowPopup(false)} />
        </main>
    );
}