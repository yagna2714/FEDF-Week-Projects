//Nullish coaleshing : denoted by ?? 
// Returns right-hand side only when left is null/undefined u will be replacing with some other value in this .

//different test values
let name = null;
let username = ""; //empty string
let marks = 0;
let city;

//using ??
console.log("Name: ", name ?? "Guest");  //Guest
console.log("Username: ",username ?? "Guest"); // "" (empty String stayss)
console.log("MArks:", marks ?? 50); // 0(valid value)
console.log("City:",city ?? "Hyderabad"); // Hyderabad 

console.log("-----Using || ----");
//Using ||

console.log("Name: ", name || "Guest");  //Guest
console.log("Username: ",username || "Guest");  //Guest
console.log("MArks:", marks || 50);  // //50
console.log("City:",city || "Hyderabad");  // Hyderabad