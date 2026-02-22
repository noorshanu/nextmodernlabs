import type { Metadata } from "next";

const siteUrl = "https://nextmodernlabs.com";
const pageUrl = `${siteUrl}/about-us`;

export const metadata: Metadata = {
    title: "About Us – NextModernLabs | Our Story, Team & Mission",
    description:
        "Learn about NextModernLabs — a full-service digital agency founded in 2020. Meet our founders, discover our mission, and explore our journey from Bangalore startup to global agency.",
    keywords: [
        "about NextModernLabs",
        "digital agency team",
        "digital agency founders",
        "about us",
        "NextModernLabs story",
        "digital agency Bangalore",
        "tech agency India",
        "our mission",
    ],
    alternates: {
        canonical: pageUrl,
    },
    openGraph: {
        title: "About Us – NextModernLabs",
        description:
            "Meet the team behind NextModernLabs — a full-service digital agency. Our story, mission, founders, and roadmap.",
        url: pageUrl,
        type: "website",
        siteName: "NextModernLabs",
        images: [
            {
                url: "/og-image.png",
                width: 1200,
                height: 630,
                alt: "About Us – NextModernLabs",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "About Us – NextModernLabs",
        description: "Meet the team behind NextModernLabs — our story, mission, and founders.",
        images: ["/og-image.png"],
    },
};

const aboutJsonLd = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "About NextModernLabs",
    url: pageUrl,
    description: "The story, mission, team, and roadmap of NextModernLabs digital agency.",
    mainEntity: {
        "@type": "Organization",
        name: "NextModernLabs",
        url: siteUrl,
        foundingDate: "2020",
        foundingLocation: "Bangalore, India",
        description:
            "NextModernLabs is a full-service digital agency specialising in web development, mobile apps, UI/UX design, SEO, and Web3.",
    },
};

const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
        { "@type": "ListItem", position: 2, name: "About Us", item: pageUrl },
    ],
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutJsonLd) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
            />
            {children}
        </>
    );
}
