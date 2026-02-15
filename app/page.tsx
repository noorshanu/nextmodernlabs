"use client";

import { useState, useEffect } from "react";
import Navbar from "./components/layout/Navbar";
import Hero from "./components/home/Hero";
import Services from "./components/home/Services";
import WhyUs from "./components/home/WhyUs";
import Process from "./components/home/Process";
import CTA from "./components/home/CTA";
import Footer from "./components/layout/Footer";
import LeadGenPopup from "./components/home/LeadGenPopup";

export default function Home() {
    const [showPopup, setShowPopup] = useState(false);

    useEffect(() => {
        // Show popup after 10 seconds
        const timer = setTimeout(() => {
            setShowPopup(true);
        }, 10000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <main className="min-h-screen">
            <Navbar />
            <Hero />
            <Services />
            <WhyUs />
            <Process />
            <CTA onOpenPopup={() => setShowPopup(true)} />
            <Footer />

            <LeadGenPopup isOpen={showPopup} onClose={() => setShowPopup(false)} />
        </main>
    );
}
