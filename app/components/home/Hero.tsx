"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white">
            {/* Background Elements */}
            <div className="absolute inset-0">
                {/* Gradient Orbs */}
                <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary-400/20 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-violet-400/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-300/10 rounded-full blur-3xl" />

                {/* Grid Pattern */}
                <div
                    className="absolute inset-0 opacity-[0.03]"
                    style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%230ea5e9' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                    }}
                />
            </div>

            {/* Content */}
            <div className="relative z-10 section-container pt-24 pb-16">
                <div className="max-w-5xl mx-auto text-center">
                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary-50 border border-primary-100 rounded-full text-primary-600 text-sm font-medium mb-8">
                            <span className="w-2 h-2 bg-primary-500 rounded-full animate-pulse" />
                            Modern Digital Agency
                        </span>
                    </motion.div>

                    {/* Headline */}
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="heading-1 text-dark-900 mb-6"
                    >
                        We Build Digital Products
                        <br />
                        That <span className="gradient-text">Drive Growth</span>
                    </motion.h1>

                    {/* Subheadline */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-xl text-dark-500 max-w-2xl mx-auto mb-10"
                    >
                        Modern web, mobile, and digital solutions for scalable businesses.
                        Turn your vision into reality with cutting-edge technology.
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4"
                    >
                        <Link href="#contact" className="btn-primary text-lg px-8 py-4">
                            Get a Free Consultation
                            <svg
                                className="w-5 h-5"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                                />
                            </svg>
                        </Link>
                        <Link href="#services" className="btn-secondary text-lg px-8 py-4">
                            View Our Work
                        </Link>
                    </motion.div>

                    {/* Stats */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-8"
                    >
                        {[
                            { number: "50+", label: "Projects Delivered" },
                            { number: "30+", label: "Happy Clients" },
                            { number: "5+", label: "Years Experience" },
                            { number: "100%", label: "Client Satisfaction" },
                        ].map((stat, index) => (
                            <div key={stat.label} className="text-center">
                                <div className="text-3xl sm:text-4xl font-bold gradient-text mb-1">
                                    {stat.number}
                                </div>
                                <div className="text-sm text-dark-500">{stat.label}</div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2"
            >
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    className="w-6 h-10 border-2 border-dark-300 rounded-full flex justify-center pt-2"
                >
                    <div className="w-1.5 h-1.5 bg-primary-500 rounded-full" />
                </motion.div>
            </motion.div>
        </section>
    );
}
