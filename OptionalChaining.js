//optional chaining is denoted by ?.
// it is safe property access on nullable values. 
//it does not show any error intead it shows undefined 

let user = {
    name: "srujana",
    profile: {
       age: 18,
       address: {
            city: "Hyderabad"
       }
    },
    hobbies: ["Reading", "Music"],
	  greet: function () {
	    return "Hello!";
	  }

};

// Safe object access
console.log("Name:", user?.name);

// Safe nested access
console.log("City:", user?.profile?.address?.city);

// Missing property (no error)
console.log("Country:", user?.profile?.address?.country);
	
//safe array access
console.log("First Hobby: ", user?.hobbies?.[0]);

//safe function call
console.log("Greeting: ",user?.greet?.());


//case when  object is null
let student = null;
console.log("Student Name: ", student?.name); // undefined
