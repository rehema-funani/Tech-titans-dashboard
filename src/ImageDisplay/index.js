import React from 'react';
import './LoginScreen.css';
const LoginScreen = () => {
  return (
    <div className="login-container">
      <div className="left-panel">
        <div className="logo-container">
          <img src="/image/logo.png" alt="Logo" className="logo" />
        </div>
        <h1 className="dashboard-title">UPCYCLEIT DASHBOARD</h1>
      </div>
      <div className="right-panel">
        <h2 className="login-title">Log In</h2>
        <form className="login-form">
          <label>Full name</label><br></br>
          <input type="text" placeholder="FullName" className="input-field" />
          <label>MemberId</label>
          <input type="text" placeholder="Member Id" className="input-field" />
          <label>Password</label>
          <input type="password" placeholder="Password" className="input-field" />
          <button type="submit" className="login-button">Log In</button>
        </form>
      </div>
    </div>
  );
};
export default LoginScreen;