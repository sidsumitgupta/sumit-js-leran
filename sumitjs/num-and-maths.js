const score = 400 // auto define its number 
console.log(score);


const balance = new Number (500) // other way for int(no. types datatypes)
console.log(balance);

console.log(balance.toString()); // its have also many proto-types operation like their which changing into string right now

console.log(balance.toString().length); // with changing into string we aaply string pro-types feature 


 const otherno = 123.456 
 console.log(otherno.toFixed(4));  // fixed no adding . as after the num given 
 console.log(otherno.toPrecision(5));  // to rounfoff the decial nummber
 console.log(otherno.toLocaleString('en-IN'));  //mark coma for easily readable

//************************************maths**************************************************************** */
 console.log(Math.abs(-5));  // abs changes -ve to +ve
 console.log(Math.round(6.4));  // round of number 
 console.log(Math.min(2,5,9,1,4));




 //*******imp********* */

 console.log(Math.random()); //genrate random num 
 console.log((Math.random()*10)+1); // 
 console.log(Math.floor(Math.random()*10)+1);  // to this line math.floor conform that no is in b/w 1 to 9 

 // now suppose we want no in b/w 20 to 30 for this 

 const min = 30 
 const max = 45

              console.log(Math.floor(Math.random()*(max-min+1)+min)); // this help in gerate in b/w 20 to 30 
 
 
 
 
 
 
 
 
 
