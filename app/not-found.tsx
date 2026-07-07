"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

/* ──────────────────────────────────────
   FLOATING PARTICLES
   ────────────────────────────────────── */

function FloatingParticles() {
    const [particles, setParticles] = useState<{ id: number; x: number; y: number; size: number; delay: number; duration: number }[]>([]);

    useEffect(() => {
        const p = Array.from({ length: 30 }, (_, i) => ({
            id: i,
            x: Math.random() * 100,
            y: Math.random() * 100,
            size: Math.random() * 4 + 1,
            delay: Math.random() * 5,
            duration: Math.random() * 10 + 8,
        }));
        setParticles(p);
    }, []);

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {particles.map((p) => (
                <motion.div
                    key={p.id}
                    className="absolute rounded-full bg-emerald-500/20"
                    style={{ left: `${p.x}%`, top: `${p.y}%`, width: p.size, height: p.size }}
                    animate={{ y: [-20, 20, -20], opacity: [0.2, 0.6, 0.2] }}
                    transition={{ duration: p.duration, repeat: Infinity, delay: p.delay, ease: "easeInOut" }}
                />
            ))}
        </div>
    );
}

/* ──────────────────────────────────────
   GLITCH TEXT
   ────────────────────────────────────── */

function GlitchText() {
    return (
        <div className="relative select-none">
            <motion.h1
                className="text-[120px] sm:text-[180px] lg:text-[220px] font-black text-transparent leading-none tracking-tighter"
                style={{
                    WebkitTextStroke: "2px rgba(16, 185, 129, 0.3)",
                }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                404
            </motion.h1>
            {/* Glitch layers */}
            <motion.h1
                className="absolute inset-0 text-[120px] sm:text-[180px] lg:text-[220px] font-black text-emerald-500/10 leading-none tracking-tighter"
                animate={{ x: [-2, 2, -2], opacity: [0.5, 0.8, 0.5] }}
                transition={{ duration: 0.15, repeat: Infinity, repeatDelay: 3 }}
            >
                404
            </motion.h1>
            <motion.h1
                className="absolute inset-0 text-[120px] sm:text-[180px] lg:text-[220px] font-black text-cyan-500/10 leading-none tracking-tighter"
                animate={{ x: [2, -2, 2], opacity: [0.5, 0.8, 0.5] }}
                transition={{ duration: 0.15, repeat: Infinity, repeatDelay: 4, delay: 0.05 }}
            >
                404
            </motion.h1>
        </div>
    );
}

/* ──────────────────────────────────────
   MAIN 404 PAGE
   ────────────────────────────────────── */

export default function NotFound() {
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMove = (e: MouseEvent) => {
            setMousePos({
                x: (e.clientX / window.innerWidth - 0.5) * 20,
                y: (e.clientY / window.innerHeight - 0.5) * 20,
            });
        };
        window.addEventListener("mousemove", handleMove);
        return () => window.removeEventListener("mousemove", handleMove);
    }, []);

    return (
        <main className="min-h-screen bg-[#060a14] flex flex-col">
            <Navbar />

            <section className="flex-1 flex items-center justify-center relative overflow-hidden">
                {/* Background */}
                <div className="absolute inset-0">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#060a14] via-[#0a0e1a] to-[#060a14]" />
                    <motion.div
                        className="absolute top-1/4 left-1/3 w-[600px] h-[600px] bg-emerald-500/8 rounded-full blur-[150px]"
                        animate={{ x: mousePos.x, y: mousePos.y }}
                        transition={{ type: "spring", damping: 30, stiffness: 100 }}
                    />
                    <motion.div
                        className="absolute bottom-1/4 right-1/3 w-[400px] h-[400px] bg-cyan-500/6 rounded-full blur-[120px]"
                        animate={{ x: -mousePos.x * 0.5, y: -mousePos.y * 0.5 }}
                        transition={{ type: "spring", damping: 30, stiffness: 100 }}
                    />
                    <div
                        className="absolute inset-0 opacity-[0.03]"
                        style={{
                            backgroundImage: `radial-gradient(circle, rgba(16,185,129,0.4) 1px, transparent 1px)`,
                            backgroundSize: "30px 30px",
                        }}
                    />
                </div>

                <FloatingParticles />

                <div className="relative z-10 text-center px-4 -mt-20">
                    {/* Large 404 */}
                    <GlitchText />

                    {/* Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="-mt-4"
                    >
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 tracking-tight">
                            Lost in the{" "}
                            <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                                digital void
                            </span>
                        </h2>
                        <p className="text-slate-400 text-lg max-w-md mx-auto mb-10 leading-relaxed">
                            The page you&apos;re looking for has been moved, deleted, or never existed.
                            Let&apos;s get you back on track.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Link
                                href="/"
                                className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-emerald-600 to-cyan-600 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-emerald-500/30 transition-all duration-300"
                            >
                                <svg className="w-5 h-5 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-4 0a1 1 0 01-1-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 01-1 1" />
                                </svg>
                                Back to Home
                            </Link>
                            <Link
                                href="/#contact"
                                className="inline-flex items-center gap-2 px-8 py-4 border border-slate-600 text-slate-300 font-semibold rounded-full hover:bg-[#111111]/50 hover:border-emerald-500/50 transition-all duration-300"
                            >
                                Contact Support
                            </Link>
                        </div>
                    </motion.div>

                    {/* Quick links */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8 }}
                        className="mt-16 flex flex-wrap items-center justify-center gap-3"
                    >
                        <span className="text-neutral-300 text-sm mr-2">Quick links:</span>
                        {[
                            { name: "Services", href: "/#services" },
                            { name: "Web Dev", href: "/web-development" },
                            { name: "Mobile", href: "/mobile-development" },
                            { name: "UI/UX", href: "/ui-ux-design" },
                            { name: "Web3", href: "/web3-development" },
                        ].map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="px-3 py-1.5 bg-[#111111]/50 border border-slate-700/50 rounded-full text-xs text-slate-400 hover:text-emerald-400 hover:border-emerald-500/30 transition-all duration-300"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </motion.div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
