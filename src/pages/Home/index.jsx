import { m, useScroll } from "framer-motion";

// Containers
import { Banner } from "@/containers/Banner";
import { Skills } from "@/containers/Skills";
import { Experience } from "@/containers/Experience";
import { Projects } from "@/containers/Projects";


export const Home = () => {
    const { scrollYProgress } = useScroll();
    return (
        <>
        <m.div className="fixed top-0 left-0 w-6 bg-warning h-screen" style={{ scaleY: scrollYProgress }} />  
        <Banner />
        <Skills />
        <Experience />
        <Projects />
        </>
    )
}