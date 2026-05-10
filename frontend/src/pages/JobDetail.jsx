import jobs from "../data/jobs";
import { useParams, useNavigate } from "react-router-dom"

function JobDetail(){
    const { id } = useParams();
    const navigate = useNavigate();
    const job = jobs.find((j) => j.id === Number(id))
    
    if (!job) {
      return (
        <div className="min-h-screen flex items-center justify-center">
          <h2 className="text-2xl font-medium text-gray-500 capitalize">Job not found</h2>
        </div>
      )
    }
    
    return (
      <div className=" bg-gray-50 p-4 sm:p-0 min-h-screen">

        <button
          onClick={() => navigate("/JobListing")}
          className="text-blue-500 text-sm mb-6 flex items-center gap-1 hover:underline"
        >
          ← Back to Jobs
        </button>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-5 sm:p-8 max-w-2xl mx-auto">

          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
            <div>
              <h1 className="text-xl sm:text-2xl font-bold text-gray-800">{job.title}</h1>
              <p className="text-gray-500 text-sm mt-1">{job.company} · {job.location} · {job.type}</p>
            </div>
            <button className="w-full sm:w-auto bg-blue-500 hover:bg-blue-600 text-white text-sm px-6 py-2 rounded-lg transition">
              Apply Now
            </button>
          </div>

          <div className="flex flex-wrap gap-2 mt-4">
            <span className="text-xs bg-gray-100 text-gray-600 px-3 py-1 rounded-full">📍 {job.location}</span>
            <span className="text-xs bg-green-50 text-green-600 px-3 py-1 rounded-full">💰 {job.salary}</span>
            <span className="text-xs bg-blue-50 text-blue-600 px-3 py-1 rounded-full">{job.type}</span>
          </div>

          <div className="grid grid-cols-3 gap-3 mt-6">
            <div className="bg-gray-50 rounded-lg p-3 sm:p-4">
              <p className="text-xs text-gray-400">Experience</p>
              <p className="text-sm font-medium text-gray-700 mt-1">{job.experience}</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-3 sm:p-4">
              <p className="text-xs text-gray-400">Openings</p>
              <p className="text-sm font-medium text-gray-700 mt-1">{job.openings}</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-3 sm:p-4">
              <p className="text-xs text-gray-400">Deadline</p>
              <p className="text-sm font-medium text-gray-700 mt-1">{job.deadline}</p>
            </div>
          </div>

          <div className="mt-6">
            <h2 className="text-base font-semibold text-gray-800">About the role</h2>
            <p className="text-gray-500 text-sm mt-2 leading-relaxed">{job.description}</p>
          </div>

          <div className="mt-6">
            <h2 className="text-base font-semibold text-gray-800">Requirements</h2>
            <ul className="mt-2 flex flex-col gap-2">
              {job.requirements.map((req, index) => (
                <li key={index} className="text-sm text-gray-500">· {req}</li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    )
}

export default JobDetail;