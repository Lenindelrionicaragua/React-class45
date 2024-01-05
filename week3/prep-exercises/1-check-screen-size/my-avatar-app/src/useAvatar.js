// src/useAvatar.js
import { useState, useEffect, useDebugValue } from "react";
import { BigHead } from "@bigheads/core";

// eslint-disable-next-line
const useAvatar = () => {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Determine the screen type based on width
  let screenType = "medium";
  if (windowSize.width > 1000) {
    screenType = "big";
  } else if (windowSize.width < 700) {
    screenType = "small";
  }

  // Use useDebugValue to display a label in React DevTools
  useDebugValue(`Screen Type: ${screenType}`);

  // Use BigHead or store it in a variable for future use
  const avatar = (
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
    />
  );

  return { screenType, avatar };
};

export default useAvatar;
