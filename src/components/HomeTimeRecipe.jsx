import {Link} from 'react-router-dom'
import BreakFast from "../assets/breakfast.jpg"
import Lunch from "../assets/lunch.jpg"
import Snack from "../assets/snak.jpg"
import Dinner from "../assets/dinner.jpg"


const Card = (props) => {
    const {img, title} = props
    return <Link to={`/meal-type`} className="relative h-[200px] sm:h-[250px] w-[320px] md:w-[280px]  group">
        <img src={img} alt={title} className="w-full h-full object-cover"/>
        <div className="transition-all duration-200 ease-in-out group-hover:opacity-100 opacity-100 md:opacity-0 z-10 h-full w-full bg-black/60 absolute top-0 left-0 flex justify-center items-center">
            <p className="text-white font-semibold text-[26px]">{title}</p>
        </div>
    </Link>
}

const HomeTimeRecipe = () => {
    return <section className="px-[20px] sm:px-[50px] py-[20px]">
        <h1 className="text-[30px] sm:text-[40px] font-semibold text-black">Recipes by Meal Type</h1>
        <div className="flex items-center gap-[30px] mt-[30px] flex-wrap justify-center">
            <Card img={BreakFast} title="Breakfast"/>
            <Card img={Snack} title="Snack"/>
            <Card img={Lunch} title="Lunch"/>
            <Card img={Dinner} title="Dinner"/>
        </div>
    </section>
}

export default HomeTimeRecipe