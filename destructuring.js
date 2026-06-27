//Array Destructuring
let numbers = [10,20,30,40];
let [first,second, ...restNumbers] = numbers;

console.log("First: ",first);
console.log("Second: ",second);
console.log("Rest: ",restNumbers);

//objecct destructuring
let student = {
    name: "Srujana",
    age: 18,
    city: "Hyd"

};

//Basic + default value + remaining + rest
let {
    name: studname,
    age,
    country = "India",
    ...otherDetails
} = student;
console.log("Name: ",studname);
console.log("Age: ",age);
console.log("Country: ",country);
console.log("Other Details: ", otherDetails);

// Function with destructuring 
function display({name, age}){
    console.log(`Student: ${name}, Age: ${age}`); //template string  ` -> back tick used to concatinate two strings
}
display(student);

