import React from "react";
import { Routes, Route } from "react-router-dom";
import Call from "./components/call";
import Pickup from "./components/pickup";
import "./App.css";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Call />} />
        <Route path="/pickup" element={<Pickup />} />
      </Routes>
    </div>
  );
}

export default App;
