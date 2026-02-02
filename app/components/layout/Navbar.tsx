"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { HiMenuAlt3, HiX } from "react-icons/hi";

const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "#services" },
    { name: "About", href: "#about" },
    { name: "Process", href: "#process" },
    { name: "Contact", href: "#contact" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
                    ? "bg-white/90 backdrop-blur-lg shadow-lg shadow-dark-900/5"
                    : "bg-transparent"
                }`}
        >
            <nav className="section-container">
                <div className="flex items-center justify-between h-16 lg:h-20">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2 group">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center shadow-lg shadow-primary-500/30 group-hover:shadow-xl group-hover:shadow-primary-500/40 transition-shadow duration-300">
                            <span className="text-white font-bold text-lg">N</span>
                        </div>
                        <span className="font-display font-bold text-xl text-dark-900">
                            NextModern<span className="text-primary-500">Labs</span>
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-dark-600 hover:text-primary-500 font-medium transition-colors duration-200"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    {/* CTA Button */}
                    <div className="hidden lg:block">
                        <Link href="#contact" className="btn-primary">
                            Get Started
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

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="lg:hidden p-2 text-dark-600 hover:text-primary-500 transition-colors"
                        aria-label="Toggle menu"
                    >
                        {isOpen ? (
                            <HiX className="w-6 h-6" />
                        ) : (
                            <HiMenuAlt3 className="w-6 h-6" />
                        )}
                    </button>
                </div>
            </nav>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="lg:hidden bg-white border-t border-dark-100"
                    >
                        <div className="section-container py-4 space-y-2">
                            {navLinks.map((link, index) => (
                                <motion.div
                                    key={link.name}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                >
                                    <Link
                                        href={link.href}
                                        onClick={() => setIsOpen(false)}
                                        className="block py-3 text-dark-600 hover:text-primary-500 font-medium transition-colors"
                                    >
                                        {link.name}
                                    </Link>
                                </motion.div>
                            ))}
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: navLinks.length * 0.1 }}
                                className="pt-4"
                            >
                                <Link
                                    href="#contact"
                                    onClick={() => setIsOpen(false)}
                                    className="btn-primary w-full justify-center"
                                >
                                    Get Started
                                </Link>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    );
}
