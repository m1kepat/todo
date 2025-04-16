import React, { useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { privateRoutes, publicRoutes } from "../router";
import { AuthContext } from "../context/AuthContext";

const AppRouter = () => {
  const { isAuth } = useContext(AuthContext);

  return isAuth ? (
    <Routes>
      {privateRoutes.map((route) => {
        return (
          <Route
            element={<route.component />}
            path={route.path}
            exact={route.exact}
            key={route.path}
          />
        );
      })}

      <Route path="*" element={<Navigate to="/todos" />} />
    </Routes>
  ) : (
    <Routes>
      {publicRoutes.map((route) => {
        return (
          <Route
            element={<route.component />}
            path={route.path}
            exact={route.exact}
            key={route.path}
          />
        );
      })}
      <Route path="*" element={<Navigate to="/login" />} />
    </Routes>
  );
};

export default AppRouter;
