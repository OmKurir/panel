import { useEffect, useState } from "react";
import { useNavigate  } from "react-router-dom";
import { useToasts } from "react-toast-notifications";
import { IsLoading } from "../../../Components/Form";
import Paginate from "../../../Components/PageHelper/Paginate";
import { getUsersByAction } from "../../../Services/Actions/UserActions";

const UserList = ({ getUsers }: any) => {
  
  const  navigate= useNavigate();
  const { addToast } = useToasts();
  const [users, setUsers] = useState<any>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    return () => {
      getUsersByAction({ setUsers, addToast, setLoading });
    };
  }, [setUsers, addToast]);
  
  const lineClick=()=>addToast('clicked')
  
  const goToPage=(page:number)=>getUsersByAction({ setUsers, addToast, setLoading, page });
  
  return (
    <>
      <div className="my-3 p-3 bg-white rounded shadow-sm text-left">
        <h6 className="border-bottom border-gray pb-2 mb-0">
          <button className="btn pull-right">
            <i className="lni lni-plus"></i>
          </button>
          Suggestions
        </h6>
        <table className="table  table-hover">
          <tbody>
            {loading ? <IsLoading loading={loading} /> : users?.data.map((line:any)=>Lines({line,navigate}))}
          </tbody>
        </table>

        <div className="row">
          <div className="col-md-4">-</div>
          <div className="col-md-4">-</div>
          <div className="col-md-4 text-right">
            <Paginate data={users??{}} nextPage={goToPage} prevPage={goToPage}/>
          </div>
        </div>
      </div>
    </>
  );
};

const Lines = ({line, navigate}: any) => {
  const typeIcon = ["apartment", "user"][line.type];
  const typeLabel = ["Business", "Personal", "Driver"][line.type];
  const typeColor = ["Business", "Personal", "Driver"][line.type];
  
  const lineClick = (id:string) => navigate('/users/'+id);//eg.history.push('/login');

  const IsActive = ({ isActive }: any) =>
    isActive ? (
      <></>
    ) : (
      <span
        className="badge rounded-pill bg-danger"
        style={{ fontSize: 8, fontWeight: "normal" }}
      >
        Disabled
      </span>
    );
  const Type = () => (
    <h6>
      <span className="badge bg-secondary">{typeLabel}</span>
    </h6>
  );
  return (
    <>
      <tr onClick={()=>lineClick(line.id)}>
        <th scope="row" style={{width:50}}>
          <div
            style={{ padding: "15px" }}
            className={"bd-placeholder-img flex-shrink-0 me-2 rounded"}
          >
            <i className={`lni lni-${typeIcon}`} style={{ fontSize: 30 }}></i>
          </div>
        </th>
        <td>
          <h4>
            {line.firstName??'...'} {line.lastName}
          </h4>
          <div className="row">
            <div className="col-md-4"><small>{line.email}</small></div>
            <div className="col-md-4"><IsActive isActive={line.isActive}/></div>
            <div className="col-md-4"><small>{line.createdAt}</small></div>
          </div>
        </td>
        <td></td>
      </tr>
    </>
  );
};

export default UserList;
