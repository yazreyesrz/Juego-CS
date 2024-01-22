import { useState } from "react";
import Login from "../page/components/Login/Login";
import Memorama from "../page/memorama/Memorma";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  return (
    <div className="back-app">
      <BrowserRouter>
        <Routes>
          <Route index element={<Login />} />
          <Route path="/home" element={<Memorama />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
