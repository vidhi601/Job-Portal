import Navbar from "../components/Navbar";
import Hero from   "../components/Hero";
import About from "../components/About";
import Contact from "../components/Contact";
function Landing(){
    return(
        <div>
            <Navbar/>
            <Hero/>
            <About/>
            <Contact/>
        </div>
        
    )
}
export default Landing;