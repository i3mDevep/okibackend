import { Switch } from "react-router-dom";
import CustomeRoute from "./custome-routes";
import React from "react";

import routes from "./config";

const RouteWithSubRoutes = (route) => {
  if (route.routes) {
    let routes = route.routes.map((r) => (
      <RouteWithSubRoutes key={`subroute-config-${r.path}`} {...r} />
    ));
    return (
      <Switch>
        <CustomeRoute {...route} exact={true} />
        {routes}
      </Switch>
    );
  }
  return <CustomeRoute {...route} />;
};

const RouteConfig = () => (
  <Switch>
    {routes.map((r) => {
      if(r.layout){
        let Layout = r.layout
        return (
          <Layout key={`route-config-${r.path}`} >
            <RouteWithSubRoutes {...r} />
          </Layout>
        )
      }
      return <RouteWithSubRoutes key={`route-config-${r.path}`} {...r} />;
    })}
  </Switch>
);

export default RouteConfig;
