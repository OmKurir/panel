import { Link } from "react-router-dom";

const active = (path: string): string =>
  window.location.pathname.indexOf(path) > -1 || path==='' ? 'active' : '';

const Header = () => {
  

  return (
    <header className="p-3 bg-dark text-white">
      <div className="">
        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          <Link
            to={"/"}
            className={"d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none"}
          ></Link>

          <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
            <li>
              <Link to={"/"} className={`nav-link px-2 text-white ${active('')}`}>
                Home
              </Link>
            </li>
            <li>
              <Link to={"/market-place"} className={`nav-link px-2 text-white ${active('home')}`}>
                Market place
              </Link>
            </li>
            <li>
              <Link to={"/orders"} className={`nav-link px-2 text-white ${active('orders')}`}>
                Orders
              </Link>
            </li>
            <li>
              <Link to={"/users"} className={`nav-link px-2 text-white ${active('users')}`}>
                Users
              </Link>
            </li>
            <li>
              <Link to={"/operations"} className={`nav-link px-2 text-white ${active('operations')}`}>
                Operations
              </Link>
            </li>
          </ul>

          <div className="text-end">
            <Link to={"/settings"} type="button" className="btn ">
              <i className="lni lni-cog" style={{ color: "#FFF" }}></i>
            </Link>
            <Link to={"/auth"} type="button" className="btn ">
              <i className="lni lni-close" style={{ color: "#FFF" }}></i>              
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
