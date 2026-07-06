"use client";

import { useEffect, useRef } from "react";
import {
    HiOutlineShieldCheck,
    HiOutlineLightningBolt,
    HiOutlineUserGroup,
    HiOutlineTrendingUp,
} from "react-icons/hi";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

const reasons = [
    {
        icon: HiOutlineShieldCheck,
        title: "Trusted Partnership",
        description: "Built on transparency, reliability, and mutual growth.",
    },
    {
        icon: HiOutlineLightningBolt,
        title: "Cutting-Edge Tech",
        description: "Leveraging the latest technologies for competitive advantages.",
    },
    {
        icon: HiOutlineUserGroup,
        title: "Expert Team",
        description: "Seasoned professionals across diverse digital industries.",
    },
    {
        icon: HiOutlineTrendingUp,
        title: "Scalable Solutions",
        description: "Future-proof investments that grow with your business.",
    },
];

export default function WhyUs() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const headingRef = useRef<HTMLHeadingElement>(null);
    const descRef = useRef<HTMLParagraphElement>(null);
    const cardsRef = useRef<HTMLDivElement>(null);
    const glassMetricsRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Scrubbing opacity for heading
            gsap.fromTo(headingRef.current, 
                { opacity: 0, y: 50 },
                { 
                    opacity: 1, 
                    y: 0,
                    ease: "none",
                    scrollTrigger: {
                        trigger: headingRef.current,
                        start: "top 85%",
                        end: "top 50%",
                        scrub: true,
                    }
                }
            );

            gsap.fromTo(descRef.current, 
                { opacity: 0, y: 30 },
                { 
                    opacity: 1, 
                    y: 0,
                    ease: "none",
                    scrollTrigger: {
                        trigger: descRef.current,
                        start: "top 90%",
                        end: "top 60%",
                        scrub: true,
                    }
                }
            );

            // Stagger in the grid items
            if (cardsRef.current) {
                const cards = Array.from(cardsRef.current.children);
                gsap.fromTo(cards,
                    { opacity: 0, y: 40 },
                    {
                        opacity: 1,
                        y: 0,
                        stagger: 0.1,
                        ease: "none",
                        scrollTrigger: {
                            trigger: cardsRef.current,
                            start: "top 80%",
                            end: "top 40%",
                            scrub: true,
                        }
                    }
                );
            }

            // Glass metrics reveal
            gsap.fromTo(glassMetricsRef.current,
                { y: 80, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    ease: "none",
                    scrollTrigger: {
                        trigger: glassMetricsRef.current,
                        start: "top 90%",
                        end: "top 50%",
                        scrub: true,
                    }
                }
            );

        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} id="about" className="section-padding bg-black text-white overflow-hidden relative min-h-screen flex items-center">
            <div className="section-container relative z-10 w-full">
                <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
                    
                    {/* Left Content - Typography Driven */}
                    <div className="flex-1">
                        <h2 ref={headingRef} className="text-5xl md:text-6xl lg:text-8xl font-bold tracking-tight leading-[1.1] mb-8">
                            Your success.<br/>
                            <span className="text-neutral-600">Our mission.</span>
                        </h2>
                        <p ref={descRef} className="text-xl md:text-2xl text-neutral-400 font-medium leading-relaxed max-w-2xl mb-12">
                            We are a modern digital agency focused on building scalable, high-performance products using clean design and smart engineering.
                        </p>

                        <div ref={cardsRef} className="grid sm:grid-cols-2 gap-8">
                            {reasons.map((reason) => (
                                <div key={reason.title} className="group">
                                    <div className="mb-4">
                                        <reason.icon className="w-8 h-8 text-neutral-600 group-hover:text-white transition-colors duration-300" />
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-2 tracking-tight">
                                        {reason.title}
                                    </h3>
                                    <p className="text-neutral-500 text-sm leading-relaxed">
                                        {reason.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Content - Sleek Glass Metrics */}
                    <div ref={glassMetricsRef} className="w-full lg:w-[450px] relative">
                        {/* Ambient Background Glow */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white/5 rounded-full blur-[100px]" />

                        <div className="relative flex flex-col gap-6">
                            {/* Glass Card 1 */}
                            <div className="bg-[#111111]/80 backdrop-blur-2xl rounded-3xl p-10 border border-white/10 shadow-2xl">
                                <div className="text-7xl font-bold tracking-tighter mb-2 text-white">
                                    5+
                                </div>
                                <div className="text-neutral-400 font-medium text-lg">
                                    Years Experience
                                </div>
                                <div className="mt-6 w-12 h-1 bg-white/20 rounded-full" />
                            </div>

                            <div className="flex gap-6">
                                {/* Glass Card 2 */}
                                <div className="flex-1 bg-[#111111]/80 backdrop-blur-2xl rounded-3xl p-8 border border-white/10 shadow-2xl">
                                    <div className="text-5xl font-bold tracking-tighter mb-2 text-white">
                                        50+
                                    </div>
                                    <div className="text-neutral-400 text-sm font-medium">
                                        Projects Completed
                                    </div>
                                </div>

                                {/* Glass Card 3 */}
                                <div className="flex-1 bg-white rounded-3xl p-8 shadow-2xl flex flex-col justify-between">
                                    <div className="text-5xl font-bold tracking-tighter mb-2 text-black">
                                        30+
                                    </div>
                                    <div className="text-black/60 text-sm font-medium">
                                        Happy Clients
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
