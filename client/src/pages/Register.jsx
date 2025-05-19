import React, { useState } from "react";
const Register = () => {
  const path = import.meta.env.VITE_BASE_PATH;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleFormChange = (e) => {
    const value = e.target.value;
    setFormData({
      ...formData,
      [e.target.name]: value,
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
            <label className="form-label" htmlFor="name">
              Name*
            </label>
            <input
              type="text"
              placeholder="Type here"
              className="input mt-2 mb-4"
              name="name"
              id="name"
              value={formData.name}
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
