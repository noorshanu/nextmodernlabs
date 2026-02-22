import type { Metadata } from "next";

const siteUrl = "https://nextmodernlabs.com";
const pageUrl = `${siteUrl}/digital-marketing`;

export const metadata: Metadata = {
    title: "Digital Marketing Services – Grow Your Business Online",
    description:
        "NextModernLabs delivers data-driven digital marketing strategies — PPC advertising, social media marketing, content marketing, email campaigns, and growth hacking for measurable results.",
    keywords: [
        "digital marketing services",
        "PPC advertising",
        "social media marketing",
        "content marketing",
        "email marketing",
        "growth hacking",
        "online marketing agency",
        "Facebook ads",
        "Google ads management",
        "digital marketing agency",
        "paid advertising",
    ],
    alternates: {
        canonical: pageUrl,
    },
    openGraph: {
        title: "Digital Marketing Services – NextModernLabs",
        description:
            "Data-driven digital marketing — PPC, social media, content, and email campaigns for measurable business growth.",
        url: pageUrl,
        type: "website",
        siteName: "NextModernLabs",
        images: [
            {
                url: "/og-image.png",
                width: 1200,
                height: 630,
                alt: "Digital Marketing Services – NextModernLabs",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Digital Marketing Services – NextModernLabs",
        description:
            "Data-driven digital marketing — PPC, social media, content, and email campaigns for measurable results.",
        images: ["/og-image.png"],
    },
};

const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Digital Marketing Services",
    provider: {
        "@type": "Organization",
        name: "NextModernLabs",
        url: siteUrl,
    },
    url: pageUrl,
    description:
        "Data-driven digital marketing services including PPC advertising, social media marketing, content marketing, email campaigns, and growth hacking.",
    serviceType: "Digital Marketing",
    areaServed: "Worldwide",
};

const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
        { "@type": "ListItem", position: 2, name: "Digital Marketing", item: pageUrl },
    ],
};

export default function DigitalMarketingLayout({ children }: { children: React.ReactNode }) {
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
