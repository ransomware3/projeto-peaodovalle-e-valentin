import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Home } from "./home"
import { Discography } from "./discography"
import { Biography } from "./biography"
import { Contact } from "./contact"
import { PresentationsTV } from "./presentations"
import { ScrollToTop } from "./scrollToTop"

const AppRoutes = () => {
    return(
        <BrowserRouter>
            <ScrollToTop/>
            <Routes>
                <Route exact path="/" element={<Home/>}/>
                <Route exact path="/discografia" element={<Discography/>}/>
                <Route exact path="/apresentacoes" element={<PresentationsTV/>}/>
                <Route exact path="/biografia" element={<Biography/>}/>
                <Route exact path="/contato" element={<Contact/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export { AppRoutes }