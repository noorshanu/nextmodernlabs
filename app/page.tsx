"use client";

import dynamic from "next/dynamic";
import Navbar from "./components/layout/Navbar";
import Hero from "./components/home/Hero";

// Lazy-load below-fold sections to improve LCP and TBT
const Services = dynamic(() => import("./components/home/Services"), { ssr: false });
const WhyUs = dynamic(() => import("./components/home/WhyUs"), { ssr: false });
const Process = dynamic(() => import("./components/home/Process"), { ssr: false });
const CTA = dynamic(() => import("./components/home/CTA"), { ssr: false });
const Footer = dynamic(() => import("./components/layout/Footer"), { ssr: false });

export default function Home() {
    return (
        <main className="min-h-screen">
            <Navbar />
            <Hero />
            <Services />
            <WhyUs />
            <Process />
            <CTA />
            <Footer />
        </main>
    );
}
