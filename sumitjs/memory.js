// stack memory(primitive), heap memory(non-premitive)
 // all stack memory types create the copy of original  data eg (int , string, boolean)
 // and heap memory types they refer the direct original data mean when we change the new variable which link to then its original data also changes eg of heap ( array, obejct) 

 //stack 
 let myname = "sumit gupta"

 let anothername = myname

 console.log(myname);
 
 console.log(anothername);
 

 //  heap


 let userone = {

    email: "sumit@gmail.com",
    
     name: "sumit"
 }
 let usertwo = userone
 usertwo.email = "sumitgupta123@gmail.com"


console.log(userone.email);
console.log(usertwo.email);


// here we can see as we change usertwo email by equating to userone 
// userone email also changes 
