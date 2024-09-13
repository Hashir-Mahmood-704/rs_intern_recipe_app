import Adams from "../assets/adams.png"
import Cadbury from "../assets/cadbury.png"
import Lipton from "../assets/lipton.png"
import Uniliver from "../assets/uniliver.png"
import Nestle from "../assets/netle.png"
import Dalda from "../assets/dalda.png"

const HomeMarquee = () => {
    return <div className="flex lg:flex-row flex-col justify-center items-center gap-[80px]">
        <img src={`${Adams}`} alt="adams" className="w-[100px] sm:w-[150px]"/>
        <img src={`${Cadbury}`} alt="adams" className="w-[100px] sm:w-[150px]"/>
        <img src={`${Lipton}`} alt="adams" className="w-[100px] sm:w-[150px]"/>
        <img src={`${Uniliver}`} alt="adams" className="w-[60px] sm:w-[100px]"/>
        <img src={`${Nestle}`} alt="adams" className="w-[60px] sm:w-[100px]"/>
        <img src={`${Dalda}`} alt="adams" className="w-[60px] sm:w-[100px]"/>

    </div>
}

export default HomeMarquee