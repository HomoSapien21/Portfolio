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
            <div className="container mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="max-w-4xl mx-auto"
                >
                    <h2 className="heading-lg">Get In Touch</h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                        <motion.a
                            href={`mailto:${contact.email}`}
                            whileHover={{ y: -5, scale: 1.02 }}
                            className="block"
                        >
                            <Card className="border-none shadow-lg bg-background hover:bg-primary transition-all duration-300 group">
                                <CardContent className="flex items-center gap-6 p-8">
                                    <div className="p-4 rounded-full bg-primary/10 group-hover:bg-background/20">
                                        <Mail className="w-8 h-8 text-primary group-hover:text-secondary" />
                                    </div>
                                    <div>
                                        <h3 className="text-sm font-semibold text-primary/60 group-hover:text-secondary/70 uppercase tracking-widest mb-1">Email Me</h3>
                                        <p className="text-xl font-bold italic group-hover:text-secondary truncate">{contact.email}</p>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.a>

                        <motion.a
                            href={`tel:${contact.phone}`}
                            whileHover={{ y: -5, scale: 1.02 }}
                            className="block"
                        >
                            <Card className="border-none shadow-lg bg-background hover:bg-primary transition-all duration-300 group">
                                <CardContent className="flex items-center gap-6 p-8">
                                    <div className="p-4 rounded-full bg-primary/10 group-hover:bg-background/20">
                                        <Phone className="w-8 h-8 text-primary group-hover:text-secondary" />
                                    </div>
                                    <div>
                                        <h3 className="text-sm font-semibold text-primary/60 group-hover:text-secondary/70 uppercase tracking-widest mb-1">Call Me</h3>
                                        <p className="text-xl font-bold italic group-hover:text-secondary">{contact.phone}</p>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.a>

                        <motion.a
                            href={contact.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ y: -5, scale: 1.02 }}
                            className="block"
                        >
                            <Card className="border-none shadow-lg bg-background hover:bg-primary transition-all duration-300 group">
                                <CardContent className="flex items-center gap-6 p-8">
                                    <div className="p-4 rounded-full bg-primary/10 group-hover:bg-background/20">
                                        <Linkedin className="w-8 h-8 text-primary group-hover:text-secondary" />
                                    </div>
                                    <div>
                                        <h3 className="text-sm font-semibold text-primary/60 group-hover:text-secondary/70 uppercase tracking-widest mb-1">LinkedIn</h3>
                                        <p className="text-xl font-bold italic group-hover:text-secondary truncate">Connect</p>
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