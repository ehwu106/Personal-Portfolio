import Header from "@/components/header";
import "./globals.css";
import { Inter } from "next/font/google";
import ActiveSectionContextProvider from "@/context/active-section-context";
import Footer from "@/components/footer";
import ThemeSwitch from "@/components/theme-switch";
import ThemeContextProvider from "@/context/theme-context";
import { Toaster } from "@/components/ui/toaster";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import { devSkillsData, devopskillsData, cyberSkillsData } from "@/lib/data";
import type { Metadata } from "next";
import type { Viewport } from "next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Howard Wu | Personal Portfolio",
    description:
        "Howard Wu is an enthuastic person who is higly skilled in the fields of cybersecurity and software development",
    robots: {
        index: true,
        follow: true,
    },
    category: "technology",
    icons: {
        icon: "/favicon.ico",
    },
    metadataBase: new URL("https://Howard-Wu.com/"),
    openGraph: {
        title: "Howard Wu | Personal Portfolio",
        description:
            "A portfolio website showcasing Howard's skills and achievements",
        url: "https://Howard-Wu.com/",
        siteName: "AHoward's Portfolio",
        images: [
            {
                url: "https://i.imgur.com/wygHEG3.png",
                width: 994,
                height: 548,
                alt: "Home page",
            },
        ],
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Howard | Personal Portfolio",
        description:
            "A portfolio website showcasing Howard's skills and achievement",
        images: {
            url: "https://i.imgur.com/wygHEG3.png",
            alt: "Home page",
        },
    },
};

export const viewport: Viewport = {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className="!scroll-smooth">
            <body
                className={`${inter.className} bg-gray-50 text-gray-950 relative pt-28 sm:pt-36 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90`}
            >
                <div className="bg-[#fbe2e3] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#946263]"></div>
                <div className="bg-[#dbd7fb] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#676394]"></div>

                <ThemeContextProvider>
                    <ActiveSectionContextProvider>
                        <Header />
                        {children}
                        <Footer />

                        <Toaster />
                        <ThemeSwitch />
                    </ActiveSectionContextProvider>
                </ThemeContextProvider>
                <SpeedInsights />
                <Analytics />
            </body>
        </html>
    );
}
