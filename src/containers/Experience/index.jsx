import { experience } from "@/api/experience";

export const Experience = () => {
    return (
        <section className="min-h-screen py-24 bg-white text-black">
            <div className="container">
                <h4 className="text-xl font-semibold text-center uppercase mb-12 md:mb-24">Experience</h4>
                <div className="max-w-[700px] mx-auto grid gap-5 md:grid-cols-2 px-4">
                    {experience.map((item, index) => {
                        return <div className={`${index % 2 != 0 ? 'md:mt-24' : 'md:mb-24'}`}>{item.description}</div>
                    })}
                </div>
            </div>
        </section>
    )
}