import Sidebars from "../../Components/Main/SideBars";
import PageTitleBar from "../../Components/PageHelper/PageTitleBar";
import UserList from "./Components/UserList";

const Users = ({getUsers}:any) => {

  return (
    <>
      <div className="row text-left">
        <PageTitleBar />
      </div>
      {
      /*
      <div className="row">
        <nav className="bg-light nav nav-underline">
          <a className="nav-link" href="#">
            Explore
          </a>
          <a className="nav-link" href="#">
            Suggestions
          </a>
          <a className="nav-link" href="#">
            Link
          </a>
          <a className="nav-link" href="#">
            Link
          </a>
          <a className="nav-link" href="#">
            Link
          </a>
          <a className="nav-link" href="#">
            Link
          </a>
          <a className="nav-link" href="#">
            Link
          </a>
        </nav>
      </div> */}
      <div className="container-fluid">
        <div className="row">
        <Sidebars/>
        <div className="col-md-8 col-lg-8">
          <UserList getUsers={getUsers} />
        </div>
        </div>
      </div>
    </>
  );
};

export default Users;
