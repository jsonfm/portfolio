// Components
import { SEO } from "@/components/SEO";
// Containers
import { Banner } from "@/containers/Banner";
import { About } from "@/containers/About";
import { Skills } from "@/containers/Skills";
import { Experience } from "@/containers/Experience";
import { Projects } from "@/containers/Projects";


export const Home = () => {

    return (
        <>
        <SEO />
        <Banner />
        <About />
        <Skills />
        <Experience />
        <Projects />
        </>
    )
}