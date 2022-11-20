import { m, useScroll } from "framer-motion";

// Containers
import { Banner } from "@/containers/Banner";
import { About } from "@/containers/About";
import { Skills } from "@/containers/Skills";
import { Experience } from "@/containers/Experience";
import { Projects } from "@/containers/Projects";


export const Home = () => {
    const { scrollYProgress } = useScroll();
    return (
        <>
        {/* <m.div className="fixed left-0 top-0 h-screen w-2 bg-warning " style={{ scaleY: scrollYProgress }} />   */}
        <Banner />
        <About />
        <Skills />
        <Experience />
        <Projects />
        </>
    )
}