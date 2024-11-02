import { Link, useLocation } from "react-router-dom";

export const Navbar: React.FC = () => {
  const { pathname } = useLocation();

  return (
    <nav className="mi-header">
      <button className="mi-header-toggler">
        <i className="lni lni-menu size-md"></i>
      </button>
      <div className="mi-header-inner">
        <div className="mi-header-image">
          <Link to="/">
            <img src="/images/brand-image.jpg" alt="brandimage" />
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
