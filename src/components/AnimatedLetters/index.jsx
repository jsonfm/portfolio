import { m } from "framer-motion";


  

const letterAnimation = {
    initial: {
      y: 400,
    },
    animate: {
      y: 0,
      transition: {
        duration: 1,
        ease: [0.6, 0.01, -0.05, 0.95],
      },
    },
};

const containerAnimation = {
  animate: {
    y: 0,
    transition: {
      delayChildren: 0.4,
      staggerChildren: 0.1,
    },
  },
};


export const AnimatedLetters = ({ 
    text,
    containerClass="flex gap-1 leading-[7rem] py-2 overflow-hidden",
    letterClass="text-3xl font-[300]"
  }) => {
    const letters = text ? [...text] : [];

    return(
        <m.div
            variants={containerAnimation}
            initial="initial"
            animate="animate"
            className={containerClass}
        >
            {letters.map(letter =>(
                <m.div
                    variants={letterAnimation}
                    initial="initial"
                    animate="animate"
                    className={letterClass}
                >
                    {letter}
                </m.div>
            ))}
        </m.div>
    )
}