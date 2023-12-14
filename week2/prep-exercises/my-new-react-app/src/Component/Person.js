import React from "react";

const Person = ({ persons }) => {
  return (
    <div>
      {persons.map((person, index) => (
        <div key={index} className="person-container">
          <ul>
            <li>First Name: {person.firstName}</li>
            <li>Last Name: {person.lastName}</li>
            <li>Email: {person.email}</li>
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Person;
