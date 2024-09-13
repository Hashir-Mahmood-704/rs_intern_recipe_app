import RecipeCard from "./RecipeCard.jsx"
import {Link} from 'react-router-dom'

const HomeShowRecipes = (props) => {
    const {title, recipesArray} = props
    return <section className="px-[20px] sm:px-[50px] py-[20px]">
        <h1 className="text-[35px] sm:text-[40px] font-semibold text-black">{title}</h1>
        <div className="flex flex-wrap justify-center mt-[30px] sm:mt-[40px] gap-[20px]">
            {recipesArray.map((recipe) => <RecipeCard key={recipe.id} {...recipe}/>)}
        </div>
        <div className="w-full flex justify-center mt-[40px]">
            <Link to="/all">
                <button className="gap-[10px] text-[18px] bg-orange-500 text-white px-[20px] py-[10px] rounded-[10px] mt-[10px]">See more</button>
            </Link>
        </div>
    </section>
}

export default HomeShowRecipes