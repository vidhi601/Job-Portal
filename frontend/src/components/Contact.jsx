import { useState } from "react";

function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="flex flex-col bg-amber-100 items-center justify-center py-16 px-4">
      
      <h1 className="text-3xl font-bold text-blue-400 mb-8">Contact Us</h1>

      {submitted ? (
        <p className="text-green-600 text-lg font-medium">Message sent!</p>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 w-full max-w-md"
        >
          <input
            type="text"
            placeholder="Name"
            className="border border-gray-300 rounded-lg px-4 py-2 w-full"
            required
          />
          <input
            type="email"
            placeholder="Email"
            className="border border-gray-300 rounded-lg px-4 py-2 w-full"
            required
          />
          <textarea
            placeholder="Message"
            rows={5}
            className="border border-gray-300 rounded-lg px-4 py-2 w-full"
            required
          />
          <button
            type="submit"
            className="bg-blue-400 text-white py-2 rounded-lg hover:bg-blue-500 w-full"
          >
            Submit
          </button>
        </form>
      )}

      <div className="flex gap-6 mt-8">
        <a href="https://linkedin.com/in/vidhi601" className="text-blue-400 hover:underline">
          LinkedIn
        </a>
        <a href="mailto:vidhimalik93@gmail.com" className="text-blue-400 hover:underline">
          Email
        </a>
      </div>
    </div>
  );
}

export default Contact;