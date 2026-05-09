import Navbar from "../components/Navbar";

const jobs = [
  { id: 1, title: "Frontend Developer", company: "Google", location: "Bangalore", salary: "8-12 LPA", type: "Full-time" },
  { id: 2, title: "React Developer", company: "Amazon", location: "Delhi", salary: "10-15 LPA", type: "Full-time" },
  { id: 3, title: "UI Designer", company: "Swiggy", location: "Mumbai", salary: "5-8 LPA", type: "Internship" },
  { id: 4, title: "Backend Developer", company: "Flipkart", location: "Bangalore", salary: "12-18 LPA", type: "Full-time" },
  { id: 5, title: "Node.js Developer", company: "Zomato", location: "Gurgaon", salary: "8-14 LPA", type: "Full-time" },
  { id: 6, title: "Data Analyst", company: "Paytm", location: "Noida", salary: "6-10 LPA", type: "Internship" },
]

function JobListing() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="p-4 sm:p-6">
        <div className="flex flex-col gap-4 rounded-xl border border-gray-200 bg-white p-4 shadow-sm md:flex-row md:items-center">
          <input
            type="text"
            placeholder="Search Jobs"
            className="w-full flex-1 rounded-lg border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <select className="w-full rounded-lg border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-blue-400 md:w-44">
            <option>All Locations</option>
            <option>Mumbai</option>
            <option>Bangalore</option>
            <option>Noida</option>
            <option>Gurgaon</option>
          </select>
          <select className="w-full rounded-lg border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-blue-400 md:w-52">
            <option>All Types</option>
            <option>Full-time</option>
            <option>Internship</option>
          </select>
        </div>

        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {jobs.map((job) => (
            <div key={job.id} className="bg-white rounded-xl p-5 border border-gray-200 shadow-sm flex flex-col gap-2">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-lg">
                  {job.company[0]}
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 text-sm">{job.title}</h3>
                  <p className="text-xs text-gray-500">{job.company}</p>
                </div>
              </div>
              <p className="text-xs text-gray-500">📍 {job.location}</p>
              <p className="text-xs text-gray-500">💰 {job.salary}</p>
              <span className="text-xs bg-blue-50 text-blue-600 px-3 py-1 rounded-full w-fit">{job.type}</span>
              <button className="mt-2 w-full bg-blue-500 hover:bg-blue-600 text-white text-sm py-2 rounded-lg transition">
                Apply
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default JobListing;