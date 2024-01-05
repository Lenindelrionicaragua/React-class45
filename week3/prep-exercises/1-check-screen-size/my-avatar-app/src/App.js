import React from "react";
import useAvatar from "./useAvatar";
import { BigHead } from "@bigheads/core";
import "./App.css";

const App = () => {
  const { screenType } = useAvatar();

  let avatar;
  switch (screenType) {
    case "big":
      avatar = (
        <BigHead
          accessory="shades"
          body="chest"
          circleColor="blue"
          clothing="tankTop"
          clothingColor="black"
          eyebrows="angry"
          eyes="wink"
          facialHair="mediumBeard"
          graphic="vue"
          hair="short"
          hairColor="black"
          hat="none"
          hatColor="green"
          lashes="false"
          lipColor="purple"
          mask="true"
          faceMask="true"
          mouth="open"
          skinTone="brown"
          className="avatar" // Agrega una clase para aplicar estilos específicos al avatar
        />
      );
      break;
    case "small":
      avatar = (
        <BigHead
          // Define propiedades para pantalla pequeña
          className="avatar" // Agrega una clase para aplicar estilos específicos al avatar
        />
      );
      break;
    default:
      avatar = (
        <BigHead
          // Define propiedades para pantalla mediana
          className="avatar" // Agrega una clase para aplicar estilos específicos al avatar
        />
      );
  }

  return (
    <div>
      <h1>Avatar App</h1>
      <div className="avatar-container">{avatar}</div>
    </div>
  );
};

export default App;
