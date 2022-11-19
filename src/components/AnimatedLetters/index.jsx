import { m } from "framer-motion";


const containerAnimation = {
    animate: {
      transition: {
        delayChildren: 0.4,
        staggerChildren: 0.1,
      },
    },
};
  
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


export const AnimatedLetters = ({ text, animation }) => {
    const letters = text ? [...text] : [];
    return(
        <m.span
            variants={containerAnimation}
            initial='initial'
            animate='animate'
        >
            {letters.map(letter =>(
                <m.span
                    variants={letterAnimation}
                    initial='initial'
                    animate='animate'
                >
                    {letter}
                </m.span>
            ))}
        </m.span>
    )
}