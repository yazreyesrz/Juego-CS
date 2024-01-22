import React from "react";
import "./Login.css";
import Fondo from "../Login/fondo.jpg";

const Login = () => {
  return (
    <div className="login-fondo">
      <div className="login-container">
        <h1 className="ttl-memorama">Memorama</h1>
        <h2 className="titulo-login">Login</h2>
        <form className="login-form">
          <label htmlFor="username">Usuario:</label>
          <input type="text" id="username" name="username" />

          <label htmlFor="password">Contraseña:</label>
          <input type="password" id="password" name="password" />

          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
