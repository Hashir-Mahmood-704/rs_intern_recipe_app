import {useContext, useState, useEffect} from "react"
import {AppContext} from "../Context/AppContext.jsx"
import RecipeCard from "../components/RecipeCard.jsx"

const AllRecipes = () => {
    const {allRecipesData} = useContext(AppContext)
    const [pageNumber, setPageNumber] = useState(0)
    const [recipesToShow, setRecipesToShow] = useState([])
    const [recipeDataRecieved, setRecipeDataRecieved] = useState([])
    useEffect(() => {
        if (allRecipesData.length > 0) {
            setRecipeDataRecieved(allRecipesData)
        }
    }, [allRecipesData]);

    useEffect(() => {
        // const pagesToShow = allRecipesData.length / 10
        if (recipeDataRecieved.length > 0) {
            const slicedRecipesArray = allRecipesData.slice(pageNumber * 10, (pageNumber * 10) + 10)
            setRecipesToShow(slicedRecipesArray)
        }
    }, [recipeDataRecieved, pageNumber, allRecipesData]);
    return <section className="mt-[80px]">
        <h1 className="text-orange-500 font-bold text-[40px] text-center">All Recipes</h1>
        <div className="flex flex-wrap justify-center gap-[0px] mt-[30px]">
            {recipesToShow.map(item => <RecipeCard key={item.id} {...item} />)}
        </div>
    </section>
}

export default AllRecipes