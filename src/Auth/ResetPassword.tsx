const ResetPassword = ({resetPassword}:any) =>{
    return (<>
    <form
        className="p-4 p-md-5 border rounded-3 bg-light"
        style={{ color: "#000" }}
      >
        <h1 className="gradient" style={{ margin: "15px 0" }}>
          Reset my Password
        </h1>
        <div className="form-floating mb-3">
          <input
            type="password"
            className="form-control"
            id="floatingPassword"
            placeholder="Password"
          />
          <label>Password</label>
        </div>
        <div className="form-floating mb-3">
          <input
            type="password"
            className="form-control"
            id="floatingPassword"
            placeholder="Repeat Password"
          />
          <label>Repeat Password</label>
        </div>
        <button
          className="w-100 btn btn-lg btn-primary bg-main-secondary"
          type="submit"
        >
          Save
        </button>
        <hr className="my-4" />
        <small className="text-muted">
          By clicking Sign up, you agree to the terms of use.
        </small>
      </form></>)
}

export default ResetPassword;