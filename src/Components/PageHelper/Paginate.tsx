import { Link } from "react-router-dom";

const Paginate = () => {
  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination">
        <li className="page-item">
          <Link className="page-link" to={'#'}  aria-label="Previous">
            <i className="lni lni-chevron-left"></i>.
          </Link>
        </li>
        <li className="page-item">
          <Link className="page-link" to={'#'} >
            1
          </Link>
        </li>
        <li className="page-item">
          <Link className="page-link" to={'#'} >
            2
          </Link>
        </li>
        <li className="page-item">
          <Link className="page-link" to={'#'} >
            3
          </Link>
        </li>
        <li className="page-item">
          <Link className="page-link" to={'#'} aria-label="Next">
            <i className="lni lni-chevron-right"></i>.
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Paginate;
