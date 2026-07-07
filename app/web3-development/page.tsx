"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useInView, useScroll, useTransform, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import {
    SiEthereum,
    SiSolidity,
    SiBitcoin,
    SiPolkadot,
    SiChainlink,
    SiOpenzeppelin,
    SiWeb3Dotjs,
    SiIpfs,
    SiGraphql,
    SiRust,
    SiGo,
    SiDocker,
} from "react-icons/si";
import {
    HiOutlineCube,
    HiOutlineLockClosed,
    HiOutlineGlobeAlt,
    HiOutlineCurrencyDollar,
    HiOutlineCode,
    HiOutlineDatabase,
    HiOutlineShieldCheck,
    HiOutlineLightningBolt,
    HiOutlineSearch,
    HiOutlineCollection,
    HiOutlineSwitchHorizontal,
    HiOutlineUserGroup,
    HiOutlineChartBar,
    HiOutlineTerminal,
    HiOutlineCash,
    HiOutlineKey,
    HiOutlinePhotograph,
    HiOutlineLink,
} from "react-icons/hi";
import { FaEthereum } from "react-icons/fa";

/* ────────────────────────────────────────────────
   TYPES
   ──────────────────────────────────────────────── */

interface CoinPrice {
    id: string;
    symbol: string;
    name: string;
    current_price: number;
    price_change_percentage_24h: number;
    image: string;
}

/* ────────────────────────────────────────────────
   DATA
   ──────────────────────────────────────────────── */

const techStack = [
    { icon: SiEthereum, name: "Ethereum", color: "#627EEA" },
    { icon: SiSolidity, name: "Solidity", color: "#363636" },
    { icon: SiBitcoin, name: "Bitcoin", color: "#F7931A" },
    { icon: SiPolkadot, name: "Polkadot", color: "#E6007A" },
    { icon: SiChainlink, name: "Chainlink", color: "#375BD2" },
    { icon: SiOpenzeppelin, name: "OpenZeppelin", color: "#4E5EE4" },
    { icon: SiWeb3Dotjs, name: "Web3.js", color: "#F16822" },
    { icon: SiIpfs, name: "IPFS", color: "#65C2CB" },
    { icon: SiGraphql, name: "The Graph", color: "#E535AB" },
    { icon: SiRust, name: "Rust", color: "#DEA584" },
    { icon: SiGo, name: "Go", color: "#00ADD8" },
    { icon: SiDocker, name: "Docker", color: "#2496ED" },
];

const web3Services = [
    {
        icon: HiOutlineCode,
        title: "Smart Contract Development",
        description: "Custom Solidity & Rust smart contracts with formal verification, gas optimization, and comprehensive testing suites for EVM & non-EVM chains.",
        gradient: "from-violet-500 to-purple-600",
    },
    {
        icon: HiOutlineSwitchHorizontal,
        title: "DEX & DeFi Protocols",
        description: "Decentralized exchanges, AMMs, lending protocols, yield farming, staking mechanisms, and liquidity pools built with battle-tested architecture.",
        gradient: "from-cyan-500 to-blue-600",
    },
    {
        icon: HiOutlinePhotograph,
        title: "NFT Marketplace & Minting",
        description: "End-to-end NFT platforms — ERC-721/1155 contracts, lazy minting, royalty enforcement, metadata standards, and marketplace integration.",
        gradient: "from-pink-500 to-rose-600",
    },
    {
        icon: HiOutlineCube,
        title: "DApp Development",
        description: "Full-stack decentralized applications with Web3 wallet integration, on-chain/off-chain data, responsive UIs, and seamless user experiences.",
        gradient: "from-amber-500 to-orange-600",
    },
    {
        icon: HiOutlineSearch,
        title: "Blockchain Explorer",
        description: "Custom blockchain explorers to track transactions, blocks, addresses, token transfers, smart contract interactions, and network analytics.",
        gradient: "from-emerald-500 to-teal-600",
    },
    {
        icon: HiOutlineLockClosed,
        title: "Smart Contract Auditing",
        description: "Comprehensive security audits — reentrancy, overflow, access control, oracle manipulation, and MEV vulnerability analysis with detailed reports.",
        gradient: "from-red-500 to-rose-600",
    },
    {
        icon: HiOutlineCash,
        title: "Token Development",
        description: "ERC-20, BEP-20, SPL token creation with tokenomics design, vesting schedules, governance mechanisms, and multi-chain deployment.",
        gradient: "from-yellow-500 to-amber-600",
    },
    {
        icon: HiOutlineKey,
        title: "Wallet Integration",
        description: "MetaMask, WalletConnect, Coinbase Wallet, Rainbow Kit — multi-wallet support with seamless connection flows and transaction signing.",
        gradient: "from-indigo-500 to-violet-600",
    },
    {
        icon: HiOutlineDatabase,
        title: "IPFS & Decentralized Storage",
        description: "Decentralized file storage with IPFS, Arweave, and Filecoin. Content addressing, pinning services, and permanent data availability.",
        gradient: "from-sky-500 to-cyan-600",
    },
    {
        icon: HiOutlineLink,
        title: "Cross-Chain Bridges",
        description: "Interoperability solutions — bridge protocols, cross-chain messaging, wrapped tokens, and multi-chain asset transfers.",
        gradient: "from-fuchsia-500 to-purple-600",
    },
    {
        icon: HiOutlineUserGroup,
        title: "DAO Development",
        description: "Decentralized Autonomous Organization tooling — governance contracts, proposal systems, voting mechanisms, and treasury management.",
        gradient: "from-lime-500 to-green-600",
    },
    {
        icon: HiOutlineChartBar,
        title: "DeFi Analytics & Dashboards",
        description: "Real-time on-chain analytics, portfolio trackers, yield calculators, TVL monitoring, and custom data visualization dashboards.",
        gradient: "from-blue-500 to-indigo-600",
    },
];

const blockchainNetworks = [
    { name: "Ethereum", type: "Layer 1" },
    { name: "Polygon", type: "Layer 2" },
    { name: "Arbitrum", type: "Layer 2" },
    { name: "Optimism", type: "Layer 2" },
    { name: "BNB Chain", type: "Layer 1" },
    { name: "Solana", type: "Layer 1" },
    { name: "Avalanche", type: "Layer 1" },
    { name: "Base", type: "Layer 2" },
];

const stats = [
    { value: 100, suffix: "+", label: "Smart Contracts Deployed" },
    { value: 50, suffix: "M+", label: "TVL Managed" },
    { value: 30, suffix: "+", label: "DApps Built" },
    { value: 8, suffix: "+", label: "Chains Supported" },
];

/* ────────────────────────────────────────────────
   ANIMATION VARIANTS
   ──────────────────────────────────────────────── */

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
};

const staggerItem = {
    hidden: { opacity: 0, y: 25 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

/* ────────────────────────────────────────────────
   COUNTER HOOK
   ──────────────────────────────────────────────── */

function useCounter(target: number, duration = 2000) {
    const [count, setCount] = useState(0);
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    useEffect(() => {
        if (!isInView) return;
        let start = 0;
        const step = target / (duration / 16);
        const timer = setInterval(() => {
            start += step;
            if (start >= target) {
                setCount(target);
                clearInterval(timer);
            } else {
                setCount(Math.floor(start));
            }
        }, 16);
        return () => clearInterval(timer);
    }, [isInView, target, duration]);

    return { count, ref };
}

function StatCard({ value, suffix, label }: { value: number; suffix: string; label: string }) {
    const { count, ref } = useCounter(value);
    return (
        <motion.div ref={ref} variants={staggerItem} className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-violet-500 to-cyan-500 rounded-2xl opacity-0 group-hover:opacity-30 blur transition-opacity duration-500" />
            <div className="relative bg-black/70 border border-slate-800 rounded-2xl p-6 text-center hover:border-violet-500/40 transition-all duration-300">
                <div className="text-3xl sm:text-4xl font-bold text-white mb-1">
                    {Math.floor(count)}
                    <span className="text-violet-400">{suffix}</span>
                </div>
                <div className="text-slate-400 text-sm font-medium">{label}</div>
            </div>
        </motion.div>
    );
}

/* ────────────────────────────────────────────────
   CRYPTO PRICE TICKER COMPONENT
   ──────────────────────────────────────────────── */

function CryptoPriceTicker() {
    const [prices, setPrices] = useState<CoinPrice[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchPrices() {
            try {
                const res = await fetch(
                    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline=false&price_change_percentage=24h"
                );
                if (!res.ok) throw new Error("API error");
                const data: CoinPrice[] = await res.json();
                setPrices(data);
            } catch {
                // Fallback data
                setPrices([
                    { id: "bitcoin", symbol: "btc", name: "Bitcoin", current_price: 97250, price_change_percentage_24h: 2.34, image: "" },
                    { id: "ethereum", symbol: "eth", name: "Ethereum", current_price: 3420, price_change_percentage_24h: 1.85, image: "" },
                    { id: "binancecoin", symbol: "bnb", name: "BNB", current_price: 685, price_change_percentage_24h: -0.42, image: "" },
                    { id: "solana", symbol: "sol", name: "Solana", current_price: 198, price_change_percentage_24h: 4.21, image: "" },
                    { id: "ripple", symbol: "xrp", name: "XRP", current_price: 2.78, price_change_percentage_24h: 1.12, image: "" },
                    { id: "cardano", symbol: "ada", name: "Cardano", current_price: 1.02, price_change_percentage_24h: -1.33, image: "" },
                    { id: "avalanche-2", symbol: "avax", name: "Avalanche", current_price: 38.5, price_change_percentage_24h: 3.65, image: "" },
                    { id: "polkadot", symbol: "dot", name: "Polkadot", current_price: 7.85, price_change_percentage_24h: -0.78, image: "" },
                    { id: "chainlink", symbol: "link", name: "Chainlink", current_price: 18.2, price_change_percentage_24h: 2.91, image: "" },
                    { id: "polygon", symbol: "matic", name: "Polygon", current_price: 0.48, price_change_percentage_24h: 1.54, image: "" },
                    { id: "uniswap", symbol: "uni", name: "Uniswap", current_price: 12.35, price_change_percentage_24h: -0.65, image: "" },
                    { id: "aave", symbol: "aave", name: "Aave", current_price: 325, price_change_percentage_24h: 5.12, image: "" },
                ]);
            } finally {
                setLoading(false);
            }
        }
        fetchPrices();
        const interval = setInterval(fetchPrices, 60000);
        return () => clearInterval(interval);
    }, []);

    if (loading) {
        return (
            <div className="py-4 bg-[#080e1c] border-y border-violet-500/10">
                <div className="flex items-center justify-center gap-2 text-neutral-400 text-sm">
                    <div className="w-4 h-4 border-2 border-violet-500 border-t-transparent rounded-full animate-spin" />
                    Loading live prices...
                </div>
            </div>
        );
    }

    const tickerItems = [...prices, ...prices];

    return (
        <div className="relative py-3 bg-[#080e1c]/90 backdrop-blur-sm border-y border-violet-500/10 overflow-hidden">
            {/* Gradient fades */}
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#080e1c] to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#080e1c] to-transparent z-10" />

            <div className="flex animate-scroll-fast">
                {tickerItems.map((coin, i) => (
                    <div key={`${coin.id}-${i}`} className="flex items-center gap-3 px-5 whitespace-nowrap flex-shrink-0">
                        {coin.image ? (
                            // eslint-disable-next-line @next/next/no-img-element
                            <img src={coin.image} alt={coin.name} className="w-5 h-5 rounded-full" />
                        ) : (
                            <span className="w-5 h-5 rounded-full bg-gradient-to-br from-violet-500 to-cyan-500 flex items-center justify-center text-[10px] text-white font-bold">
                                {coin.symbol.charAt(0).toUpperCase()}
                            </span>
                        )}
                        <span className="text-slate-300 text-sm font-semibold">{coin.symbol.toUpperCase()}</span>
                        <span className="text-white text-sm font-mono">
                            ${coin.current_price >= 1 ? coin.current_price.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 }) : coin.current_price.toFixed(4)}
                        </span>
                        <span className={`text-xs font-semibold ${coin.price_change_percentage_24h >= 0 ? "text-emerald-400" : "text-red-400"}`}>
                            {coin.price_change_percentage_24h >= 0 ? "▲" : "▼"}{" "}
                            {Math.abs(coin.price_change_percentage_24h).toFixed(2)}%
                        </span>
                        <div className="w-px h-4 bg-[#111111] ml-2" />
                    </div>
                ))}
            </div>

            <style jsx>{`
                @keyframes scroll-fast {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
                .animate-scroll-fast {
                    animation: scroll-fast 40s linear infinite;
                }
                .animate-scroll-fast:hover {
                    animation-play-state: paused;
                }
            `}</style>
        </div>
    );
}

/* ────────────────────────────────────────────────
   MAIN PAGE
   ──────────────────────────────────────────────── */

export default function Web3DevelopmentPage() {
    const heroRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
    const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
    const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

    return (
        <main className="min-h-screen bg-[#060a14]">
            <Navbar />

            {/* ═══════════════════════════════════════════
                HERO
                ═══════════════════════════════════════════ */}
            <section ref={heroRef} className="relative min-h-screen flex items-center overflow-hidden">
                {/* Background layers */}
                <motion.div style={{ y: heroY }} className="absolute inset-0">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#060a14] via-[#0d0526] to-[#060a14]" />
                    {/* Animated orbs */}
                    <div className="absolute top-20 left-1/4 w-[500px] h-[500px] bg-violet-600/15 rounded-full blur-[120px] animate-pulse" />
                    <div className="absolute bottom-20 right-1/4 w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-[100px]" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-[150px]" />
                    {/* Hex grid pattern */}
                    <div
                        className="absolute inset-0 opacity-[0.03]"
                        style={{
                            backgroundImage: `radial-gradient(circle, rgba(139,92,246,0.5) 1px, transparent 1px)`,
                            backgroundSize: "30px 30px",
                        }}
                    />
                </motion.div>

                <motion.div style={{ opacity: heroOpacity }} className="relative z-10 section-container pt-28 pb-20">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        {/* Left */}
                        <div className="text-center lg:text-left">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                            >
                                <span className="inline-flex items-center gap-2 px-4 py-2 bg-violet-500/10 border border-violet-500/30 rounded-full text-violet-400 text-sm font-medium mb-8">
                                    <FaEthereum className="w-3.5 h-3.5" />
                                    Web3 & Blockchain Development
                                </span>
                            </motion.div>

                            <motion.h1
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.7, delay: 0.1 }}
                                className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6 leading-[1.1] tracking-tight"
                            >
                                Build the
                                <br />
                                <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                                    Decentralized
                                </span>
                                <br />
                                Future.
                            </motion.h1>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                className="text-lg sm:text-xl text-slate-400 max-w-lg mx-auto lg:mx-0 mb-10 leading-relaxed"
                            >
                                From smart contracts to full-stack DApps, NFT marketplaces to DeFi protocols — we
                                engineer production-grade blockchain solutions across every major chain.
                            </motion.p>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.3 }}
                                className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-12"
                            >
                                <button
                                    className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-violet-600 to-cyan-600 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-violet-500/40 transition-all duration-300"
                                >
                                    Start Your Web3 Project
                                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </button>
                                <Link
                                    href="#services"
                                    className="inline-flex items-center gap-2 px-8 py-4 border border-slate-600 text-slate-300 font-semibold rounded-full hover:bg-[#111111]/50 hover:border-violet-500/50 transition-all duration-300"
                                >
                                    Explore Services
                                </Link>
                            </motion.div>

                            {/* Supported chains */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.5 }}
                                className="flex flex-wrap items-center justify-center lg:justify-start gap-2"
                            >
                                {blockchainNetworks.map((n) => (
                                    <span
                                        key={n.name}
                                        className="px-3 py-1.5 bg-[#111111]/60 border border-slate-700/50 rounded-full text-xs text-slate-300 font-medium"
                                    >
                                        {n.name} <span className="text-violet-400">{n.type}</span>
                                    </span>
                                ))}
                            </motion.div>
                        </div>

                        {/* Right — Blockchain Visual */}
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.9, delay: 0.3 }}
                            className="relative flex items-center justify-center"
                        >
                            <div className="absolute w-80 h-80 bg-violet-500/20 rounded-full blur-[80px]" />

                            <div className="relative w-full max-w-md">
                                <div className="absolute -inset-8 bg-gradient-to-r from-violet-500/20 to-cyan-500/20 rounded-3xl blur-3xl" />
                                <div className="relative bg-black/80 backdrop-blur-sm rounded-2xl border border-violet-700/40 p-6 shadow-2xl">
                                    {/* Terminal header */}
                                    <div className="flex items-center gap-2 mb-5">
                                        <div className="w-3 h-3 rounded-full bg-red-500" />
                                        <div className="w-3 h-3 rounded-full bg-yellow-500" />
                                        <div className="w-3 h-3 rounded-full bg-green-500" />
                                        <span className="ml-3 text-neutral-400 text-sm font-mono">smart-contract.sol</span>
                                    </div>

                                    {/* Code block */}
                                    <div className="font-mono text-sm space-y-1.5 text-slate-300">
                                        <div>
                                            <span className="text-violet-400">pragma</span>{" "}
                                            <span className="text-cyan-400">solidity</span>{" "}
                                            <span className="text-yellow-400">^0.8.20</span>;
                                        </div>
                                        <div className="h-2" />
                                        <div>
                                            <span className="text-violet-400">import</span>{" "}
                                            <span className="text-emerald-400">&quot;@openzeppelin/ERC721&quot;</span>;
                                        </div>
                                        <div className="h-2" />
                                        <div>
                                            <span className="text-violet-400">contract</span>{" "}
                                            <span className="text-cyan-400">NextModernNFT</span>{" "}
                                            <span className="text-violet-400">is</span>{" "}
                                            <span className="text-yellow-400">ERC721</span>{" "}
                                            {"{"}
                                        </div>
                                        <div className="pl-4">
                                            <span className="text-violet-400">uint256</span>{" "}
                                            <span className="text-cyan-400">public</span>{" "}
                                            <span className="text-white">totalSupply</span>;
                                        </div>
                                        <div className="h-2" />
                                        <div className="pl-4">
                                            <span className="text-violet-400">function</span>{" "}
                                            <span className="text-cyan-400">mint</span>
                                            {"()"}
                                            <span className="text-violet-400"> external</span>{" "}
                                            {"{"}
                                        </div>
                                        <div className="pl-8">
                                            <span className="text-white">totalSupply</span>
                                            <span className="text-violet-400">++</span>;
                                        </div>
                                        <div className="pl-8">
                                            <span className="text-yellow-400">_safeMint</span>
                                            {"("}
                                            <span className="text-cyan-400">msg.sender</span>
                                            {", "}
                                            <span className="text-white">totalSupply</span>
                                            {");"}</div>
                                        <div className="pl-4">{"}"}</div>
                                        <div>{"}"}</div>
                                    </div>

                                    {/* Status bar */}
                                    <div className="mt-5 pt-4 border-t border-slate-800 flex items-center justify-between text-xs text-neutral-400">
                                        <span className="flex items-center gap-1.5">
                                            <span className="w-2 h-2 bg-emerald-400 rounded-full" /> Compiled
                                        </span>
                                        <span>Gas: 42,680</span>
                                        <span>EVM: Shanghai</span>
                                    </div>
                                </div>

                                {/* Floating badges */}
                                <motion.div
                                    animate={{ y: [0, -8, 0] }}
                                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                                    className="absolute -top-4 -right-4 px-4 py-2 bg-gradient-to-r from-violet-500 to-purple-600 rounded-full text-white text-sm font-semibold shadow-lg shadow-violet-500/30"
                                >
                                    ⛓️ On-Chain
                                </motion.div>
                                <motion.div
                                    animate={{ y: [0, 8, 0] }}
                                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                                    className="absolute -bottom-4 -left-4 px-4 py-2 bg-[#111111] border border-violet-500/30 rounded-full text-violet-400 text-sm font-semibold shadow-lg"
                                >
                                    🔐 Audited & Verified
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>

                {/* Scroll indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2 }}
                    className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
                >
                    <motion.div
                        animate={{ y: [0, 8, 0] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        className="w-6 h-10 border-2 border-slate-600 rounded-full flex justify-center pt-2"
                    >
                        <div className="w-1.5 h-1.5 bg-violet-400 rounded-full" />
                    </motion.div>
                </motion.div>
            </section>

            {/* ═══════════════════════════════════════════
                LIVE CRYPTO PRICE TICKER
                ═══════════════════════════════════════════ */}
            <CryptoPriceTicker />

            {/* ═══════════════════════════════════════════
                TECH STACK MARQUEE
                ═══════════════════════════════════════════ */}
            <section className="py-12 bg-[#060a14] relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-violet-500/5 via-transparent to-transparent" />

                <div className="section-container mb-8">
                    <p className="text-center text-neutral-400 text-sm font-semibold uppercase tracking-widest">
                        Our Blockchain Technology Stack
                    </p>
                </div>

                <div className="relative overflow-hidden">
                    <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#060a14] to-transparent z-10" />
                    <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#060a14] to-transparent z-10" />

                    <div className="flex animate-marquee-web3">
                        {[...techStack, ...techStack, ...techStack].map((tech, i) => (
                            <div
                                key={`${tech.name}-${i}`}
                                className="flex items-center gap-3 px-8 py-4 mx-2 bg-black/50 border border-slate-800/50 rounded-xl hover:border-violet-500/30 transition-colors flex-shrink-0"
                            >
                                <tech.icon className="w-7 h-7" style={{ color: tech.color }} />
                                <span className="text-slate-300 font-medium text-sm whitespace-nowrap">{tech.name}</span>
                            </div>
                        ))}
                    </div>

                    <style jsx>{`
                        @keyframes marquee-web3 {
                            0% { transform: translateX(0); }
                            100% { transform: translateX(-33.33%); }
                        }
                        .animate-marquee-web3 {
                            animation: marquee-web3 30s linear infinite;
                        }
                        .animate-marquee-web3:hover {
                            animation-play-state: paused;
                        }
                    `}</style>
                </div>
            </section>

            {/* ═══════════════════════════════════════════
                WEB3 SERVICES
                ═══════════════════════════════════════════ */}
            <section id="services" className="section-padding bg-[#080e1c] relative overflow-hidden">
                <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-violet-500/5 rounded-full blur-[120px]" />
                <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-cyan-500/5 rounded-full blur-[100px]" />

                <div className="section-container relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center max-w-3xl mx-auto mb-16"
                    >
                        <span className="inline-block px-4 py-2 bg-violet-500/10 border border-violet-500/30 rounded-full text-violet-400 text-sm font-semibold mb-4">
                            Our Services
                        </span>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 tracking-tight">
                            Full-Spectrum{" "}
                            <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
                                Web3 Services
                            </span>
                        </h2>
                        <p className="text-lg text-slate-400">
                            Everything you need to launch and scale in the decentralized ecosystem — from smart contracts
                            to full-stack DApps and beyond.
                        </p>
                    </motion.div>

                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
                    >
                        {web3Services.map((service) => (
                            <motion.div key={service.title} variants={staggerItem} className="group relative">
                                <div className={`absolute -inset-0.5 bg-gradient-to-r ${service.gradient} rounded-2xl opacity-0 group-hover:opacity-20 blur transition-opacity duration-500`} />
                                <div className="relative bg-black/60 border border-slate-800 rounded-2xl p-7 hover:border-slate-700 transition-all duration-500 h-full">
                                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                                        <service.icon className="w-6 h-6 text-white" />
                                    </div>
                                    <h3 className="text-lg font-bold text-white mb-2">{service.title}</h3>
                                    <p className="text-slate-400 text-sm leading-relaxed">{service.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════
                STATS
                ═══════════════════════════════════════════ */}
            <section className="py-20 bg-[#060a14] relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-violet-500/5 via-transparent to-cyan-500/5" />
                <div className="section-container relative z-10">
                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="grid grid-cols-2 lg:grid-cols-4 gap-4"
                    >
                        {stats.map((stat) => (
                            <StatCard key={stat.label} {...stat} />
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════
                CTA
                ═══════════════════════════════════════════ */}
            <section className="section-padding bg-[#080e1c]">
                <div className="section-container">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="relative overflow-hidden rounded-3xl p-10 md:p-16 text-center"
                    >
                        {/* CTA background */}
                        <div className="absolute inset-0 bg-gradient-to-br from-violet-600 via-purple-600 to-cyan-600" />
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.15),transparent_60%)]" />
                        {/* Floating circles */}
                        <div className="absolute top-10 left-10 w-20 h-20 border border-white/10 rounded-full" />
                        <div className="absolute bottom-10 right-10 w-32 h-32 border border-white/10 rounded-full" />
                        <div className="absolute top-1/2 right-1/4 w-16 h-16 border border-white/5 rounded-full" />

                        <div className="relative z-10">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.1 }}
                                className="text-5xl mb-6"
                            >
                                ⛓️
                            </motion.div>
                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.15 }}
                                className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 tracking-tight"
                            >
                                Ready to Go
                                <br />
                                On-Chain?
                            </motion.h2>
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.25 }}
                                className="text-lg text-white/80 max-w-2xl mx-auto mb-10"
                            >
                                Free blockchain strategy consultation. We&apos;ll analyze your use case, recommend the right chain
                                and architecture, and build a roadmap from idea to mainnet deployment.
                            </motion.p>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.35 }}
                                className="flex flex-col sm:flex-row items-center justify-center gap-4"
                            >
                                <button
                                    className="group inline-flex items-center gap-2 px-8 py-4 bg-black text-purple-700 font-bold rounded-full hover:shadow-2xl hover:shadow-white/20 hover:-translate-y-0.5 transition-all duration-300"
                                >
                                    Get Free Consultation
                                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </button>
                                <Link
                                    href="#services"
                                    className="inline-flex items-center gap-2 px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-full hover:bg-white/10 transition-all duration-300"
                                >
                                    View Our Services
                                </Link>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </main>
    );
}