import "./App.css";
import AppRoutes from "./AppRoutes";
import { BrowserRouter } from "react-router-dom";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";


function App() {
    return (
        <div className="App flex flex-col min-h-screen justify-between">
            <Header />
            <BrowserRouter>
                <AppRoutes />
            </BrowserRouter>
            <Footer />
        </div>
    );
}
export default App
