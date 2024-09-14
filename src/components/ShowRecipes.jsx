import RecipeCard from "./RecipeCard.jsx"
import {GrLinkNext, GrLinkPrevious} from "react-icons/gr"

const ShowRecipes = (props) => {
    const {recipesToShow, pageNumber, setPageNumber, recipesArrayLength} = props
    return <section className="mt-[40px]">
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
            {pageNumber + 1 < recipesArrayLength / 10 && <span
                onClick={() => setPageNumber(prev => prev + 1)}
                className="cursor-pointer">
                <GrLinkNext/>
            </span>}
        </div>
    </section>
}

export default ShowRecipes