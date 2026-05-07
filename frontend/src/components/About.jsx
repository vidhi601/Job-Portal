function About(){
    return(
        <div id="about" className="flex flex-col w-full bg-amber-50 items-center py-16 px-10">
            <h1 className="uppercase text-blue-400 py-6 text-3xl font-bold">Why HireHub?</h1>
            <div className="flex flex-col md:flex-row gap-8 mt-6">
                <div className="bg-white rounded-xl p-6 shadow-md w-full md:w-64 flex flex-col gap-3">
                    <div className="bg-blue-100 w-10 h-10 rounded-lg flex items-center justify-center text-blue-600 text-xl">🎯</div>
                    <h3 className="font-bold text-lg">AI Match Score</h3>
                    <p className="text-gray-500 text-sm">Upload your resume, and our AI instantly tells you how well your skills match any job — no more guessing if you're a fit.</p>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-md w-full md:w-64 flex flex-col gap-3">
                    <div className="bg-purple-100 w-10 h-10 rounded-lg flex items-center justify-center text-purple-600 text-xl">⚡</div>
                    <h3 className="font-bold text-lg">Built for Freshers</h3>
                    <p className="text-gray-500 text-sm">Just graduated? HireHub filters jobs by skills, not years of experience — so your first opportunity is actually reachable.</p>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-md w-full md:w-64 flex flex-col gap-3">
                    <div className="bg-green-100 w-10 h-10 rounded-lg flex items-center justify-center text-green-600 text-xl">📊</div>
                    <h3 className="font-bold text-lg">Know Where You Stand</h3>
                    <p className="text-gray-500 text-sm">Applied and heard nothing? Track every application live — from submitted to shortlisted to hired. No more waiting in the dark.</p>
                </div>
            </div>
        </div>
    )
}
export default About;