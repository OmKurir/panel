import { Button as Btn } from "react-bootstrap";
import { SpinnerCircular } from "spinners-react";

export interface butonType {
  loading?: boolean;
  disabled?: boolean;
  type?: "button" | "submit" | "reset" | undefined;
  text: string;
  icon?: string;
  iconLeft?: string;
  iconRight?: string;
  onClick?:any;
  className?:any;
}
const onClickDefault=()=>null;
const Button = ({ loading, type, text, iconLeft, iconRight,className, onClick=onClickDefault, disabled }: butonType) => (
  <Btn
    type={type ?? "button"}
    variant="primary"
    className={`w-100 btn btn-lg btn-primary ${className}`}
    disabled={disabled ?? loading ?? false}
    onClick={onClick}
  >
    <>{iconLeft? <><i className={`lni lni-${iconLeft}`}></i>{" "}</>:''}</>
    <>{text}</><Spinner enabled={loading ?? false} />
    <>{!loading && iconRight? <>{" "}<i className={`lni lni-${iconRight}`}></i></>:''}</>
  </Btn>
);

const IsLoading=({loading=false})=> 
  <div className="container" style={{padding:"2em", textAlign: "center"}}><Spinner enabled={loading} size={100}  /></div>

interface validationMessageType {
  valid?: boolean;
  message?: string;
}
const ValidationMessage = ({
  valid,
  message = "this field is required",
}: validationMessageType) => <>{
  !valid
   ? <small className="invalid-feedback error" style={{ display: "block" }}>{message}</small>
   : ""
}</>;


const Spinner = ({ enabled=false }: { enabled: boolean }) => (
  <SpinnerCircular
    enabled={enabled}
    color={"#FFFFFF"}
    size={25}
    thickness={180}
    speed={150}
  />
);

export {Spinner,IsLoading, Button, ValidationMessage };