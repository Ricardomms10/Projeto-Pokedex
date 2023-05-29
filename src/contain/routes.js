import { BrowserRouter, Route, Routes } from "react-router-dom";  

import { Home } from "../components/home";
import { Details } from "../components/detailsPokemons/index";

export const AppRoutes = () => (

    <BrowserRouter>
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="pokemons/:name" element={< Details />} />
        </Routes>
    </BrowserRouter>


)