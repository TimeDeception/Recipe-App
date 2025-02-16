import React, { useState } from "react";
import "../themes.css";

const AuthCard: React.FC = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="auth-card">
      <h2>{isLogin ? "Login" : "Register"}</h2>

      <form>
        {!isLogin && <input type="text" placeholder="Username" required />}
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        <button type="submit">{isLogin ? "Login" : "Register"}</button>
      </form>

      <p>
        {isLogin ? "Don't have an account?" : "Already have an account?"}
        <button onClick={() => setIsLogin(!isLogin)}>
          {isLogin ? "Register here" : "Login here"}
        </button>
      </p>
    </div>
  );
};

export default AuthCard;
