import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const Layout = ({ children }) => {
    return (
        <>
            <Header/>
            <main className="w-full min-h-[90vh] overflow-x-hidden">
                {children}
            </main>
            <Footer/>
        </>
    )
}