"use client";

import { motion } from "framer-motion";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

export default function TermsOfServicePage() {
    return (
        <main className="min-h-screen bg-[#060a14]">
            <Navbar />

            {/* Hero */}
            <section className="relative pt-32 pb-16 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#060a14] via-[#0a0e1a] to-[#060a14]" />
                <div className="absolute top-20 right-1/4 w-[400px] h-[400px] bg-blue-500/8 rounded-full blur-[120px]" />
                <div className="section-container relative z-10 text-center">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                        <span className="inline-block px-4 py-2 bg-blue-500/10 border border-blue-500/30 rounded-full text-blue-400 text-sm font-semibold mb-6">
                            Legal
                        </span>
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 tracking-tight">
                            Terms of Service
                        </h1>
                        <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                            Last updated: February 18, 2026
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Content */}
            <section className="pb-20">
                <div className="section-container">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="max-w-4xl mx-auto bg-slate-900/40 border border-slate-800 rounded-2xl p-8 md:p-12"
                    >
                        <div className="prose prose-invert prose-slate max-w-none space-y-8">
                            <div>
                                <h2 className="text-2xl font-bold text-white mb-3">1. Acceptance of Terms</h2>
                                <p className="text-slate-400 leading-relaxed">
                                    By accessing and using the NextModernLabs website and services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
                                </p>
                            </div>

                            <div>
                                <h2 className="text-2xl font-bold text-white mb-3">2. Services</h2>
                                <p className="text-slate-400 leading-relaxed">
                                    NextModernLabs provides web development, mobile development, UI/UX design, digital marketing, SEO, Web3 development, domain & hosting, and related technology services. The specific scope and deliverables of each project are defined in individual project agreements.
                                </p>
                            </div>

                            <div>
                                <h2 className="text-2xl font-bold text-white mb-3">3. Client Responsibilities</h2>
                                <ul className="list-disc list-inside text-slate-400 space-y-2">
                                    <li>Provide accurate and complete information required for project execution</li>
                                    <li>Respond to communications and provide feedback in a timely manner</li>
                                    <li>Ensure you have the rights to any content or materials you provide</li>
                                    <li>Make payments according to the agreed schedule</li>
                                    <li>Review and approve deliverables within specified timeframes</li>
                                </ul>
                            </div>

                            <div>
                                <h2 className="text-2xl font-bold text-white mb-3">4. Intellectual Property</h2>
                                <p className="text-slate-400 leading-relaxed">
                                    Upon full payment, clients receive ownership of the custom-developed deliverables as specified in the project agreement. NextModernLabs retains the right to use general techniques, knowledge, and non-proprietary tools developed during the engagement.
                                </p>
                            </div>

                            <div>
                                <h2 className="text-2xl font-bold text-white mb-3">5. Payment Terms</h2>
                                <p className="text-slate-400 leading-relaxed">
                                    Payment terms are outlined in individual project proposals and agreements. Late payments may result in project delays or suspension of services. All fees are non-refundable unless otherwise specified in the project agreement.
                                </p>
                            </div>

                            <div>
                                <h2 className="text-2xl font-bold text-white mb-3">6. Confidentiality</h2>
                                <p className="text-slate-400 leading-relaxed">
                                    Both parties agree to maintain the confidentiality of proprietary information shared during the engagement. This includes business strategies, technical specifications, user data, and any other sensitive information.
                                </p>
                            </div>

                            <div>
                                <h2 className="text-2xl font-bold text-white mb-3">7. Limitation of Liability</h2>
                                <p className="text-slate-400 leading-relaxed">
                                    NextModernLabs shall not be liable for any indirect, incidental, special, or consequential damages arising from the use of our services. Our total liability shall not exceed the total fees paid by the client for the specific service in question.
                                </p>
                            </div>

                            <div>
                                <h2 className="text-2xl font-bold text-white mb-3">8. Project Timelines</h2>
                                <p className="text-slate-400 leading-relaxed">
                                    Project timelines are estimates and may be affected by factors including scope changes, client feedback delays, and technical complexities. We commit to transparent communication regarding any timeline adjustments.
                                </p>
                            </div>

                            <div>
                                <h2 className="text-2xl font-bold text-white mb-3">9. Termination</h2>
                                <p className="text-slate-400 leading-relaxed">
                                    Either party may terminate the engagement with written notice as specified in the project agreement. Upon termination, the client is responsible for payment of all work completed up to the termination date.
                                </p>
                            </div>

                            <div>
                                <h2 className="text-2xl font-bold text-white mb-3">10. Changes to Terms</h2>
                                <p className="text-slate-400 leading-relaxed">
                                    We reserve the right to modify these Terms of Service at any time. Changes will be effective immediately upon posting. Continued use of our services constitutes acceptance of the updated terms.
                                </p>
                            </div>

                            <div>
                                <h2 className="text-2xl font-bold text-white mb-3">11. Contact</h2>
                                <p className="text-slate-400 leading-relaxed">
                                    For questions regarding these Terms of Service, contact us at{" "}
                                    <a href="mailto:legal@nextmodernlabs.com" className="text-blue-400 hover:text-blue-300 transition-colors">
                                        legal@nextmodernlabs.com
                                    </a>
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
