import { ProjectCard } from "@/components/projects/ProjectCard";
import { projects } from "@/api/projects";

export const Projects = () => {
    return(
        <section 
            className="min-h-[90vh] py-12"
            id="projects-section"
        >
            <div className="container">
                <h4 className="text-xl font-semibold my-12 md:my-24 uppercase text-center">Projects</h4>
                <div className="container flex flex-wrap justify-center gap-4 mb-12">
                    {projects.map((project, index) => (
                        <ProjectCard {...project} key={`project-${index}`} />
                    ))}
                </div>
                <a className="mt-6 text-center mx-auto w-full inline-block uppercase hover:scale-110 hover:underline hover:underline-offset-4" href="https://github.com/jsonfm?tab=repositories" target="_blank" rel="noopener noreferrer">
                    View More Projects +
                </a>
            </div>
        </section>
    )
}