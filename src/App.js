import React from "react";
import "./App.css";
import Home from "./pages";
import SignInPage from "./pages/signin";
import SignUp from "./pages";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </main>
  );
}

export default App;
