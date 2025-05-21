import React, { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import { BASE_PATH } from "./utils/Constants";
import { addUser } from "./store/slices/userSlice";


const Layout = ({ children }) => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const fetchUser = async () => {
    try {
      const response = await axios.get(`${BASE_PATH}/user`, { withCredentials: true});
      dispatch(addUser(response.data));
    } catch (error) {
      navigate('/login');
      console.log('something went wrong', error.message)
    }
  }

  useEffect(() => {
    fetchUser()
  }, [])
  
  return (
    <div className="layout">
      <NavBar />
      <main className="content">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
