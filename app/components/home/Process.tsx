"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

const steps = [
    {
        number: "01",
        title: "Discovery",
        description: "Understanding your business goals, target audience, and project requirements.",
    },
    {
        number: "02",
        title: "Strategy",
        description: "Crafting a comprehensive roadmap with clear milestones and deliverables.",
    },
    {
        number: "03",
        title: "Design",
        description: "Creating stunning, user-centered designs that align with your brand identity.",
    },
    {
        number: "04",
        title: "Development",
        description: "Building robust, scalable solutions using cutting-edge technologies.",
    },
    {
        number: "05",
        title: "Launch",
        description: "Ensuring a smooth deployment and providing ongoing support for your success.",
    },
];

export default function Process() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const headingRef = useRef<HTMLDivElement>(null);
    const stepsRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Heading scrub
            gsap.fromTo(headingRef.current,
                { opacity: 0, y: 40 },
                {
                    opacity: 1,
                    y: 0,
                    ease: "none",
                    scrollTrigger: {
                        trigger: headingRef.current,
                        start: "top 85%",
                        end: "top 55%",
                        scrub: true,
                    }
                }
            );

            // Steps stagger scrub
            if (stepsRef.current) {
                const stepsElements = Array.from(stepsRef.current.children);
                gsap.fromTo(stepsElements,
                    { opacity: 0, y: 50 },
                    {
                        opacity: 1,
                        y: 0,
                        stagger: 0.08,
                        ease: "none",
                        scrollTrigger: {
                            trigger: stepsRef.current,
                            start: "top 85%",
                            end: "top 25%",
                            scrub: true,
                        }
                    }
                );
            }
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} id="process" className="py-32 bg-black text-white relative">
            <div className="section-container">
                
                {/* Section Header */}
                <div ref={headingRef} className="max-w-4xl mb-24">
                    <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight mb-6">
                        The process.<br />
                        <span className="text-neutral-500">Simplicity from start to finish.</span>
                    </h2>
                </div>

                {/* Minimalist Process Timeline */}
                <div className="relative">
                    {/* Horizontal Line for Desktop */}
                    <div className="hidden lg:block absolute top-8 left-0 w-full h-[1px] bg-white/10" />

                    <div ref={stepsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
                        {steps.map((step) => (
                            <div key={step.number} className="relative flex flex-col group">
                                {/* Minimalist Indicator */}
                                <div className="hidden lg:flex items-center justify-center w-4 h-4 rounded-full bg-black border-[2px] border-neutral-700 relative z-10 mb-8 group-hover:border-white transition-colors duration-500 mx-auto" />
                                
                                <div className="lg:text-center">
                                    <div className="text-sm font-mono text-neutral-500 mb-4 tracking-widest">
                                        STEP {step.number}
                                    </div>
                                    <h3 className="text-2xl font-bold text-white mb-3 tracking-tight">
                                        {step.title}
                                    </h3>
                                    <p className="text-neutral-400 text-sm leading-relaxed max-w-[250px] lg:mx-auto">
                                        {step.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
