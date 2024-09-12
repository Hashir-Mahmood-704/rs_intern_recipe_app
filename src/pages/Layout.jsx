import {Outlet} from "react-router-dom"
import Navbar from "../components/Navbar.jsx"
import Footer from "../components/Footer.jsx"

const Layout = () => {
    return <main>
        <Navbar/>
        <Outlet/>
        <Footer/>
    </main>
}

export default Layout