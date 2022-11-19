import { m } from "framer-motion";
import { AnimatedLetters } from "@/components/AnimatedLetters";


const letterAnimation = {
    initial: { y: 400 },
    animate: {
      y: 0,
      transition: {
        ease: [0.6, 0.01, -0.05, 0.95],
        duration: 1,
      },
    },
  };

export const Home = () => {
    return (
        <>
        <section className="min-h-[60vh] flex justify-center">
            <div className="text-center">
                <AnimatedLetters text={"Hi. I'm Jason"} animation={letterAnimation} />
                <h5>A fullstack developer</h5>
            </div>
        </section>
        <section className="min-h-[60vh]">
            <h4 className="text-xl font-semibold mb-4">Skills</h4>
        </section>
        <section className="min-h-[60vh]">
            <h4 className="text-xl font-semibold mb-4">Experience</h4>
            <div className="max-w-[700px] mx-auto grid grid-cols-2">
                <p>Work 1</p>
                <p>Work 2</p>
            </div>
        </section>
        <section className="min-h-[60vh]">
            <h4 className="text-xl font-semibold mb-4">Projects</h4>
        </section>
        </>
    )
}