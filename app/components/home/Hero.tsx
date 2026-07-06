"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import dynamic from "next/dynamic";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

const ThreeBackground = dynamic(() => import("../three/ThreeBackground"), {
    ssr: false,
    loading: () => <div className="absolute inset-0 bg-black" />,
});

const phrases = [
    { line1: "We build", line2: "digital products." },
    { line1: "We design", line2: "experiences." },
    { line1: "We scale", line2: "businesses." },
    { line1: "We craft", line2: "the future." },
];

export default function Hero() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const phraseRefs = useRef<(HTMLDivElement | null)[]>([]);
    const descRef = useRef<HTMLParagraphElement>(null);
    const ctaRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Set initial state: first phrase visible, rest hidden
        phraseRefs.current.forEach((el, i) => {
            if (!el) return;
            gsap.set(el, { opacity: i === 0 ? 1 : 0, y: i === 0 ? 0 : 80 });
        });
        gsap.set(descRef.current, { opacity: 1 });
        gsap.set(ctaRef.current, { opacity: 1 });

        const ctx = gsap.context(() => {
            // Build the scroll-driven text cycle
            // Each phrase gets a hold + transition segment
            // Total scroll = phrases.length * 150vh (very generous)
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top top",
                    end: `+=${phrases.length * 150}vh`,
                    scrub: 1,
                    pin: true,
                    anticipatePin: 1,
                },
            });

            // Phrase 0 is already visible — hold it for a bit first
            tl.to({}, { duration: 1 }, "start");

            for (let i = 0; i < phrases.length - 1; i++) {
                const nextI = i + 1;
                const label = `transition${i}`;

                // Current phrase: fade out and move up
                tl.to(
                    phraseRefs.current[i],
                    { y: -80, opacity: 0, duration: 1.5, ease: "power2.inOut" },
                    label
                );

                // Next phrase: fade in from below
                tl.fromTo(
                    phraseRefs.current[nextI],
                    { y: 80, opacity: 0 },
                    { y: 0, opacity: 1, duration: 1.5, ease: "power2.inOut" },
                    `${label}+=0.5`
                );

                // Hold the new phrase on screen before next transition
                tl.to({}, { duration: 1.5 });
            }

            // Hold the last phrase a bit before unpinning
            tl.to({}, { duration: 1 });

        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={sectionRef}
            className="relative h-screen flex items-center justify-center overflow-hidden bg-black text-white"
        >
            {/* Interactive particle background */}
            <div className="absolute inset-0 opacity-80">
                <ThreeBackground />
            </div>

            {/* Subtle gradient overlay for text readability */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black pointer-events-none" />

            {/* Main Content */}
            <div className="relative z-10 section-container flex flex-col items-center text-center">

                {/* Text cycle container */}
                <div className="relative w-full" style={{ height: "clamp(180px, 25vw, 300px)" }}>
                    {phrases.map((phrase, i) => (
                        <div
                            key={i}
                            ref={(el) => { phraseRefs.current[i] = el; }}
                            className="absolute inset-0 flex flex-col items-center justify-center will-change-transform"
                            style={{ opacity: i === 0 ? 1 : 0 }}
                        >
                            <div className="text-5xl sm:text-7xl lg:text-9xl font-bold tracking-tighter leading-[1.1] text-white">
                                {phrase.line1}
                            </div>
                            <div className="text-5xl sm:text-7xl lg:text-9xl font-bold tracking-tighter leading-[1.1] text-neutral-500">
                                {phrase.line2}
                            </div>
                        </div>
                    ))}
                </div>

                <p
                    ref={descRef}
                    className="mt-12 text-xl md:text-2xl text-neutral-400 font-medium max-w-2xl text-balance"
                >
                    Modern web, mobile, and digital solutions designed for scalable
                    businesses. Turn your vision into reality.
                </p>

                <div
                    ref={ctaRef}
                    className="mt-12 flex flex-col sm:flex-row items-center gap-6"
                >
                    <Link
                        href="#contact"
                        className="px-8 py-4 bg-white text-black font-semibold rounded-full text-lg hover:scale-105 transition-transform duration-300 w-full sm:w-auto"
                    >
                        Start a Project
                    </Link>
                    <Link
                        href="#services"
                        className="inline-flex items-center gap-2 px-8 py-4 bg-[#111111] text-white font-semibold rounded-full text-lg border border-white/10 hover:border-white/30 hover:bg-[#1a1a1a] transition-all duration-300 w-full sm:w-auto"
                    >
                        View Our Work
                    </Link>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 opacity-50">
                <div className="text-sm font-mono tracking-widest text-neutral-500 uppercase mb-2">
                    Scroll
                </div>
                <div className="w-[1px] h-12 bg-gradient-to-b from-white/50 to-transparent mx-auto" />
            </div>
        </section>
    );
}
