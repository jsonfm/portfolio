import { ProjectCard } from "@/components/projects/ProjectCard";
import { projects } from "@/api/projects";

export const Projects = () => {
    return(
        <section className="min-h-[60vh]">
            <h4 className="text-xl font-semibold my-12 md:my-24 uppercase text-center">Projects</h4>
            <div className="flex flex-wrap justify-center gap-4">
                {projects.map(project => (
                    <ProjectCard {...project} />
                ))}
            </div>
            <button className="mx-auto mt-12">
                load more...
            </button>
        </section>
    )
}