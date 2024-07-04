"use client";

import SectionHeading from "../section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
    const { ref } = useSectionInView("About");

    return (
        <motion.section
            ref={ref}
            className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.175 }}
            id="about"
        >
            <SectionHeading>About me</SectionHeading>
            <p className="mb-3">
                After earning my degree from{" "}
                <span className="font-medium">
                    University of California, Santa Cruz
                </span>
                , my passiong for cybersecurity and software development grew even stronger{" "}. I've obtained certifications such as
                <span className="font-medium">CompTIA Security+</span>,{" "}
                <span className="font-medium">eLearnSecurity Junior Penetration Tester eJPT</span>, and{" "}
                <span className="font-medium">AWS Solutions Architect</span>{" "}
                certifications, and I'm on my path to become CISSP certified with being a current Associate of ISC2. I thrive on solving complex problems and the thrill that comes with breakthroughs.
                Currently, I am a security engineer at Upwind Security and am looking to expand my expertise in cloud computing and ethical hacking{" "}.
            </p>

            <p>
                <span className="italic">Beyond coding</span>, my leisure
                activities include watching documentaries,
                and experimenting with new technologies in my home lab. I'm
                always on the lookout for{" "}
                <span className="font-medium">new skills to master</span>.
                Lately, I've been diving into{" "}
                <span className="font-medium">ethical hacking</span> and{" "}
                <span className="font-medium">network security</span>, expanding
                my understanding and capabilities in cybersecurity.
            </p>
        </motion.section>
    );
}
