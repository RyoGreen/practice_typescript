import "./App.css";
import AppRoutes from "./AppRoutes";
import { BrowserRouter } from "react-router-dom";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";


function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Header />
                <AppRoutes />
                <Footer />
            </BrowserRouter>
        </div>
    );
}
export default App
