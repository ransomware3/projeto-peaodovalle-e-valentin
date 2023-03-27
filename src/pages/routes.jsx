import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Home } from "./home"
import { Discography } from "./discography"
import { Biography } from "./biography"
import { Contact } from "./contact"

const AppRoutes = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Home/>}/>
                <Route exact path="/discografia" element={<Discography/>}/>
                <Route exact path="/biografia" element={<Biography/>}/>
                <Route exact path="/contato" element={<Contact/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export { AppRoutes }