const person = {
  name: "John Doe",
  age: 23,
  street: "123 Main St",
};

function updatePersonName(p, newName) {
  const p2Update = { ...p };

  p2Update.name = newName;
  return p;
}

const updatedPerson = updatePersonName(person, "Jane Doe");
console.log(updatedPerson);
