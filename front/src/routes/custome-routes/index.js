import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";

const CustomeRoute = (props) => {
  const { type_route } = props;
  let Route = type_route === "private" ? PrivateRoute : PublicRoute;
  return <Route {...props} />;
};

export default CustomeRoute;
