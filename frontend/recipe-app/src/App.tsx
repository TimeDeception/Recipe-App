import "./CSS/App.css";
import "./CSS/themes.css";
import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import AuthCard from "./components/AuthCard.tsx";
import GuestPage from "../pages/GuestHome.tsx";
import HomePage from "../pages/Home.tsx";

//import Home from "./components/Home.tsx";
//import Card from "./components/cardTemplate";

const App: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Router>
      <Routes>
        {/* Guest Landing Page */}
        <Route path="/" element={<GuestPage />} />

        {/* Login/Register Page */}
        <Route
          path="/auth"
          element={<AuthCard setAuth={setIsAuthenticated} />}
        />

        {/* Protected Home Page (Redirect if not logged in) */}
        <Route
          path="/home"
          element={isAuthenticated ? <HomePage /> : <Navigate to="/" />}
        />
      </Routes>
    </Router>
  );
};

export default App;
