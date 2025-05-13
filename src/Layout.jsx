import React from "react";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <NavBar />
      <main className="content">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
