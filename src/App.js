import React from "react";
import "./App.css";
import Home from "./pages";
import SignIn from "./pages";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <main>
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
    </main>
  );
}

export default App;
