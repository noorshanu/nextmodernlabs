import type { Metadata } from "next";

const siteUrl = "https://nextmodernlabs.com";
const pageUrl = `${siteUrl}/web3-development`;

export const metadata: Metadata = {
    title: "Web3 & Blockchain Development Services",
    description:
        "NextModernLabs offers expert Web3 and blockchain development — smart contracts, DeFi protocols, NFT platforms, dApps, and crypto integrations on Ethereum, Solana, and more.",
    keywords: [
        "web3 development",
        "blockchain development",
        "smart contract development",
        "DeFi development",
        "NFT marketplace development",
        "dApp development",
        "Ethereum development",
        "Solana development",
        "crypto integration",
        "decentralized application",
        "web3 agency",
    ],
    alternates: {
        canonical: pageUrl,
    },
    openGraph: {
        title: "Web3 & Blockchain Development – NextModernLabs",
        description:
            "Smart contracts, DeFi protocols, NFT platforms, and dApps — expert Web3 development on Ethereum, Solana, and more.",
        url: pageUrl,
        type: "website",
        siteName: "NextModernLabs",
        images: [
            {
                url: "/og-image.png",
                width: 1200,
                height: 630,
                alt: "Web3 & Blockchain Development – NextModernLabs",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Web3 & Blockchain Development – NextModernLabs",
        description:
            "Smart contracts, DeFi protocols, NFT platforms, and dApps on Ethereum, Solana, and more.",
        images: ["/og-image.png"],
    },
};

const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web3 & Blockchain Development",
    provider: {
        "@type": "Organization",
        name: "NextModernLabs",
        url: siteUrl,
    },
    url: pageUrl,
    description:
        "Expert Web3 and blockchain development including smart contracts, DeFi protocols, NFT platforms, and decentralized applications.",
    serviceType: "Blockchain Development",
    areaServed: "Worldwide",
};

const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
        { "@type": "ListItem", position: 2, name: "Web3 Development", item: pageUrl },
    ],
};

export default function Web3Layout({ children }: { children: React.ReactNode }) {
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
