"use client";

import { motion } from "framer-motion";
import {
    HiOutlineShieldCheck,
    HiOutlineLightningBolt,
    HiOutlineUserGroup,
    HiOutlineTrendingUp,
} from "react-icons/hi";

const reasons = [
    {
        icon: HiOutlineShieldCheck,
        title: "Trusted Partnership",
        description:
            "We build long-term relationships based on transparency, reliability, and mutual growth.",
    },
    {
        icon: HiOutlineLightningBolt,
        title: "Cutting-Edge Tech",
        description:
            "We leverage the latest technologies to create unique and competitive advantages.",
    },
    {
        icon: HiOutlineUserGroup,
        title: "Expert Team",
        description:
            "Our seasoned professionals bring years of experience across diverse industries.",
    },
    {
        icon: HiOutlineTrendingUp,
        title: "Scalable Solutions",
        description:
            "Our solutions grow with your business, ensuring future-proof investments.",
    },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.15 },
    },
};

const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.5, ease: "easeOut" },
    },
};

export default function WhyUs() {
    return (
        <section id="about" className="section-padding bg-white">
            <div className="section-container">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Left Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="inline-block px-4 py-2 bg-primary-100 text-primary-600 rounded-full text-sm font-semibold mb-4">
                            Why Choose Us
                        </span>
                        <h2 className="heading-2 text-dark-900 mb-6">
                            Your Success Is{" "}
                            <span className="gradient-text">Our Mission</span>
                        </h2>
                        <p className="text-lg text-dark-500 mb-8">
                            NextModernLabs is a modern digital agency focused on building
                            scalable, high-performance digital products. We help businesses
                            grow using clean design, smart engineering, and data-driven
                            strategies.
                        </p>

                        {/* Reasons List */}
                        <motion.div
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="space-y-6"
                        >
                            {reasons.map((reason) => (
                                <motion.div
                                    key={reason.title}
                                    variants={itemVariants}
                                    className="flex gap-4 group"
                                >
                                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary-50 flex items-center justify-center group-hover:bg-primary-100 transition-colors duration-300">
                                        <reason.icon className="w-6 h-6 text-primary-500" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-dark-900 mb-1">
                                            {reason.title}
                                        </h3>
                                        <p className="text-dark-500 text-sm">
                                            {reason.description}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>

                    {/* Right Content - Visual Element */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="relative"
                    >
                        <div className="relative">
                            {/* Main Card */}
                            <div className="bg-gradient-to-br from-primary-500 to-primary-600 rounded-3xl p-8 lg:p-10 text-white shadow-2xl shadow-primary-500/30">
                                <div className="space-y-6">
                                    <div className="flex items-center gap-4">
                                        <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm">
                                            <span className="text-3xl font-bold">5+</span>
                                        </div>
                                        <div>
                                            <div className="text-xl font-bold">Years Experience</div>
                                            <div className="text-primary-100">
                                                Building digital products
                                            </div>
                                        </div>
                                    </div>

                                    <div className="h-px bg-white/20" />

                                    <div className="grid grid-cols-2 gap-6">
                                        <div>
                                            <div className="text-3xl font-bold">50+</div>
                                            <div className="text-primary-100 text-sm">
                                                Projects Completed
                                            </div>
                                        </div>
                                        <div>
                                            <div className="text-3xl font-bold">30+</div>
                                            <div className="text-primary-100 text-sm">
                                                Happy Clients
                                            </div>
                                        </div>
                                    </div>

                                    <div className="h-px bg-white/20" />

                                    <p className="text-primary-100 italic">
                                        &quot;To become a trusted technology partner for startups
                                        and growing companies worldwide.&quot;
                                    </p>
                                </div>
                            </div>

                            {/* Floating Badge */}
                            <div className="absolute -top-4 -right-4 bg-white rounded-2xl shadow-xl p-4 border border-dark-100">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                                        <svg
                                            className="w-5 h-5 text-green-500"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M5 13l4 4L19 7"
                                            />
                                        </svg>
                                    </div>
                                    <div>
                                        <div className="font-bold text-dark-900 text-sm">
                                            100% Satisfaction
                                        </div>
                                        <div className="text-dark-500 text-xs">Guaranteed</div>
                                    </div>
                                </div>
                            </div>

                            {/* Decorative Elements */}
                            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-primary-100 rounded-2xl -z-10" />
                            <div className="absolute -top-6 left-1/2 w-12 h-12 bg-violet-100 rounded-xl -z-10" />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
