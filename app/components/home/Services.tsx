"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import {
    HiOutlineCode,
    HiOutlineDeviceMobile,
    HiOutlineTemplate,
    HiOutlineChartBar,
    HiOutlineGlobeAlt,
    HiOutlineCube,
    HiOutlineVideoCamera,
} from "react-icons/hi";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

const services = [
    {
        icon: HiOutlineCode,
        title: "Web Development",
        description: "Custom web applications built with modern technologies like React, Next.js, and Node.js for optimal performance.",
        colSpan: "md:col-span-2 lg:col-span-2",
    },
    {
        icon: HiOutlineDeviceMobile,
        title: "Mobile Apps",
        description: "Native and cross-platform mobile apps that deliver seamless user experiences.",
        colSpan: "md:col-span-1 lg:col-span-1",
    },
    {
        icon: HiOutlineTemplate,
        title: "UI UX Design",
        description: "Beautiful, intuitive interfaces designed with user research.",
        colSpan: "md:col-span-1 lg:col-span-1",
    },
    {
        icon: HiOutlineChartBar,
        title: "SEO & Marketing",
        description: "Data-driven strategies to boost your online visibility.",
        colSpan: "md:col-span-2 lg:col-span-1",
    },
    {
        icon: HiOutlineCube,
        title: "Web3 Solutions",
        description: "Full-spectrum Web3 solutions — dApps, token creation, staking.",
        colSpan: "md:col-span-3 lg:col-span-1",
    },
    {
        icon: HiOutlineVideoCamera,
        title: "Digital Marketing",
        description: "Professional video editing, Reels, and stunning graphics design.",
        colSpan: "md:col-span-1 lg:col-span-2",
    },
    {
        icon: HiOutlineGlobeAlt,
        title: "Domain & Hosting",
        description: "Reliable hosting solutions and domain management.",
        colSpan: "md:col-span-2 lg:col-span-1",
    },
];

export default function Services() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const headingRef = useRef<HTMLDivElement>(null);
    const gridRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Heading scrub reveal
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

            // Cards stagger reveal
            if (gridRef.current) {
                const cards = Array.from(gridRef.current.children);
                gsap.fromTo(cards,
                    { opacity: 0, y: 60, scale: 0.97 },
                    {
                        opacity: 1,
                        y: 0,
                        scale: 1,
                        stagger: 0.08,
                        ease: "none",
                        scrollTrigger: {
                            trigger: gridRef.current,
                            start: "top 85%",
                            end: "top 30%",
                            scrub: true,
                        }
                    }
                );
            }
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} id="services" className="py-32 bg-black text-white relative">
            <div className="section-container">
                {/* Section Header */}
                <div ref={headingRef} className="text-center max-w-4xl mx-auto mb-20">
                    <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight mb-6">
                        Everything you need.<br />
                        <span className="text-neutral-500">Built to perfection.</span>
                    </h2>
                    <p className="text-xl text-neutral-400 max-w-2xl mx-auto">
                        From concept to launch, we provide comprehensive digital solutions
                        tailored to your business needs.
                    </p>
                </div>

                {/* Bento Grid */}
                <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 lg:gap-6 auto-rows-[auto]">
                    {services.map((service) => (
                        <div
                            key={service.title}
                            className={`group relative overflow-hidden rounded-3xl bg-[#111111] p-8 md:p-10 border border-white/5 hover:border-white/20 transition-all duration-500 ${service.colSpan}`}
                        >
                            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-3xl group-hover:bg-white/10 transition-colors duration-500" />
                            
                            <div className="flex flex-col h-full justify-between relative z-10">
                                <div>
                                    <service.icon className="w-8 h-8 text-neutral-600 mb-6 group-hover:text-white transition-colors duration-300" />
                                    <h3 className="text-2xl font-bold text-white mb-3 tracking-tight">
                                        {service.title}
                                    </h3>
                                    <p className="text-neutral-400 leading-relaxed max-w-sm">
                                        {service.description}
                                    </p>
                                </div>

                                <div className="mt-8">
                                    <Link
                                        href={`/${service.title.toLowerCase().replace(/ /g, "-")}`}
                                        className="inline-flex items-center text-sm font-semibold text-white/70 hover:text-white transition-colors duration-300"
                                    >
                                        Learn more
                                        <svg className="w-4 h-4 ml-1 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                    
                    <div className="group relative overflow-hidden rounded-3xl bg-neutral-900 p-8 md:p-10 border border-white/10 hover:border-white/30 transition-all duration-500 md:col-span-3 lg:col-span-2 flex flex-col justify-center items-center text-center">
                        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <h3 className="text-3xl font-bold text-white mb-4 tracking-tight relative z-10">
                            Need something completely custom?
                        </h3>
                        <p className="text-neutral-400 mb-8 max-w-lg relative z-10">
                            We build tailored solutions for unique business challenges. Let&apos;s discuss your vision and turn it into reality.
                        </p>
                        <Link
                            href="#contact"
                            className="relative z-10 inline-flex items-center justify-center px-8 py-3 bg-white text-black font-medium rounded-full hover:scale-105 transition-transform duration-300"
                        >
                            Contact Us
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
