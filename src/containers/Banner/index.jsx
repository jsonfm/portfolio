import { m } from "framer-motion";
import { AnimatedLetters } from "@/components/AnimatedLetters";

export const Banner = () => {
    return (
        <section 
            className="container relative min-h-screen flex items-center overflow-hidden"
            id="home-section"
        >
            <div className="text-center absolute top-[30%] -translate-y-1/2 left-1/2 md:left-[60%] -translate-x-1/2 md:translate-x-0">
                <AnimatedLetters text={"Hi, I'm Jason"} />
                <h5 className="text-xl font-[300]">A fullstack developer</h5>
            </div>
            <m.div 
                animate={{ scale: [1, 2], opacity: [.8, .2] }}
                transition={{ ease: "easeOut", duration: 2, delay: 1 }}
                className="w-28 h-28 flex flex-col items-center justify-center border rounded-full absolute left-[35%] md:left-[15%] top-[56%]"
            >
                <p className="font-light">Python </p>
                <p className="font-light">React</p>
            </m.div>
        </section>
    )
}