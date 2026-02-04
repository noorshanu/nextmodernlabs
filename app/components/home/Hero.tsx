"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
import { FaTwitter, FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa";

// Dynamically import Three.js component to avoid SSR issues
const ThreeBackground = dynamic(() => import("../three/ThreeBackground"), {
    ssr: false,
    loading: () => (
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" />
    ),
});

const socialLinks = [
    { icon: FaTwitter, href: "https://twitter.com", label: "Twitter" },
    { icon: FaLinkedinIn, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: FaGithub, href: "https://github.com", label: "GitHub" },
    { icon: FaInstagram, href: "https://instagram.com", label: "Instagram" },
];

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center overflow-hidden">
            {/* Three.js Background */}
            <ThreeBackground />

            {/* Content */}
            <div className="relative z-10 section-container pt-24 pb-16">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Left Column - Text Content */}
                    <div className="text-center lg:text-left">
                        {/* Badge */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <span className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-cyan-400 text-sm font-medium mb-8">
                                <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
                                Modern Digital Agency
                            </span>
                        </motion.div>

                        {/* Headline */}
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
                        >
                            We Build Digital Products
                            <br />
                            That{" "}
                            <span className="bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">
                                Drive Growth
                            </span>
                        </motion.h1>

                        {/* Subheadline */}
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="text-lg sm:text-xl text-slate-400 max-w-xl mx-auto lg:mx-0 mb-10"
                        >
                            Modern web, mobile, and digital solutions for scalable businesses.
                            Turn your vision into reality with cutting-edge technology.
                        </motion.p>

                        {/* CTA Buttons */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-4 mb-10"
                        >
                            <Link
                                href="#contact"
                                className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-teal-500 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-cyan-500/40 transition-all duration-300"
                            >
                                Get a Free Consultation
                                <svg
                                    className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                                    />
                                </svg>
                            </Link>
                            <Link
                                href="#services"
                                className="inline-flex items-center gap-2 px-8 py-4 border border-slate-500 text-slate-300 font-semibold rounded-full hover:bg-slate-800/50 hover:border-cyan-500/50 transition-all duration-300"
                            >
                                View Our Work
                            </Link>
                        </motion.div>

                        {/* Social Media Links */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            className="flex items-center justify-center lg:justify-start gap-4"
                        >
                            <span className="text-slate-500 text-sm">Follow us:</span>
                            <div className="flex items-center gap-3">
                                {socialLinks.map((social) => (
                                    <a
                                        key={social.label}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={social.label}
                                        className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-800/50 border border-slate-700 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/50 hover:bg-cyan-500/10 transition-all duration-300"
                                    >
                                        <social.icon className="w-4 h-4" />
                                    </a>
                                ))}
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Column - Image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.7, delay: 0.3 }}
                        className="relative"
                    >
                        <div className="relative">
                            {/* Glow effect behind image */}
                            <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/20 to-teal-500/20 rounded-3xl blur-2xl" />

                            {/* Main image */}
                            <div className="relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-3xl p-4 border border-slate-700/50">
                                <Image
                                    src="/agency-hero.png"
                                    alt="Digital Agency Services"
                                    width={600}
                                    height={600}
                                    className="w-full h-auto rounded-2xl object-cover"
                                    priority
                                />
                            </div>

                            {/* Floating badges */}
                            {/* <motion.div
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute -top-4 -right-4 px-4 py-2 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-full text-white text-sm font-semibold shadow-lg shadow-cyan-500/30"
                            >
                                ✨ Premium Quality
                            </motion.div> */}

                            <motion.div
                                animate={{ y: [0, 10, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                                className="absolute -bottom-4 -left-4 px-4 py-2 bg-slate-800 border border-cyan-500/30 rounded-full text-cyan-400 text-sm font-semibold shadow-lg"
                            >
                                🚀 Fast Delivery
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
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
    );
}
