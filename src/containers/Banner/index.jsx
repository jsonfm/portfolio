import { AnimatedLetters } from "@/components/AnimatedLetters";

export const Banner = () => {
    return (
        <section className="min-h-screen flex justify-center">
            <div className="text-center">
                <AnimatedLetters text={"Hi. I'm Jason"} />
                <h5>A fullstack developer</h5>
            </div>
        </section>
    )
}