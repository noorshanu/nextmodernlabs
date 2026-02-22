"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function PageLoader() {
    const [loading, setLoading] = useState(true);
    const [progress, setProgress] = useState(0);
    const [phase, setPhase] = useState<"in" | "hold" | "out">("in");

    useEffect(() => {
        // Fast progress fill: 0 → 100 in ~1.2s
        let current = 0;
        const interval = setInterval(() => {
            const jump = Math.random() * 18 + 8;
            current = Math.min(100, current + jump);
            setProgress(current);

            if (current >= 100) {
                clearInterval(interval);
                setPhase("hold");
                // Brief hold at 100%, then exit
                setTimeout(() => setPhase("out"), 250);
                setTimeout(() => setLoading(false), 700);
            }
        }, 70);

        return () => clearInterval(interval);
    }, []);

    // Word-by-word brand split
    const brandLetters = "NextModernLabs".split("");

    return (
        <AnimatePresence>
            {loading && (
                <motion.div
                    key="page-loader"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, transition: { duration: 0.4, ease: "easeInOut" } }}
                    className="fixed inset-0 z-[9999] flex flex-col items-center justify-center overflow-hidden"
                    style={{ background: "#08080f" }}
                >
                    {/* ── Background Orbs ── */}
                    <motion.div
                        className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full"
                        style={{ background: "radial-gradient(circle, rgba(6,182,212,0.12) 0%, transparent 70%)" }}
                        animate={{ scale: [1, 1.15, 1], rotate: [0, 90, 0] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    />
                    <motion.div
                        className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full"
                        style={{ background: "radial-gradient(circle, rgba(139,92,246,0.1) 0%, transparent 70%)" }}
                        animate={{ scale: [1.1, 1, 1.1], rotate: [0, -90, 0] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    />

                    {/* ── Spinning ring ── */}
                    <div className="relative flex items-center justify-center mb-10">
                        {/* Outer rotating ring */}
                        <motion.div
                            className="absolute w-36 h-36 rounded-full"
                            style={{
                                border: "1.5px solid transparent",
                                background: "linear-gradient(#08080f, #08080f) padding-box, linear-gradient(135deg, #06b6d4, #8b5cf6, #06b6d4) border-box",
                            }}
                            animate={{ rotate: 360 }}
                            transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
                        />
                        {/* Inner counter-rotating ring */}
                        <motion.div
                            className="absolute w-24 h-24 rounded-full"
                            style={{
                                border: "1px solid transparent",
                                background: "linear-gradient(#08080f, #08080f) padding-box, linear-gradient(135deg, #8b5cf6, #06b6d4, #8b5cf6) border-box",
                            }}
                            animate={{ rotate: -360 }}
                            transition={{ duration: 1.8, repeat: Infinity, ease: "linear" }}
                        />

                        {/* Center glow pulse */}
                        <motion.div
                            className="absolute w-16 h-16 rounded-full"
                            style={{ background: "radial-gradient(circle, rgba(6,182,212,0.3), transparent 70%)" }}
                            animate={{ scale: [1, 1.4, 1], opacity: [0.6, 1, 0.6] }}
                            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                        />

                        {/* Logo / Icon */}
                        <div className="relative z-10 w-12 h-12 flex items-center justify-center">
                            <Image
                                src="/logo.png"
                                alt="NextModernLabs"
                                width={48}
                                height={48}
                                className="object-contain"
                                priority
                                onError={() => { }}
                            />
                        </div>
                    </div>

                    {/* ── Brand name letter-by-letter ── */}
                    <div className="flex items-center gap-0 mb-3 overflow-hidden">
                        {brandLetters.map((letter, i) => (
                            <motion.span
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{
                                    delay: 0.05 * i,
                                    duration: 0.35,
                                    ease: "easeOut",
                                }}
                                className={`text-2xl font-bold tracking-tight ${i < 4
                                        ? "text-white"
                                        : i < 10
                                            ? "bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent"
                                            : "text-white"
                                    }`}
                            >
                                {letter}
                            </motion.span>
                        ))}
                    </div>

                    {/* ── Tagline ── */}
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8, duration: 0.5 }}
                        className="text-slate-500 text-xs font-medium tracking-[0.2em] uppercase mb-10"
                    >
                        Modern Digital Agency
                    </motion.p>

                    {/* ── Progress container ── */}
                    <div className="w-56 flex flex-col items-center gap-2">
                        {/* Progress bar track */}
                        <div className="w-full h-0.5 bg-slate-800 rounded-full overflow-hidden">
                            <motion.div
                                className="h-full rounded-full"
                                style={{
                                    width: `${progress}%`,
                                    background: "linear-gradient(90deg, #06b6d4, #8b5cf6)",
                                }}
                                transition={{ ease: "easeOut" }}
                            />
                        </div>

                        {/* Percentage counter */}
                        <motion.span
                            className="text-slate-600 text-xs font-mono tabular-nums"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.3 }}
                        >
                            {Math.round(progress)}%
                        </motion.span>
                    </div>

                    {/* ── Floating dots ── */}
                    {[...Array(6)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="absolute w-1 h-1 rounded-full bg-cyan-500/40"
                            style={{
                                left: `${15 + i * 14}%`,
                                top: `${30 + (i % 3) * 20}%`,
                            }}
                            animate={{
                                y: [-8, 8, -8],
                                opacity: [0.2, 0.8, 0.2],
                            }}
                            transition={{
                                duration: 2,
                                delay: i * 0.2,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                        />
                    ))}

                    {/* ── Exit wipe overlay ── */}
                    <AnimatePresence>
                        {phase === "out" && (
                            <motion.div
                                className="absolute inset-0"
                                style={{ background: "#08080f" }}
                                initial={{ clipPath: "inset(0 100% 0 0)" }}
                                animate={{ clipPath: "inset(0 0% 0 0)" }}
                                transition={{ duration: 0.45, ease: [0.76, 0, 0.24, 1] }}
                            />
                        )}
                    </AnimatePresence>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
