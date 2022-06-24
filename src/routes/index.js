import { Routes, Route } from "react-router-dom";
import Home from "../pages/home";
import paths from "./paths";


const AppRouter = () => {
    return (
        <Routes>
            <Route path={paths.HOME} element={<Home />}/>
        </Routes>
    )
}

export default AppRouter;