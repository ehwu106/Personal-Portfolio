"use client"
import Image from 'next/image'
import React from 'react'
import image from "@/public/image.webp"
import {motion} from "framer-motion"

export default function Intro() {
  return (
    <section className="mb-28 max-w-[50rem] text-center sm:mb-0">
        <div className='flex items-center justify-center'>
            <div className="relative">
                <motion.div
                    initial={{opacity:0, scale:0}}
                    animate={{opacity:1, scale:1}}
                    transition={{
                        type:"tween",
                        duration: 0.2,
                    }}
                >
                    <Image 
                        src={image}
                        alt="My Portrait"
                        width="192"
                        height="192"
                        quality="95"
                        priority={true}
                        className='h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl'
                    />
                </motion.div>
                <motion.span className="absolute bottom-0 right-0 text-4xl"
                    initial={{opacity:0, scale:0}}
                    animate={{opacity:1, scale:1}}
                    transition={{
                        type:'spring',
                        stiffness:125,
                        delay:0.1,
                        duration:0.7,
                    }}
                >👋</motion.span>
            </div>
        </div>
        <motion.p className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl" initial={{opacity:0, y:100}} animate={{opacity:1, y:0}}>
                <span className="font-bold">Hi, I'm Howard Wu.</span> A{" "}
                <span className="font-bold">Computer Science & Engineering graduate</span>{" "}
                with a keen interest in{" "}
                <span className="italic">
                    software engineering and cybersecurity
                </span>
                . Proficient with{" "}
                <span className="underline">Python and C</span>, along with a robust
                understanding of fundamental programming concepts and cybersecurity principles.
        </motion.p>
    </section>
  )
}
