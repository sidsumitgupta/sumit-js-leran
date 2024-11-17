function addtwonum(num1,num2)
{
    console.log(num1+num2);
    
}
addtwonum(5,6) // calling function with value(argument) to add them ,num1(parameters) that recive

function addtwonum(num1,num2)
{
    let result = num1+num2
    return result
    
}
   const result = addtwonum(25,6)
   console.log("ans", result);
   


   function loginuser (username){
        if (username===undefined)
        {
            console.log("please enter username");
        return
        }
         return `${username}`
    

   }
     console.log(loginuser(""));
      // this is example of login in form or not 
   
  // suppose you have multiple argument recive in function but you dont know how much so in this case 

  function claculateprice(...num1){
    return num1
  }
   console.log(claculateprice(100,200,567,987)); // by (...num1) it convert into array 


const user = {
    name: "ishan",
    prize: 350

}

function handleobj(anyobject) {
    console.log(`username ${anyobject.name} and prize is ${anyobject.prize}`);
    
    
}
handleobj(user)
    







   