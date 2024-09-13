import {GiHamburgerMenu} from "react-icons/gi";
import {useEffect, useState} from "react"
import {Link} from "react-router-dom"
import {ImSpoonKnife} from "react-icons/im";
import {IoMdSearch} from "react-icons/io";
import { IoCloseCircleOutline } from "react-icons/io5";


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

    return <nav className={`fixed z-50 top-0 left-0 w-full flex justify-between items-center px-[20px] h-[60px] 
    ${isScrolled ? "bg-white" : "bg-transparent"} transition-all duration-500 ease-in-out`}>
        <h1 className={`font-semibold ${isScrolled ? "text-black" : "text-white"} text-[28px] 
        transition-all duration-500 ease-in-out`}>Perfect
            <span className="text-orange-500">Recipe</span>
        </h1>
        <span className="text-orange-500 cursor-pointer" onClick={() => setIsSidebarOpen(true)}>
            <GiHamburgerMenu size={25}/>
        </span>
        {isSidebarOpen && <div
            onClick={() => setIsSidebarOpen(false)}
            className="fixed top-0 left-0 h-screen w-screen backdrop-blur-sm bg-black/60 flex justify-end">
            <div
                onClick={(e) => e.stopPropagation()}
                className="bg-orange-400 h-full w-[320px]  sm:w-[400px] flex flex-col items-start p-[50px] text-white gap-[15px] text-[18px] sm:text-[20px] relative">
                <span onClick={() => setIsSidebarOpen(false)} className="absolute top-[10px] left-[15px]">
                    <IoCloseCircleOutline size={30} />
                </span>
                <p className="font-bold text-[30px] sm:text-[36px]">Recipe Pages</p>
                <Link to="/all">
                    <span className=" font-semibold flex items-center gap-[10px]"><ImSpoonKnife/> All Recipes</span>
                </Link>
                <Link to="/cuisine/none">
                    <span className=" font-semibold flex items-center gap-[10px]"><ImSpoonKnife/> Recipe by Cuisine</span>
                </Link>
                <Link to="/meal-type/none">
                    <span className=" font-semibold flex items-center gap-[10px]"><ImSpoonKnife/> Recipe by Meal Type</span>
                </Link>
                <Link to="/search">
                    <span className="mt-[10px] text-[22px] sm:text-[25px] font-semibold flex items-center gap-[10px]"><IoMdSearch/> Search Recipes</span>
                </Link>
            </div>
        </div>}
    </nav>
}

export default Navbar