import {useContext} from "react"
import {AppContext} from "../Context/AppContext.jsx"
import HomeBanner from "../components/HomeBanner.jsx"
import HomeAfterBanner from "../components/HomeAfterBanner.jsx"
import HomeShowRecipes from "../components/HomeShowRecipes.jsx"
import HomeTimeRecipe from "../components/HomeTimeRecipe.jsx"
import HomeMarquee from "../components/HomeMarquee.jsx"
import Spinner from "../components/Spinner.jsx"


const Home = () => {
    const {allRecipesData, isLoading} = useContext(AppContext)
    return <main className="flex flex-col items-start gap-[40px]">
        <HomeBanner/>
        <section className="max-w-[1600px] w-full mx-auto flex flex-col gap-[40px]">
            <HomeAfterBanner/>
            {isLoading ?
                <div className="min-h-[400px] flex justify-center items-center">
                    <Spinner/>
                </div> : allRecipesData.length > 0 &&
                <HomeShowRecipes
                    title="Trending Recipes"
                    recipesArray={allRecipesData.slice(0, 8)}
                />
            }
            {isLoading ?
                <div className="min-h-[400px] flex justify-center items-center">
                    <Spinner/>
                </div> : allRecipesData.length > 0 &&
                <HomeShowRecipes
                    title="Premium Recipes"
                    recipesArray={allRecipesData.slice(10, 18)}
                />
            }
            <HomeTimeRecipe/>
            <HomeMarquee/>

        </section>
    </main>
}

export default Home