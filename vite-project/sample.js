const prices = [13, 70, 899];
const total = prices.reduce((sum, price) => sum + price, 0);
console.log("total price:",total);



const students = [
    { name: "Arun", marks: 80 },
    { name: "Kiran", marks: 90 },
    { name: "Ravi", marks: 75 }];
const student = students.find(s => s.name === "Kiran");
console.log(student ? student.marks : "Not found");



function makeGreeter(greeting) {
    return function(name) {
        return greeting + " " + name;
    };
}console.log(makeGreeter("Hello")("vanakamda mapla"));




