import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import User from "./pages/User";
import Ranking from "./pages/Ranking";
import GlobalNavBar from "./components/organisms/GlobalNavBar";

function App() {
  return (
    <Router>
      <GlobalNavBar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/user/:username" element={<User />} />
          <Route path="/ranking" element={<Ranking />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
