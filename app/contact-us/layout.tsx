import type { Metadata } from "next";

const siteUrl = "https://nextmodernlabs.com";
const pageUrl = `${siteUrl}/contact-us`;

export const metadata: Metadata = {
    title: "Contact Us – NextModernLabs | Get a Free Consultation",
    description:
        "Get in touch with NextModernLabs. Email, call, or fill the form to discuss your project. We reply within 24 hours. Free consultation for all new enquiries.",
    keywords: [
        "contact NextModernLabs",
        "hire digital agency",
        "get a quote",
        "web development consultation",
        "contact tech agency India",
        "free consultation digital agency",
    ],
    alternates: { canonical: pageUrl },
    openGraph: {
        title: "Contact Us – NextModernLabs",
        description: "Reach out to NextModernLabs. Free 30-min consultation for all new projects.",
        url: pageUrl,
        type: "website",
        siteName: "NextModernLabs",
        images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Contact NextModernLabs" }],
    },
    twitter: {
        card: "summary_large_image",
        title: "Contact Us – NextModernLabs",
        description: "Reach out to NextModernLabs. Free 30-min consultation for all new projects.",
        images: ["/og-image.png"],
    },
};

const contactPageJsonLd = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact NextModernLabs",
    url: pageUrl,
    description: "Contact page for NextModernLabs digital agency.",
    mainEntity: {
        "@type": "Organization",
        name: "NextModernLabs",
        url: siteUrl,
        contactPoint: {
            "@type": "ContactPoint",
            telephone: "+91-7903350593",
            email: "hello@nextmodernlabs.com",
            contactType: "Customer Service",
            availableLanguage: ["English", "Hindi"],
            areaServed: "Worldwide",
        },
    },
};

const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
        { "@type": "ListItem", position: 2, name: "Contact Us", item: pageUrl },
    ],
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageJsonLd) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
            {children}
        </>
    );
}
