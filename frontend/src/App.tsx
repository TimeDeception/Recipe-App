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
import HomePage from "../pages/AuthHome.tsx";
import { User } from "./components/types.tsx";

//import Card from "./components/cardTemplate";

const App: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user , setUser] = useState<User | null>(null);

  return (
    <Router>
      <Routes>
        {/* Guest Landing Page */}
        <Route path="/" element={<GuestPage />} />

        {/* Login/Register Page */}
        <Route
          path="/auth"
          element={<AuthCard setUser={setUser} setAuth={setIsAuthenticated} />}
        />

        {/* Protected Home Page (Redirect if not logged in) */}
        <Route
          path="/home"
          element={isAuthenticated ? <HomePage user={user} setUser={setUser} setAuth={setIsAuthenticated}/> : <Navigate to="/" />}
        />
      </Routes>
    </Router>
  );
};

export default App;
