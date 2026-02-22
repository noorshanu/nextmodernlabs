"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import {
    HiOutlineMail,
    HiOutlinePhone,
    HiOutlineLocationMarker,
    HiOutlineClock,
    HiOutlineArrowRight,
    HiOutlineCheckCircle,
    HiUser,
    HiMail,
    HiPhone,
    HiCheckCircle,
} from "react-icons/hi";
import { IoMdSend } from "react-icons/io";
import { FaRocket, FaTwitter, FaLinkedinIn, FaInstagram, FaGithub, FaWhatsapp } from "react-icons/fa";

/* ────────────────────────────────────────────────
   DATA
   ──────────────────────────────────────────────── */

const services = [
    "Web Development",
    "Mobile Development",
    "UI/UX Design",
    "SEO & Marketing",
    "Web3 Development",
    "Digital Marketing",
    "Domain & Hosting",
    "Other",
];

const countryCodes = [
    { code: "+1", country: "US", flag: "🇺🇸" },
    { code: "+91", country: "IN", flag: "🇮🇳" },
    { code: "+44", country: "UK", flag: "🇬🇧" },
    { code: "+61", country: "AU", flag: "🇦🇺" },
    { code: "+971", country: "UAE", flag: "🇦🇪" },
];

const contactInfo = [
    {
        icon: HiOutlineMail,
        label: "Email Us",
        value: "hello@nextmodernlabs.com",
        sub: "We reply within 24 hours",
        href: "mailto:hello@nextmodernlabs.com",
        gradient: "from-cyan-500 to-teal-500",
        bg: "bg-cyan-500/10",
        border: "border-cyan-500/20",
    },
    {
        icon: HiOutlinePhone,
        label: "Call / WhatsApp",
        value: "+91 790 335 0593",
        sub: "Mon – Sat, 9 AM – 7 PM IST",
        href: "https://wa.me/+917903350593",
        gradient: "from-emerald-500 to-green-500",
        bg: "bg-emerald-500/10",
        border: "border-emerald-500/20",
    },
    {
        icon: HiOutlineLocationMarker,
        label: "Our Office",
        value: "Bangalore, Karnataka",
        sub: "India — Remote Worldwide",
        href: "https://maps.google.com/?q=Bangalore,India",
        gradient: "from-violet-500 to-purple-500",
        bg: "bg-violet-500/10",
        border: "border-violet-500/20",
    },
];

const socialLinks = [
    {
        label: "Twitter / X",
        icon: FaTwitter,
        href: "https://x.com/NextModernLabs",
        gradient: "from-sky-400 to-blue-500",
        handle: "@NextModernLabs",
    },
    {
        label: "LinkedIn",
        icon: FaLinkedinIn,
        href: "https://www.linkedin.com/company/next-modern-lab",
        gradient: "from-blue-500 to-indigo-600",
        handle: "next-modern-lab",
    },
    {
        label: "Instagram",
        icon: FaInstagram,
        href: "https://www.instagram.com/nextmodernlabs/",
        gradient: "from-pink-500 to-fuchsia-600",
        handle: "@nextmodernlabs",
    },
    {
        label: "GitHub",
        icon: FaGithub,
        href: "https://github.com/NextModernLabs",
        gradient: "from-slate-500 to-slate-700",
        handle: "NextModernLabs",
    },
    {
        label: "WhatsApp",
        icon: FaWhatsapp,
        href: "https://wa.me/+917903350593",
        gradient: "from-green-500 to-emerald-600",
        handle: "+91 7903350593",
    },
];

/* ────────────────────────────────────────────────
   ANIMATION VARIANTS
   ──────────────────────────────────────────────── */

const stagger = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
};

const fadeUp = {
    hidden: { opacity: 0, y: 25 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const GOOGLE_SHEET_URL =
    "https://script.google.com/macros/s/AKfycbwsEf1-vil0qykH4Vh00nrugfuH3G3kJF_EpYA2MAnktcz7xUrc4yXwWbv9_SEM5qk6KA/exec";

/* ────────────────────────────────────────────────
   MAIN PAGE
   ──────────────────────────────────────────────── */

export default function ContactUsPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        countryCode: "+91",
        phone: "",
        service: "",
        message: "",
    });
    const [errors, setErrors] = useState<Record<string, string>>({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);

    const validate = () => {
        const e: Record<string, string> = {};
        if (!formData.name.trim()) e.name = "Name is required";
        if (!formData.email.trim()) e.email = "Email is required";
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) e.email = "Invalid email";
        if (!formData.phone.trim()) e.phone = "Phone number is required";
        else if (!/^\d{10}$/.test(formData.phone.replace(/\s/g, ""))) e.phone = "Must be 10 digits";
        if (!formData.service) e.service = "Please select a service";
        setErrors(e);
        return Object.keys(e).length === 0;
    };

    const handleSubmit = async (ev: React.FormEvent) => {
        ev.preventDefault();
        if (!validate()) return;
        setIsSubmitting(true);
        try {
            await fetch(GOOGLE_SHEET_URL, {
                method: "POST",
                mode: "no-cors",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    phone: `${formData.countryCode} ${formData.phone}`,
                    service: formData.service,
                    message: formData.message,
                    timestamp: new Date().toISOString(),
                }),
            });
            setIsSubmitting(false);
            setShowSuccess(true);
            setFormData({ name: "", email: "", countryCode: "+91", phone: "", service: "", message: "" });
        } catch {
            setIsSubmitting(false);
            alert("Something went wrong. Please try again.");
        }
    };

    return (
        <main className="min-h-screen bg-[#08080f]">
            <Navbar />

            {/* ═══════════════════════════════════════════
                HERO HEADER
                ═══════════════════════════════════════════ */}
            <section className="relative pt-32 pb-20 overflow-hidden">
                {/* Background glow */}
                <div className="absolute inset-0">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#08080f] via-[#0a1020] to-[#08080f]" />
                    <div className="absolute top-10 left-1/3 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[130px]" />
                    <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-teal-500/8 rounded-full blur-[110px]" />
                    <div
                        className="absolute inset-0 opacity-[0.025]"
                        style={{
                            backgroundImage: `radial-gradient(circle, #22d3ee 1px, transparent 1px)`,
                            backgroundSize: "36px 36px",
                        }}
                    />
                </div>

                <div className="relative z-10 section-container text-center max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <span className="inline-flex items-center gap-2 px-5 py-2.5 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-cyan-400 text-sm font-semibold mb-8">
                            <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
                            Available Worldwide
                        </span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.1 }}
                        className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-[1.05] tracking-tight"
                    >
                        Let&apos;s Start a
                        <br />
                        <span className="bg-gradient-to-r from-cyan-400 via-teal-400 to-emerald-400 bg-clip-text text-transparent">
                            Conversation
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed"
                    >
                        Have a project in mind, a question, or just want to say hello?
                        Fill out the form below and we&apos;ll get back to you within 24 hours.
                    </motion.p>

                    {/* Trust chips */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="flex flex-wrap items-center justify-center gap-3 mt-8"
                    >
                        {["⚡ 24-hr response", "🔒 100% confidential", "🌍 Serving clients worldwide", "✅ Free consultation"].map((chip) => (
                            <span key={chip} className="px-4 py-2 bg-slate-800/60 border border-slate-700/50 text-slate-300 text-sm rounded-full">
                                {chip}
                            </span>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════
                CONTACT CARDS
                ═══════════════════════════════════════════ */}
            <section className="pb-0 pt-4 bg-[#08080f]">
                <div className="section-container">
                    <motion.div
                        variants={stagger}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-5xl mx-auto"
                    >
                        {contactInfo.map((info) => (
                            <motion.a
                                key={info.label}
                                href={info.href}
                                target={info.href.startsWith("http") ? "_blank" : undefined}
                                rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
                                variants={fadeUp}
                                className="group relative block"
                                aria-label={info.label}
                            >
                                <div className={`absolute -inset-0.5 bg-gradient-to-r ${info.gradient} rounded-2xl opacity-0 group-hover:opacity-25 blur transition-opacity duration-500`} />
                                <div className={`relative flex flex-col items-center text-center p-8 ${info.bg} border ${info.border} rounded-2xl hover:border-opacity-60 transition-all duration-300 h-full`}>
                                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${info.gradient} flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                                        <info.icon className="w-7 h-7 text-white" />
                                    </div>
                                    <p className="text-slate-500 text-xs font-semibold uppercase tracking-widest mb-2">{info.label}</p>
                                    <p className={`text-lg font-bold bg-gradient-to-r ${info.gradient} bg-clip-text text-transparent mb-1`}>
                                        {info.value}
                                    </p>
                                    <p className="text-slate-500 text-sm">{info.sub}</p>
                                </div>
                            </motion.a>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════
                CONTACT FORM
                ═══════════════════════════════════════════ */}
            <section className="section-padding bg-[#08080f]">
                <div className="section-container">
                    <div className="grid lg:grid-cols-5 gap-12 max-w-6xl mx-auto">

                        {/* Left sidebar — extra info */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="lg:col-span-2 space-y-8"
                        >
                            <div>
                                <span className="inline-block px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-cyan-400 text-sm font-semibold mb-4">
                                    Get in Touch
                                </span>
                                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 tracking-tight leading-tight">
                                    Tell Us About
                                    <br />
                                    <span className="bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">
                                        Your Project
                                    </span>
                                </h2>
                                <p className="text-slate-400 leading-relaxed">
                                    Whether it&apos;s a full product build, a quick design refresh,
                                    or just an exploratory chat — we&apos;re all ears.
                                </p>
                            </div>

                            {/* What happens next */}
                            <div className="space-y-4">
                                <h3 className="text-white font-semibold text-sm uppercase tracking-wider">What happens next?</h3>
                                {[
                                    { step: "01", text: "You submit the form below" },
                                    { step: "02", text: "We review your inquiry within 24 hrs" },
                                    { step: "03", text: "We schedule a free 30-min discovery call" },
                                    { step: "04", text: "You receive a detailed proposal" },
                                ].map((s) => (
                                    <div key={s.step} className="flex items-start gap-4">
                                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-cyan-500 to-teal-500 flex items-center justify-center text-white text-xs font-bold">
                                            {s.step}
                                        </div>
                                        <p className="text-slate-400 text-sm pt-1">{s.text}</p>
                                    </div>
                                ))}
                            </div>

                            {/* Business Hours */}
                            <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-8 h-8 rounded-lg bg-cyan-500/15 border border-cyan-500/30 flex items-center justify-center">
                                        <HiOutlineClock className="w-4 h-4 text-cyan-400" />
                                    </div>
                                    <h3 className="text-white font-semibold text-sm">Business Hours</h3>
                                </div>
                                <div className="space-y-2 text-sm">
                                    {[
                                        { day: "Mon – Fri", time: "9:00 AM – 7:00 PM IST" },
                                        { day: "Saturday", time: "10:00 AM – 4:00 PM IST" },
                                        { day: "Sunday", time: "Closed" },
                                    ].map(({ day, time }) => (
                                        <div key={day} className="flex justify-between">
                                            <span className="text-slate-500">{day}</span>
                                            <span className="text-slate-300 font-medium">{time}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>

                        {/* Right — Form */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="lg:col-span-3"
                        >
                            <div className="relative">
                                {/* Glow border */}
                                <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500/30 via-teal-500/20 to-cyan-500/30 rounded-3xl blur-sm" />

                                <div className="relative bg-slate-900/80 backdrop-blur-sm border border-slate-800 rounded-3xl p-8 md:p-10">
                                    {showSuccess ? (
                                        /* ── SUCCESS STATE ── */
                                        <motion.div
                                            initial={{ opacity: 0, scale: 0.9 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            className="text-center py-12"
                                        >
                                            <motion.div
                                                initial={{ scale: 0 }}
                                                animate={{ scale: 1 }}
                                                transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.1 }}
                                                className="inline-flex items-center justify-center w-24 h-24 mb-6 rounded-full bg-gradient-to-br from-cyan-500/20 to-teal-500/20 border-4 border-cyan-500/30"
                                            >
                                                <HiCheckCircle className="w-16 h-16 text-cyan-400" />
                                            </motion.div>

                                            <motion.div
                                                initial={{ x: -80, y: 80, opacity: 0 }}
                                                animate={{ x: 0, y: 0, opacity: 1 }}
                                                transition={{ delay: 0.3, duration: 0.6 }}
                                                className="mb-6"
                                            >
                                                <FaRocket className="inline-block w-10 h-10 text-cyan-400 animate-bounce" />
                                            </motion.div>

                                            <motion.h2
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ delay: 0.2 }}
                                                className="text-4xl font-bold text-white mb-4"
                                            >
                                                Thank You! 🎉
                                            </motion.h2>
                                            <motion.p
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                transition={{ delay: 0.4 }}
                                                className="text-slate-400 text-lg mb-2"
                                            >
                                                Your message has been received!
                                            </motion.p>
                                            <motion.p
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                transition={{ delay: 0.5 }}
                                                className="text-slate-500"
                                            >
                                                Our team will reach out to you within 24 hours.
                                            </motion.p>

                                            {/* Sparkles */}
                                            <div className="relative h-16 mt-8">
                                                {[...Array(8)].map((_, i) => (
                                                    <motion.div
                                                        key={i}
                                                        initial={{ opacity: 0, scale: 0 }}
                                                        animate={{ opacity: [0, 1, 0], scale: [0, 1, 0], rotate: [0, 180, 360] }}
                                                        transition={{ delay: 0.6 + i * 0.1, duration: 1.5, repeat: Infinity, repeatDelay: 2 }}
                                                        className="absolute"
                                                        style={{ left: `${10 + i * 11}%`, top: `${10 + (i % 3) * 30}%` }}
                                                    >
                                                        <span className="text-xl">✨</span>
                                                    </motion.div>
                                                ))}
                                            </div>

                                            <motion.button
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                transition={{ delay: 1 }}
                                                onClick={() => setShowSuccess(false)}
                                                className="mt-4 px-8 py-3 bg-gradient-to-r from-cyan-500 to-teal-500 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-cyan-500/30 transition-all duration-300"
                                            >
                                                Send Another Message
                                            </motion.button>
                                        </motion.div>
                                    ) : (
                                        /* ── FORM ── */
                                        <>
                                            <div className="mb-8">
                                                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                                                    Send Us a Message
                                                </h2>
                                                <p className="text-slate-400">
                                                    Share your project details and we&apos;ll get back to you with a plan.
                                                </p>
                                            </div>

                                            <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                                                {/* Name + Email */}
                                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                                    <div>
                                                        <label className="block text-sm font-medium text-slate-300 mb-2">
                                                            Your Name <span className="text-rose-400">*</span>
                                                        </label>
                                                        <div className="relative">
                                                            <HiUser className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
                                                            <input
                                                                type="text"
                                                                value={formData.name}
                                                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                                                placeholder="Bruce Johnson"
                                                                className={`w-full pl-12 pr-4 py-3.5 bg-slate-800/60 border ${errors.name ? "border-rose-500/60" : "border-slate-700"} rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500/60 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300`}
                                                            />
                                                        </div>
                                                        {errors.name && <p className="mt-1 text-xs text-rose-400">{errors.name}</p>}
                                                    </div>

                                                    <div>
                                                        <label className="block text-sm font-medium text-slate-300 mb-2">
                                                            Email Address <span className="text-rose-400">*</span>
                                                        </label>
                                                        <div className="relative">
                                                            <HiMail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
                                                            <input
                                                                type="email"
                                                                value={formData.email}
                                                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                                                placeholder="bruce@example.com"
                                                                className={`w-full pl-12 pr-4 py-3.5 bg-slate-800/60 border ${errors.email ? "border-rose-500/60" : "border-slate-700"} rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500/60 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300`}
                                                            />
                                                        </div>
                                                        {errors.email && <p className="mt-1 text-xs text-rose-400">{errors.email}</p>}
                                                    </div>
                                                </div>

                                                {/* Phone */}
                                                <div>
                                                    <label className="block text-sm font-medium text-slate-300 mb-2">
                                                        Phone Number <span className="text-rose-400">*</span>
                                                    </label>
                                                    <div className="flex gap-3">
                                                        <select
                                                            value={formData.countryCode}
                                                            onChange={(e) => setFormData({ ...formData, countryCode: e.target.value })}
                                                            className="w-28 flex-shrink-0 px-3 py-3.5 bg-slate-800/60 border border-slate-700 rounded-xl text-white focus:outline-none focus:border-cyan-500/60 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300 appearance-none cursor-pointer text-sm"
                                                        >
                                                            {countryCodes.map((c) => (
                                                                <option key={c.code} value={c.code}>{c.flag} {c.code}</option>
                                                            ))}
                                                        </select>
                                                        <div className="relative flex-1">
                                                            <HiPhone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
                                                            <input
                                                                type="tel"
                                                                value={formData.phone}
                                                                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                                                placeholder="9876543210"
                                                                className={`w-full pl-12 pr-4 py-3.5 bg-slate-800/60 border ${errors.phone ? "border-rose-500/60" : "border-slate-700"} rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500/60 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300`}
                                                            />
                                                        </div>
                                                    </div>
                                                    {errors.phone && <p className="mt-1 text-xs text-rose-400">{errors.phone}</p>}
                                                </div>

                                                {/* Service */}
                                                <div>
                                                    <label className="block text-sm font-medium text-slate-300 mb-2">
                                                        Service Interested In <span className="text-rose-400">*</span>
                                                    </label>
                                                    <select
                                                        value={formData.service}
                                                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                                                        className={`w-full px-4 py-3.5 bg-slate-800/60 border ${errors.service ? "border-rose-500/60" : "border-slate-700"} rounded-xl text-white focus:outline-none focus:border-cyan-500/60 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300 appearance-none cursor-pointer`}
                                                    >
                                                        <option value="">Select a service…</option>
                                                        {services.map((s) => (
                                                            <option key={s} value={s}>{s}</option>
                                                        ))}
                                                    </select>
                                                    {errors.service && <p className="mt-1 text-xs text-rose-400">{errors.service}</p>}
                                                </div>

                                                {/* Message */}
                                                <div>
                                                    <label className="block text-sm font-medium text-slate-300 mb-2">
                                                        Tell Us About Your Project{" "}
                                                        <span className="text-slate-500 text-xs font-normal">(optional)</span>
                                                    </label>
                                                    <textarea
                                                        value={formData.message}
                                                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                                        rows={4}
                                                        placeholder="Describe your project, goals, timeline, and budget (if applicable)…"
                                                        className="w-full px-4 py-3.5 bg-slate-800/60 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500/60 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300 resize-none"
                                                    />
                                                </div>

                                                {/* Submit */}
                                                <motion.button
                                                    whileHover={{ scale: 1.02 }}
                                                    whileTap={{ scale: 0.98 }}
                                                    type="submit"
                                                    disabled={isSubmitting}
                                                    className="w-full py-4 bg-gradient-to-r from-cyan-500 to-teal-500 text-white font-bold text-lg rounded-xl shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 transition-all duration-300 flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
                                                >
                                                    {isSubmitting ? (
                                                        <>
                                                            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                                            Sending…
                                                        </>
                                                    ) : (
                                                        <>
                                                            <IoMdSend className="w-5 h-5" />
                                                            Send Message
                                                            <HiOutlineArrowRight className="w-5 h-5" />
                                                        </>
                                                    )}
                                                </motion.button>

                                                <p className="text-center text-sm text-slate-500">
                                                    🔒 We respect your privacy. No spam, ever.
                                                </p>
                                            </form>
                                        </>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════
                SOCIAL MEDIA
                ═══════════════════════════════════════════ */}
            <section className="section-padding bg-[#0c0c18] border-t border-slate-800/50">
                <div className="section-container">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center max-w-2xl mx-auto mb-12"
                    >
                        <span className="inline-block px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-cyan-400 text-sm font-semibold mb-4">
                            Stay Connected
                        </span>
                        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 tracking-tight">
                            Follow Us on{" "}
                            <span className="bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">
                                Social Media
                            </span>
                        </h2>
                        <p className="text-slate-400">
                            Get behind-the-scenes updates, design inspiration, and tech tips — follow us wherever you hang out.
                        </p>
                    </motion.div>

                    <motion.div
                        variants={stagger}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 max-w-5xl mx-auto"
                    >
                        {socialLinks.map((social) => (
                            <motion.a
                                key={social.label}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                variants={fadeUp}
                                aria-label={`Follow us on ${social.label}`}
                                className="group relative block"
                            >
                                <div className={`absolute -inset-0.5 bg-gradient-to-r ${social.gradient} rounded-2xl opacity-0 group-hover:opacity-30 blur transition-opacity duration-500`} />
                                <div className="relative flex flex-col items-center gap-3 p-6 bg-slate-900/60 border border-slate-800 rounded-2xl hover:border-slate-700 transition-all duration-300 text-center">
                                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${social.gradient} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                                        <social.icon className="w-5 h-5 text-white" />
                                    </div>
                                    <div>
                                        <p className="text-white font-semibold text-sm">{social.label}</p>
                                        <p className="text-slate-500 text-xs mt-0.5">{social.handle}</p>
                                    </div>
                                </div>
                            </motion.a>
                        ))}
                    </motion.div>
                </div>
            </section>

            <Footer />
        </main>
    );
}