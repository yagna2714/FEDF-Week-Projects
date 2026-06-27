//Normal Function
function add(a,b){
    return a + b;
}

//arrow function (short form)
const addArrow = (a,b) => a+b;
console.log("Normal:", add(3,3));
console.log("Arrow:",addArrow(2,3));

//arrow function with one parameter
const sq = n => n*n;
console.log("Square:", sq(4));

// Arrow function with no parameters
const greet = () => "Helloo!!";
console.log(greet());

