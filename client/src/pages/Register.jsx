import React, { useState } from "react";
const Register = () => {
  const path = import.meta.env.VITE_BASE_PATH;

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    gender: "",
    dob: "",
    imageUpload:""
  });

  const handleFormChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData({
      ...formData,
      [name]: type === "file" ? files[0] : value,
    });
  
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${path}/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();

      if (response.ok) {
        console.log("user registerd successfully", data);
      } else {
        console.log("Registration failed", data.message);
      }
    } catch (error) {
      console.error("Network error:", error.message);
    }
  };

  return (
    <div className="flex justify-center items-center my-20">
      <div className="card bg-base-100 w-96 shadow-sm">
        <div className="card-body">
          <h2 className="card-title text-center w-full justify-center">
            Register
          </h2>
          <form className="flex flex-col" onSubmit={(e) => handleFormSubmit(e)}>
            <label className="form-label" htmlFor="firstName">
              First Name*
            </label>
            <input
              type="text"
              placeholder="Type here"
              className="input mt-2 mb-4"
              name="firstName"
              id="firstName"
              value={formData.firstName}
              onChange={handleFormChange}
            />
            <label className="form-label" htmlFor="lastName">
              Last Name*
            </label>
            <input
              type="text"
              placeholder="Type here"
              className="input mt-2 mb-4"
              name="lastName"
              id="lastName"
              value={formData.lastName}
              onChange={handleFormChange}
            />
            <label className="form-label" htmlFor="email">
              Email*
            </label>
            <input
              type="email"
              placeholder="Type here"
              className="input mt-2 mb-4"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleFormChange}
            />

            <label className="form-label" htmlFor="password">
              Password*
            </label>
            <input
              type="password"
              placeholder="Type here"
              className="input mt-2 mb-4"
              name="password"
              id="password"
              value={formData.password}
              onChange={handleFormChange}
            />
            <label className="form-label" htmlFor="password">
              Confirm Password*
            </label>
            <input
              type="confirmPassword"
              placeholder="Type here"
              className="input mt-2 mb-4"
              name="confirmPassword"
              id="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleFormChange}
            />
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Gender*
              </label>
              <div className="flex space-x-6">
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="gender"
                    value="male"
                    className="form-radio text-blue-600"
                    onChange={handleFormChange}
                    checked={formData.gender === "male"}
                  />
                  <span className="ml-2">Male</span>
                </label>

                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="gender"
                    value="female"
                    className="form-radio text-pink-500"
                    onChange={handleFormChange}
                    checked={formData.gender === "female"}
                  />
                  <span className="ml-2">Female</span>
                </label>

                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="gender"
                    value="other"
                    className="form-radio text-purple-500"
                    onChange={handleFormChange}
                    checked={formData.gender === "other"}
                  />
                  <span className="ml-2">Other</span>
                </label>
              </div>
            </div>

            <label className="form-label" htmlFor="dob">
              Date Of Birth*
            </label>
            <input
              type="date"
              placeholder="Type here"
              className="input mt-2 mb-4"
              name="dob"
              id="dob"
              value={formData.dob}
              onChange={handleFormChange}
            />
            <label className="form-label" htmlFor="password">
              Upload Pic*
            </label>
            <input
              type="file"
              placeholder="Type here"
              className="file-input mt-2 mb-4"
              name="imageUpload"
              id="imageUpload"
              onChange={handleFormChange}
            />

            <div className="card-actions justify-center pt-4">
              <button className="btn btn-primary">Sing Up</button>
            </div>
            <a className="link link-primary text-right" href="/login">
              Login
            </a>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
