import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Filme from "./pages/filme";
import Header from "./componentes/Header";

function RoutesApp(){

    return(
        <div>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/filme/:id" element={<Filme/>}/>
                        <Header/>
                    </Routes>
                </BrowserRouter>

        </div>
    )
}

export default RoutesApp;