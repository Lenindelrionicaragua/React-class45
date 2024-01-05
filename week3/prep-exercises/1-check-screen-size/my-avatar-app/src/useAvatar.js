import { useState, useEffect, useDebugValue } from "react";
import { BigHead } from "@bigheads/core";

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

  const isScreenSize = (minWidth, maxWidth) => {
    return windowSize.width >= minWidth && windowSize.width <= maxWidth;
  };

  const screenType = () => {
    if (isScreenSize(0, 700)) {
      return "small";
    } else if (isScreenSize(701, 1000)) {
      return "medium";
    } else {
      return "big";
    }
  };

  useDebugValue(
    `Screen Type: ${screenType()}, Width: ${windowSize.width}, Height: ${
      windowSize.height
    }`
  );

  const Mithi = {
    body: "breasts",
    eyebrows: "serious",
    eyes: "simple",
    faceMask: false,
    facialHair: "none",
    hair: "long",
    hairColor: "black",
    lashes: false,
    lipColor: "purple",
    mask: false,
    mouth: "serious",
    skinTone: "brown",
    className: "avatar",
  };

  const Diana = {
    body: "breasts",
    eyebrows: "leftLowered",
    eyes: "leftTwitch",
    faceMask: false,
    faceMaskColor: "black",
    facialHair: "none",
    hair: "afro",
    hairColor: "blue",
    lashes: true,
    lipColor: "green",
    mask: false,
    mouth: "lips",
    skinTone: "light",
    className: "avatar",
  };

  const Mikong = {
    body: "chest",
    eyebrows: "angry",
    eyes: "content",
    faceMask: false,
    facialHair: "stubble",
    hair: "buzz",
    hairColor: "black",
    lashes: false,
    lipColor: "purple",
    mask: false,
    mouth: "openSmile",
    skinTone: "light",
    className: "avatar",
  };

  const getAvatarByScreenType = () => {
    switch (screenType()) {
      case "big":
        return <BigHead {...Mithi} />;
      case "medium":
        return <BigHead {...Diana} />;
      case "small":
        return <BigHead {...Mikong} />;
      default:
        return null;
    }
  };

  return {
    screenType: screenType(),
    windowSize,
    avatar: getAvatarByScreenType(),
  };
};

export default useAvatar;
