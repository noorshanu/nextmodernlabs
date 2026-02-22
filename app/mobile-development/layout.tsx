import type { Metadata } from "next";

const siteUrl = "https://nextmodernlabs.com";
const pageUrl = `${siteUrl}/mobile-development`;

export const metadata: Metadata = {
    title: "Mobile App Development Services – iOS & Android",
    description:
        "NextModernLabs builds native iOS and Android mobile apps with exceptional UX. React Native, Flutter, Swift, Kotlin — cross-platform and native mobile solutions for startups and enterprises.",
    keywords: [
        "mobile app development",
        "iOS app development",
        "Android app development",
        "React Native development",
        "Flutter development",
        "cross-platform mobile apps",
        "native mobile development",
        "mobile application development agency",
        "Swift development",
        "Kotlin development",
    ],
    alternates: {
        canonical: pageUrl,
    },
    openGraph: {
        title: "Mobile App Development Services – NextModernLabs",
        description:
            "Native iOS & Android mobile apps with exceptional UX — React Native, Flutter, Swift, and Kotlin solutions for startups and enterprises.",
        url: pageUrl,
        type: "website",
        siteName: "NextModernLabs",
        images: [
            {
                url: "/og-image.png",
                width: 1200,
                height: 630,
                alt: "Mobile App Development Services – NextModernLabs",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Mobile App Development Services – NextModernLabs",
        description:
            "Native iOS & Android mobile apps with exceptional UX — cross-platform and native solutions.",
        images: ["/og-image.png"],
    },
};

const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Mobile App Development Services",
    provider: {
        "@type": "Organization",
        name: "NextModernLabs",
        url: siteUrl,
    },
    url: pageUrl,
    description:
        "Professional mobile app development for iOS and Android using React Native, Flutter, Swift, and Kotlin.",
    serviceType: "Mobile App Development",
    areaServed: "Worldwide",
};

const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
        { "@type": "ListItem", position: 2, name: "Mobile Development", item: pageUrl },
    ],
};

export default function MobileDevLayout({ children }: { children: React.ReactNode }) {
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
