"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

interface Props {
    skills: string[];
}

function Skills({ skills }: Props) {
    return (
        <section id="skills" className="section-padding bg-secondary/30">
            <div className="container mx-auto">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center"
                >
                    <h2 className="heading-lg">Technical Skills</h2>
                    <div className="flex flex-wrap justify-center gap-4 mt-12 max-w-3xl mx-auto">
                        {skills && skills.map((skill, index) => (
                            <motion.div
                                key={index}
                                whileHover={{
                                    scale: 1.2,
                                    rotate: [0, -5, 5, 0],
                                    transition: { duration: 0.3 }
                                }}
                                whileTap={{ scale: 0.9 }}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05 }}
                            >
                                <Badge className="px-6 py-3 text-lg font-semibold bg-primary text-secondary hover:bg-primary/90 cursor-default border-none shadow-lg">
                                    {skill}
                                </Badge>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default Skills;