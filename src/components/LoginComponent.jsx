import { useState } from "react";
import "../css/login.css";

const LoginComponent = ({ onLogin }) => {
  const [username, setUsername] = useState("");

  const handleInputChange = (event) => {
    setUsername(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onLogin(username);
  };

  return (
    <div className="login-container">
      <h1>My Labyrinth Game</h1>
      <h2>Log in</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input type="text" value={username} onChange={handleInputChange} />
        </label>
        <button type="submit">Start!</button>
      </form>
    </div>
  );
};

export default LoginComponent;
