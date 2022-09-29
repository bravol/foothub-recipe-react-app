import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import SideBar from "./SideBar";
import { faHome, faList, faCog } from "@fortawesome/free-solid-svg-icons";

function NavBar() {
  const location = useLocation();
  const [showSideBar, setShowSideBar] = useState(false);
  const links = [
    {
      name: "Home",
      path: "/",
      icon: faHome,
    },
    {
      name: "Recipes",
      path: "/recipes",
      icon: faList,
    },
    {
      name: "Settings",
      path: "/settings",
      icon: faCog,
    },
  ];

  function closeSideBar() {
    setShowSideBar(false);
  }

  return (
    <>
      <div className="navbar container ">
        <Link to="/" className="logo">
          F<span>oo</span>dhub
        </Link>
        <div className="nav-link">
          {links.map((link) => (
            <Link
              to={link.path}
              className={location.pathname === link.path ? `active` : ``}
              key={link.name}
            >
              {link.name}
            </Link>
          ))}
        </div>
        <div
          onClick={() => setShowSideBar(true)}
          className={showSideBar ? "sidebar-btn active" : "sidebar-btn"}
        >
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </div>
      {/* we get links as property.  */}
      {showSideBar && <SideBar close={closeSideBar} links={links} />}
    </>
  );
}

export default NavBar;
