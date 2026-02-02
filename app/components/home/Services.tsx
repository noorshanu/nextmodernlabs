"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
    HiOutlineCode,
    HiOutlineDeviceMobile,
    HiOutlineTemplate,
    HiOutlineChartBar,
    HiOutlineGlobeAlt,
} from "react-icons/hi";

const services = [
    {
        icon: HiOutlineCode,
        title: "Web Development",
        description:
            "Custom web applications built with modern technologies like React, Next.js, and Node.js for optimal performance.",
        color: "from-blue-500 to-cyan-500",
    },
    {
        icon: HiOutlineDeviceMobile,
        title: "Mobile Development",
        description:
            "Native and cross-platform mobile apps for iOS and Android that deliver seamless user experiences.",
        color: "from-purple-500 to-pink-500",
    },
    {
        icon: HiOutlineTemplate,
        title: "UI/UX Design",
        description:
            "Beautiful, intuitive interfaces designed with user research and modern design principles.",
        color: "from-orange-500 to-red-500",
    },
    {
        icon: HiOutlineChartBar,
        title: "SEO & Marketing",
        description:
            "Data-driven strategies to boost your online visibility and drive qualified traffic to your business.",
        color: "from-green-500 to-emerald-500",
    },
    {
        icon: HiOutlineGlobeAlt,
        title: "Domain & Hosting",
        description:
            "Reliable hosting solutions and domain management to keep your digital presence running smoothly.",
        color: "from-indigo-500 to-violet-500",
    },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: "easeOut" },
    },
};

export default function Services() {
    return (
        <section id="services" className="section-padding bg-dark-50">
            <div className="section-container">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center max-w-3xl mx-auto mb-16"
                >
                    <span className="inline-block px-4 py-2 bg-primary-100 text-primary-600 rounded-full text-sm font-semibold mb-4">
                        Our Services
                    </span>
                    <h2 className="heading-2 text-dark-900 mb-4">
                        Everything You Need to{" "}
                        <span className="gradient-text">Grow Online</span>
                    </h2>
                    <p className="text-lg text-dark-500">
                        From concept to launch, we provide comprehensive digital solutions
                        tailored to your business needs.
                    </p>
                </motion.div>

                {/* Services Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                    {services.map((service, index) => (
                        <motion.div
                            key={service.title}
                            variants={itemVariants}
                            className="card p-8 group"
                        >
                            {/* Icon */}
                            <div
                                className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                            >
                                <service.icon className="w-7 h-7 text-white" />
                            </div>

                            {/* Content */}
                            <h3 className="text-xl font-bold text-dark-900 mb-3">
                                {service.title}
                            </h3>
                            <p className="text-dark-500 leading-relaxed mb-4">
                                {service.description}
                            </p>

                            {/* Learn More Link */}
                            <Link
                                href={`/services/${service.title.toLowerCase().replace(/ /g, "-")}`}
                                className="inline-flex items-center gap-2 text-primary-500 font-semibold group-hover:gap-3 transition-all duration-300"
                            >
                                Learn More
                                <svg
                                    className="w-4 h-4"
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
                        </motion.div>
                    ))}

                    {/* CTA Card */}
                    <motion.div
                        variants={itemVariants}
                        className="card p-8 bg-gradient-to-br from-primary-500 to-primary-600 border-0"
                    >
                        <div className="h-full flex flex-col justify-between">
                            <div>
                                <h3 className="text-xl font-bold text-white mb-3">
                                    Need Something Custom?
                                </h3>
                                <p className="text-primary-100 leading-relaxed mb-6">
                                    We build tailored solutions for unique business challenges.
                                    Let&apos;s discuss your project.
                                </p>
                            </div>
                            <Link
                                href="#contact"
                                className="inline-flex items-center gap-2 bg-white text-primary-600 px-6 py-3 rounded-lg font-semibold hover:bg-primary-50 transition-colors duration-300 w-fit"
                            >
                                Contact Us
                                <svg
                                    className="w-4 h-4"
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
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
