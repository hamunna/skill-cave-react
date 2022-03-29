import { Routes, Route, useParams } from "react-router-dom";
import Home from "./Pages/Home/Home";
import './App.css';
import SignIn from "./Pages/SignIn/SignIn";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
        </Routes>
    );
}
export default App;