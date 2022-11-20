import { ProjectCard } from "@/components/projects/ProjectCard";
import { projects } from "@/api/projects";

export const Projects = () => {
    return(
        <section className="min-h-[90vh]  py-12">
            <h4 className="text-xl font-semibold my-12 md:my-24 uppercase text-center">Projects</h4>
            <div className="container flex flex-wrap justify-center gap-4">
                {projects.map((project, index) => (
                    <ProjectCard {...project} key={`project-${index}`} />
                ))}
            </div>
        </section>
    )
}