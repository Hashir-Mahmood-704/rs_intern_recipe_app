import {FaFacebook, FaLinkedin, FaPinterest} from "react-icons/fa";
import {FaInstagram, FaXTwitter} from "react-icons/fa6";


const footerItems = [{
    head: "Quick links", items: ["Home", "Recipes", "Blog"]
}, {
    head: "Quick links", items: ["Share recipe", "About us", "Contact"]
}, {
    head: "Legal", items: ["Terms of use", "Privacy & Cookies"]
}]

const Footer = () => {
    return <footer className="mt-[50px] px-[20px] sm:px-[50px] py-[20px] bg-gray-100">
        <div className="flex gap-[20px] flex-col md:flex-row ">
            <div className="flex-[2]">
                <h1
                    className={`font-semibold text-black text-[28px] transition-all duration-500 ease-in-out`}>Perfect
                    <span className="text-orange-500">Recipe</span>
                </h1>
                <p className="text-gray-500 w-[70%] font-semibold mt-[10px]">
                    Here you can find the recipes for your favorite dishes and much more. Here you can find the recipes for your favorite dishes and much more
                </p>
            </div>
            {footerItems.map((item, i) => <div key={i} className="flex-1 flex flex-col items-start">
                <p className="font-semibold text-black text-[18px]">{item.head}</p>
                {item.items.map((item2, i) => <p key={i} className="mt-[5px] text-gray-500 font-medium">{item2}</p>)}
            </div>)}

        </div>
        <div className="border-t-2 border-gray-400 w-full my-[20px]"/>
        <div className="flex justify-between">
            <p className="text-[16px] text-gray-500 font-medium">2024 RecipeLogo. All Rights Reserved</p>
            <div className="flex gap-[20px] text-[30px]">
                <FaLinkedin/>
                <FaPinterest/>
                <FaXTwitter/>
                <FaFacebook/>
                <FaInstagram/>
            </div>
        </div>
    </footer>
}

export default Footer