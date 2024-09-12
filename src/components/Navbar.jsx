import {GiHamburgerMenu} from "react-icons/gi";
import {useEffect, useState} from "react"


const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isSidebarOpen, setIsSidebarOpen] = useState(false)
    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY
            if (scrollY > 0) setIsScrolled(true)
            else setIsScrolled(false)
        }
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return <nav className={`fixed top-0 left-0 w-full flex justify-between items-center px-[20px] h-[60px] 
    ${isScrolled ? "bg-white" : "bg-transparent"} transition-all duration-500 ease-in-out`}>
        <h1 className={`font-semibold ${isScrolled ? "text-black" : "text-white"} text-[26px] 
        transition-all duration-500 ease-in-out`}>Perfect
            <span className="text-orange-500">Recipe</span>
        </h1>
        <span className="text-orange-500 cursor-pointer" onClick={() => setIsSidebarOpen(true)}>
            <GiHamburgerMenu size={25}/>
        </span>
        {isSidebarOpen && <div
            onClick={() => setIsSidebarOpen(false)}
            className="fixed top-0 left-0 h-screen w-screen backdrop-blur-sm flex justify-end">
            <div
                onClick={(e) => e.stopPropagation()}
                className="bg-gray-100 h-full w-[400px]"></div>
        </div>}
    </nav>
}

export default Navbar