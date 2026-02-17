"use client";

import { motion } from "framer-motion";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

export default function CookiePolicyPage() {
    return (
        <main className="min-h-screen bg-[#060a14]">
            <Navbar />

            {/* Hero */}
            <section className="relative pt-32 pb-16 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#060a14] via-[#0a0e1a] to-[#060a14]" />
                <div className="absolute top-20 left-1/3 w-[400px] h-[400px] bg-amber-500/8 rounded-full blur-[120px]" />
                <div className="section-container relative z-10 text-center">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                        <span className="inline-block px-4 py-2 bg-amber-500/10 border border-amber-500/30 rounded-full text-amber-400 text-sm font-semibold mb-6">
                            Legal
                        </span>
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 tracking-tight">
                            Cookie Policy
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
                                <h2 className="text-2xl font-bold text-white mb-3">What Are Cookies?</h2>
                                <p className="text-slate-400 leading-relaxed">
                                    Cookies are small text files stored on your device when you visit a website. They help websites remember your preferences, understand how you use the site, and improve your overall experience.
                                </p>
                            </div>

                            <div>
                                <h2 className="text-2xl font-bold text-white mb-3">Types of Cookies We Use</h2>

                                <div className="space-y-5 mt-4">
                                    <div className="bg-slate-800/40 rounded-xl p-5 border border-slate-700/50">
                                        <h3 className="text-lg font-semibold text-white mb-2">🔧 Essential Cookies</h3>
                                        <p className="text-slate-400 text-sm leading-relaxed">
                                            Required for basic website functionality. These cannot be disabled as they are necessary for the site to work properly, including navigation, form submissions, and security features.
                                        </p>
                                    </div>

                                    <div className="bg-slate-800/40 rounded-xl p-5 border border-slate-700/50">
                                        <h3 className="text-lg font-semibold text-white mb-2">📊 Analytics Cookies</h3>
                                        <p className="text-slate-400 text-sm leading-relaxed">
                                            Help us understand how visitors interact with our website by collecting anonymous data such as pages visited, time spent on pages, and referral sources. We use Google Analytics for this purpose.
                                        </p>
                                    </div>

                                    <div className="bg-slate-800/40 rounded-xl p-5 border border-slate-700/50">
                                        <h3 className="text-lg font-semibold text-white mb-2">🎯 Marketing Cookies</h3>
                                        <p className="text-slate-400 text-sm leading-relaxed">
                                            Used to track visitors across websites and display relevant advertisements. These include cookies from advertising partners such as Google Ads and Meta Pixel.
                                        </p>
                                    </div>

                                    <div className="bg-slate-800/40 rounded-xl p-5 border border-slate-700/50">
                                        <h3 className="text-lg font-semibold text-white mb-2">⚙️ Preference Cookies</h3>
                                        <p className="text-slate-400 text-sm leading-relaxed">
                                            Remember your settings and preferences such as language, region, and display options to provide a more personalized experience on return visits.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <h2 className="text-2xl font-bold text-white mb-3">How to Manage Cookies</h2>
                                <p className="text-slate-400 leading-relaxed">
                                    You can control and manage cookies through your browser settings. Most browsers allow you to block or delete cookies. However, blocking certain cookies may impact the functionality of our website.
                                </p>
                                <ul className="list-disc list-inside text-slate-400 space-y-2 mt-3">
                                    <li><strong className="text-slate-300">Chrome:</strong> Settings → Privacy and Security → Cookies</li>
                                    <li><strong className="text-slate-300">Firefox:</strong> Settings → Privacy & Security → Cookies</li>
                                    <li><strong className="text-slate-300">Safari:</strong> Preferences → Privacy → Cookies</li>
                                    <li><strong className="text-slate-300">Edge:</strong> Settings → Cookies and Site Permissions</li>
                                </ul>
                            </div>

                            <div>
                                <h2 className="text-2xl font-bold text-white mb-3">Third-Party Cookies</h2>
                                <p className="text-slate-400 leading-relaxed">
                                    Some cookies on our site are set by third-party services including Google Analytics, Google Ads, Meta Pixel, and HubSpot. These third parties have their own privacy policies governing the use of their cookies.
                                </p>
                            </div>

                            <div>
                                <h2 className="text-2xl font-bold text-white mb-3">Updates to This Policy</h2>
                                <p className="text-slate-400 leading-relaxed">
                                    We may update this Cookie Policy periodically to reflect changes in technology, legislation, or our data practices. Please check back regularly for updates.
                                </p>
                            </div>

                            <div>
                                <h2 className="text-2xl font-bold text-white mb-3">Contact Us</h2>
                                <p className="text-slate-400 leading-relaxed">
                                    If you have questions about our use of cookies, contact us at{" "}
                                    <a href="mailto:privacy@nextmodernlabs.com" className="text-amber-400 hover:text-amber-300 transition-colors">
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
