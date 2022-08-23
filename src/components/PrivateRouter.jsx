import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import axios from "axios";

const PrivateRouter = ({ element }) => {
  let open = false;
  if (localStorage.getItem("token")) {
    open = true;
  } else {
    open = false;
  }
  return !open ? <Navigate to="/" /> : element;
};
export default PrivateRouter;
