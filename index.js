const userName = "Kelan";
const userAge = 21;

function verifyAdulthood(age, name) {
  if (age >= 18) {
    return `Welcome, ${name}!`;
  }
  return `You are not old enough to enter, ${name}`;
}

console.log(verifyAdulthood(userAge, userName));
