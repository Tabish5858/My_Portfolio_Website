import React, { useEffect, useRef } from "react";
import {
  RiSearchLine,
  RiArrowDownSLine,
  RiCloseLine,
  RiMenuLine,
} from "@remixicon/react";
import { HashLink as Link } from "react-router-hash-link";
import logo from "../../assets/images/logo/logo1.png";
import { menuItems } from "../../data/menuItemsData";

const Header = () => {
  const sidepanelRef = useRef(null);
  const slidBtnRef = useRef(null);
  const openAsideBtnRef = useRef(null);
  const closeAsideBtnRef = useRef(null);
  const dropdownRefs = useRef([]);

  useEffect(() => {
    const open_aside = () => {
      if (sidepanelRef.current) {
        sidepanelRef.current.style.left = "0";
      } else {
        console.error("Error: Side panel element not found!");
      }
    };

    const close_aside = () => {
      if (sidepanelRef.current) {
        sidepanelRef.current.style.left = "-355px";
      } else {
        console.error("Error: Side panel element not found!");
      }
    };

    const toggleDropdown = () => {
      const dropdown = document.getElementById("slid-drop");
      if (dropdown) {
        dropdown.classList.toggle("aside-dropdwon");
      }
    };

    if (slidBtnRef.current) {
      slidBtnRef.current.onclick = toggleDropdown;
    }

    if (openAsideBtnRef.current) {
      openAsideBtnRef.current.onclick = open_aside;
    }

    if (closeAsideBtnRef.current) {
      closeAsideBtnRef.current.onclick = close_aside;
    }

    const handleMouseEnter = (dropdownMenu) => {
      dropdownMenu.style.visibility = "visible";
      dropdownMenu.style.maxHeight = `${dropdownMenu.scrollHeight}px`;
    };

    const handleMouseLeave = (dropdownMenu) => {
      dropdownMenu.style.visibility = "hidden";
      dropdownMenu.style.maxHeight = "0";
    };

    dropdownRefs.current.forEach((dropdown) => {
      if (dropdown) {
        const dropdownMenu = dropdown.querySelector(".dropdown-menu");
        if (dropdownMenu) {
          dropdownMenu.style.maxHeight = "0";
          dropdown.addEventListener("mouseenter", () =>
            handleMouseEnter(dropdownMenu)
          );
          dropdown.addEventListener("mouseleave", () =>
            handleMouseLeave(dropdownMenu)
          );
        }
      }
    });

    return () => {
      dropdownRefs.current.forEach((dropdown) => {
        if (dropdown) {
          const dropdownMenu = dropdown.querySelector(".dropdown-menu");
          if (dropdownMenu) {
            dropdown.removeEventListener("mouseenter", () =>
              handleMouseEnter(dropdownMenu)
            );
            dropdown.removeEventListener("mouseleave", () =>
              handleMouseLeave(dropdownMenu)
            );
          }
        }
      });
    };
  }, []);

  return (
    <>
      <header className="bg-transparent">
        <nav className="navbar navbar-expand-lg container py-3">
          <div className="container-fluid">
            <Link className="nav-logo p-0" to="/#home">
              <figure>
                <img src={logo} alt="logo" />
              </figure>
            </Link>
            <div className="d-flex gap-md-3">
              <button
                className="open-aside"
                type="button"
                ref={openAsideBtnRef}
              >
                <RiMenuLine size={40} />
              </button>
              <div className="d-flex justify-content-end gap-xl-2 gap-lg-1">
                <div
                  className="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav d-flex justify-content-center align-items-center gap-lg-3 gap-md-2 gap-sm-2 gap-2 mb-2 mb-lg-0">
                    {menuItems.map((item, index) =>
                      item.dropdown ? (
                        <li
                          className="dropdown"
                          ref={(el) => (dropdownRefs.current[index] = el)}
                          key={index}
                        >
                          <a className="nav-link d-flex align-item-center">
                            {item.label}
                            <RiArrowDownSLine />
                          </a>
                          <ul className="dropdown-menu">
                            {item.dropdown.map((subItem) => (
                              <li key={subItem.path}>
                                <Link
                                  className="dropdown-item"
                                  smooth
                                  to={subItem.path}
                                >
                                  {subItem.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </li>
                      ) : (
                        <li className="nav-item" key={index}>
                          <Link className="nav-link" smooth to={item.path}>
                            {item.label}
                          </Link>
                        </li>
                      )
                    )}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </nav>
        <aside>
          <div id="mySidenav" className="right-sidbar" ref={sidepanelRef}>
            <div className="side-nav-logo d-flex justify-content-between align-items-center ps-2 pe-1 nav-logo">
              <figure className="navbar-brand">
                <Link to="/#home">
                  <img src={logo} alt="Logo" />
                </Link>
              </figure>
              <button className="fa-xmark" ref={closeAsideBtnRef}>
                <RiCloseLine size={30} />
              </button>
            </div>
            <ul className="pt-4">
              {menuItems.map((item, index) =>
                item.dropdown ? (
                  <li className="nav-item" key={index}>
                    <div
                      className="d-flex align-items-center justify-content-between"
                      id="slid-btn"
                      ref={slidBtnRef}
                    >
                      <a className="a-slid page-btn w-100 d-flex justify-content-between">
                        {item.label} <RiArrowDownSLine />
                      </a>
                    </div>
                    <ul id="slid-drop">
                      {item.dropdown.map((subItem) => (
                        <li key={subItem.path}>
                          <Link smooth to={subItem.path}>{subItem.label}</Link>
                        </li>
                      ))}
                    </ul>
                  </li>
                ) : (
                  <li className="nav-item" key={index}>
                    <Link aria-current="page" smooth to={item.path}>
                      {item.label}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>
        </aside>
      </header>
    </>
  );
};

export default Header;