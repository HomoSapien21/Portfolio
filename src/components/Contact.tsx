"use client";

import { motion } from "framer-motion";
import { ContactInfo } from "@/types";
import { Mail, Phone, MapPin, Linkedin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface Props {
    contact: ContactInfo;
}

function Contact({ contact }: Props) {
    return (
        <section id="contact" className="section-padding bg-secondary/30">
            <div className="container mx-auto px-4 sm:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="max-w-5xl mx-auto"
                >
                    <h2 className="heading-lg">Get In Touch</h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
                        <motion.a
                            href={`mailto:${contact.email}`}
                            whileHover={{ y: -5, scale: 1.02 }}
                            className="block"
                        >
                            <Card className="border-none shadow-lg bg-background hover:bg-primary transition-all duration-300 group h-full">
                                <CardContent className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 p-6 sm:p-8 text-center sm:text-left">
                                    <div className="p-3 sm:p-4 rounded-full bg-primary/10 group-hover:bg-background/20 shrink-0">
                                        <Mail className="w-6 h-6 sm:w-8 sm:h-8 text-primary group-hover:text-secondary" />
                                    </div>
                                    <div className="min-w-0 flex-grow w-full">
                                        <h3 className="text-xs sm:text-sm font-semibold text-primary/60 group-hover:text-secondary/70 uppercase tracking-widest mb-1">Email Me</h3>
                                        <p className="text-sm sm:text-base md:text-lg font-bold italic group-hover:text-secondary truncate">{contact.email}</p>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.a>

                        <motion.a
                            href={`tel:${contact.phone}`}
                            whileHover={{ y: -5, scale: 1.02 }}
                            className="block"
                        >
                            <Card className="border-none shadow-lg bg-background hover:bg-primary transition-all duration-300 group h-full">
                                <CardContent className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 p-6 sm:p-8 text-center sm:text-left">
                                    <div className="p-3 sm:p-4 rounded-full bg-primary/10 group-hover:bg-background/20 shrink-0">
                                        <Phone className="w-6 h-6 sm:w-8 sm:h-8 text-primary group-hover:text-secondary" />
                                    </div>
                                    <div className="min-w-0 flex-grow w-full">
                                        <h3 className="text-xs sm:text-sm font-semibold text-primary/60 group-hover:text-secondary/70 uppercase tracking-widest mb-1">Call Me</h3>
                                        <p className="text-sm sm:text-base md:text-lg font-bold italic group-hover:text-secondary truncate">{contact.phone}</p>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.a>

                        <motion.a
                            href={contact.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ y: -5, scale: 1.02 }}
                            className="block sm:col-span-2 lg:col-span-1"
                        >
                            <Card className="border-none shadow-lg bg-background hover:bg-primary transition-all duration-300 group h-full">
                                <CardContent className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 p-6 sm:p-8 text-center sm:text-left">
                                    <div className="p-3 sm:p-4 rounded-full bg-primary/10 group-hover:bg-background/20 shrink-0">
                                        <Linkedin className="w-6 h-6 sm:w-8 sm:h-8 text-primary group-hover:text-secondary" />
                                    </div>
                                    <div className="min-w-0 flex-grow w-full">
                                        <h3 className="text-xs sm:text-sm font-semibold text-primary/60 group-hover:text-secondary/70 uppercase tracking-widest mb-1">LinkedIn</h3>
                                        <p className="text-sm sm:text-base md:text-lg font-bold italic group-hover:text-secondary truncate">Connect</p>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.a>
                    </div>

                    <div className="mt-16 text-center opacity-50">
                        <p className="text-sm tracking-widest uppercase">© 2026 Ahmed | Built with Next.js, Shadcn & Framer Motion</p>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default Contact;