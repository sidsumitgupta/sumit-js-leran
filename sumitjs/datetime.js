// dates 

let myDate = new Date()
console.log(myDate); // create date time but not understandable

console.log(myDate.toDateString()); // create date 
console.log(myDate.toString()); // ceate date with time (universal time)
console.log(myDate.toLocaleDateString());  // create date in (month/date/year)
console.log(typeof myDate); // object types



// for decleared specific date 
let myceratedate = new Date(2023,0,12);

console.log(myceratedate); // again understandable so 
console.log(myceratedate.toDateString()); // also give day name
 //***********time***************** */


 let myTimeStamp = Date.now()

 console.log(myTimeStamp);  // times give in ms 
 console.log(myceratedate.getTime());
  
  let newdate = new Date();
  console.log(newdate);
  
  console.log(newdate.getSeconds());

  
 
 
 

