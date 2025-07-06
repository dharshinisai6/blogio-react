import React, { useState } from "react";
import {
  MDBNavbar,
  MDBContainer,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBNavbarToggler,
  MDBNavbarBrand,
  MDBCollapse,
} from "mdb-react-ui-kit";

const Header = () => {
  const [show, setShow] = useState(false);

  const toggleTheme = () => {
    const current = document.documentElement.getAttribute("data-theme");
    const next = current === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
  };

  return (
    <MDBNavbar
      expand="lg"
      light
      style={{
        background: "var(--nav-bg)",
        boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
      }}
    >
      <MDBContainer fluid>
        {/* === Desktop Header Row === */}
        <div className="d-none d-lg-flex justify-content-between align-items-center w-100">
          {/* Left: Logo */}
          <MDBNavbarBrand href="/" className="d-flex align-items-center">
            <img
              src="/images/logo.png"
              alt="logo"
              className="logo-img"
              style={{ borderRadius: "5px", height: "50px" }}
            />
          </MDBNavbarBrand>

          {/* Center: Nav Links (Desktop Only) */}
          <MDBNavbarNav className="d-flex flex-row">
            {["Home", "Add Blog", "About"].map((label, idx) => (
              <MDBNavbarItem key={idx}>
                <MDBNavbarLink
                  href={label === "Home" ? "/" : `/${label.toLowerCase().replace(" ", "")}`}
                  style={{
                    color: "#fff",
                    fontWeight: "500",
                    padding: "0 1rem",
                  }}
                  onMouseOver={(e) => (e.target.style.color = "#ffd700")}
                  onMouseOut={(e) => (e.target.style.color = "#fff")}
                >
                  {label}
                </MDBNavbarLink>
              </MDBNavbarItem>
            ))}
          </MDBNavbarNav>

          {/* Right: Theme Button (Desktop) */}
          <button
            onClick={toggleTheme}
            className="btn btn-outline-light btn-sm"
          >
            🌓 Theme
          </button>
        </div>

        {/* === Mobile Header Row === */}
        <div className="d-flex d-lg-none justify-content-between align-items-center w-100">
          {/* Left: Logo */}
          <MDBNavbarBrand href="/" className="d-flex align-items-center">
            <img
              src="/images/downloadddd.png"
              alt="logo"
              className="logo-img"
              style={{ borderRadius: "5px", height: "50px" }}
            />
          </MDBNavbarBrand>

          {/* Right: Hamburger + Theme Toggle */}
          <div className="d-flex align-items-center">
            <MDBNavbarToggler
              type="button"
              aria-expanded="false"
              aria-label="Toggle navigation"
              style={{ color: "#fff" }}
              onClick={() => setShow(!show)}
            >
              <MDBIcon icon="bars" fas />
            </MDBNavbarToggler>
            <button
              onClick={toggleTheme}
              className="btn btn-outline-light btn-sm ms-2"
            >
              🌓
            </button>
          </div>
        </div>

        {/* === Mobile Nav Collapse ONLY on Mobile === */}
        <div className="d-lg-none w-100">
          <MDBCollapse open={show} navbar>
            <MDBNavbarNav className="mt-3">
              {["Home", "Add Blog", "About"].map((label, idx) => (
                <MDBNavbarItem key={idx}>
                  <MDBNavbarLink
                    href={label === "Home" ? "/" : `/${label.toLowerCase().replace(" ", "")}`}
                    onClick={() => setShow(false)}
                    style={{
                      color: "#fff",
                      fontWeight: "500",
                    }}
                  >
                    {label}
                  </MDBNavbarLink>
                </MDBNavbarItem>
              ))}
            </MDBNavbarNav>
          </MDBCollapse>
        </div>
      </MDBContainer>
    </MDBNavbar>
  );
};

export default Header;
