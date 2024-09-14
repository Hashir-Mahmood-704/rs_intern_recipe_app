import {useParams} from "react-router-dom"
import {useContext, useState, useEffect} from "react"
import {AppContext} from "../Context/AppContext.jsx"
import Spinner from "../components/Spinner.jsx"

const RecipeDetails = () => {
    const {id} = useParams()
    const {allRecipesData, isLoading} = useContext(AppContext)
    const [details, setDetails] = useState(null)
    useEffect(() => {
        const recipeDetailsData = allRecipesData.find(item => item.id === Number(id))
        setDetails(recipeDetailsData)
    }, [allRecipesData, id]);
    if(isLoading) return <div className="flex justify-center items-center min-h-screen">
        <Spinner />
    </div>
    else if (!isLoading && !details) return <div className="flex justify-center items-center min-h-screen"><p className="text-center text-[24px] font-medium">OOPS! Looks like something went wrong, no recipe found!</p></div>
    else if (!isLoading && details) return <section>
        <h1 className="text-orange-500 font-bold text-[25px] sm:text-[40px] text-center mt-[80px]">Recipe Details</h1>
        <div className="px-[20px] py-[20px] sm:px-[80px] sm:py-[40px]">
            <h1 className="text-center sm:text-start text-[30px] sm:text-[40px] font-semibold">{details.name}</h1>
            <div className="flex gap-[20px] flex-col sm:flex-row mt-[20px]">
                <img src={details.image} alt={details.name} className="sm:w-[800px] sm:h-[600px] object-cover"/>
                <div className="border p-[10px] sm:p-[15px] bg-orange-500 h-fit">
                    <h1 className="text-[18px] sm:text-[22px] font-semibold text-center">Ingredients</h1>
                    <ul className="flex flex-col gap-[10px] justify-center mt-[10px] items-start">
                        {details.ingredients.map((ingredient, index) => <li
                            key={index}
                            className="ml-[20px] list-decimal text-[16px] font-medium text-white"
                        >
                            {ingredient}
                        </li>)}
                    </ul>
                </div>
            </div>
            <div className="flex flex-col gap-[5px] text-[18px] mt-[20px]">
                <p className="flex font-semibold">Cuisine :<span className="text-orange-500 ml-[5px] font-bold">{" "}{details.cuisine}</span></p>
                <p className="flex font-semibold">Servings :<span className="text-orange-500 ml-[5px] font-bold">{" "}{details.servings}</span></p>
                <p className="flex font-semibold">Difficulty :<span className="text-orange-500 ml-[5px] font-bold">{" "}{details.difficulty}</span></p>
                <p className="flex font-semibold">Prep time :<span className="text-orange-500 ml-[5px] font-bold">{" "}{details.prepTimeMinutes} min</span></p>
            </div>

            <div className="mt-[20px]">
                <h1 className="text-[30px] sm:text-[40px] font-semibold">Instructions</h1>
                <ul className="p-[20px] flex flex-col gap-[5px]">
                    {details.instructions.map((item, index) => <li className="list-disc text-[16px] sm:text-[18px] text-orange-500" key={index}>
                        {item}
                    </li>)}
                </ul>
            </div>
        </div>

    </section>
}

export default RecipeDetails