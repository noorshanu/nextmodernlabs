"use client";

import { motion } from "framer-motion";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

export default function PrivacyPolicyPage() {
    return (
        <main className="min-h-screen bg-[#060a14]">
            <Navbar />

            {/* Hero */}
            <section className="relative pt-32 pb-16 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#060a14] via-[#0a0e1a] to-[#060a14]" />
                <div className="absolute top-20 left-1/4 w-[400px] h-[400px] bg-emerald-500/8 rounded-full blur-[120px]" />
                <div className="section-container relative z-10 text-center">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                        <span className="inline-block px-4 py-2 bg-emerald-500/10 border border-emerald-500/30 rounded-full text-emerald-400 text-sm font-semibold mb-6">
                            Legal
                        </span>
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 tracking-tight">
                            Privacy Policy
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
                                <h2 className="text-2xl font-bold text-white mb-3">1. Information We Collect</h2>
                                <p className="text-slate-400 leading-relaxed">
                                    We collect information you provide directly to us, such as when you fill out a contact form, request a consultation, or communicate with us. This may include your name, email address, phone number, company name, and project details.
                                </p>
                                <p className="text-slate-400 leading-relaxed mt-3">
                                    We also automatically collect certain information when you visit our website, including your IP address, browser type, operating system, referring URLs, and information about how you interact with our website.
                                </p>
                            </div>

                            <div>
                                <h2 className="text-2xl font-bold text-white mb-3">2. How We Use Your Information</h2>
                                <ul className="list-disc list-inside text-slate-400 space-y-2">
                                    <li>To respond to your inquiries and provide requested services</li>
                                    <li>To send you project updates and relevant communications</li>
                                    <li>To improve our website, services, and user experience</li>
                                    <li>To analyze website usage and trends</li>
                                    <li>To comply with legal obligations</li>
                                </ul>
                            </div>

                            <div>
                                <h2 className="text-2xl font-bold text-white mb-3">3. Information Sharing</h2>
                                <p className="text-slate-400 leading-relaxed">
                                    We do not sell, trade, or rent your personal information to third parties. We may share your information with trusted service providers who assist us in operating our website and conducting our business, provided they agree to keep this information confidential.
                                </p>
                            </div>

                            <div>
                                <h2 className="text-2xl font-bold text-white mb-3">4. Data Security</h2>
                                <p className="text-slate-400 leading-relaxed">
                                    We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.
                                </p>
                            </div>

                            <div>
                                <h2 className="text-2xl font-bold text-white mb-3">5. Cookies & Tracking</h2>
                                <p className="text-slate-400 leading-relaxed">
                                    Our website uses cookies and similar tracking technologies to enhance your browsing experience and analyze website traffic. You can control cookie preferences through your browser settings. For more details, please see our Cookie Policy.
                                </p>
                            </div>

                            <div>
                                <h2 className="text-2xl font-bold text-white mb-3">6. Your Rights</h2>
                                <p className="text-slate-400 leading-relaxed">
                                    You have the right to access, correct, or delete your personal data. You may also opt out of marketing communications at any time. To exercise these rights, please contact us at privacy@nextmodernlabs.com.
                                </p>
                            </div>

                            <div>
                                <h2 className="text-2xl font-bold text-white mb-3">7. Third-Party Links</h2>
                                <p className="text-slate-400 leading-relaxed">
                                    Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these external sites. We encourage you to review the privacy policies of any third-party sites you visit.
                                </p>
                            </div>

                            <div>
                                <h2 className="text-2xl font-bold text-white mb-3">8. Changes to This Policy</h2>
                                <p className="text-slate-400 leading-relaxed">
                                    We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the &quot;Last updated&quot; date.
                                </p>
                            </div>

                            <div>
                                <h2 className="text-2xl font-bold text-white mb-3">9. Contact Us</h2>
                                <p className="text-slate-400 leading-relaxed">
                                    If you have any questions about this Privacy Policy, please contact us at{" "}
                                    <a href="mailto:privacy@nextmodernlabs.com" className="text-emerald-400 hover:text-emerald-300 transition-colors">
                                        privacy@nextmodernlabs.com
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
