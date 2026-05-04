import heroImg from '../assets/images.jpeg'

function Hero(){
    return(
        <div className="bg-gradient-to-r from-blue-900 to-purple-900 w-full py-16 px-6 md:px-10">
            <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                <div className="w-full md:w-1/2 text-white flex flex-col gap-4 text-center md:text-left">
                    <h6 className="text-purple-300 text-sm font-semibold tracking-widest uppercase">Why you need to join us?</h6>
                    <h1 className="text-3xl md:text-4xl font-bold leading-tight">HireHub searches a job for you based on skill match</h1>
                    <p className="text-gray-300 text-base">Stop applying blindly. HireHub matches your skills with the right jobs — saving time and getting you hired faster.</p>
                    <button className="bg-purple-500 hover:bg-purple-600 text-white px-6 py-3 rounded-lg w-fit mx-auto md:mx-0">Get Started</button>
                </div>
                <div className="w-full md:w-1/2 flex justify-center md:justify-end">
                    <img src={heroImg} alt="hero" className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-2xl mix-blend-luminosity" />
                </div>
            </div>
        </div>
    )
}
export default Hero;