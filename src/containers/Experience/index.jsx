import { experience } from "@/api/experience";

const Dot = () => {
    return <div className="w-6 h-6 grid place-items-center border-2 border-dark/80 rounded-full"><div className="w-3 h-3 rounded-full bg-dark/80"></div></div>
}

const Item = () => {
    return <div> </div>
}


export const Experience = () => {

    // const renderItems = () => {
    //     return experience.map((item, index) => {
    //         if(index % 2 == 0){

    //         }
    //     })
    // } 

    return (
        <section 
            className="min-h-screen py-24 bg-white text-black"
            id="experience-section"
        >
            <div className="container">
                <h4 className="text-xl font-semibold text-center uppercase mb-12 md:mb-24">Experience</h4>
                <div className="max-w-[700px] mx-auto grid gap-5 md:grid-cols-2 px-4">
                    {experience.map((item, index) => {
                        return <div className={`${index % 2 != 0 ? 'md:mt-24' : 'md:mb-24'} text-justify font-light`}>{item.description} <b className="text-dark/80">{item.time}</b></div>
                    })}
                </div>
            </div>
        </section>
    )
}