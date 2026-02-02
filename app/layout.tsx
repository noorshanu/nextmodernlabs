import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
    display: "swap",
});

const outfit = Outfit({
    subsets: ["latin"],
    variable: "--font-outfit",
    display: "swap",
});

export const metadata: Metadata = {
    title: "NextModernLabs | Modern Digital Agency",
    description:
        "We build digital products that drive growth. Modern web, mobile, and digital solutions for scalable businesses.",
    keywords: [
        "web development",
        "mobile app development",
        "UI/UX design",
        "digital agency",
        "SEO",
        "digital marketing",
    ],
    authors: [{ name: "NextModernLabs" }],
    openGraph: {
        title: "NextModernLabs | Modern Digital Agency",
        description:
            "We build digital products that drive growth. Modern web, mobile, and digital solutions for scalable businesses.",
        type: "website",
        locale: "en_US",
        siteName: "NextModernLabs",
    },
    twitter: {
        card: "summary_large_image",
        title: "NextModernLabs | Modern Digital Agency",
        description:
            "We build digital products that drive growth. Modern web, mobile, and digital solutions for scalable businesses.",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="scroll-smooth">
            <body
                className={`${inter.variable} ${outfit.variable} font-sans antialiased bg-white text-dark-900`}
            >
                {children}
            </body>
        </html>
    );
}
