import React from "react";
import { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import { userContext } from "../context/userContext";
import { authRoutes, publicRoutes } from "../routes";

const AppRouter = () => {
  const { isAuth } = useContext(userContext);
  return (
    <Routes>
      {isAuth &&
        authRoutes.map(({ path, element }) => (
          <Route key={path} path={path} element={element} />
        ))}
      {publicRoutes.map(({ path, element }) => (
        <Route key={path} path={path} element={element} />
      ))}
    </Routes>
  );
};

export default AppRouter;
