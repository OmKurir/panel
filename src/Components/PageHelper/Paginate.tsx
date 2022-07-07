import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Paginate = ({data, nextPage, prevPage}:any) => {
  const {page, pageSize, pages,size}=data;
  return (
    <nav aria-label="Page navigation paginate" style={{float:'right'}} >
      <ul className="pagination">
        <li className="page-item">
          {page===1? <></>:
          <Button className="page-link" onClick={()=>nextPage(page-1)}  aria-label="Previous">
            <i className="lni lni-chevron-left"></i>
          </Button>}
        </li>
        <li className="page-item" style={{color: 'rgb(50 121 208)',padding:' 0 5px'}}>          
            {page??0}/ {pages??0}
        </li>
        <li className="page-item">
        {page===pageSize?<></>:
        <Button className="page-link" onClick={()=>nextPage(page+1)}  aria-label="Previous">
            <i className="lni lni-chevron-right"></i>
          </Button>}
        </li>
      </ul>
    </nav>
  );
};

export default Paginate;
