import React from "react";
import { Navigate, Outlet } from "react-router-dom";

export const ProtectedComponent = ({ isLogin }) => {
  return isLogin ? <Outlet /> : <Navigate to="/login" />;
};
