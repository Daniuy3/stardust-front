"use client"

import { MainButton } from "@/components/buttons/MainButton"
import { SecondaryButton } from "@/components/buttons/SecondaryButton"
import Image from "next/image"
import { FaArrowRightLong } from "react-icons/fa6"
import { motion } from "motion/react";


export const Presentation = () => {



  return (
    <div
        className="relative h-screen flex flex-col items-center justify-center bg-[radial-gradient(circle_at_center,#DEEAFB_0%,transparent_45%)]"
    >

        <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ ease: "backOut", duration: 0.8 }}
            viewport={{
                once: true,
                amount: 0.5,
                margin: "0px 0px -100px 0px",
            }}
            className="left-5 top-20 -z-10 absolute aspect-video w-48 lg:w-120"
        >
            <Image 
                src="/presentation/forms.png"
                alt="stardust"
                fill
                className="object-cover drop-shadow-xl -rotate-12"
            />
        </motion.div>

        <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ ease: "backOut", duration: 0.8 }}
            viewport={{
                once: true,
                amount: 0.5,
                margin: "0px 0px -100px 0px",
            }}
            className="right-5 top-20 -z-10 absolute aspect-video w-48 lg:w-120"
        >
            <Image 
                src="/presentation/casa-laura.png"
                alt="stardust"
                fill
                className="object-cover drop-shadow-xl rotate-12"
            />
        </motion.div>

        <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ ease: "backOut", duration: 0.8 }}
            viewport={{
                once: true,
                amount: 0.5,
                margin: "0px 0px -50px 0px",
            }}
            className="right-5 bottom-20 -z-10 absolute aspect-video w-48 lg:w-120"
        >
            <Image 
                src="/presentation/umami.png"
                alt="stardust"
                fill
                className="object-cover drop-shadow-xl -rotate-12"
            />
        </motion.div>


        <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1.1 }}
            transition={{ ease: "backOut", duration: 0.8 }}
            viewport={{
                once: true,
                amount: 0.5,
                margin: "0px 0px -50px 0px",
            }}
            className="left-5 bottom-20 -z-10 absolute aspect-video w-48 lg:w-120"
        >
            <Image 
                src="/presentation/cec.png"
                alt="stardust"
                fill
                className="object-cover drop-shadow-xl rotate-12"
            />
        </motion.div>


        <div
                className="w-11/12 max-w-6xl mx-auto text-center flex flex-col justify-center items-center gap-5"
        >
                <motion.div
                    initial={{ y: 20, opacity: 0}}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.7, ease: "backOut"}}
                    viewport={{
                        once: true,
                        amount: 0.5,
                        margin: "0px 0px -100px 0px",
                    }}
                    className="size-20 relative rounded-sm bg-[#DEEAFB] shadow-xl shadow-gray-400/30"
                >
                    <Image 
                        src="/favicon.png"
                        alt="stardust"
                        fill
                        className="object-cover"
                    />
                </motion.div>
                
                <div>
                    <h2
                        className="text-3xl lg:text-6xl font-bold"
                    >
                        No solo explicamos tecnología, tambien <span className="text-blue-700">la construimos.</span>
                    </h2>
                    <p
                        className="text-lg"
                    >
                        Diseñamos y desarrollamos aplicaciones web, herramientas y soluciones digitales para resolver tus problemas.
                    </p>
                </div>

                <div
                    className="flex gap-3 justify-center my-5"
                >
                    <MainButton 
                        text="Conocer servicios"
                        icon={<FaArrowRightLong size={14} />}
                    />
                    <SecondaryButton 
                        text="Explorar proyectos"
                        icon={<FaArrowRightLong size={14} />}
                    />
                </div>
        </div>

    </div>
  )
}
