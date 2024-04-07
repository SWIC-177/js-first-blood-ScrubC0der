// --Arrow function--

function add(a, b) {
  return a + b;
}

console.log(add(2, 3)); // Output: 5

const addArrow = (a, b) => a + b;

console.log(addArrow(2, 3)); // Output: 5

// --Closure--
function createDivision(factor) {
  return (number) => number / factor;
}

const double = createDivision(2);
console.log(double(4));
console.log(double(12));
// Callbacks
function fetchData(callback) {
  setTimeout(() => {
    const data = { message: "Data fetched successfully!" };
    callback(data);
  }, 2000);
}

// Callback function
function processData(data) {
  console.log(data.message);
}

fetchData(processData);
