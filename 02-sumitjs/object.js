// object literals

 const mysym = Symbol("key2")
const jsuser = {
    name: "sumit",
   [mysym]: "mykey2",
    age : 25 ,
    locatin: "gkp",
    email: "sumit@gmail.com",
    isloggedIN:false,
}

console.log(jsuser["name"]); // right way to access 
console.log(jsuser[mysym]);
console.log(typeof mysym); //mysym is used as symbol


// we want change any object value then 
jsuser.email = "sumitgoogle@gmail.com"
 console.log(jsuser["email"]); // this is change  
 // if use jsuser.ferzze then not change


 // function // 
 jsuser.greeting = function(){
    console.log("hello js user", jsuser["name"]);
    
 }

 jsuser.greetingtwo = function(){
    console.log(`hello js user, ${this.name}`);
 }
 console.log(jsuser.greeting());
 console.log(jsuser.greetingtwo());
 
 

console.log(Object.keys(jsuser)); // we find key and apply loops 
console.log(Object.values(jsuser));
console.log(Object.entries(jsuser));//convert part of array 


const course = {
    coursename : "jshindi",
    courseprice : 4500,
    courseown :  "sumit"
}
const {coursename: heelo}=course

console.log(heelo); // here we deconstruct the object wee access the coursename by "heelo"



