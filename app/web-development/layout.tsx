import type { Metadata } from "next";

const siteUrl = "https://nextmodernlabs.com";
const pageUrl = `${siteUrl}/web-development`;

export const metadata: Metadata = {
    title: "Web Development Services – Custom Web Applications",
    description:
        "NextModernLabs builds high-performance web applications — from stunning landing pages and e-commerce stores to complex SaaS platforms. React, Next.js, Node.js, and more.",
    keywords: [
        "web development services",
        "custom web development",
        "Next.js development agency",
        "React development",
        "SaaS development",
        "e-commerce development",
        "full stack development",
        "Node.js development",
        "web application development",
        "landing page development",
        "corporate website development",
    ],
    alternates: {
        canonical: pageUrl,
    },
    openGraph: {
        title: "Web Development Services – NextModernLabs",
        description:
            "From landing pages to complex SaaS platforms — we build pixel-perfect, high-performance web applications that drive real business results.",
        url: pageUrl,
        type: "website",
        siteName: "NextModernLabs",
        images: [
            {
                url: "/og-image.png",
                width: 1200,
                height: 630,
                alt: "Web Development Services – NextModernLabs",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Web Development Services – NextModernLabs",
        description:
            "From landing pages to complex SaaS platforms — we build pixel-perfect, high-performance web applications.",
        images: ["/og-image.png"],
    },
};

const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Development Services",
    provider: {
        "@type": "Organization",
        name: "NextModernLabs",
        url: siteUrl,
    },
    url: pageUrl,
    description:
        "Custom web development services including landing pages, corporate websites, e-commerce stores, SaaS platforms, progressive web apps, and web portals.",
    serviceType: "Web Development",
    areaServed: "Worldwide",
    hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Web Development Services",
        itemListElement: [
            { "@type": "Offer", name: "Landing Pages" },
            { "@type": "Offer", name: "Corporate Websites" },
            { "@type": "Offer", name: "E-Commerce Stores" },
            { "@type": "Offer", name: "SaaS Products" },
            { "@type": "Offer", name: "Progressive Web Apps" },
            { "@type": "Offer", name: "Web Portals & Dashboards" },
        ],
    },
};

const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
        { "@type": "ListItem", position: 2, name: "Web Development", item: pageUrl },
    ],
};

export default function WebDevLayout({ children }: { children: React.ReactNode }) {
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
