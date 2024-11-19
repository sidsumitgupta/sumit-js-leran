// immediately invoked function expression (iife)

// its use to protect global variable which cause distrubtion & help in immediately execute function 


( function chai (){
    console.log("connected");   //  (named IIFE)form of normal function
    
}) ();
( (name)=> {
    console.log(`${name}`);    // form of arrow function 
    
}) ("sumit") // passing argument 