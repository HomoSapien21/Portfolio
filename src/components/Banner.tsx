"use client";

import { motion } from "framer-motion";

interface Props {
  name: string;
  designation: string;
}

function Banner({ name, designation }: Props) {
  return (
    <section id="banner" className="relative h-screen flex items-center justify-center overflow-hidden bg-background pt-16">
      
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary rounded-full blur-[120px]" />
      </div>

      <div className="container relative z-10 px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-xl md:text-2xl font-medium text-primary/80 mb-4 tracking-wider uppercase">
            Welcome to my portfolio
          </h2>
          <h1 className="text-5xl md:text-8xl font-black mb-6 tracking-tighter leading-tight italic">
            I am <span className="text-primary">{name || "Ahmed"}</span>
          </h1>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="inline-block px-6 py-2 border-2 border-primary rounded-full"
          >
            <h3 className="text-2xl md:text-4xl font-semibold tracking-tight">
              {designation || "Web Developer"}
            </h3>
          </motion.div>
        </motion.div>

      </div>

    </section>
  )
}

export default Banner;