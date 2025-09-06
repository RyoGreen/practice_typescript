import { Routes, Route } from "react-router-dom";
import { Home, Detail } from "./pages";
import React from "react";
import { UserProvider } from "./context/userContext";


const AppRoutes: React.FC = () => {
    return (
        <UserProvider>

            < Routes >
                <Route path="/" element={<Home />} />
                < Route path="/detail" element={< Detail />} />
            </Routes >
        </UserProvider>
    );
};

export default AppRoutes;
