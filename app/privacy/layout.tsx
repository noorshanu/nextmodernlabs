import type { Metadata } from "next";

const siteUrl = "https://nextmodernlabs.com";
const pageUrl = `${siteUrl}/privacy`;

export const metadata: Metadata = {
    title: "Privacy Policy",
    description:
        "Read the NextModernLabs privacy policy to understand how we collect, use, and protect your personal data in compliance with GDPR and applicable privacy laws.",
    keywords: ["privacy policy", "data protection", "GDPR", "NextModernLabs privacy"],
    alternates: {
        canonical: pageUrl,
    },
    robots: {
        index: true,
        follow: false,
    },
    openGraph: {
        title: "Privacy Policy – NextModernLabs",
        description: "How we collect, use, and protect your personal data.",
        url: pageUrl,
        type: "website",
        siteName: "NextModernLabs",
    },
};

const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
        { "@type": "ListItem", position: 2, name: "Privacy Policy", item: pageUrl },
    ],
};

export default function PrivacyLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
            />
            {children}
        </>
    );
}
