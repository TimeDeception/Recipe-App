import { Link } from "react-router-dom";

const LoginForm = () => {
  return (
    <>
      <div className="form-container">
        <h2>Welcome To SolarRecipe's</h2>
        <form className="login-form">
          <div className="login-inputs">
            <label htmlFor="username">Username</label>
            <input id="username" type="text" />
          </div>
          <div className="login-inputs">
            <label htmlFor="password">Password</label>
            <input id="password" type="pass" />
          </div>
          <button type="submit" className="submit-button">
            Login
          </button>
        </form>
        <p>
          Don't have an Account?{" "}
          <Link to="../Register.html">Register here</Link>
        </p>
      </div>
    </>
  );
};

export default LoginForm;
