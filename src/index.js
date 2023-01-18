import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./index.css";
import App from "./App";




import HomePage from "./Components/HomePage";
import AdminPage from "./Components/AdminPage";
import UserPage from "./Components/UserPage";
import ApplyForLeave from "./Components/ApplyForLeave";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<HomePage></HomePage>}></Route>
        <Route path="/user/" element={<UserPage></UserPage>}></Route>
        <Route path="/admin/" element={<AdminPage></AdminPage>}></Route>
        <Route
          path="/user/apply-for-leave/"
          element={<ApplyForLeave></ApplyForLeave>}
        ></Route>
      </Routes>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
