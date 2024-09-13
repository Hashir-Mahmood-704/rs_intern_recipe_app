import RecipeCard from "./RecipeCard.jsx"

const HomeShowRecipes = (props) => {
    const {title, recipesArray} = props
    return <section className="px-[20px] sm:px-[50px] py-[20px] border">
        <h1 className="text-[35px] sm:text-[40px] font-semibold text-black">{title}</h1>
        <div className="flex flex-wrap justify-center mt-[30px] sm:mt-[40px] gap-[40px]">
            {recipesArray.map((recipe) => <RecipeCard key={recipe.id} {...recipe}/>)}
        </div>
    </section>
}

export default HomeShowRecipes