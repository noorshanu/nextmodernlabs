"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
    HiOutlineMail,
    HiOutlinePhone,
    HiOutlineLocationMarker,
} from "react-icons/hi";
import {
    FaTwitter,
    FaLinkedinIn,
    FaInstagram,
    FaGithub,
} from "react-icons/fa";

const footerLinks = {
    services: [
        { name: "Web Development", href: "/services/web-development" },
        { name: "Mobile Development", href: "/services/mobile-development" },
        { name: "UI/UX Design", href: "/services/ui-ux-design" },
        { name: "SEO & Marketing", href: "/services/seo-marketing" },
    ],
    company: [
        { name: "About Us", href: "/about" },
        { name: "Our Work", href: "/work" },
        { name: "Blog", href: "/blog" },
        { name: "Careers", href: "/careers" },
    ],
    legal: [
        { name: "Privacy Policy", href: "/privacy" },
        { name: "Terms of Service", href: "/terms" },
        { name: "Cookie Policy", href: "/cookies" },
    ],
};

const socialLinks = [
    { name: "Twitter", icon: FaTwitter, href: "https://twitter.com" },
    { name: "LinkedIn", icon: FaLinkedinIn, href: "https://linkedin.com" },
    { name: "Instagram", icon: FaInstagram, href: "https://instagram.com" },
    { name: "GitHub", icon: FaGithub, href: "https://github.com" },
];

export default function Footer() {
    return (
        <footer className="bg-dark-900 text-white">
            {/* Main Footer */}
            <div className="section-container py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
                    {/* Brand Column */}
                    <div className="lg:col-span-2">
                        <Link href="/" className="flex items-center gap-2 mb-6">
                            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center shadow-lg shadow-primary-500/30">
                                <span className="text-white font-bold text-lg">N</span>
                            </div>
                            <span className="font-display font-bold text-xl">
                                NextModern<span className="text-primary-400">Labs</span>
                            </span>
                        </Link>
                        <p className="text-dark-400 mb-6 max-w-sm">
                            We build modern digital products that help businesses grow. From
                            concept to launch, we&apos;re your trusted technology partner.
                        </p>

                        {/* Contact Info */}
                        <div className="space-y-3">
                            <a
                                href="mailto:hello@nextmodernlabs.com"
                                className="flex items-center gap-3 text-dark-400 hover:text-primary-400 transition-colors"
                            >
                                <HiOutlineMail className="w-5 h-5" />
                                hello@nextmodernlabs.com
                            </a>
                            <a
                                href="tel:+1234567890"
                                className="flex items-center gap-3 text-dark-400 hover:text-primary-400 transition-colors"
                            >
                                <HiOutlinePhone className="w-5 h-5" />
                                +1 (234) 567-890
                            </a>
                            <div className="flex items-center gap-3 text-dark-400">
                                <HiOutlineLocationMarker className="w-5 h-5" />
                                San Francisco, CA
                            </div>
                        </div>
                    </div>

                    {/* Services Links */}
                    <div>
                        <h4 className="font-bold text-lg mb-4">Services</h4>
                        <ul className="space-y-3">
                            {footerLinks.services.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-dark-400 hover:text-primary-400 transition-colors"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Company Links */}
                    <div>
                        <h4 className="font-bold text-lg mb-4">Company</h4>
                        <ul className="space-y-3">
                            {footerLinks.company.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-dark-400 hover:text-primary-400 transition-colors"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Legal Links */}
                    <div>
                        <h4 className="font-bold text-lg mb-4">Legal</h4>
                        <ul className="space-y-3">
                            {footerLinks.legal.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-dark-400 hover:text-primary-400 transition-colors"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-dark-800">
                <div className="section-container py-6">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                        <p className="text-dark-500 text-sm">
                            © {new Date().getFullYear()} NextModernLabs. All rights reserved.
                        </p>

                        {/* Social Links */}
                        <div className="flex items-center gap-4">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.name}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 rounded-lg bg-dark-800 flex items-center justify-center text-dark-400 hover:bg-primary-500 hover:text-white transition-all duration-300"
                                    aria-label={social.name}
                                >
                                    <social.icon className="w-5 h-5" />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
