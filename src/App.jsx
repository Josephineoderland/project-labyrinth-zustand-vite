import { useState } from "react";
import GameComponent from "./components/GameComponent";
import LoginComponent from "./components/LoginComponent";
import useGameState from "./zustand/useGameState";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const { gameState, getBackgroundImage } = useGameState();

  const handleLogin = (username) => {
    setUsername(username);
    setIsLoggedIn(true);
  };

  return (
    <div
      className="background"
      style={{
        backgroundImage: `radial-gradient(circle at center, rgba(0,0,0,0.5), rgba(0,0,0,0.6)), url(${getBackgroundImage(
          gameState?.coordinates
        )})`,
      }}>
      <h1>My Labyrinth Game</h1>
      {isLoggedIn ? <GameComponent username={username} /> : <LoginComponent onLogin={handleLogin} />}
    </div>
  );
}

export default App;
