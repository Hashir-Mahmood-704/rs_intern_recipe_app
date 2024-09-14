import {GiHamburgerMenu} from "react-icons/gi";
import {useEffect, useState} from "react"
import {Link} from "react-router-dom"
import {ImSpoonKnife} from "react-icons/im";
import {IoMdSearch} from "react-icons/io";
import {IoCloseCircleOutline} from "react-icons/io5";
import {useLocation} from "react-router-dom"

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isSidebarOpen, setIsSidebarOpen] = useState(false)
    const {pathname} = useLocation()
    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY
            if (scrollY > 0) setIsScrolled(true)
            else setIsScrolled(false)
        }
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    useEffect(() => {
        if (isSidebarOpen) document.body.style.overflow = 'hidden'
        return () => {
            document.body.style.overflow = 'auto'
        }
    }, [isSidebarOpen])
    return <nav className={`fixed z-50 top-0 left-0 w-full flex justify-between items-center px-[20px] h-[50px] sm:h-[60px] 
    ${isScrolled ? "bg-white" : "bg-transparent"} transition-all duration-500 ease-in-out`}>
        <Link to="/">
            <h1 className={`font-semibold ${isScrolled ? "text-black" : pathname === "/" && "text-white"} text-[22px] sm:text-[28px] 
        transition-all duration-500 ease-in-out`}>Perfect
                <span className="text-orange-500">Recipe</span>
            </h1>
        </Link>
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
                    <IoCloseCircleOutline size={30}/>
                </span>
                <p className="font-bold text-[30px] sm:text-[36px]">Recipe Pages</p>
                <Link
                    onClick={() => setIsSidebarOpen(false)}
                    to="/">
                    <span className=" font-semibold flex items-center gap-[10px]"><ImSpoonKnife/> Home</span>
                </Link>
                <Link
                    onClick={() => setIsSidebarOpen(false)}
                    to="/all">
                    <span className=" font-semibold flex items-center gap-[10px]"><ImSpoonKnife/> All Recipes</span>
                </Link>
                <Link
                    onClick={() => setIsSidebarOpen(false)}
                    to="/cuisine">
                    <span className=" font-semibold flex items-center gap-[10px]"><ImSpoonKnife/> Recipe by Cuisine</span>
                </Link>
                <Link
                    onClick={() => setIsSidebarOpen(false)}
                    to="/meal-type">
                    <span className=" font-semibold flex items-center gap-[10px]"><ImSpoonKnife/> Recipe by Meal Type</span>
                </Link>
                <Link
                    onClick={() => setIsSidebarOpen(false)}
                    to="/search">
                    <span className="mt-[10px] text-[22px] sm:text-[25px] font-semibold flex items-center gap-[10px]"><IoMdSearch/> Search Recipes</span>
                </Link>
            </div>
        </div>}
    </nav>
}

export default Navbar