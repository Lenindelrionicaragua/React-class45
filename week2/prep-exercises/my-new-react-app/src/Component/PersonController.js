import React, { useState } from "react";
import ButtonLoadPerson from "./ButtonLoadPerson";
import Person from "./Person";

const PersonController = () => {
  const [persons, setPersons] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleButtonClick = async () => {
    setLoading(true);

    try {
      const response = await fetch("https://www.randomuser.me/api?results=1");
      const data = await response.json();
      const [newPerson] = data.results;

      const formattedPerson = {
        firstName: newPerson.name.first,
        lastName: newPerson.name.last,
        email: newPerson.email,
      };

      setPersons((prevPersons) => [...prevPersons, formattedPerson]);
    } catch (error) {
      console.error("Error fetching data:", error.message);
    }

    setLoading(false);
  };

  return (
    <div className="person-controller">
      <ButtonLoadPerson
        onClick={handleButtonClick}
        loading={loading}
        firstPersonLoaded={persons.length > 0}
      />
      <Person persons={persons} />
    </div>
  );
};

export default PersonController;
