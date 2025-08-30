import { Routes, Route } from "react-router-dom";
import { Home, Detail } from "./pages";

const AppRoutes: React.FC = () => {
    return (
        <div className="">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/detail" element={<Detail />} />
            </Routes>
        </div>
    );
};
export default AppRoutes;
