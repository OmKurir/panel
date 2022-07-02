import { Link } from "react-router-dom";

const Sidebars = () => {
  return (
    <>
      <div
        className=" bg-dark"
        style={{ width: "4.5rem", backgroundColor: " transparent !important" }}
      >
        <Link
          to={"/"}
          className="d-block p-3 link-dark text-decoration-none"
          title=""
          data-bs-toggle="tooltip"
          data-bs-placement="right"
          data-bs-original-title="Icon-only"
        >
          <i className="lni lni-archive"></i>
        </Link>
        <ul className="nav nav-pills nav-flush flex-column mb-auto text-center">
          <li className="nav-item">
            <Link
              to={"#"}
              className="nav-link active py-3 border-bottom"
              aria-current="page"
              title=""
              data-bs-toggle="tooltip"
              data-bs-placement="right"
              data-bs-original-title="Home"
            >
              <i className="lni lni-archive"></i>
            </Link>
          </li>
          <li>
            <Link
              to={"#"}
              className="nav-link py-3 border-bottom"
              title=""
              data-bs-toggle="tooltip"
              data-bs-placement="right"
              data-bs-original-title="Dashboard"
            >
              <i className="lni lni-archive"></i>
            </Link>
          </li>
          <li>
            <Link
              to={"#"}
              className="nav-link py-3 border-bottom"
              title=""
              data-bs-toggle="tooltip"
              data-bs-placement="right"
              data-bs-original-title="Orders"
            >
              <i className="lni lni-archive"></i>
            </Link>
          </li>
          <li>
            <Link
              to={"#"}
              className="nav-link py-3 border-bottom"
              title=""
              data-bs-toggle="tooltip"
              data-bs-placement="right"
              data-bs-original-title="Products"
            >
              <i className="lni lni-archive"></i>
            </Link>
          </li>
          <li>
            <Link
              to={"#"}
              className="nav-link py-3 border-bottom"
              title=""
              data-bs-toggle="tooltip"
              data-bs-placement="right"
              data-bs-original-title="Customers"
            >
              ---
            </Link>
          </li>
        </ul>
        <div className="dropdown border-top">
          <Link
            to={"#"}
            className="d-flex align-items-center justify-content-center p-3 link-dark text-decoration-none dropdown-toggle"
            id="dropdownUser3"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            ---
          </Link>
          <ul
            className="dropdown-menu text-small shadow"
            aria-labelledby="dropdownUser3"
          >
            <li>
              <Link className="dropdown-item" to={"#"}>
                New project...
              </Link>
            </li>
            <li>
              <Link className="dropdown-item" to={"#"}>
                Settings
              </Link>
            </li>
            <li>
              <Link className="dropdown-item" to={"#"}>
                Profile
              </Link>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li>
              <Link className="dropdown-item" to={"#"}>
                Sign out
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Sidebars;
