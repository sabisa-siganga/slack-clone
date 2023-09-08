import React from "react";
import "./header.scss";
import { ReactComponent as ReactLogo } from "../../assets/logo.svg";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

function Header() {
  return (
    // Navigation menu component to display navigation links
    <header className="header py-4">
      <div className=" px-5">
        {/* slack logo */}
        <ReactLogo />
      </div>

      {/* Navbar links */}
      <Navbar>
        <Link href="/features" className="d-flex">
          Features
          <span className="material-symbols-outlined drop-down-arrow">
            arrow_drop_down
          </span>
        </Link>

        <Link href="/solutions" className="d-flex">
          Solutions{" "}
          <span className="material-symbols-outlined drop-down-arrow">
            arrow_drop_down
          </span>
        </Link>

        <Link href="/enterprise">Enterprise</Link>
        <Link href="/resources" className="d-flex">
          Resources
          <span className="material-symbols-outlined drop-down-arrow">
            arrow_drop_down
          </span>
        </Link>

        <Link href="/pricing">Pricing</Link>
      </Navbar>
      <div className="left-nav-side">
        <div className="searchSign">
          <span class="material-symbols-outlined">search</span>
          <Link href="#pricing">Sign in </Link>
        </div>

        {/* Buttons on the bavbar */}
        <div className="buttons">
          <Button className="btn btn-dark purple ">TALK FOR SALES</Button>
          <Button className="btn btn-dark white ">TRY FOR FREE</Button>
        </div>
      </div>
    </header>
  );
}

export default Header;
