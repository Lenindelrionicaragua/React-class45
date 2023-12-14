import React from "react";

const Person = ({ person, onClick }) => {
  if (!person) {
    return (
      <div>
        <button onClick={onClick}>Load Person</button>
      </div>
    );
  }

  const { first_name, last_name, email } = person;

  return (
    <div>
      <button onClick={onClick}>Load Another Person</button>
      <ul>
        <li>First name: {first_name}</li>
        <li>Last name: {last_name}</li>
        <li>Email: {email}</li>
      </ul>
    </div>
  );
};

export default Person;
