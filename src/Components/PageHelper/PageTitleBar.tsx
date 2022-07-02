// import './PageHelper.scss'
const PageTitleBar = () => {
  return (
    <div className="bg-main-primary d-flex align-items-center p-3 my-3 text-white bg-purple rounded shadow-sm">
      <i className="icon lni lni-users"></i>
      <div className="lh-1">
        <h1 className="h6 mb-0 text-white lh-1">Bootstrap</h1>
        <small>Since 2011</small>
      </div>
    </div>
  );
};

export default PageTitleBar;
