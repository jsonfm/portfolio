import { AnimatedLetters } from "@/components/AnimatedLetters";

export const Banner = () => {
    return (
        <section className="container min-h-screen flex items-center">
            <div className="text-center -mt-36 mx-auto md:ml-24">
                <AnimatedLetters text={"Hi, I'm Jason 👋"} />
                <h5 className="text-xl">A fullstack developer</h5>
            </div>
        </section>
    )
}