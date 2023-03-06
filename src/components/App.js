import React from "react";
import "../style/main.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Navbar from "./Navbar";
import GithubState from "../context/GithubState";
import UserDetail from "./UserDetail";

function App() {
  return (
    <GithubState>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/user/:login" element={<UserDetail />} />
        </Routes>
      </BrowserRouter>
    </GithubState>
  );
}

export default App;
