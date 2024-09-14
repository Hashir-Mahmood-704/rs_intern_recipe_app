import ShowRecipes from "../components/ShowRecipes.jsx"
import {useContext, useState, useEffect} from "react"
import {AppContext} from "../Context/AppContext.jsx"

const availableMealTypes = ["Breakfast", "Snack", "Lunch", "Dinner"]

const RecipeByMealType = () => {
    const {allRecipesData} = useContext(AppContext)
    const [mealType, setMealtype] = useState("Breakfast")
    const [pageNumber, setPageNumber] = useState(0)
    const [recipesToShow, setRecipesToShow] = useState([])
    const [recipesToShowArrayLength, setRecipesToShowArrayLength] = useState(0)
    useEffect(() => {
        if (allRecipesData.length > 0) {
            const filteredRecipes = allRecipesData.filter(item => item.mealType.includes(mealType))
            const slicedRecipesArray = filteredRecipes.slice(
                pageNumber * 10, (pageNumber * 10) + (filteredRecipes.length > 10 ? 10 : filteredRecipes.length)
            )
            setRecipesToShowArrayLength(filteredRecipes.length)
            setRecipesToShow(slicedRecipesArray)
            console.log(slicedRecipesArray)
        }
    }, [pageNumber, allRecipesData, mealType]);

    return <section>
        <h1 className="text-orange-500 font-bold text-[40px] text-center mt-[80px]">Recipes by Meal Type</h1>
        <div className="flex items-center justify-center gap-[20px] flex-wrap mt-[30px] px-[20px]">
            {availableMealTypes.map((item, index) => <button
                onClick={() => {
                    setPageNumber(0)
                    setMealtype(item)
                }}
                key={index}
                className={`text-[18px]  text-white px-[12px] py-[10px] sm:px-[20px] sm:py-[10px] rounded-[10px] ${mealType === item ? 'bg-orange-700' : 'bg-orange-500'}`}>{item}</button>)}
        </div>
        <ShowRecipes
            recipesToShow={recipesToShow}
            pageNumber={pageNumber}
            setPageNumber={setPageNumber}
            recipesArrayLength={recipesToShowArrayLength}
        />
    </section>
}

export default RecipeByMealType