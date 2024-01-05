import React from "react";
import useAvatar from "./useAvatar";
import "./App.css";

const App = () => {
  const { screenType, windowSize } = useAvatar();

  const characterNames = {
    big: "Mithi",
    medium: "Diana",
    small: "Mikong",
  };

  return (
    <div>
      <h1>Avatar App</h1>
      <div className="avatar-container">
        {useAvatar().avatar}
        <div className="avatar-info">
          {screenType && <p>Character: {characterNames[screenType]}</p>}
          <p>Screen Type: {screenType}</p>
          <p>Window Width: {windowSize.width}</p>
          <p>Window Height: {windowSize.height}</p>
        </div>
      </div>
    </div>
  );
};

export default App;
