"use client";

import { motion } from "framer-motion";

interface Props {
  about: string;
}

function About({ about }: Props) {
  return (
    <section id="about" className="section-padding bg-background">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="heading-lg">About Me</h2>
          <div className="relative">
            <div className="absolute -left-4 -top-4 text-8xl text-primary/10 font-serif">"</div>
            <p className="text-xl md:text-2xl leading-relaxed text-foreground/80 relative z-10 px-8">
              {about}
            </p>
            <div className="absolute -right-4 -bottom-4 text-8xl text-primary/10 font-serif">"</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About;