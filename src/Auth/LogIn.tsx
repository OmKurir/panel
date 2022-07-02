import { Link } from "react-router-dom";

const LogIn = () => {
  return (
    <>
      <form
        className="p-4 p-md-5 border rounded-3 bg-light"
        style={{ color: "#000" }}
      >
        <h1 className="gradient" style={{ margin: "15px 0" }}>
          Log In
        </h1>
        <div className="form-floating mb-3">
          <input
            type="email"
            className="form-control"
            id="floatingInput"
            placeholder="name@example.com"
          />
          <label>Email address</label>
        </div>
        <div className="form-floating mb-3">
          <input
            type="password"
            className="form-control"
            id="floatingPassword"
            placeholder="Password"
          />
          <label>Password</label>
        </div>
        <div className="checkbox mb-3">
          <label>
            <input type="checkbox" value="remember-me" /> Remember me
          </label>
        </div>
        <button
          className="w-100 btn btn-lg btn-primary bg-main-secondary"
          type="submit"
        >
          Sign In
        </button>
        <hr className="my-4" />
        <small className="text-muted">
          <Link to={'/auth/forgot-password'}>I need an Help, I forgot my password</Link>
        </small>
      </form>
    </>
  );
};

export default LogIn;
