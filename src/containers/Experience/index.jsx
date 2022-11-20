import { experience } from "@/api/experience";

export const Experience = () => {
    return (
        <section className="min-h-[60vh]">
            <h4 className="text-xl font-semibold my-12 md:my-24 text-center uppercase">Experience</h4>
            <div className="max-w-[700px] mx-auto grid gap-5 md:grid-cols-2">
                {experience.map((item, index) => {
                    return <div className={`${index % 2 != 0 ? 'md:mt-24' : 'md:mb-24'}`}>{item.description}</div>
                })}
            </div>
        </section>
    )
}