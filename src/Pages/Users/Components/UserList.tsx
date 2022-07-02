import { Link } from "react-router-dom";
import Paginate from "../../../Components/PageHelper/Paginate";

const UserList = () => {
  const nums = [1, 2, 3, 4];
  return (
    <>
      <div className="my-3 p-3 bg-white rounded shadow-sm text-left">
        <h6 className="border-bottom border-gray pb-2 mb-0">
          <button className="btn pull-right">
            <i className="lni lni-plus"></i>
          </button>
          Suggestions
        </h6>

        {nums.map(lines)}

        <div className="row">
          <div className="col-md-4">-</div>
          <div className="col-md-4">-</div>
          <div className="col-md-4 text-right">
            <Paginate />
          </div>
        </div>
      </div>
    </>
  );
};

const lines = () => {
  return (
    <>
      <div className="d-flex text-muted pt-3">
        <svg
          className="bd-placeholder-img flex-shrink-0 me-2 rounded"
          width="32"
          height="32"
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          aria-label="Placeholder: 32x32"
          preserveAspectRatio="xMidYMid slice"
          focusable="false"
        >
          <title>Placeholder</title>
          <rect width="100%" height="100%" fill="#007bff"></rect>
          <text x="50%" y="50%" fill="#007bff" dy=".3em">
            32x32
          </text>
        </svg>

        <p className="pb-3 mb-0 small lh-sm border-bottom">
          <strong className="d-block text-gray-dark">@username</strong>
          Some representative placeholder content, with some information about
          this user. Imagine this being some sort of status update, perhaps?
        </p>
        <Link to={"#"}>Follow</Link>
      </div>
    </>
  );
};

export default UserList;
