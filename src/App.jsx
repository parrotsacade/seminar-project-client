import React from "react";
import { Link } from "react-router";

const SeminarForm = () => {

  const handleSubmitData=(e)=>{
   e.preventDefault()
   const form =  e.target
   const name =form.name.value
   const email =form.email.value
   const number =form.number.value
   const address =form.address.value
   console.log(name,email,number,address);
   const data = {name,email,number,address}
   fetch("http://localhost:5000/seminar",{
     method:"POST",
     headers:{
        "content-type": "application/json",
     },
     body:JSON.stringify(data)
   })
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-blue-200 px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">
        <h2 className="text-3xl font-bold text-center text-blue-600 mb-2">
          Seminar Registration
        </h2>
        <p className="text-center text-gray-500 mb-6">
          Join our upcoming seminar
        </p>

        <form onSubmit={handleSubmitData} className="space-y-4" >
          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Phone Number
            </label>
            <input
              type="tel"
              name="number"
              placeholder="Enter your phone number"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Address */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Address
            </label>
            <textarea
              rows="3"
              name="address"
              placeholder="Enter your address"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none"
            ></textarea>
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition duration-300"
          >
            Register Now
          </button>
        </form>
        <Link to='/users'><button className="btn btn-secondary my-5">All Registations</button></Link>
      </div>
    </div>
  );
};

export default SeminarForm;
