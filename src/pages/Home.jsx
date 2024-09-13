// import {useContext} from "react"
// import {AppContext} from "../Context/AppContext.jsx"
import HomeBanner from "../components/HomeBanner.jsx"
import HomeAfterBanner from "../components/HomeAfterBanner.jsx"
import HomeShowRecipes from "../components/HomeShowRecipes.jsx"

const Home = () => {
    return <main className="flex flex-col items-start gap-[40px]">
        <HomeBanner/>
        <section className="max-w-[1600px] w-full mx-auto">
            <HomeAfterBanner/>
            <HomeShowRecipes />
        </section>
    </main>
}

export default Home