// let a = prompt("Eneter Whatever");
// alert(a);

// Arrow Funtion 'this' Keyword
let bengal = {
  places: ["GreenLands", "Hill Tracks", "Oceans", "Mangrove Forrest"],
  printWithDash: function () {
    console.log("inside printFunction : ", this);
    // setTimeout(function () {
    //   console.log("inside setTimer : ", this);
    //   //   console.log(this.places.join(" - ")); // undefined context
    // }, 1100);
    setTimeout(() => {
      console.log("inside setTimer : ", this);
      //   console.log(this.places.join(" - ")); // outer function 'this' context
    }, 1100);
  },
};

bengal.printWithDash();

// De Structuring
let toDos = {
  morning: "Breakfast",
  afternoon: "Lunch",
  evening: "Pod Casts",
  night: ["Dinner", "Sleep"],
};

let { morning, afternoon } = toDos;
console.log(morning, "-", afternoon);

morning = "Coffee";
console.log(morning, "-", afternoon);

// De Structing With Args
let students = ({ name, university }) => {
  // let { name, university } = student;
  console.log(`${name} from ${university}`);
};

// let students = (student) => {
//   let { name, university } = student;
//   console.log(`${name} from ${university}`);
// };

// let students = (student) => {
//   console.log(`${student.name} from ${student.university}`);
// };

students({ name: "aBappy", university: "BRAC University" });

// De Structuring An Array
let [, , , sightSeeing] = [
  "GreenLands",
  "Hill Tracks",
  "Oceans",
  "Mangrove Forrest",
];
console.log(sightSeeing);

// Re Structuring
let fname = "aBappy";
let height = "167";
let greetName = function () {
  console.log(`Greeting ${this.fname} Highing: ${this.height}`);
};
let reStructured = {
  fname,
  height,
  greetName,
  greetAgin() {
    console.log(`Greeting ${this.fname} Highing: ${this.height}`);
  },
};
// let reStructured = {
//   fname: fname,
//   height: height,
// };
reStructured.greetName();
console.log(reStructured.fname, reStructured.height, reStructured);

// Spread Operator
let tourism = ["GreenLands", "Hill Tracks", "Oceans", "Mangrove Forrest"];
let moreTourism = ["Rivers", "Waterfalls", "Sea Diving", "Surfing"];
let thingsTodo = [...tourism, ...moreTourism];
console.log(thingsTodo);

let dayList = {
  morning: "Breakfast",
  afternoon: "Lunch",
};

let eveningList = {
  evening: "Pod Casts",
  night: ["Dinner", "Sleep"],
};
let todaysList = { ...dayList, ...eveningList };
console.log(todaysList);

// Rest Operator
// let moreTourism = ["Rivers", "Waterfalls", "Sea Diving", "Surfing"];
let [, place, ...rest] = moreTourism;
console.log(place, rest);

// let { mornings, ...reest } = todaysList;
// console.log(mornings, reest);

let person = {
  firstName: "Sebastian",
  lastName: "Markbåge",
  country: "USA",
  state: "CA",
};

let { firstName, lastName, ...rests } = person;
console.log(firstName, lastName, rests);

// Class Constructor
class Hoildays {
  constructor(destination, days) {
    this.destination = destination;
    this.days = days;
  }
  info() {
    console.log(`Vacation ${this.destination} for ${this.days}`);
  }
}
// console.log(Hoildays.prototype);
let Bangladesh = new Hoildays("Bangladesh", 31);
Bangladesh.info();

class Vacations extends Hoildays {
  constructor(destination, days, gears) {
    super(destination, days);
    this.gears = gears;
  }
  info() {
    super.info();
    console.log(`Bring Your Own ${this.gears.join(" & ")}`);
    // console.log("Bring Your Own Gears" + this.gears.join("||"));
  }
}

let trip = new Vacations("Bangladesh", 30, [
  "sunglasses",
  "gloves",
  "flag",
  "camera",
]);

trip.info();

// function Hoildays(destination, days) {
//   this.destination = destination;
//   this.days = days;
// }

// Hoildays.prototype.info = function () {
//   console.log(`Vacation ${this.destination} for ${this.days}`);
// };

// let Bangladesh = new Hoildays("Bangladesh", 31);
// Bangladesh.info();
