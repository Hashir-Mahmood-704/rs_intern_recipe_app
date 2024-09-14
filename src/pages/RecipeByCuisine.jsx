import ShowRecipes from "../components/ShowRecipes.jsx"
import {useContext, useState, useEffect} from "react"
import {AppContext} from "../Context/AppContext.jsx"

const availableCuisines = ["Italian", "Asian", "Pakistani", "Indian",
    "Russian", "Japanese", "Korean", "Turkish", "others"]

const RecipeByCuisine = () => {
    const {allRecipesData} = useContext(AppContext)
    const [cuisine, setCuisine] = useState("Italian")
    const [pageNumber, setPageNumber] = useState(0)
    const [recipesToShow, setRecipesToShow] = useState([])
    const [recipesToShowArrayLength, setRecipesToShowArrayLength] = useState(0)
    useEffect(() => {
        if (allRecipesData.length > 0) {
            let filteredRecipes
            if (cuisine !== "others") {
                filteredRecipes = allRecipesData.filter(item =>
                    item.cuisine.toLowerCase().includes(cuisine.toLowerCase())
                )
            } else {
                filteredRecipes = allRecipesData.filter(item => !availableCuisines.includes(item.cuisine))
            }
            const slicedRecipesArray = filteredRecipes.slice(
                pageNumber * 10, (pageNumber * 10) + (filteredRecipes.length > 10 ? 10 : filteredRecipes.length)
            )
            setRecipesToShowArrayLength(filteredRecipes.length)
            setRecipesToShow(slicedRecipesArray)
        }
    }, [pageNumber, allRecipesData, cuisine]);

    return <section>
        <h1 className="text-orange-500 font-bold text-[40px] text-center mt-[80px]">Recipes by Cuisine</h1>
        <div className="flex items-center justify-center gap-[20px] flex-wrap mt-[30px] px-[20px]">
            {availableCuisines.map((item, index) => <button
                onClick={() => {
                    setPageNumber(0)
                    setCuisine(item)
                }}
                key={index}
                className={`text-[18px]  text-white px-[12px] py-[10px] sm:px-[20px] sm:py-[10px] rounded-[10px] ${cuisine === item ? 'bg-orange-700' : 'bg-orange-500'}`}>{item}</button>)}
        </div>
        <ShowRecipes
            recipesToShow={recipesToShow}
            pageNumber={pageNumber}
            setPageNumber={setPageNumber}
            recipesArrayLength={recipesToShowArrayLength}
        />
    </section>
}

export default RecipeByCuisine