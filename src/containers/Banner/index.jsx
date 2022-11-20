import { AnimatedLetters } from "@/components/AnimatedLetters";

export const Banner = () => {
    return (
        <section className="min-h-[90vh] flex items-center">
            <div className="text-center -mt-24 mx-auto md:ml-24">
                <AnimatedLetters text={"Hi, I'm Jason 👋"} />
                <h5 className="text-xl">A fullstack developer</h5>
            </div>
        </section>
    )
}