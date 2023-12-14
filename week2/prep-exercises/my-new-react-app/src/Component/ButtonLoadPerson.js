import React from "react";

const ButtonLoadPerson = ({ onClick, loading, firstPersonLoaded }) => {
  const buttonText = firstPersonLoaded
    ? "Load Another Person"
    : "Load First Person";

  return (
    <button onClick={onClick} disabled={loading} className="load-button">
      {buttonText}
    </button>
  );
};

export default ButtonLoadPerson;
