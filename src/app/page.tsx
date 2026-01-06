import Banner from "@/components/Banner";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Header from "@/components/Header";
import { getInfo,getProjects } from "@/lib/getData";
import { Info, Project } from "@/types";

export default async function Home() {
  const info: Info | null = await getInfo();
  const projects: Project[] = await getProjects();

  if(!info) return <p>No data found</p>

  return(
    <main>
      <Header />
      <Banner name={info.name} designation={info.designation} />
      <About about={info.about} />
      <Skills skills={info.skills} />
      <Projects projects={projects} />
      <Contact contact={info.contact} />
    </main>
  )
}
