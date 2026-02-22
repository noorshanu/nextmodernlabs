import type { Metadata } from "next";

const siteUrl = "https://nextmodernlabs.com";
const pageUrl = `${siteUrl}/seo-&-marketing`;

export const metadata: Metadata = {
    title: "SEO & Marketing Services – Rank Higher, Grow Faster",
    description:
        "NextModernLabs provides expert SEO and marketing services — on-page SEO, technical SEO, link building, local SEO, and content strategy to rank higher on Google and drive organic traffic.",
    keywords: [
        "SEO services",
        "search engine optimization",
        "technical SEO",
        "on-page SEO",
        "link building",
        "local SEO",
        "SEO agency",
        "Google ranking",
        "organic traffic",
        "content strategy",
        "keyword research",
        "SEO marketing agency",
    ],
    alternates: {
        canonical: pageUrl,
    },
    openGraph: {
        title: "SEO & Marketing Services – NextModernLabs",
        description:
            "Expert SEO services — technical SEO, on-page optimization, link building, and content strategy to rank higher and drive organic growth.",
        url: pageUrl,
        type: "website",
        siteName: "NextModernLabs",
        images: [
            {
                url: "/og-image.png",
                width: 1200,
                height: 630,
                alt: "SEO & Marketing Services – NextModernLabs",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "SEO & Marketing Services – NextModernLabs",
        description:
            "Technical SEO, on-page optimization, link building, and content strategy to rank higher on Google.",
        images: ["/og-image.png"],
    },
};

const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "SEO & Marketing Services",
    provider: {
        "@type": "Organization",
        name: "NextModernLabs",
        url: siteUrl,
    },
    url: pageUrl,
    description:
        "Expert SEO and marketing services including technical SEO, on-page optimization, link building, local SEO, and content strategy.",
    serviceType: "Search Engine Optimization",
    areaServed: "Worldwide",
};

const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
        { "@type": "ListItem", position: 2, name: "SEO & Marketing", item: pageUrl },
    ],
};

export default function SEOMarketingLayout({ children }: { children: React.ReactNode }) {
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
