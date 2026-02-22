import type { Metadata } from "next";

const siteUrl = "https://nextmodernlabs.com";
const pageUrl = `${siteUrl}/terms`;

export const metadata: Metadata = {
    title: "Terms of Service",
    description:
        "Read the NextModernLabs Terms of Service to understand the conditions of using our digital agency services, website, and products.",
    keywords: ["terms of service", "terms and conditions", "NextModernLabs terms"],
    alternates: {
        canonical: pageUrl,
    },
    robots: {
        index: true,
        follow: false,
    },
    openGraph: {
        title: "Terms of Service – NextModernLabs",
        description: "The terms and conditions for using NextModernLabs services.",
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
        { "@type": "ListItem", position: 2, name: "Terms of Service", item: pageUrl },
    ],
};

export default function TermsLayout({ children }: { children: React.ReactNode }) {
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
