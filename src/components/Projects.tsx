"use client";

import { motion } from "framer-motion";
import { Project } from "@/types";
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

interface Props {
    projects: Project[];
}

function Projects({ projects }: Props) {
    return (
        <section id="projects" className="section-padding bg-background">
            <div className="container mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="heading-lg">Featured Projects</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
                        {projects && projects.map((project, index) => {
                            const hasGithubLink = !!project["github link"] && project["github link"] !== "";
                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    whileHover={hasGithubLink ? { y: -10 } : {}}
                                    className="h-full"
                                >
                                    <Card className={`overflow-hidden h-full flex flex-col border-none shadow-xl bg-secondary/20 transition-all duration-300 ${hasGithubLink ? "hover:bg-secondary/40" : ""}`}>
                                        <div className="relative overflow-hidden group aspect-video">
                                            <img
                                                src={project.imageurl || "/placeholder.svg"}
                                                alt={project.title}
                                                className={`w-full h-full object-cover transition-transform duration-500 ${hasGithubLink ? "group-hover:scale-110" : ""}`}
                                            />
                                            {hasGithubLink && (
                                                <div className="absolute inset-0 bg-primary/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                                    <Button variant="secondary" asChild>
                                                        <a href={project["github link"]} target="_blank" rel="noopener noreferrer">
                                                            <Github className="mr-2 h-4 w-4" />
                                                            View Github
                                                        </a>
                                                    </Button>
                                                </div>
                                            )}
                                        </div>
                                        <CardHeader>
                                            <CardTitle className="text-2xl font-bold italic tracking-tight">{project.title}</CardTitle>
                                        </CardHeader>
                                        <CardContent className="flex-grow">
                                            <p className="text-foreground/70">
                                                {project.description}
                                            </p>
                                        </CardContent>
                                        <CardFooter className="pt-0">
                                            {hasGithubLink && (
                                                <Button className="w-full" asChild>
                                                    <a href={project["github link"]} target="_blank" rel="noopener noreferrer">
                                                        <ExternalLink className="mr-2 h-4 w-4" />
                                                        View On GitHub
                                                    </a>
                                                </Button>
                                            )}
                                        </CardFooter>
                                    </Card>
                                </motion.div>
                            )
                        })}
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default Projects;