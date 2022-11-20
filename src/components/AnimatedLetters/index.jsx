import { m } from "framer-motion";


const containerAnimation = {
    initial: {
      x: 0,
    },
    animate: {
      y: 0,
      transition: {
        staggerChildren: 0.1,
      },
    },
};
  

const letterAnimation = {
    initial: {
      y: -400,
    },
    animate: {
      y: 0,
      transition: {
        duration: .4,
        type: "tween",
        ease: "easeInOut",
      },
    },
};


export const AnimatedLetters = ({ text }) => {
    const letters = text ? [...text] : [];

    return(
        <m.div
            variants={containerAnimation}
            initial='initial'
            animate='animate'
            className="flex gap-1 leading-[7rem] py-6 overflow-hidden"
        >
            {letters.map(letter =>(
                <m.div
                    variants={letterAnimation}
                    className="text-3xl font-[300]"
                >
                    {letter}
                </m.div>
            ))}
        </m.div>
    )
}