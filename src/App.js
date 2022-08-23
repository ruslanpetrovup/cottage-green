import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cabinet from "./pages/cabinet";
import Home from "./pages/home";
import Rent from "./pages/rent";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/rent" element={<Rent />} />
          <Route path="/cabinet" element={<Cabinet />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
