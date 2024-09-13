import {useContext, useState, useEffect} from "react"
import {AppContext} from "../Context/AppContext.jsx"
import RecipeCard from "../components/RecipeCard.jsx"
import {GrLinkPrevious, GrLinkNext} from "react-icons/gr";

const AllRecipes = () => {
    const {allRecipesData} = useContext(AppContext)
    const [pageNumber, setPageNumber] = useState(0)
    const [recipesToShow, setRecipesToShow] = useState([])
    const [recipeDataReceived, setRecipeDataReceived] = useState([])
    useEffect(() => {
        if (allRecipesData.length > 0) {
            setRecipeDataReceived(allRecipesData)
        }
    }, [allRecipesData])
    useEffect(() => {
        if (recipeDataReceived.length > 0) {
            const slicedRecipesArray = allRecipesData.slice(pageNumber * 10, (pageNumber * 10) + 10)
            setRecipesToShow(slicedRecipesArray)
        }
    }, [recipeDataReceived, pageNumber, allRecipesData]);
    return <section className="mt-[80px]">
        <h1 className="text-orange-500 font-bold text-[40px] text-center">All Recipes</h1>
        <div className="flex flex-wrap justify-center gap-[20px] mt-[30px]">
            {recipesToShow.map(item => <RecipeCard key={item.id} {...item} />)}
        </div>

        <div className="flex gap-[10px] items-center justify-center mt-[40px] text-[20px]">
            {pageNumber + 1 > 1 && <span
                className="cursor-pointer"
                onClick={() => setPageNumber(prev => prev - 1)}
            >
            <GrLinkPrevious/>
            </span>}
            <span className="bg-orange-500 px-[10px] rounded-full font-bold text-[18px] text-white">
                {pageNumber + 1}
            </span>
            {pageNumber + 1 < recipeDataReceived.length / 10 && <span
                onClick={() => setPageNumber(prev => prev + 1)}
                className="cursor-pointer">
                <GrLinkNext/>
            </span>}
        </div>
    </section>
}

export default AllRecipes