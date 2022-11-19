import { AiFillGithub, AiFillLinkedin, AiFillTwitterSquare } from "react-icons/ai";
import { m } from "framer-motion";


export const SocialBar = () => {
    return (
        <div className="flex flex-col items-center gap-4 text-3xl fixed bottom-12 right-4 z-[3]">
            <m.div
                animate={{scale:[0, 1, 1.5, 1]}}
                transition={{type:'spring', duration:1, delay:1}}
            >
                <AiFillGithub fill="#fff"/>
            </m.div>
            <m.div
                animate={{scale:[0, 1, 1.5, 1]}}
                transition={{type:'spring', duration:1, delay:1.2}}
            >
                <AiFillLinkedin />
            </m.div>
            <m.div
                animate={{scale:[0, 1, 1.5, 1]}}
                transition={{type:'spring', duration:1, delay:1.5}}
            >
                <AiFillTwitterSquare />
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