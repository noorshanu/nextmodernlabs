"use client";

import { motion } from "framer-motion";

const steps = [
    {
        number: "01",
        title: "Discovery",
        description:
            "We dive deep into understanding your business goals, target audience, and project requirements.",
        color: "from-blue-500 to-cyan-500",
    },
    {
        number: "02",
        title: "Strategy",
        description:
            "Our team crafts a comprehensive roadmap with clear milestones and deliverables.",
        color: "from-purple-500 to-pink-500",
    },
    {
        number: "03",
        title: "Design",
        description:
            "We create stunning, user-centered designs that align with your brand identity.",
        color: "from-orange-500 to-red-500",
    },
    {
        number: "04",
        title: "Development",
        description:
            "Our engineers build robust, scalable solutions using cutting-edge technologies.",
        color: "from-green-500 to-emerald-500",
    },
    {
        number: "05",
        title: "Launch",
        description:
            "We ensure a smooth deployment and provide ongoing support for your success.",
        color: "from-indigo-500 to-violet-500",
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
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: "easeOut" },
    },
};

export default function Process() {
    return (
        <section id="process" className="section-padding bg-dark-900 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                    }}
                />
            </div>

            <div className="section-container relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center max-w-3xl mx-auto mb-16"
                >
                    <span className="inline-block px-4 py-2 bg-primary-500/10 text-primary-400 rounded-full text-sm font-semibold mb-4 border border-primary-500/20">
                        Our Process
                    </span>
                    <h2 className="heading-2 text-white mb-4">
                        From Idea to{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-cyan-400">
                            Launch
                        </span>
                    </h2>
                    <p className="text-lg text-dark-400">
                        A proven methodology that ensures your project is delivered on time,
                        on budget, and beyond expectations.
                    </p>
                </motion.div>

                {/* Process Steps */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="relative"
                >
                    {/* Connection Line */}
                    <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-dark-700 to-transparent" />

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
                        {steps.map((step, index) => (
                            <motion.div
                                key={step.number}
                                variants={itemVariants}
                                className="relative group"
                            >
                                {/* Step Card */}
                                <div className="bg-dark-800/50 backdrop-blur-sm border border-dark-700 rounded-2xl p-6 hover:border-primary-500/50 transition-all duration-300 h-full">
                                    {/* Number */}
                                    <div
                                        className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                                    >
                                        <span className="text-white font-bold text-lg">
                                            {step.number}
                                        </span>
                                    </div>

                                    {/* Content */}
                                    <h3 className="text-xl font-bold text-white mb-2">
                                        {step.title}
                                    </h3>
                                    <p className="text-dark-400 text-sm leading-relaxed">
                                        {step.description}
                                    </p>
                                </div>

                                {/* Connector Dot */}
                                <div className="hidden lg:block absolute -top-3 left-1/2 -translate-x-1/2 w-6 h-6 bg-dark-800 border-2 border-dark-700 rounded-full group-hover:border-primary-500 transition-colors duration-300">
                                    <div className="absolute inset-1 bg-primary-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
