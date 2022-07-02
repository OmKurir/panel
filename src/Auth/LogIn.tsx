import { useState } from "react";
import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useToasts } from "react-toast-notifications";
import { Button } from "../Components/Form";

const LogIn = (props: any) => {
  const initialState = {
    email: '',
    password: '',
  };

  const [state, setState] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const [validated, setValidated] = useState(false);
  //const { addToast } = useToasts();

  const { email, password } = state;
  const { singIn } = props;
  const handleChange = (event: any) => {
    const obj: any = { [event.target.name]: event.target.value };
    setState({ ...state, ...obj });
  };
  const handleSubmit = (e: any) => {
    const form = e.currentTarget;

    if (form.checkValidity() === true) {
      setValidated(true);
      setLoading(true);
      singIn(state, { ...props, /*addToast,*/ setLoading });
    } else {
      setValidated(true);
    }

    e.preventDefault();
    e.stopPropagation();
    return false;
  };
  return (
    <>
      <Form
        noValidate
        validated={validated}
        onSubmit={handleSubmit}
        className="p-4 p-md-5 border rounded-3 bg-light"
        style={{ color: "#000" }}
      >
        <h1 className="gradient" style={{ margin: "15px 0" }}>
          Log In
        </h1>
        <div className="form-floating mb-3">
          <Form.Control
            type="email"
            value={email}
            name="email"
            id="floatingInput"
            placeholder="name@example.com"
            required
            onChange={handleChange}
          />
          <label>Email address</label>
        </div>
        <div className="form-floating mb-3">
          <Form.Control
            type="email"
            value={password}
            name="password"
            id="floatingPassword"
            placeholder="Password"
            required
            onChange={handleChange}
          />
          <label>Password</label>
        </div>
        <div className="checkbox mb-3">
          <label>
            <input type="checkbox" value="remember-me" /> Remember me
          </label>
        </div>
        
        <Button
          type="submit"
          text={"Sign In"}
          loading={loading}
          className={"bg-main-secondary"}
        />{" "}
        <hr className="my-4" />
        <small className="text-muted">
          <Link to={"/auth/forgot-password"}>
            I need an Help, I forgot my password
          </Link>
        </small>
      </Form>
    </>
  );
};

export default LogIn;
