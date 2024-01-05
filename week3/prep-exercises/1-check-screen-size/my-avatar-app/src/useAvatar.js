import { useState, useEffect, useDebugValue } from "react";
import { BigHead } from "@bigheads/core";
import { Mithi, Diana, Mikong } from "./component/characters";

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
