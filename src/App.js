import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cabinet from "./pages/cabinet";
import Home from "./pages/home";
import Rent from "./pages/rent";
import PrivateRouter from "./components/PrivateRouter";
import Admin from "./pages/admin";
import Comment from "./pages/comment";
import Contacts from "./pages/contacts";
import HouseOne from "./pages/houseOne";
import store from "./store";
import { Provider } from "react-redux";

const App = () => {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/rent" element={<Rent />} />
            <Route
              path="/cabinet"
              element={<PrivateRouter element={<Cabinet />} />}
            />
            <Route path="/admin" element={<Admin />} />
            <Route path="/comments" element={<Comment />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/house/:id" element={<HouseOne />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
};

export default App;
