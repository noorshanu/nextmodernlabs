import type { Metadata } from "next";

const siteUrl = "https://nextmodernlabs.com";
const pageUrl = `${siteUrl}/ui-ux-design`;

export const metadata: Metadata = {
    title: "UI/UX Design Services – Professional Interface Design",
    description:
        "Expert UI/UX design services by NextModernLabs. We create intuitive, beautiful, and conversion-driven interfaces for web, mobile, and SaaS products. From wireframing to design systems — pixel-perfect delivery.",
    keywords: [
        "UI UX design services",
        "user interface design",
        "user experience design",
        "UX research",
        "Figma design agency",
        "mobile app UI design",
        "web app design",
        "design system",
        "usability testing",
        "wireframing",
        "prototyping services",
    ],
    alternates: {
        canonical: pageUrl,
    },
    openGraph: {
        title: "UI/UX Design Services – NextModernLabs",
        description:
            "We create intuitive, beautiful interfaces that delight users and accelerate business growth — from research to pixel-perfect delivery.",
        url: pageUrl,
        type: "website",
        siteName: "NextModernLabs",
        images: [
            {
                url: "/og-image.png",
                width: 1200,
                height: 630,
                alt: "UI/UX Design Services – NextModernLabs",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "UI/UX Design Services – NextModernLabs",
        description:
            "We create intuitive, beautiful interfaces that delight users and accelerate business growth.",
        images: ["/og-image.png"],
    },
};

const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "UI/UX Design Services",
    provider: {
        "@type": "Organization",
        name: "NextModernLabs",
        url: siteUrl,
    },
    url: pageUrl,
    description:
        "Professional UI/UX design services including web app design, mobile app design, design systems, UX research, motion design, and brand identity.",
    serviceType: "UI/UX Design",
    areaServed: "Worldwide",
    hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "UI/UX Design Services",
        itemListElement: [
            { "@type": "Offer", name: "Web App Design" },
            { "@type": "Offer", name: "Mobile App Design" },
            { "@type": "Offer", name: "Design Systems" },
            { "@type": "Offer", name: "UX Research & Audit" },
            { "@type": "Offer", name: "Motion & Interaction Design" },
            { "@type": "Offer", name: "Brand Identity" },
        ],
    },
};

const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
        { "@type": "ListItem", position: 2, name: "UI/UX Design", item: pageUrl },
    ],
};

export default function UIUXLayout({ children }: { children: React.ReactNode }) {
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
