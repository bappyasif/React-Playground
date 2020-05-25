import React from "react";

// Rendering Each Person HTML
function Person({ person }) {
  return (
    <div>
      <h4>
        {person.name} Is Supposedly {person.age} Years Old With {person.skill}{" "}
        Skills
      </h4>
    </div>
  );
}

export default Person;
