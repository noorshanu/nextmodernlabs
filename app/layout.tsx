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

const siteUrl = "https://nextmodernlabs.com";

export const metadata: Metadata = {
    metadataBase: new URL(siteUrl),
    title: {
        default: "NextModernLabs | Modern Digital Agency",
        template: "%s | NextModernLabs",
    },
    description:
        "NextModernLabs is a modern digital agency specializing in web development, mobile app development, UI/UX design, SEO, and digital marketing for scalable businesses.",
    keywords: [
        "NextModernLabs",
        "digital agency",
        "web development agency",
        "mobile app development",
        "UI UX design agency",
        "SEO services",
        "digital marketing",
        "web3 development",
        "Next.js development",
        "React development",
    ],
    authors: [{ name: "NextModernLabs", url: siteUrl }],
    creator: "NextModernLabs",
    publisher: "NextModernLabs",
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
    alternates: {
        canonical: siteUrl,
    },
    openGraph: {
        title: "NextModernLabs | Modern Digital Agency",
        description:
            "NextModernLabs is a modern digital agency specializing in web development, mobile apps, UI/UX design, SEO, and digital marketing.",
        url: siteUrl,
        type: "website",
        locale: "en_US",
        siteName: "NextModernLabs",
        images: [
            {
                url: "/og-image.png",
                width: 1200,
                height: 630,
                alt: "NextModernLabs – Modern Digital Agency",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "NextModernLabs | Modern Digital Agency",
        description:
            "We build digital products that drive growth. Modern web, mobile, and digital solutions for scalable businesses.",
        images: ["/og-image.png"],
        creator: "@nextmodernlabs",
        site: "@nextmodernlabs",
    },
    icons: {
        icon: [
            { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
            { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
        ],
        apple: "/apple-touch-icon.png",
        other: [
            { rel: "android-chrome-192x192", url: "/android-chrome-192x192.png" },
            { rel: "android-chrome-512x512", url: "/android-chrome-512x512.png" },
        ],
    },
    category: "technology",
};

const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "NextModernLabs",
    url: siteUrl,
    logo: `${siteUrl}/android-chrome-512x512.png`,
    description:
        "A modern digital agency specializing in web development, mobile apps, UI/UX design, SEO, and digital marketing.",
    sameAs: [],
    contactPoint: {
        "@type": "ContactPoint",
        contactType: "customer service",
        availableLanguage: "English",
    },
    areaServed: "Worldwide",
    serviceType: [
        "Web Development",
        "Mobile App Development",
        "UI/UX Design",
        "SEO & Digital Marketing",
        "Web3 Development",
        "Domain & Hosting",
    ],
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="scroll-smooth">
            <meta name="google-site-verification" content="Sj332OnfTr-aWBwQ31EHXLjsBGWhPLew-sAwZMmc7-k" />
            <body
                className={`${inter.variable} ${outfit.variable} font-sans antialiased bg-white text-dark-900`}
            >
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
                />
                {children}
            </body>
        </html>
    );
}
