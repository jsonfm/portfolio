import { AiFillGithub, AiFillLinkedin, AiFillTwitterSquare } from "react-icons/ai";
import { m } from "framer-motion";


export const SocialBar = () => {
    return (
        <div className="flex flex-col items-center gap-4 text-3xl fixed bottom-12 left-4 md:left-10 2xl:left-36 z-[20]">
            <m.div
                animate={{scale:[0, 1, 1.5, 1]}}
                transition={{type:'spring', duration:1, delay:1}}
            >
                <a href="https://github.com/jsonfm" target="_blank" rel="noopener noreferrer">
                    <AiFillGithub fill="#cfcfcf"/>
                </a>
            </m.div>
            <m.div
                animate={{scale:[0, 1, 1.5, 1]}}
                transition={{type:'spring', duration:1, delay:1.2}}
            >
                <a href="https://www.linkedin.com/in/jason-francisco-macas-mora-47b938141/" target="_blank" rel="noopener noreferrer">
                    <AiFillLinkedin fill="#cfcfcf" />
                </a>
            </m.div>
            <m.div
                animate={{scale:[0, 1, 1.5, 1]}}
                transition={{type:'spring', duration:1, delay:1.5}}
            >
                <a href="https://twitter.com/j5on_" target="_blank" rel="noopener noreferrer">
                    <AiFillTwitterSquare  fill="#cfcfcf" />
                </a>
            </m.div>
            <m.span 
                className="w-[2px] bg-[#fff]" 
                initial={{height: 0}}
                animate={{height: '8rem'}}
                transition={{type: 'spring', duration: 1, delay: 1.2}}
            />
        </div>
    )
}