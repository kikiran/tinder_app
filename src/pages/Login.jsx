import React, { useState } from "react";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleFormChange = (e) => {
    const value = e.target.value;
    setFormData({
      ...formData,
      [e.target.name]: value,
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log("============", formData);
  };

  return (
    <div className="flex justify-center items-center my-20">
      <div className="card bg-base-100 w-96 shadow-sm">
        <div className="card-body">
          <h2 className="card-title text-center w-full justify-center">
            Login
          </h2>
          <form className="flex flex-col" onSubmit={(e) => handleFormSubmit(e)}>
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

            <div className="card-actions justify-center pt-4">
              <button className="btn btn-primary">Sign In</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
