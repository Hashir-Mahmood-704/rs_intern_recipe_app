import {useState, useEffect, createContext} from "react"

export const AppContext = createContext({})

const AppProvider = ({children}) => {
    const [allRecipesData, setAllRecipesData] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    useEffect(() => {
        const fetchRecipeData = async () => {
            setIsLoading(true)
            try {
                const url = "https://dummyjson.com/recipes?limit=0"
                const response = await fetch(url)
                if (!response.ok) {
                    throw new Error("Unexpected error, fetching recipes failed")
                }
                const data = await response.json()
                setAllRecipesData(data["recipes"])
                setIsLoading(false)
            } catch (error) {
                setIsLoading(false)
                console.error("Error in fetching recipe data")
                if (error instanceof Error) {
                    console.error(error.message)
                } else {
                    console.error(error)
                }
            }
        }
        (async () => await fetchRecipeData())()
    }, []);
    return <AppContext.Provider
        value={{allRecipesData, setAllRecipesData, isLoading}}>
        {children}
    </AppContext.Provider>
}

export default AppProvider
