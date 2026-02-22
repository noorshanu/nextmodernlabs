import type { Metadata } from "next";

const siteUrl = "https://nextmodernlabs.com";
const pageUrl = `${siteUrl}/cookies`;

export const metadata: Metadata = {
    title: "Cookie Policy",
    description:
        "Learn how NextModernLabs uses cookies on our website — what types of cookies we use, why we use them, and how you can control your cookie preferences.",
    keywords: ["cookie policy", "cookies", "NextModernLabs cookies", "GDPR cookies"],
    alternates: {
        canonical: pageUrl,
    },
    robots: {
        index: true,
        follow: false,
    },
    openGraph: {
        title: "Cookie Policy – NextModernLabs",
        description: "How we use cookies and how you can manage your preferences.",
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
        { "@type": "ListItem", position: 2, name: "Cookie Policy", item: pageUrl },
    ],
};

export default function CookiesLayout({ children }: { children: React.ReactNode }) {
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
