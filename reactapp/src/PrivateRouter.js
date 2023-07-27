import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import * as _ from "lodash";

function useAuth(element) {
  const role = useSelector((s) => s?.role?.value);
  console.log("user", role);
  if (!_.isEmpty(role)) {
    if (role === element) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
}

function PrivateRouter(props) {
  const { element } = props;
  const isAuth = useAuth(element?.data);
  return isAuth ? <Outlet /> : <Navigate to="/" />;
}

export default PrivateRouter;
