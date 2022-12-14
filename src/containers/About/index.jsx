import { m } from "framer-motion";
import { AiOutlineArrowRight } from "react-icons/ai";
import { AnimatedLetters } from "@/components/AnimatedLetters";
import CV from "@/assets/CV.pdf";


export const About = () => {
    return (
        <section 
            className="relative min-h-screen bg-warning/90 py-24"
            id="about-section"
        >
            <m.div
                className="container h-[90vh] relative"
                initial={{x: -200, opacity: 0}}
                transition={{duration: .5}}
                whileInView={{x: 0, opacity: 1}}
                viewport={{once: true}}
            >
            <h4 className=" text-xl font-semibold text-center uppercase mb-12 md:mb-20">ABOUT ME</h4>
            <div className="max-w-[600px] mx-auto text-center">
                <p className="font-light mb-6">I'm a software enthusiast from <b className="text-2xl">Ecuador</b>.</p>
                <p className="font-light mb-6">My interesting are close to <b className="text-2xl">bioinformatics</b> and <b className="text-2xl">web</b>.</p>
                <p className="font-light">I'm always willing to <b className="text-2xl">learn</b> something new.</p>
                <div className="absolute right-10 bottom-0 flex flex-col gap-6">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                </div>
            </div>  
            <a href={CV} target='_blank' rel='noopener noreferrer' className="hover:tracking-widest absolute left-1/2 -translate-x-1/2 bottom-5 flex items-center gap-3">
                    <p className="font-light">View my CV</p>
                    <div className="w-10 h-10  btn btn-light rounded-full">
                        <AiOutlineArrowRight />
                    </div>
            </a>
            </m.div>
        </section>  
    )
}