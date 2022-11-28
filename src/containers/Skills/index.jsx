import { m } from "framer-motion";
import { skills } from "@/api/skills";



export const Skills = () => {
    return(
        <m.section 
            className="min-h-screen py-24 bg-primary/60"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            id="skills-section"
        >
            <div className="container">
                <h4 className="text-xl font-semibold text-center uppercase mb-24">Skills</h4>
                <div className="flex flex-wrap gap-4 justify-center max-w-[700px] mx-auto">
                    {skills.map(({name, image}) => (
                        <div className="w-32 h-40 flex flex-col gap-y-2 items-center justify-center">
                            <img
                                className="h-28 w-28 object-contain"
                                src={image}
                            />
                            <p>
                                {name}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </m.section>
    )
}