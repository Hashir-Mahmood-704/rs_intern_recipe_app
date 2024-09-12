import {useContext} from "react"
import {AppContext} from "../Context/AppContext.jsx"

const Home = () => {
    const {allRecipesData} = useContext(AppContext)
    console.log(allRecipesData)
    return <main>Home</main>
}

export default Home