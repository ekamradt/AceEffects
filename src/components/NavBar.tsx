import { useState } from "react";
import "../App.css";
import { NavLink } from 'react-router-dom';


interface NavBarProps {
  brandName: string;
  imageSrcPath: string;
  navItems: string[];
  pages: string[];
}

function NavBar({ brandName, imageSrcPath, navItems, pages }: NavBarProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    // <nav className="navbar navbar-light bg-light">
    <nav className="navbar navbar-expand-md navbar-light bg-white shadow">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img
            src={imageSrcPath}
            width="60"
            height="60"
            className="d-inline-block align-center"
            alt=""
          />
          <span className="fw-bolder fs-4 align-center">{brandName}</span>
        </a>
        <button
          className="navbar-toggler"
          onClick={() => {
            console.log("======== Button Push")
          }}
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse 
        navbar-collapse
        align-items-start
        flex-column
        flex-md-row"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav me-auto mb-2 mb-md-1">
            {navItems.map((item, index) => (
              <li
                key={index}
                className="nav-items"
                onClick={() => {
                  console.log("*******************" + index + " : " + item);
                  setSelectedIndex(index);
                }}
              >
                <NavLink
                  className={
                    selectedIndex === index
                      ? "nav-link active fw-bold"
                      : "nav-link"
                  }
                  to={pages[index]}
                >
                {/* <a
                  className={
                    selectedIndex === index
                      ? "nav-link active fw-bold"
                      : "nav-link"
                  }
                  href={pages[index]}
                > */}
                  {item}
                  </NavLink>
                  {/* </a> */}
              </li>
            ))}
          </ul>
          <div className="input-group w-auto"></div>
          {/* <form className="form-inline d-flex justify-content-center"> */}
          <form className="d-flex me-3">
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button
              className="btn btn-outline-success  my-2 my-sm-0"
              type="submit"
            >
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
