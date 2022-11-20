import { m } from "framer-motion";

export const About = () => {
    return (
        <section 
            className="min-h-screen bg-warning/90 py-24"
        >
            <m.div
                className="container"
                initial={{x: -200, opacity: 0}}
                transition={{duration: .5}}
                whileInView={{x: 0, opacity: 1}}
                viewport={{once: true}}
            >
            <h4 className="text-xl font-semibold text-center uppercase mb-12 md:mb-20">ABOUT ME</h4>
            <div className="max-w-[600px] mx-auto text-center">
                <p>My interesting are close to bioinformatics and web.</p>
            </div>
            </m.div>
        </section>  
    )
}