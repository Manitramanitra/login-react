import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { Routes, Route } from "react-router-dom";
import Navbar from './component/Navbar';
import Sign from './component/Sign';
import Inscription from "./component/Inscription"
import User from './component/User'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navbar />} />
        <Route path="/connexion" element={<Sign />} />
        <Route path="/inscription" element={<Inscription />} />
        <Route path="/User" element={<User />} />
      </Routes>
    </div>
  );
};

export default App;