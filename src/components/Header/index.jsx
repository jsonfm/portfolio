import { useState } from "react";
import { SocialBar } from "@/components/SocialBar";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { HashLink } from "react-router-hash-link";
import { m } from "framer-motion";
import "./styles.css";


export const Header = () => {
    
    const [showBar, setShowBar] = useState(false);
    const toggle = () => setShowBar(!showBar);
    const closeBar = () => setShowBar(false);

    return (
        <header className="h-16 grid place-items-center w-full fixed left-0 top-0 z-50">
            <nav className="container h-full flex justify-between items-center px-4">
                <HashLink to="#home-section" className="uppercase text-xl"></HashLink>
                {!showBar
                ? <GiHamburgerMenu size={25} className="cursor-pointer z-[100]" onClick={toggle}/>
                : <AiOutlineClose size={25} className="cursor-pointer z-[100]"  onClick={toggle}/>
                }    
                <div className={`${showBar ? 'nav-active' : 'nav-disable'} nav flex-col items-center fixed top-0 left-0 min-h-screen w-full bg-dark z-50`} onClick={toggle}>
                    <div className="mt-32 flex flex-col items-center gap-8 xl:gap-12">
                        <HashLink className="uppercase font-light xl:text-2xl duration-200" to="#home-section" onClick={closeBar} smooth>
                           <m.div>
                                Home
                           </m.div>
                        </HashLink>
                        <HashLink className="uppercase font-light xl:text-2xl duration-200" to="#about-section" onClick={closeBar} smooth>
                            About
                        </HashLink>
                        <HashLink className="uppercase font-light xl:text-2xl duration-200" to="#experience-section" onClick={closeBar} smooth>
                            Experience
                        </HashLink>
                        <HashLink className="uppercase font-light xl:text-2xl" to="#skills-section" onClick={closeBar} smooth>
                            Skills
                        </HashLink>
                        <HashLink className="uppercase font-light xl:text-2xl" to="#projects-section" onClick={closeBar} smooth>
                            Projects
                        </HashLink>
                    </div>
                </div>
            </nav>
            <SocialBar />
        </header>
    )
}