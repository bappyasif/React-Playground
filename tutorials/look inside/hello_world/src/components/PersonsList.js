import React from "react";
import Person from "./Person";

function PersonsList() {
  // Using External Person File
  let persons = [
    {
      id: 1,
      name: "aBappy",
      age: "23",
      skill: "JavaScript",
    },
    {
      id: 2,
      name: "bSarkar",
      age: "32",
      skill: "React JS",
    },
  ];

  let renderList = persons.map((person) => (
    <Person key={person.id} person={person} />
    // <Person key={person.id.toString()} person={person} />
    // <Person key={idx} person={person} />
  ));

  return <div>{renderList}</div>;

  // Within Function
  //   let persons = [
  //     {
  //       id: 1,
  //       name: "aBappy",
  //       age: "23",
  //       skill: "JavaScript",
  //     },
  //     {
  //       id: 2,
  //       name: "bSarkar",
  //       age: "32",
  //       skill: "React JS",
  //     },
  //   ];

  //   let renderList = persons.map((person) => (
  //     <h4>
  //       {person.name} Is Supposedly {person.age} Years Old With {person.skill}{" "}
  //       Skills
  //     </h4>
  //   ));

  //   return <div>{renderList}</div>;
}

export default PersonsList;
