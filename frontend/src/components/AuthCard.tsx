import React, { useState } from "react";
import api from "../utils/api";
import "../CSS/themes.css";
import { useNavigate } from "react-router-dom";

interface AuthCardProps {
  setAuth: (auth: boolean) => void;
  setUser: (user: any) => void;
}

const AuthCard: React.FC<AuthCardProps> = ({ setAuth, setUser }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    setError(null);
    setLoading(true);
    try {
      const res = await api.post("/auth/login", { email, password });
      console.log(res.data);
      localStorage.setItem("token", res.data.token);
      setUser(res.data.user);
      setAuth(true); // Set user as authenticated
      setError(null); // Clear any previous errors
      navigate("/home"); // Redirect to home page
    } catch (err: any) {
      if (err.response && err.response.data && err.response.data.error){
        setError(err.response.data.error);
      } else{
        setError("Login failed. Please check your credentials or try again later.");
      }
    } finally {
      setLoading(false);
    }
  }

  const handleRegister = async () => {
    setError(null);
    setLoading(true);
    try {
      await api.post("/auth/register", {username, email, password });
      alert("Registration successful! Please log in.");
      setIsLogin(true); // Switch to login view after successful registration
    } catch (err: any) {
      if (err.response && err.response.data && err.response.data.error) {
        setError(err.response.data.error);
      } else {
        setError("Registration failed. Please try again later.");
      }
    } finally {
      setLoading(false);
    }
  }

  const handleAuth = (e: React.FormEvent) => {
    e.preventDefault();
    if (isLogin) {
      handleLogin();
    } else {
      handleRegister();
    }
  };

  // Clear errors when switching between login/register
  const handleSwitch = () => {
    setIsLogin(!isLogin);
    setError(null);
  }
  return (
    <>
    <div className="auth-container">
      <div className="auth-card">
        <h2>{isLogin ? "Login" : "Register"}</h2>
        <form onSubmit={handleAuth}>
          {!isLogin && <input type="text" placeholder="Username" value={username} onChange={e => setUsername(e.target.value)} required disabled={loading} />}
          <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value) } required disabled={loading} />
          <input type="password" placeholder="Password" value ={password} onChange={e => setPassword(e.target.value)} required disabled={loading} />
          <button type="submit" disabled={loading}>{loading ? "Please wait..." :  isLogin ? "Login" : "Register"}</button>
        </form>
        {error && <div className="auth-error" style={{color: "red", marginTop: 8}}>{error}</div>}
        <p>
          {isLogin ? "Don't have an account?" : "Already have an account?"}
          <button type="button" onClick={handleSwitch} disabled={loading} style={{ marginLeft: 8 }}>
            {isLogin ? "Register" : "Login"}
          </button>
        </p>
      </div>
    </div>
    </>
  );
};

export default AuthCard;
