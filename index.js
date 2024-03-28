const person = {
  name: "John",
  age: 18,
};

function verifyAdulthood(personName, personAge) {
  if (person.age >= 18) return `Welcome, ${person.name}!`;

  return `You are not old enough to enter, ${person.name}.`;
}

const adultMessage = verifyAdulthood(person.name, person.age);

console.log(adultMessage);
