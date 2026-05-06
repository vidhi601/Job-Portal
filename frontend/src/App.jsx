import { BrowserRouter,Routes,Route } from "react-router-dom";
import Landing from "./pages/landing";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

function App(){
    return(
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Landing/>}/>
            <Route path="/Login" element={<Login/>}/>
            <Route path="/Signup" element={<Signup/>}/>
        </Routes>
        
        
        </BrowserRouter>
    )
}
export default App;