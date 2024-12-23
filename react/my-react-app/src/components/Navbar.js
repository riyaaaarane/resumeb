import React from "react";
import { Outlet } from "react-router-dom"; // Correctly import Outlet

class Navbar extends React.Component {
  render() {
    return (
      <>
        <nav className="navbar" style={{ backgroundColor: "#E0E0E0" }}>
          <div className="container-fluid">
            <a className="navbar-brand" href="#" style={{ fontSize: "1.5rem", fontWeight: "bold" }}>
              RESUME BUILDER
            </a>
          </div>
        </nav>
        <Outlet /> {/* This will render the Card or Details component */}
      </>
    );
  }
}

export default Navbar;
