"use client";

import Link from "next/link";
import Image from "next/image";
import {
    FaTwitter,
    FaLinkedinIn,
    FaInstagram,
    FaGithub,
} from "react-icons/fa";

const footerLinks = {
    services: [
        { name: "Web Development", href: "/web-development" },
        { name: "Mobile Development", href: "/mobile-development" },
        { name: "UI/UX Design", href: "/ui-ux-design" },
        { name: "SEO & Marketing", href: "/seo-&-marketing" },
        { name: "Digital Marketing", href: "/digital-marketing" },
        { name: "Web3 Development", href: "/web3-development" },
    ],
    company: [
        { name: "About Us", href: "/about-us" },
        { name: "Services", href: "/services" },
        { name: "Process", href: "/#process" },
        { name: "Contact Us", href: "/contact-us" },
    ],
    legal: [
        { name: "Privacy Policy", href: "/privacy" },
        { name: "Terms of Service", href: "/terms" },
    ],
};

const socialLinks = [
    { name: "Twitter", icon: FaTwitter, href: "https://x.com/NextModernLabs" },
    { name: "LinkedIn", icon: FaLinkedinIn, href: "https://www.linkedin.com/company/next-modern-lab" },
    { name: "Instagram", icon: FaInstagram, href: "https://www.instagram.com/nextmodernlabs/" },
    { name: "GitHub", icon: FaGithub, href: "https://github.com/NextModernLabs" },
];

export default function Footer() {
    return (
        <footer className="bg-black text-white border-t border-white/10">
            <div className="section-container pt-20 pb-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
                    
                    {/* Brand Column */}
                    <div className="lg:col-span-2 flex flex-col justify-between">
                        <div>
                            <Link href="/" className="inline-block mb-8">
                                <Image
                                    src="/logo.png"
                                    alt="NextModernLabs Logo"
                                    width={160}
                                    height={50}
                                    className="w-auto object-contain brightness-0 invert"
                                />
                            </Link>
                            <p className="text-neutral-400 text-lg max-w-sm">
                                We build modern digital products that help businesses scale.
                            </p>
                        </div>
                    </div>

                    {/* Services Links */}
                    <div>
                        <h4 className="font-semibold text-white mb-6 text-sm uppercase tracking-wider">Services</h4>
                        <ul className="space-y-4">
                            {footerLinks.services.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-neutral-500 hover:text-white transition-colors duration-300 text-sm"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Company Links */}
                    <div>
                        <h4 className="font-semibold text-white mb-6 text-sm uppercase tracking-wider">Company</h4>
                        <ul className="space-y-4">
                            {footerLinks.company.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-neutral-500 hover:text-white transition-colors duration-300 text-sm"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Legal Links */}
                    <div>
                        <h4 className="font-semibold text-white mb-6 text-sm uppercase tracking-wider">Legal</h4>
                        <ul className="space-y-4">
                            {footerLinks.legal.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-neutral-500 hover:text-white transition-colors duration-300 text-sm"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="mt-20 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
                    <p className="text-neutral-500 text-sm">
                        © {new Date().getFullYear()} NextModernLabs. All rights reserved.
                    </p>

                    <div className="flex items-center gap-6">
                        {socialLinks.map((social) => (
                            <a
                                key={social.name}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-neutral-500 hover:text-white transition-colors duration-300"
                                aria-label={social.name}
                            >
                                <social.icon className="w-5 h-5" />
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
}
