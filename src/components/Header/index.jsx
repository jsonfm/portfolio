import { SocialBar } from "@/components/SocialBar";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";

export const Header = () => {
    return (
        <header className="h-16 grid place-items-center w-full fixed left-0 top-0 z-20">
            <nav className="container h-full flex justify-between items-center px-4">
                {/* Header */}
                <Link to="/" className="uppercase text-xl"></Link>
                <GiHamburgerMenu size={25} />
            </nav>
            <SocialBar />
        </header>
    )
}