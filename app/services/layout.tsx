import type { Metadata } from "next";

const siteUrl = "https://nextmodernlabs.com";
const pageUrl = `${siteUrl}/services`;

export const metadata: Metadata = {
    title: "Our Services – Web, Mobile, Design, SEO & Web3",
    description:
        "NextModernLabs offers 7 core digital services: web development, mobile app development, UI/UX design, SEO & marketing, Web3 development, digital marketing, and domain & hosting. One team for all your needs.",
    keywords: [
        "digital agency services",
        "web development services",
        "mobile app development",
        "UI UX design services",
        "SEO services",
        "web3 development",
        "digital marketing agency",
        "full service digital agency",
        "NextModernLabs services",
    ],
    alternates: {
        canonical: pageUrl,
    },
    openGraph: {
        title: "Our Services – NextModernLabs",
        description:
            "Web, mobile, design, SEO, Web3, and more — 7 core services by NextModernLabs to launch and grow your business.",
        url: pageUrl,
        type: "website",
        siteName: "NextModernLabs",
        images: [
            {
                url: "/og-image.png",
                width: 1200,
                height: 630,
                alt: "Services – NextModernLabs",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Our Services – NextModernLabs",
        description:
            "Web, mobile, design, SEO, Web3, and more — 7 core services to launch and grow your business.",
        images: ["/og-image.png"],
    },
};

const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Services – NextModernLabs",
    url: pageUrl,
    description: "Overview of all digital services offered by NextModernLabs.",
    provider: {
        "@type": "Organization",
        name: "NextModernLabs",
        url: siteUrl,
    },
};

const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
        { "@type": "ListItem", position: 2, name: "Services", item: pageUrl },
    ],
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
            />
            {children}
        </>
    );
}
