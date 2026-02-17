"use client";

import { useState, useRef, useEffect } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import LeadGenPopup from "../components/home/LeadGenPopup";
import {
    HiOutlineServer,
    HiOutlineShieldCheck,
    HiOutlineLightningBolt,
    HiOutlineGlobeAlt,
    HiOutlineCog,
    HiOutlineRefresh,
    HiOutlineExclamation,
    HiOutlineClock,
    HiOutlineCurrencyDollar,
    HiOutlineChartBar,
    HiOutlineCloud,
    HiOutlineDatabase,
    HiOutlineTerminal,
    HiOutlineLockClosed,
    HiOutlineDocumentReport,
    HiOutlineSupport,
} from "react-icons/hi";

/* ────────────────────────────────────────────────
   DATA
   ──────────────────────────────────────────────── */

const hostingChallenges = [
    {
        icon: HiOutlineExclamation,
        title: "Downtime & Reliability",
        description:
            "A single hour of downtime can cost thousands in lost revenue and damage your brand's reputation with customers and search engines.",
    },
    {
        icon: HiOutlineShieldCheck,
        title: "Security Threats",
        description:
            "DDoS attacks, malware, SSL misconfigurations — without proper setup, your site is a sitting duck for cybercriminals.",
    },
    {
        icon: HiOutlineLightningBolt,
        title: "Performance Issues",
        description:
            "Slow load times kill conversions. Choosing the wrong server, CDN, or caching strategy leads to sluggish user experiences.",
    },
    {
        icon: HiOutlineCurrencyDollar,
        title: "Hidden Costs",
        description:
            "Cheap hosting often means surprise fees for bandwidth, SSL, backups, and support — the real cost is rarely the sticker price.",
    },
    {
        icon: HiOutlineClock,
        title: "Complex Migrations",
        description:
            "Moving from one host to another without data loss, broken links, or SEO penalties requires careful planning and expertise.",
    },
    {
        icon: HiOutlineCog,
        title: "Technical Overhead",
        description:
            "Server configuration, DNS management, email hosting, SSL certificates — the technical burden piles up fast for non-experts.",
    },
];

const devOpsServices = [
    {
        icon: HiOutlineCloud,
        title: "Cloud Infrastructure",
        description:
            "AWS, GCP, Azure — we architect scalable cloud solutions with auto-scaling, load balancing, and 99.99% uptime guarantees.",
        gradient: "from-sky-500 to-blue-600",
    },
    {
        icon: HiOutlineServer,
        title: "Server Setup & Management",
        description:
            "From bare-metal to containerized deployments with Docker & Kubernetes — fully managed, monitored, and optimized servers.",
        gradient: "from-indigo-500 to-violet-600",
    },
    {
        icon: HiOutlineTerminal,
        title: "CI/CD Pipelines",
        description:
            "Automated build, test, and deployment workflows using GitHub Actions, GitLab CI, Jenkins, and ArgoCD for zero-downtime releases.",
        gradient: "from-emerald-500 to-teal-600",
    },
    {
        icon: HiOutlineLockClosed,
        title: "Security & SSL",
        description:
            "Firewall configuration, DDoS protection, SSL/TLS management, vulnerability scanning, and compliance-ready infrastructure.",
        gradient: "from-amber-500 to-orange-600",
    },
    {
        icon: HiOutlineDatabase,
        title: "Database & Backups",
        description:
            "Managed databases, automated backup strategies, disaster recovery plans, and database performance optimization.",
        gradient: "from-rose-500 to-pink-600",
    },
    {
        icon: HiOutlineDocumentReport,
        title: "Monitoring & Analytics",
        description:
            "24/7 uptime monitoring, performance dashboards, log management, alerting, and incident response with tools like Grafana & Datadog.",
        gradient: "from-cyan-500 to-sky-600",
    },
];

const stats = [
    { value: 99.99, suffix: "%", label: "Uptime Guarantee" },
    { value: 500, suffix: "+", label: "Sites Hosted" },
    { value: 50, suffix: "ms", label: "Avg. Response Time" },
    { value: 24, suffix: "/7", label: "Expert Support" },
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
                setCount(Math.floor(start * 100) / 100);
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
            <div className="absolute -inset-0.5 bg-gradient-to-r from-sky-500 to-indigo-600 rounded-2xl opacity-0 group-hover:opacity-30 blur transition-opacity duration-500" />
            <div className="relative bg-slate-900/70 border border-slate-800 rounded-2xl p-6 text-center hover:border-sky-500/40 transition-all duration-300">
                <div className="text-3xl sm:text-4xl font-bold text-white mb-1">
                    {value === 99.99 ? count.toFixed(2) : Math.floor(count)}
                    <span className="text-sky-400">{suffix}</span>
                </div>
                <div className="text-slate-400 text-sm font-medium">{label}</div>
            </div>
        </motion.div>
    );
}

/* ────────────────────────────────────────────────
   MAIN PAGE
   ──────────────────────────────────────────────── */

export default function DomainHostingPage() {
    const [showPopup, setShowPopup] = useState(false);
    const heroRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
    const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
    const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

    return (
        <main className="min-h-screen bg-[#060a14]">
            <Navbar />

            {/* ═══════════════════════════════════════════
                SECTION 1 — HERO: What is Hosting
                ═══════════════════════════════════════════ */}
            <section ref={heroRef} className="relative min-h-screen flex items-center overflow-hidden">
                {/* Background */}
                <motion.div style={{ y: heroY }} className="absolute inset-0">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#060a14] via-[#0a1028] to-[#060a14]" />
                    <div className="absolute top-20 left-1/4 w-[500px] h-[500px] bg-sky-600/15 rounded-full blur-[120px]" />
                    <div className="absolute bottom-20 right-1/4 w-[400px] h-[400px] bg-indigo-500/10 rounded-full blur-[100px]" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/5 rounded-full blur-[150px]" />
                    <div
                        className="absolute inset-0 opacity-[0.04]"
                        style={{
                            backgroundImage: `linear-gradient(rgba(56,189,248,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(56,189,248,0.3) 1px, transparent 1px)`,
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
                                <span className="inline-flex items-center gap-2 px-4 py-2 bg-sky-500/10 border border-sky-500/30 rounded-full text-sky-400 text-sm font-medium mb-8">
                                    <span className="w-2 h-2 bg-sky-400 rounded-full animate-pulse" />
                                    Domain & Hosting Services
                                </span>
                            </motion.div>

                            <motion.h1
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.7, delay: 0.1 }}
                                className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6 leading-[1.1] tracking-tight"
                            >
                                Your Site
                                <br />
                                <span className="bg-gradient-to-r from-sky-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
                                    Deserves Better
                                </span>
                                <br />
                                Hosting.
                            </motion.h1>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                className="text-lg sm:text-xl text-slate-400 max-w-lg mx-auto lg:mx-0 mb-10 leading-relaxed"
                            >
                                Web hosting is the backbone of every online business — it&apos;s the server infrastructure
                                that makes your website accessible 24/7. The right hosting means speed, security, and
                                reliability. The wrong one? Downtime, lost revenue, and frustrated users.
                            </motion.p>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.3 }}
                                className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-12"
                            >
                                <button
                                    onClick={() => setShowPopup(true)}
                                    className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-sky-600 to-indigo-600 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-sky-500/40 transition-all duration-300"
                                >
                                    Get Hosting Consultation
                                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </button>
                                <Link
                                    href="#services"
                                    className="inline-flex items-center gap-2 px-8 py-4 border border-slate-600 text-slate-300 font-semibold rounded-full hover:bg-slate-800/50 hover:border-sky-500/50 transition-all duration-300"
                                >
                                    View Services
                                </Link>
                            </motion.div>

                            {/* Badges */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.5 }}
                                className="flex items-center justify-center lg:justify-start gap-3"
                            >
                                <span className="text-slate-500 text-sm">We support:</span>
                                <div className="flex gap-2">
                                    {["☁️ AWS", "🔷 Azure", "🌐 GCP"].map((b) => (
                                        <span key={b} className="px-3 py-1.5 bg-slate-800/60 border border-slate-700/50 rounded-full text-xs text-slate-300 font-medium">
                                            {b}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        </div>

                        {/* Right — Server Mockup */}
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.9, delay: 0.3 }}
                            className="relative flex items-center justify-center"
                        >
                            <div className="absolute w-80 h-80 bg-sky-500/20 rounded-full blur-[80px]" />

                            <div className="relative w-full max-w-md">
                                <div className="absolute -inset-8 bg-gradient-to-r from-sky-500/20 to-indigo-500/20 rounded-3xl blur-3xl" />
                                <div className="relative bg-slate-900/80 backdrop-blur-sm rounded-2xl border border-slate-700/60 p-6 shadow-2xl">
                                    {/* Terminal header */}
                                    <div className="flex items-center gap-2 mb-5">
                                        <div className="w-3 h-3 rounded-full bg-red-500" />
                                        <div className="w-3 h-3 rounded-full bg-yellow-500" />
                                        <div className="w-3 h-3 rounded-full bg-green-500" />
                                        <span className="ml-3 text-slate-500 text-sm font-mono">server-status</span>
                                    </div>

                                    {/* Server metrics */}
                                    <div className="space-y-4 font-mono text-sm">
                                        <div className="flex items-center justify-between">
                                            <span className="text-slate-400">Status</span>
                                            <span className="flex items-center gap-2 text-emerald-400">
                                                <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                                                Online
                                            </span>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <span className="text-slate-400">Uptime</span>
                                            <span className="text-sky-400">99.99%</span>
                                        </div>
                                        <div>
                                            <div className="flex items-center justify-between mb-1">
                                                <span className="text-slate-400">CPU</span>
                                                <span className="text-sky-400">23%</span>
                                            </div>
                                            <div className="w-full bg-slate-800 rounded-full h-2">
                                                <div className="bg-gradient-to-r from-sky-500 to-indigo-500 h-2 rounded-full" style={{ width: "23%" }} />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="flex items-center justify-between mb-1">
                                                <span className="text-slate-400">Memory</span>
                                                <span className="text-sky-400">4.2 / 16 GB</span>
                                            </div>
                                            <div className="w-full bg-slate-800 rounded-full h-2">
                                                <div className="bg-gradient-to-r from-sky-500 to-indigo-500 h-2 rounded-full" style={{ width: "26%" }} />
                                            </div>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <span className="text-slate-400">SSL</span>
                                            <span className="text-emerald-400">🔒 Valid</span>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <span className="text-slate-400">Response</span>
                                            <span className="text-sky-400">48ms</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Floating badges */}
                                <motion.div
                                    animate={{ y: [0, -8, 0] }}
                                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                                    className="absolute -top-4 -right-4 px-4 py-2 bg-gradient-to-r from-sky-500 to-indigo-500 rounded-full text-white text-sm font-semibold shadow-lg shadow-sky-500/30"
                                >
                                    ⚡ 99.99% Uptime
                                </motion.div>
                                <motion.div
                                    animate={{ y: [0, 8, 0] }}
                                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                                    className="absolute -bottom-4 -left-4 px-4 py-2 bg-slate-800 border border-sky-500/30 rounded-full text-sky-400 text-sm font-semibold shadow-lg"
                                >
                                    🔒 SSL Secured
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
                        <div className="w-1.5 h-1.5 bg-sky-400 rounded-full" />
                    </motion.div>
                </motion.div>
            </section>

            {/* ═══════════════════════════════════════════
                SECTION 2 — Why Hosting is a Challenge
                ═══════════════════════════════════════════ */}
            <section className="section-padding bg-[#080e1c] relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-sky-500/5 rounded-full blur-[120px]" />

                <div className="section-container relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center max-w-3xl mx-auto mb-16"
                    >
                        <span className="inline-block px-4 py-2 bg-red-500/10 border border-red-500/30 rounded-full text-red-400 text-sm font-semibold mb-4">
                            The Challenge
                        </span>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 tracking-tight">
                            Why Hosting is{" "}
                            <span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
                                Harder Than It Looks
                            </span>
                        </h2>
                        <p className="text-lg text-slate-400">
                            Most businesses underestimate hosting complexity. Here&apos;s what catches them off guard.
                        </p>
                    </motion.div>

                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
                    >
                        {hostingChallenges.map((c) => (
                            <motion.div
                                key={c.title}
                                variants={staggerItem}
                                className="group relative overflow-hidden rounded-2xl border border-slate-800 p-6 hover:border-red-500/30 transition-all duration-500"
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                <div className="relative z-10">
                                    <div className="w-12 h-12 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                                        <c.icon className="w-6 h-6 text-red-400" />
                                    </div>
                                    <h3 className="text-lg font-bold text-white mb-1">{c.title}</h3>
                                    <p className="text-slate-400 text-sm">{c.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════
                SECTION 3 — We'll Guide You + DevOps Services
                ═══════════════════════════════════════════ */}
            <section id="services" className="section-padding bg-[#060a14]">
                <div className="section-container">
                    {/* Intro */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center max-w-3xl mx-auto mb-8"
                    >
                        <span className="inline-block px-4 py-2 bg-sky-500/10 border border-sky-500/30 rounded-full text-sky-400 text-sm font-semibold mb-4">
                            We&apos;ll Guide You
                        </span>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 tracking-tight">
                            End-to-End{" "}
                            <span className="bg-gradient-to-r from-sky-400 to-indigo-400 bg-clip-text text-transparent">
                                DevOps & Hosting
                            </span>
                        </h2>
                        <p className="text-lg text-slate-400">
                            Don&apos;t navigate hosting alone. Our DevOps engineers handle everything — from domain setup
                            to production-grade infrastructure — so you can focus on growing your business.
                        </p>
                    </motion.div>

                    {/* Support banner */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="relative overflow-hidden rounded-2xl border border-sky-500/20 bg-gradient-to-r from-sky-500/5 via-indigo-500/5 to-sky-500/5 p-8 mb-16"
                    >
                        <div className="flex flex-col md:flex-row items-center gap-6">
                            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-sky-500 to-indigo-600 flex items-center justify-center flex-shrink-0 shadow-lg shadow-sky-500/20">
                                <HiOutlineSupport className="w-8 h-8 text-white" />
                            </div>
                            <div className="text-center md:text-left">
                                <h3 className="text-xl font-bold text-white mb-2">
                                    From Zero to Production — We Handle It All
                                </h3>
                                <p className="text-slate-400 leading-relaxed">
                                    Domain registration, DNS configuration, server provisioning, SSL setup, deployment
                                    pipelines, monitoring, and ongoing maintenance. One team, complete coverage,
                                    24/7 support. Your infrastructure is in expert hands.
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    {/* DevOps services grid */}
                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                    >
                        {devOpsServices.map((service) => (
                            <motion.div key={service.title} variants={staggerItem} className="group relative">
                                <div className={`absolute -inset-0.5 bg-gradient-to-r ${service.gradient} rounded-2xl opacity-0 group-hover:opacity-20 blur transition-opacity duration-500`} />
                                <div className="relative bg-[#080e1c]/80 border border-slate-800 rounded-2xl p-8 hover:border-slate-700 transition-all duration-500 h-full">
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
                SECTION 4 — STATS
                ═══════════════════════════════════════════ */}
            <section className="py-20 bg-[#080e1c] relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-sky-500/5 via-transparent to-indigo-500/5" />
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
                SECTION 5 — CTA
                ═══════════════════════════════════════════ */}
            <section id="contact" className="section-padding bg-[#060a14]">
                <div className="section-container">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="relative overflow-hidden rounded-3xl p-10 md:p-16 text-center"
                    >
                        {/* CTA background */}
                        <div className="absolute inset-0 bg-gradient-to-br from-sky-600 via-blue-600 to-indigo-600" />
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
                                Ready for Worry-Free
                                <br />
                                Hosting & Infrastructure?
                            </motion.h2>
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.25 }}
                                className="text-lg text-white/80 max-w-2xl mx-auto mb-10"
                            >
                                Free infrastructure audit + hosting strategy session. We&apos;ll review your current
                                setup and build a roadmap for blazing-fast, secure, and scalable hosting.
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
                                    className="group inline-flex items-center gap-2 px-8 py-4 bg-white text-indigo-700 font-bold rounded-full hover:shadow-2xl hover:shadow-white/20 hover:-translate-y-0.5 transition-all duration-300"
                                >
                                    Get Free Infrastructure Audit
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

            <LeadGenPopup isOpen={showPopup} onClose={() => setShowPopup(false)} />
        </main>
    );
}