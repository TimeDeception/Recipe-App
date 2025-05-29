import React, { useState } from "react";
import "../CSS/themes.css";
import { useNavigate } from "react-router-dom";
import NavBar from "./NavBar";

interface AuthCardProps {
  setAuth: (auth: boolean) => void;
}

const AuthCard: React.FC<AuthCardProps> = ({ setAuth }) => {
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();

  const handleAuth = (e: React.FormEvent) => {
    e.preventDefault();
    setAuth(true); // Set user as authenticated
    navigate("/home"); // Redirect to home page
  };

  return (
    <>
      <div className="auth-card">
        <h2>{isLogin ? "Login" : "Register"}</h2>
        <form onSubmit={handleAuth}>
          {!isLogin && <input type="text" placeholder="Username" required />}
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <button type="submit">{isLogin ? "Login" : "Register"}</button>
        </form>
        <p>
          {isLogin ? "Don't have an account?" : "Already have an account?"}
          <button onClick={() => setIsLogin(!isLogin)}>
            {isLogin ? "Register" : "Login"}
          </button>
        </p>
      </div>
    </>
  );
};

export default AuthCard;
