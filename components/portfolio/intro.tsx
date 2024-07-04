"use client";

import Image from "next/image";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import heroImg from "@/public/image.webp";

export default function Intro() {
    return (
        <section
            id="home"
            className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]"
        >
            <div className="flex items-center justify-center">
                <div className="relative">
                    <Image
                        src={heroImg}
                        alt="My portrait"
                        width="192"
                        height="192"
                        quality={95}
                        priority={true}
                        className="h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
                    />
                </div>
            </div>

            <h1 className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl">
                <span className="font-bold">Hi, I'm Howard Wu.</span> A{" "}
                <span className="font-bold">Computer Science & Engineering graduate</span>{" "}
                passionate about{" "}
                <span className="italic">
                    cybersecurity and software development
                </span>
                . Proficient with{" "}
                <span className="underline">Python and C</span>, I aim
                to innovate and enhance cybersecurity in digital solutions.
            </h1>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium">
                <a
                    className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10"
                    href="/CV.pdf"
                    download
                >
                    Download CV{" "}
                    <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
                </a>

                <a
                    className="bg-white p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
                    href="https://www.linkedin.com/in/e14/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                >
                    <BsLinkedin />
                </a>

                <a
                    className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
                    href="https://github.com/ehwu106"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                >
                    <FaGithubSquare />
                </a>
            </div>
        </section>
    );
}
