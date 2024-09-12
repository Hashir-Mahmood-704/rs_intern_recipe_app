import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./pages/Home.jsx"
import Layout from "./pages/Layout.jsx"
import RecipeByCuisine from "./pages/RecipeByCuisine.jsx"
import Search from "./pages/Search.jsx"
import Category from "./pages/Category.jsx"
import RecipeDetails from "./pages/RecipieDetails.jsx"
import AppProvider from "./Context/AppContext.jsx"

const App = () => {
    return <AppProvider>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index element={<Home/>}/>
                    <Route path="recipe-by-cuisine" element={<RecipeByCuisine/>}/>
                    <Route path="search" element={<Search/>}/>
                    <Route path="category/:category" element={<Category/>}/>
                    <Route path="details/:id" element={<RecipeDetails/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    </AppProvider>
}

export default App