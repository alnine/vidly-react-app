import React from "react";
import { Route, Redirect } from "react-router-dom";
import authService from "../../services/auth-service";

const ProtectedRoutes = ({ component: Component, render, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props => {
        if (!authService.getCurrentUser()) return <Redirect to="/login" />;
        return Component ? <Component {...props} /> : render(props);
      }}
    />
  );
};

export default ProtectedRoutes;
