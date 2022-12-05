import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const PrivateRouter = ({ element }) => {
  let open = false;
  if (useSelector((state) => state.user.token)) {
    open = true;
  } else {
    open = false;
  }
  return !open ? <Navigate to="/" /> : element;
};
export default PrivateRouter;
