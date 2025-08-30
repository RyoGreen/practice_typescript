import { Routes, Route } from "react-router-dom";
import { Home, Detail } from "./pages";

const AppRoutes: React.FC = () => {
    return (
        <div className="flex-1 container mx-auto px-4 py-8">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/detail" element={<Detail />} />
            </Routes>
        </div>
    );
};
export default AppRoutes;
