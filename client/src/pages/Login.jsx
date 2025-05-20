import React, { useState } from "react";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { addUser } from "../store/slices/userSlice";

const path = import.meta.env.VITE_BASE_PATH;

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  let navigate = useNavigate();
  const dispatch = useDispatch();

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
      const response = await fetch(`${path}/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
        credentials: "include",
      });

      const data = await response.json();
      if (!response.ok) {
        alert("Login failed");
        return;
      }
      dispatch(addUser(data));
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
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
            <a className="link link-primary text-right" href="/register">
              Register
            </a>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
