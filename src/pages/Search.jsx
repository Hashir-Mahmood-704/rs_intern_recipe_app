import ShowRecipes from "../components/ShowRecipes.jsx"
import {useContext, useState, useEffect} from "react"
import {AppContext} from "../Context/AppContext.jsx"

const Search = () => {
    const [searchText, setSearchText] = useState("")
    const {allRecipesData} = useContext(AppContext)
    const [pageNumber, setPageNumber] = useState(0)
    const [recipesToShow, setRecipesToShow] = useState([])
    const [recipesToShowArrayLength, setRecipesToShowArrayLength] = useState(0)
    useEffect(() => {
        if (allRecipesData.length > 0) {
            const filteredRecipes = allRecipesData.filter(item =>
                item.name.toLowerCase().includes(searchText.toLowerCase())
                || item.cuisine.toLowerCase().includes(searchText.toLowerCase())
                || item.mealType.includes(searchText.charAt(0).toUpperCase().concat(searchText.slice(1)))
            )
            const slicedRecipesArray = filteredRecipes.slice(
                pageNumber * 10, (pageNumber * 10) + (filteredRecipes.length > 10 ? 10 : filteredRecipes.length)
            )
            setRecipesToShowArrayLength(filteredRecipes.length)
            setRecipesToShow(slicedRecipesArray)
        }
    }, [pageNumber, allRecipesData, searchText]);
    return <section>
        <h1 className="text-orange-500 font-bold text-[40px] text-center mt-[80px]">Search Your Favorite Recipes</h1>
        <form className="flex justify-center mt-[20px]">
            <input
                value={searchText}
                onChange={e => setSearchText(e.target.value)}
                placeholder="Search by name, cuisine or meal type"
                className="border py-[10px] px-[15px] text-orange-500 font-medium outline-0 text-[18px] w-[400px]"
            />
        </form>
        <ShowRecipes
            recipesToShow={recipesToShow}
            pageNumber={pageNumber}
            setPageNumber={setPageNumber}
            recipesArrayLength={recipesToShowArrayLength}
        />
    </section>
}

export default Search