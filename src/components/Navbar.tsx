import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useIsMobile } from "../hooks/useIsMobile";

export const Navbar: React.FC = () => {
  const isMobile = useIsMobile();
  const { pathname } = useLocation();
  const [mobileHeaderX, setMobileHeaderX] = useState(isMobile ? "-100%" : "0%");

  const toggleMobileHeader = () => {
    if (!isMobile) return;
    setMobileHeaderX(mobileHeaderX === "-100%" ? "0%" : "-100%");
  };

  useEffect(() => {
    setMobileHeaderX("-100%");
  }, [pathname]);

  return (
    <nav
      style={
        isMobile
          ? {
              transform: `translateX(${mobileHeaderX})`,
            }
          : undefined
      }
      className="mi-header">
      <button className="mi-header-toggler" onClick={toggleMobileHeader}>
        <i className="lni lni-menu size-md"></i>
      </button>
      <div className="mi-header-inner">
        <div className="mi-header-image">
          <Link to="/">
            <img src="/images/brand-image-new.jpg" alt="brandimage" />
          </Link>
        </div>
        <ul className="mi-header-menu">
          {ROUTES.map((route) => (
            <li key={route.pathname}>
              <Link
                className={`${route.pathname === pathname && "active"}`}
                to={route.pathname}>
                <span>{route.name}</span>
              </Link>
            </li>
          ))}
        </ul>
        <p className="mi-header-copyright">
          © {new Date().getFullYear()} <b>Raffay Sajjad</b>
        </p>
      </div>
    </nav>
  );
};

const ROUTES = [
  {
    name: "Home",
    pathname: "/",
  },
  {
    name: "About",
    pathname: "/about",
  },
  {
    name: "Resume",
    pathname: "/resume",
  },
  {
    name: "Portfolio",
    pathname: "/portfolio",
  },
  // {
  //   name: "Blogs",
  //   pathname: "/blogs",
  // },
  {
    name: "Contact",
    pathname: "/contact",
  },
];
