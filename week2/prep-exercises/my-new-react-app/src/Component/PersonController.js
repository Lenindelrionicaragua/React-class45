import React, { useState, useEffect } from "react";
import Person from "./Person";

const PersonController = () => {
  const [person, setPerson] = useState(null);
  const [isButtonClicked, setIsButtonClicked] = useState(false);

  const getPerson = async () => {
    try {
      const response = await fetch("https://www.randomuser.me/api?results=1");
      if (!response.ok) {
        throw new Error(`Failed to fetch data. Status: ${response.status}`);
      }
      const data = await response.json();
      const [firstPerson] = data.results;

      const simplifiedPerson = {
        first_name: firstPerson.name.first,
        last_name: firstPerson.name.last,
        email: firstPerson.email,
      };

      setPerson(simplifiedPerson);
    } catch (error) {
      console.error("Error fetching data:", error.message);
    }
  };

  useEffect(() => {
    if (isButtonClicked) {
      getPerson();
      setIsButtonClicked(false);
    }
  }, [isButtonClicked]);

  const handleClick = () => {
    setIsButtonClicked(true);
  };

  return <Person person={person} onClick={handleClick} />;
};

export default PersonController;
