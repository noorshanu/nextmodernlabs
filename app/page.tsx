import Navbar from "./components/layout/Navbar";
import Hero from "./components/home/Hero";
import Services from "./components/home/Services";
import WhyUs from "./components/home/WhyUs";
import Process from "./components/home/Process";
import CTA from "./components/home/CTA";
import Footer from "./components/layout/Footer";

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
