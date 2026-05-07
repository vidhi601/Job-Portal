import Navbar from "../components/Navbar";
import bg from "../assets/login bg image.jpeg";
import { Link } from "react-router-dom";

function Login(){
    return(
        <div>
            <Navbar/>
            <div className="flex justify-center items-center min-h-screen px-4"
                style={{backgroundImage: `url(${bg})`, backgroundSize:"cover"}}>
                
                <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-2xl w-full max-w-sm space-y-4 border border-white/40">
                    
                    <h2 className="text-2xl font-bold text-center text-white drop-shadow">Welcome Back</h2>
                    <p className="text-center text-white/70 text-sm">Login to your HireHub account</p>
                    
                    <input 
                        type="email" 
                        placeholder="Email or Username" 
                        className="p-3 bg-white/20 border border-white/30 text-white placeholder-white/60 w-full rounded-xl focus:outline-none focus:ring-2 focus:ring-white/50"
                    />
                    <input 
                        type="password" 
                        placeholder="Password" 
                        className="p-3 bg-white/20 border border-white/30 text-white placeholder-white/60 w-full rounded-xl focus:outline-none focus:ring-2 focus:ring-white/50"
                    />
                    
                    <button className="w-full p-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-xl transition duration-300">
                        Login
                    </button>
                    
                    <p className="text-center text-white/80 text-sm">
                        Don't have an account?{' '}
                        <Link to="/signup" className="text-white font-semibold underline">Sign Up</Link>
                    </p>
                </div>

            </div>
        </div>
    )
}

export default Login;