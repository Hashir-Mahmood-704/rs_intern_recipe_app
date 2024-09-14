import {useContext, useState, useEffect} from "react"
import {AppContext} from "../Context/AppContext.jsx"
import ShowRecipes from "../components/ShowRecipes.jsx"

const AllRecipes = () => {
    const {allRecipesData} = useContext(AppContext)
    const [pageNumber, setPageNumber] = useState(0)
    const [recipesToShow, setRecipesToShow] = useState([])
    useEffect(() => {
        if (allRecipesData.length > 0) {
            const slicedRecipesArray = allRecipesData.slice(
                pageNumber * 10, (pageNumber * 10) + (allRecipesData.length > 10 ? 10 : allRecipesData.length)
            )
            setRecipesToShow(slicedRecipesArray)
        }
    }, [pageNumber, allRecipesData]);
    return <section>

        <h1 className="text-orange-500 font-bold text-[40px] text-center mt-[80px]">All Recipes</h1>
        <ShowRecipes
            recipesToShow={recipesToShow}
            pageNumber={pageNumber}
            setPageNumber={setPageNumber}
            recipesArrayLength={allRecipesData.length}
        />
    </section>
}

export default AllRecipes