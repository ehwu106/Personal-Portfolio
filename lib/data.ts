import React from "react";

import { ProjectType, ExperienceType, CertificateType } from "./types";

import { FaPython } from "react-icons/fa";
import { BsShieldLock } from "react-icons/bs";
import { LuGraduationCap } from "react-icons/lu";

import DirImg from "@/public/db.webp";
import gcpImg from "@/public/gcp.webp";
import htbImg from "@/public/htb.webp";
import thmImg from "@/public/thm.webp";
import portfolioImg from "@/public/portfolio.webp";
import WebImg from "@/public/webproxy.webp";
import AWSImg from "@/public/AWS.webp";
import SecImg from "@/public/CompTIA_Security.webp";
import EJPTImg from "@/public/ejpt.webp";
import ISC2Img from "@/public/isc2.webp";


export const links = [
    {
        name: "Home",
        hash: "/#home",
    },
    {
        name: "About",
        hash: "/#about",
    },
    {
        name: "Skills",
        hash: "/#skills",
    },
    {
        name: "Certs",
        hash: "/#certs",
    },
    {
        name: "Experience",
        hash: "/#experience",
    },
    {
        name: "Projects",
        hash: "/#projects",
    },
] as const;

export const certData: readonly CertificateType[] = [
    {
        title: "eLearnSecurity Junior Penetration Tester (eJPT)",
        org: "INE Security",
        startDate: "September 2023",
        endDate: "September 2026",
        badge: EJPTImg,
        verify: "https://certs.ine.com/96b0429a-cb3d-4001-aefd-f183f9bf8536",
    },
    {
        title: "Associate of ISC2",
        org: "ISC2",
        startDate: "April 2023",
        endDate: "April 2025",
        badge: ISC2Img,
        verify: "https://www.credly.com/badges/53f56b98-1a6e-4395-8178-3f84c50c222a/linked_in_profile",
    },
    {
        title: "AWS Certified Solutions Architect",
        org: "AWS",
        startDate: "December 2021",
        endDate: "December 2024",
        badge: AWSImg,
        verify: "https://www.credly.com/badges/83cc2ce8-0e8b-43fb-b17f-6e5ba4c22b8d/linked_in_profile",
    },
    {
        title: "CompTIA Security+",
        org: "CompTIA",
        startDate: "December 2020",
        endDate: "December 2026",
        badge: SecImg,
        verify: "https://www.credly.com/badges/e263cd58-9f9f-47c0-b5b6-08421f12f34b/linked_in_profile",
    }
];

export const experiencesData: readonly ExperienceType[] = [
    {
        title: "Security Engineer",
        org: "Upwind Security",
        location: "San Francisco, CA",
        description: [
            "Manage MDR (Managed Detection and Response) for customer infrastructure, ensuring proactive threat detection and response.",
            "Analyze and investigate suspicious processes and commands to identify and mitigate potential security threats.",
            "Develop and implement security features and tools to enhance the security posture of internal and customer environments.",
            "Collaborate with cross-functional teams to ensure seamless integration of security measures and best practices.",
        ],
        icon: React.createElement(BsShieldLock),
        date: "June 2024 - present",
    },
    {
        title: "B.S. Computer Science & Engineering",
        org: "University of California, Santa Cruz",
        location: "Santa Cruz, CA",
        description: [
            "I graduated from the University of California, Santa Cruz, where I was deeply involved in the Learning Support Services (LSS) Tutoring for Jack Baskin Engineering Undergrad Courses.",
            "As a Course Tutor, providing constructive feedback to enhance student understanding. Guiding students in project organization, standups structuring, and fostering effective teamwork ",
            "Relevant Coursework: Computer Systems and C Programming, Networking programming, Principle of System Design, Logic Design, Data Structures and Algorithms, Embedded System Design, Programming Abstractions: Python",
        ],
        icon: React.createElement(LuGraduationCap),
        date: "June 2024",
    },
    {
        title: "Info Security Engineer Intern",
        org: "Principal Financial Group",
        location: "Des Moines, IA",
        description: [
            "Collaborated with the team to enhance application security, utilizing tools like Fortify for code analysis and vulnerability detection.",
            "Conducted vulnerability assessments and audits using tools like Dependabot and Fortify, ensuring compliance with security standards.",
            "Built a service account key rotation Python app hosted on internal environments that create Google service account private keys on new requests from developers within GCP, resulting in improved security through the concept of customer-managed key rotation and short-lived private keys.",
            "Developed scripts and automation tools to streamline security processes, such as certificate deployment and vulnerability scanning.",
        ],
        icon: React.createElement(FaPython),
        date: "May 2023 - September 2023",
    },
    {
        title: "Cybersecurity Intern",
        org: "Trava Security",
        location: "Indianapolis, IN",
        description: [
            "Led ISO-27001 compliant projects for onboarding and conducting PoC on various security solutions, including Proofpoint Email security, ManageEngine Unified Endpoint Management (UEM), and Trellix Endpoint Detection and Response (EDR)/Incident Detection and Response (IDR).",
            "Automated the process of onboarding/offboarding through Python with the capability of creating and removing users by interacting with API on company used applications and softwares, resulting in improved efficiency and reduced manual errors from upper managers.",
            "Implemented and maintained Sophos internal endpoint management system to enhance security posture across the organization.",
            "Managed Qualys vulnerability management system for onboarding and offboarding devices, ensuring compliance with security policies and standards for customers",
            "Developed a Qualys scan removal service using Python and GCP Cloud run, automating the process of removing outdated scan results.",
        ],
        icon: React.createElement(BsShieldLock),
        date: "December 2023 - present",
    },
] as const;

export const projectsData: readonly ProjectType[] = [
    {
        title: "NextJS Portfolio Website",
        description:
            "Welcome to my redesigned personal portfolio! I revamped this website to enhance the user experience by using Next.js for better SEO and Tailwind CSS for a sleek, modern look. I also incorporated Framer Motion for smooth animations and React Markdown.",
        tags: ["NextJS", "Typescript", "APIs", "Javascript", "Caching"],
        imageUrl: portfolioImg,
        link: {
            title: "Source Code",
            link: "https://github.com/ehwu106/Personal-Portfolio",
        },
    },
    {
        title: "Web Proxy",
        description:
            "Constructed a local Multi-Threaded HTTP proxy server that can accept Concurrent HTTP requests from clients and convert them to HTTPS requests to the designated target websites. Additionally, the proxy server can filter requests based on an access control system and maintain a log of the events.",
        tags: [
            "C programming",
            "OpenSSL",
            "Pthread",
            "TCP/IP Socket",
            "Network",
            "Client/Server Model",
        ],
        imageUrl: WebImg,
        link: {
            title: "Source Code",
            link: "https://github.com/ehwu106/Web-Proxy",
        },
    },
    {
        title: "Directory Busting Tool",
        description:
            "Developed a Ruby-based directory busting tool that supports concurrent operation for brute forcing URIs on target websites.",
        tags: ["Multi-threading", "Pentesting", "Docker", "HTTP", "Ruby", "CTFs"],
        imageUrl: DirImg,
        link: {
            title: "Source Code",
            link: "https://github.com/ehwu106/directory-busting-tool",
        },
    },
    {
        title: "Gmail-Filter Solution",
        description:
            "Created a Python automation tool that can filter out phishings/spam in your Gmail Inboxes.",
        tags: [
            "Docker",
            "Python",
            "GCP/Google Workspace",
            "Email Security",
            "Cron",
        ],
        imageUrl: gcpImg,
        link: {
            title: "Source Code",
            link: "https://github.com/ehwu106/gmail-filter-solution",
        },
    },

    {
        title: "Hack The Box (HTB)",
        description:
            "Achieved a top 800 rank on HTB, showcasing expertise in penetration testing and security practices through complex challenges, specializing in areas such as privilege escalation and security tool utilization.",
        tags: [
            "Penetration Testing",
            "Burp Suite",
            "Privilege Escalation",
            "hashcat",
            "Metasploit",
            "ldapdomaindump",
        ],
        imageUrl: htbImg,
        link: {
            title: "HackTheBox Profile",
            link: "https://app.hackthebox.com/profile/514806",
        },
    },
    {
        title: "TryHackMe (THM)",
        description:
            "Ranked in the top 6% of the Tryhackme Platform. Engaged in a wide range of cybersecurity challenges on THM, enhancing skills in network security and Active Directory exploitation using tools like Bloodhound and Dirbuster, demonstrating versatility in security methodologies.",
        tags: [
            "Metasploit",
            "dirbuster",
            "Active Directory",
            "Nmap",
            "Wireshark",
            "Network Security",
        ],
        imageUrl: thmImg,
        link: {
            title: "TryHackMe Profile",
            link: "https://tryhackme.com/p/jimbalushi",
        },
    },
] as const;

export const devopskillsData: readonly string[] = [
    "AWS",
    "GCP",
    "Linux/Unix",
    "Docker",
    "Kubernetes",
    "Active Directory",
    "Git",
    "Jenkins",
] as const;

export const devSkillsData: readonly string[] = [
    "TypeScript",
    "React",
    "Next.js",
    "Python",
    "Scrum",
    "Tailwind CSS",
    "Verilog",
    "HTML",
    "Assembly MIPS",
    "Ruby",
    "C/C++",
    "PostgreSQL",
];

export const cyberSkillsData: readonly string[] = [
    "Qualys",
    "Sophos",
    "Trellix XDR",
    "ManageEngine UEM",
    "Proofpoint Email Security",
    "OWASP ZAP",
    "Burp Suite",
    "Metasploit",
    "Nmap",
    "Okta Auth0",
    "Wireshark",
    "Kali Linux",
    "GoBuster",
    "Nessus",
    "MITRE ATT&CK",
    "NIST",
] as const;
