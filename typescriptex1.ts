
//primitive Datatypes

let message: string = 'Hello!!';
console.log(message);
let msg: number =2;
console.log(msg);

//String - for text
let productName: string = "Laptop";
let mesage: string = 'Hello World';
console.log(productName);
console.log(mesage);

//Number - for numbers(integer and decimals)
let price: number=999.99;
let quantity: number=5;
console.log(price);
console.log(quantity);

//Boolean - true or false
let isInStock: boolean= true;
let isOnSale: boolean = false;
console.log(isInStock);
console.log(isOnSale);

//Null and undefined
let emptyVal: null = null;
let notAssigned: undefined= undefined;
console.log(emptyVal);
console.log(notAssigned);
//---------------------------------------------------

//ARRAYTYPE 
// two ways to write array types:

//Method 1: Type[]
let p: number[] =[1,2,2];
let names: string[]= ["John","ss","doe"];
console.log(p, " ", names);

//method 2: Array<Type>
let scores: Array<number> = [12,23,33];
let products: Array<string> = ["laptop","mouse","monitor"];
console.log(scores," ",products)

//---------------------

//variables

//1.String
let studentname: string = "Srujana"
//2. number
let age: number = 18
//3. boolean
let isStudent: boolean = true;
//4. array
let marks: number[] = [10,20,30];
//tuple
let student: [number, string] = [10,"Sru"];
console.log(studentname +"\n" + age + "\n" +  isStudent + "\n" + marks +"\n" + student);
//enum
// enum grade{
//     A,
//     B,
//     C

// }
// let studentgrade: grade = grade.A;
// console.log(studentgrade)
//

//------------------------------------------------------

// interface 
interface Rectangle{
    height: number,
    width: number
}
const rectangle: Rectangle = {
    height: 20,
    width: 10
};
console.log(rectangle);
interface  colorRectangle extends Rectangle{
    color: string
}
const coloredRectangle: colorRectangle ={
    height: 20,
    width: 10,
    color: "blue"
}
console.log(coloredRectangle);
