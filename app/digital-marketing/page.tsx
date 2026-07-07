"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import {
    SiGoogleads,
    SiMeta,
    SiTiktok,
    SiMailchimp,
    SiHubspot,
    SiGoogleanalytics,
    SiCanva,
    SiWordpress,
    SiShopify,
    SiStripe,
    SiFigma,
    SiNotion,
} from "react-icons/si";
import {
    HiOutlineSpeakerphone,
    HiOutlineTrendingUp,
    HiOutlineGlobeAlt,
    HiOutlineMail,
    HiOutlineFilm,
    HiOutlinePencilAlt,
    HiOutlineUserGroup,
    HiOutlineChartBar,
    HiOutlineChatAlt2,
    HiOutlinePhotograph,
    HiOutlineLightningBolt,
    HiOutlineSearch,
    HiOutlineCurrencyDollar,
    HiOutlineClipboardCheck,
    HiOutlineRefresh,
    HiOutlineEye,
    HiOutlineHeart,
    HiOutlineShoppingCart,
} from "react-icons/hi";

/* ────────────────────────────────────────────────
   DATA
   ──────────────────────────────────────────────── */

const techStack = [
    { icon: SiGoogleads, name: "Google Ads", color: "#4285F4" },
    { icon: SiMeta, name: "Meta Ads", color: "#0081FB" },
    { icon: SiTiktok, name: "TikTok Ads", color: "#EE1D52" },
    { icon: SiMailchimp, name: "Mailchimp", color: "#FFE01B" },
    { icon: SiHubspot, name: "HubSpot", color: "#FF7A59" },
    { icon: SiGoogleanalytics, name: "Analytics", color: "#E37400" },
    { icon: SiCanva, name: "Canva", color: "#00C4CC" },
    { icon: SiWordpress, name: "WordPress", color: "#21759B" },
    { icon: SiShopify, name: "Shopify", color: "#96BF48" },
    { icon: SiStripe, name: "Stripe", color: "#635BFF" },
    { icon: SiFigma, name: "Figma", color: "#F24E1E" },
    { icon: SiNotion, name: "Notion", color: "#FFFFFF" },
];

const services = [
    {
        icon: HiOutlineSpeakerphone,
        title: "Social Media Marketing",
        description: "Strategic social media management across Instagram, Facebook, LinkedIn, X, and TikTok — content calendars, engagement, and community growth.",
        gradient: "from-pink-500 to-rose-600",
    },
    {
        icon: HiOutlineCurrencyDollar,
        title: "PPC & Paid Advertising",
        description: "High-ROI Google Ads, Meta Ads, TikTok Ads campaigns with precise audience targeting, A/B testing, and conversion-optimized landing pages.",
        gradient: "from-blue-500 to-indigo-600",
    },
    {
        icon: HiOutlinePencilAlt,
        title: "Content Marketing",
        description: "Blog posts, whitepapers, case studies, newsletters, and thought leadership content that drives organic traffic and establishes authority.",
        gradient: "from-emerald-500 to-teal-600",
    },
    {
        icon: HiOutlineMail,
        title: "Email Marketing & Automation",
        description: "Drip campaigns, newsletter design, segmentation, behavioral triggers, and automated sequences that nurture leads into customers.",
        gradient: "from-amber-500 to-orange-600",
    },
    {
        icon: HiOutlineFilm,
        title: "Video & Reels Production",
        description: "Short-form reels, ad creatives, explainer videos, UGC-style content, and motion graphics optimized for maximum engagement and virality.",
        gradient: "from-violet-500 to-purple-600",
    },
    {
        icon: HiOutlineSearch,
        title: "SEO & Organic Growth",
        description: "Technical SEO audits, keyword strategy, on-page optimization, link building, and content-SEO alignment to dominate search rankings.",
        gradient: "from-cyan-500 to-sky-600",
    },
    {
        icon: HiOutlineChartBar,
        title: "Analytics & Reporting",
        description: "Custom dashboards, conversion tracking, attribution modeling, funnel analysis, and monthly performance reports with actionable insights.",
        gradient: "from-lime-500 to-green-600",
    },
    {
        icon: HiOutlinePhotograph,
        title: "Brand & Creative Design",
        description: "Brand identity design, ad creatives, social media templates, presentation decks, and visual content that captures attention and drives action.",
        gradient: "from-fuchsia-500 to-pink-600",
    },
    {
        icon: HiOutlineShoppingCart,
        title: "E-commerce Marketing",
        description: "Product listing optimization, shopping ads, retargeting, abandoned cart recovery, and conversion rate optimization for online stores.",
        gradient: "from-red-500 to-rose-600",
    },
];

const processSteps = [
    {
        number: "01",
        icon: HiOutlineClipboardCheck,
        title: "Audit & Strategy",
        description: "We analyze your brand, competitors, and audience to craft a data-driven marketing strategy aligned with your business goals.",
    },
    {
        number: "02",
        icon: HiOutlineEye,
        title: "Content & Creatives",
        description: "Our team produces scroll-stopping content, ad creatives, and campaigns designed to capture attention and drive engagement.",
    },
    {
        number: "03",
        icon: HiOutlineLightningBolt,
        title: "Launch & Optimize",
        description: "We launch campaigns across channels, continuously A/B test, optimize targeting, and scale what works for maximum ROI.",
    },
    {
        number: "04",
        icon: HiOutlineTrendingUp,
        title: "Report & Scale",
        description: "Transparent reporting with actionable insights. We identify growth opportunities and scale winning strategies to accelerate results.",
    },
];

const stats = [
    { value: 200, suffix: "+", label: "Campaigns Launched" },
    { value: 5, suffix: "x", label: "Avg. ROAS" },
    { value: 10, suffix: "M+", label: "Reach Generated" },
    { value: 95, suffix: "%", label: "Client Retention" },
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
            <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-500 to-amber-500 rounded-2xl opacity-0 group-hover:opacity-30 blur transition-opacity duration-500" />
            <div className="relative bg-black/70 border border-slate-800 rounded-2xl p-6 text-center hover:border-orange-500/40 transition-all duration-300">
                <div className="text-3xl sm:text-4xl font-bold text-white mb-1">
                    {Math.floor(count)}
                    <span className="text-orange-400">{suffix}</span>
                </div>
                <div className="text-slate-400 text-sm font-medium">{label}</div>
            </div>
        </motion.div>
    );
}

/* ────────────────────────────────────────────────
   MAIN PAGE
   ──────────────────────────────────────────────── */

export default function DigitalMarketingPage() {
    const heroRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
    const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
    const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

    return (
        <main className="min-h-screen bg-[#060a14]">
            <Navbar />

            {/* ═══════════════════════════════════════════
                HERO
                ═══════════════════════════════════════════ */}
            <section ref={heroRef} className="relative min-h-screen flex items-center overflow-hidden">
                <motion.div style={{ y: heroY }} className="absolute inset-0">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#060a14] via-[#1a0a02] to-[#060a14]" />
                    <div className="absolute top-20 left-1/4 w-[500px] h-[500px] bg-orange-600/12 rounded-full blur-[120px]" />
                    <div className="absolute bottom-20 right-1/4 w-[400px] h-[400px] bg-amber-500/8 rounded-full blur-[100px]" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-rose-500/5 rounded-full blur-[150px]" />
                    <div
                        className="absolute inset-0 opacity-[0.03]"
                        style={{
                            backgroundImage: `radial-gradient(circle, rgba(251,146,60,0.4) 1px, transparent 1px)`,
                            backgroundSize: "40px 40px",
                        }}
                    />
                </motion.div>

                <motion.div style={{ opacity: heroOpacity }} className="relative z-10 section-container pt-28 pb-20">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        {/* Left */}
                        <div className="text-center lg:text-left">
                            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                                <span className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500/10 border border-orange-500/30 rounded-full text-orange-400 text-sm font-medium mb-8">
                                    <span className="w-2 h-2 bg-orange-400 rounded-full animate-pulse" />
                                    Digital Marketing Services
                                </span>
                            </motion.div>

                            <motion.h1
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.7, delay: 0.1 }}
                                className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6 leading-[1.1] tracking-tight"
                            >
                                Grow Your
                                <br />
                                <span className="bg-gradient-to-r from-orange-400 via-amber-400 to-yellow-400 bg-clip-text text-transparent">
                                    Brand Online
                                </span>
                                <br />
                                Everywhere.
                            </motion.h1>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                className="text-lg sm:text-xl text-slate-400 max-w-lg mx-auto lg:mx-0 mb-10 leading-relaxed"
                            >
                                Data-driven digital marketing strategies that drive real results — from social media
                                and paid ads to content marketing and email automation. We turn clicks into customers.
                            </motion.p>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.3 }}
                                className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-12"
                            >
                                <button
                                    className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-orange-600 to-amber-600 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-orange-500/40 transition-all duration-300"
                                >
                                    Get Free Marketing Audit
                                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </button>
                                <Link
                                    href="#services"
                                    className="inline-flex items-center gap-2 px-8 py-4 border border-slate-600 text-slate-300 font-semibold rounded-full hover:bg-[#111111]/50 hover:border-orange-500/50 transition-all duration-300"
                                >
                                    See Our Services
                                </Link>
                            </motion.div>

                            {/* Channel badges */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.5 }}
                                className="flex flex-wrap items-center justify-center lg:justify-start gap-2"
                            >
                                {["📱 Social Media", "💰 PPC Ads", "📧 Email", "✍️ Content", "📊 Analytics"].map((b) => (
                                    <span key={b} className="px-3 py-1.5 bg-[#111111]/60 border border-slate-700/50 rounded-full text-xs text-slate-300 font-medium">
                                        {b}
                                    </span>
                                ))}
                            </motion.div>
                        </div>

                        {/* Right — Dashboard Mockup */}
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.9, delay: 0.3 }}
                            className="relative flex items-center justify-center"
                        >
                            <div className="absolute w-80 h-80 bg-orange-500/20 rounded-full blur-[80px]" />

                            <div className="relative w-full max-w-md">
                                <div className="absolute -inset-8 bg-gradient-to-r from-orange-500/20 to-amber-500/20 rounded-3xl blur-3xl" />
                                <div className="relative bg-black/80 backdrop-blur-sm rounded-2xl border border-orange-700/30 p-6 shadow-2xl">
                                    {/* Header */}
                                    <div className="flex items-center justify-between mb-6">
                                        <div>
                                            <h3 className="text-white font-bold text-sm">Campaign Dashboard</h3>
                                            <p className="text-neutral-400 text-xs">Last 30 days</p>
                                        </div>
                                        <span className="px-2.5 py-1 bg-emerald-500/10 text-emerald-400 text-xs font-semibold rounded-full">
                                            ↑ 42% vs last month
                                        </span>
                                    </div>

                                    {/* Metrics grid */}
                                    <div className="grid grid-cols-2 gap-3 mb-5">
                                        {[
                                            { label: "Impressions", value: "2.4M", change: "+18%", color: "text-sky-400" },
                                            { label: "Clicks", value: "128K", change: "+24%", color: "text-emerald-400" },
                                            { label: "Conversions", value: "3,847", change: "+31%", color: "text-orange-400" },
                                            { label: "ROAS", value: "5.2x", change: "+12%", color: "text-violet-400" },
                                        ].map((m) => (
                                            <div key={m.label} className="bg-[#111111]/60 rounded-xl p-3">
                                                <p className="text-neutral-400 text-xs mb-1">{m.label}</p>
                                                <p className={`text-lg font-bold ${m.color}`}>{m.value}</p>
                                                <p className="text-emerald-400 text-xs font-medium">{m.change}</p>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Mini chart */}
                                    <div className="bg-[#111111]/40 rounded-xl p-4">
                                        <div className="flex items-center justify-between mb-3">
                                            <span className="text-slate-400 text-xs font-medium">Revenue Growth</span>
                                            <span className="text-emerald-400 text-xs font-bold">+42%</span>
                                        </div>
                                        <div className="flex items-end gap-1 h-12">
                                            {[30, 45, 35, 55, 40, 65, 50, 70, 60, 80, 75, 92].map((h, i) => (
                                                <div
                                                    key={i}
                                                    className="flex-1 bg-gradient-to-t from-orange-600 to-amber-500 rounded-sm opacity-70 hover:opacity-100 transition-opacity"
                                                    style={{ height: `${h}%` }}
                                                />
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* Floating badges */}
                                <motion.div
                                    animate={{ y: [0, -8, 0] }}
                                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                                    className="absolute -top-4 -right-4 px-4 py-2 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full text-white text-sm font-semibold shadow-lg shadow-orange-500/30"
                                >
                                    📈 5x ROAS
                                </motion.div>
                                <motion.div
                                    animate={{ y: [0, 8, 0] }}
                                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                                    className="absolute -bottom-4 -left-4 px-4 py-2 bg-[#111111] border border-orange-500/30 rounded-full text-orange-400 text-sm font-semibold shadow-lg"
                                >
                                    🎯 Data-Driven
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
                        <div className="w-1.5 h-1.5 bg-orange-400 rounded-full" />
                    </motion.div>
                </motion.div>
            </section>

            {/* ═══════════════════════════════════════════
                TOOL MARQUEE
                ═══════════════════════════════════════════ */}
            <section className="py-12 bg-[#060a14] relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-orange-500/5 via-transparent to-transparent" />

                <div className="section-container mb-8">
                    <p className="text-center text-neutral-400 text-sm font-semibold uppercase tracking-widest">
                        Tools & Platforms We Use
                    </p>
                </div>

                <div className="relative overflow-hidden">
                    <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#060a14] to-transparent z-10" />
                    <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#060a14] to-transparent z-10" />

                    <div className="flex animate-marquee-dm">
                        {[...techStack, ...techStack, ...techStack].map((tech, i) => (
                            <div
                                key={`${tech.name}-${i}`}
                                className="flex items-center gap-3 px-8 py-4 mx-2 bg-black/50 border border-slate-800/50 rounded-xl hover:border-orange-500/30 transition-colors flex-shrink-0"
                            >
                                <tech.icon className="w-7 h-7" style={{ color: tech.color }} />
                                <span className="text-slate-300 font-medium text-sm whitespace-nowrap">{tech.name}</span>
                            </div>
                        ))}
                    </div>

                    <style jsx>{`
                        @keyframes marquee-dm {
                            0% { transform: translateX(0); }
                            100% { transform: translateX(-33.33%); }
                        }
                        .animate-marquee-dm {
                            animation: marquee-dm 30s linear infinite;
                        }
                        .animate-marquee-dm:hover {
                            animation-play-state: paused;
                        }
                    `}</style>
                </div>
            </section>

            {/* ═══════════════════════════════════════════
                SERVICES
                ═══════════════════════════════════════════ */}
            <section id="services" className="section-padding bg-[#080e1c] relative overflow-hidden">
                <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-orange-500/5 rounded-full blur-[120px]" />
                <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-amber-500/5 rounded-full blur-[100px]" />

                <div className="section-container relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center max-w-3xl mx-auto mb-16"
                    >
                        <span className="inline-block px-4 py-2 bg-orange-500/10 border border-orange-500/30 rounded-full text-orange-400 text-sm font-semibold mb-4">
                            What We Offer
                        </span>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 tracking-tight">
                            Full-Funnel{" "}
                            <span className="bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">
                                Marketing Services
                            </span>
                        </h2>
                        <p className="text-lg text-slate-400">
                            From awareness to conversion — everything you need to grow your brand, generate leads,
                            and scale revenue across every digital channel.
                        </p>
                    </motion.div>

                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
                    >
                        {services.map((service) => (
                            <motion.div key={service.title} variants={staggerItem} className="group relative">
                                <div className={`absolute -inset-0.5 bg-gradient-to-r ${service.gradient} rounded-2xl opacity-0 group-hover:opacity-20 blur transition-opacity duration-500`} />
                                <div className="relative bg-black/60 border border-slate-800 rounded-2xl p-7 hover:border-slate-700 transition-all duration-500 h-full">
                                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                                        <service.icon className="w-6 h-6 text-white" />
                                    </div>
                                    <h3 className="text-lg font-bold text-white mb-2">{service.title}</h3>
                                    <p className="text-slate-400 text-sm leading-relaxed">{service.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════
                PROCESS
                ═══════════════════════════════════════════ */}
            <section className="section-padding bg-[#060a14] relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-orange-500/3 to-transparent" />

                <div className="section-container relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center max-w-3xl mx-auto mb-16"
                    >
                        <span className="inline-block px-4 py-2 bg-orange-500/10 border border-orange-500/30 rounded-full text-orange-400 text-sm font-semibold mb-4">
                            Our Process
                        </span>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 tracking-tight">
                            How We{" "}
                            <span className="bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">
                                Drive Growth
                            </span>
                        </h2>
                        <p className="text-lg text-slate-400">
                            A proven 4-step framework that turns marketing spend into measurable business results.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {processSteps.map((step, idx) => (
                            <motion.div
                                key={step.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: idx * 0.1 }}
                                className="group relative"
                            >
                                <div className="relative bg-[#080e1c]/80 border border-slate-800 rounded-2xl p-8 hover:border-orange-500/30 transition-all duration-500 h-full text-center">
                                    <div className="text-5xl font-black text-orange-500/10 mb-4 group-hover:text-orange-500/20 transition-colors">
                                        {step.number}
                                    </div>
                                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-orange-500 to-amber-600 flex items-center justify-center mx-auto mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300">
                                        <step.icon className="w-7 h-7 text-white" />
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                                    <p className="text-slate-400 text-sm leading-relaxed">{step.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════
                STATS
                ═══════════════════════════════════════════ */}
            <section className="py-20 bg-[#080e1c] relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 via-transparent to-amber-500/5" />
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
                CTA
                ═══════════════════════════════════════════ */}
            <section className="section-padding bg-[#060a14]">
                <div className="section-container">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="relative overflow-hidden rounded-3xl p-10 md:p-16 text-center"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-orange-600 via-amber-600 to-yellow-600" />
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.15),transparent_60%)]" />
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
                                Your Market?
                            </motion.h2>
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.25 }}
                                className="text-lg text-white/80 max-w-2xl mx-auto mb-10"
                            >
                                Free marketing audit + strategy session. We&apos;ll analyze your current campaigns, identify
                                quick wins, and build a growth roadmap tailored to your business goals.
                            </motion.p>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.35 }}
                                className="flex flex-col sm:flex-row items-center justify-center gap-4"
                            >
                                <button
                                    className="group inline-flex items-center gap-2 px-8 py-4 bg-black text-orange-700 font-bold rounded-full hover:shadow-2xl hover:shadow-white/20 hover:-translate-y-0.5 transition-all duration-300"
                                >
                                    Get Free Marketing Audit
                                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </button>
                                <Link
                                    href="#services"
                                    className="inline-flex items-center gap-2 px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-full hover:bg-white/10 transition-all duration-300"
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