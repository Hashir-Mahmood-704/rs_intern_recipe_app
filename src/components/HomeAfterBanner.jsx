import image from "../assets/afterbannerpic.jpg"
import { IoSearch } from "react-icons/io5";

const HomeAfterBanner = () => {
    return <section className="flex md:flex-row flex-col">
        <div className="flex-1 p-[20px] sm:p-[30px]">
            <img src={`${image}`} alt="image" className="w-full h-full"/>
        </div>
        <div className="flex-1 flex flex-col items-center p-[20px] sm:p-[30px] justify-evenly gap-[10px]" >
            <h1 className="font-semibold text-[30px] sm:text-[46px] text-center">Find Your Favorite Recipes</h1>
            <p className="w-[90%] text-[16px] sm:text-[18px] text-justify">Here you can find the recipes for your favorite dishes and much more. Here you can find the recipes for your favorite dishes and much more. Here you can find the recipes for your favorite dishes and much more. This website contains every recipe yu need, just give it a go and boom, Truly amazing</p>
            <button className="flex items-center gap-[10px] text-[19px] sm:text-[25px] bg-orange-500 text-white px-[20px] py-[10px] rounded-[10px] mt-[10px]">Search <IoSearch/></button>
        </div>
    </section>
}

export default HomeAfterBanner