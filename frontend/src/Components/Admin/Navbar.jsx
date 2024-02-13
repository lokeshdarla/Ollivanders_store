import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link } from "react-router-dom";
import { IconContext } from "react-icons";
import { IoIosHome, IoIosBasket, IoIosSettings, IoIosAnalytics, IoIosLogIn } from "react-icons/io";
import { FaTruck } from "react-icons/fa";
import { MdOutlineRateReview } from "react-icons/md";

function Navbar() {
  const [sidebar, setSidebar] = useState(false);

  const SidebarData = [
    {
      title: "Dashboard",
      path: "/dashboard",
      icon: <IoIosHome />,
      cName: "nav-text",
    },

    {
      title: "Products",
      path: "/products",
      icon: <IoIosBasket />,
      cName: "nav-text",
    },
    {
      title: "Orders",
      path: "/orders",
      icon: <IoIosAnalytics />,
      cName: "nav-text",
    },
    {
      title: "Shipment",
      path: "/shipment",
      icon: <FaTruck/>,
      cName: "nav-text",
    },
    {
      title: "reviews",
      path: "/reviews",
      icon: <MdOutlineRateReview/>,
      cName: "nav-text",
    },
    {
      title: "Settings",
      path: "/settings",
      icon: <IoIosSettings />,
      cName: "nav-text",
    },
    {
      title: "Logout",
      path: "/login",
      icon: <IoIosLogIn />,
      cName: "nav-text",
    },
  ];

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <div className="absolute top-0 left-0">
      <IconContext.Provider value={{ color: "undefined" }}>
        <div className="navbar">
          <Link to="#" className="menu-bars">
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
        </div>
        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items" onClick={showSidebar}>
            <li className="navbar-toggle">
              <Link to="#" className="menu-bars">
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </div>
  );
}

export default Navbar;
