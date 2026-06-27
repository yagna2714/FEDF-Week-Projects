// Rest Operator :Here will we keep the rset in function only.
// function sum(...numbers){
//     let total=0;
//     for(let n of numbers){
//         total+=n;
//     }
//     return total;
// } 
// console.log("Total : ",sum(1,2,3,4,5,6));

display(1,2,3,4,5);
function display(first,second,...remaining){
    console.log(first);
    console.log(second);
    console.log(remaining);
}

