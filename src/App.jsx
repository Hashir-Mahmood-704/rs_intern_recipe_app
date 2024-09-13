import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./pages/Home.jsx"
import Layout from "./pages/Layout.jsx"
import RecipeByCuisine from "./pages/RecipeByCuisine.jsx"
import Search from "./pages/Search.jsx"
import RecipeDetails from "./pages/RecipieDetails.jsx"
import AppProvider from "./Context/AppContext.jsx"
import AllRecipes from "./pages/AllRecipes.jsx"
import RecipeByMealType from "./pages/RecipeByMealType.jsx"

const App = () => {
    return <AppProvider>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index element={<Home/>}/>
                    <Route path="all" element={<AllRecipes/>}/>
                    <Route path="cuisine/:cuisine" element={<RecipeByCuisine/>}/>
                    <Route path="search" element={<Search/>}/>
                    <Route path="meal-type/:type" element={<RecipeByMealType/>}/>
                    <Route path="details/:id" element={<RecipeDetails/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    </AppProvider>
}

export default App