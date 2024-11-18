// all are global variable 

let a = 2 
const b = 6
var c = 0  // let const variable global variable priority greater than local 


// {} if its comes with if else or function then called as scope dont missed understand with object

if (true){  // in this local variable
let a = 200;
const b = 300;
var c = 600; // var local priority greater than global 

  // if you want print in scope varible then write in b/w {} console.log eg are 

  console.log(a);
  

}

console.log(a);
console.log(b);
console.log(c);


function one (){
    const username = "sumit"
function two (){
    const website = "youtube"
 console.log(username);
 
}
 // console.log(website);  not access buz it define only in its scope 

two()
}
 
one()