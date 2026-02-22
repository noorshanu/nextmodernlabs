import type { Metadata } from "next";

const siteUrl = "https://nextmodernlabs.com";
const pageUrl = `${siteUrl}/domain-&-hosting`;

export const metadata: Metadata = {
    title: "Domain & Hosting Solutions – Reliable Web Hosting",
    description:
        "NextModernLabs offers reliable domain registration and managed web hosting solutions — fast SSD hosting, SSL certificates, 99.9% uptime guarantee, and expert support for your business.",
    keywords: [
        "domain registration",
        "web hosting",
        "managed hosting",
        "domain and hosting",
        "SSD hosting",
        "SSL certificate",
        "domain hosting agency",
        "cloud hosting",
        "VPS hosting",
        "dedicated server",
        "99.9% uptime hosting",
    ],
    alternates: {
        canonical: pageUrl,
    },
    openGraph: {
        title: "Domain & Hosting Solutions – NextModernLabs",
        description:
            "Reliable domain registration and managed hosting — fast SSD, SSL, 99.9% uptime guarantee, and expert support.",
        url: pageUrl,
        type: "website",
        siteName: "NextModernLabs",
        images: [
            {
                url: "/og-image.png",
                width: 1200,
                height: 630,
                alt: "Domain & Hosting Solutions – NextModernLabs",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Domain & Hosting Solutions – NextModernLabs",
        description:
            "Reliable domain registration and managed hosting — fast SSD, SSL, and 99.9% uptime guarantee.",
        images: ["/og-image.png"],
    },
};

const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Domain & Hosting Solutions",
    provider: {
        "@type": "Organization",
        name: "NextModernLabs",
        url: siteUrl,
    },
    url: pageUrl,
    description:
        "Reliable domain registration and managed web hosting with fast SSD hosting, SSL certificates, and 99.9% uptime guarantee.",
    serviceType: "Web Hosting",
    areaServed: "Worldwide",
};

const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
        { "@type": "ListItem", position: 2, name: "Domain & Hosting", item: pageUrl },
    ],
};

export default function DomainHostingLayout({ children }: { children: React.ReactNode }) {
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
