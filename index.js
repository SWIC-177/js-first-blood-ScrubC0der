//Declare variable name
var name = "Kelan"

//Declare variable age
var age = 21

//Write verifyAdulthood function 
function verifyAdulthood(age, name) {
    if (age >=18) {
        return `Welcome, ${name}!`
    } else {
        return `You are not old enough to enter, ${name}`
    }
}
console.log(verifyAdulthood(age,name))