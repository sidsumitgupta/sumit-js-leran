// array//
const arr = [1,2,3,4,6,7]
 // other way 
 const myarr2 = new Array(1,2,3,4,"sumit",8)
 console.log(myarr2[5]);
 // index start with 0 
 console.log(myarr2[4]);

 // array method

 myarr2.push("gupta")
 console.log(myarr2);  // .push can add any element to array 

 myarr2.pop("sumit")
 console.log(myarr2); // .pop can last remove any element to array


// unshift can add to first postion of array
// shift can remove to first postion of array 


const newarray = myarr2.join()  // we can see join can change array into sting

console.log(myarr2);
console.log(newarray);
console.log(typeof newarray);


// slice , splice 

console.log("a", myarr2);

const myn1 = myarr2.slice(1,4)
console.log(myn1);

const myn2 = myarr2.splice(1,4)
console.log("b" ,myarr2);
console.log(myn2);

// way to add two array into new array 
const marvel_hero = ["iornman", "spiderman", "thor"]

const dc_hero = ["iornman", "spiderman", "thor"]


const all_hero = marvel_hero.concat(dc_hero)
console.log(all_hero);
// other way also there 
const all_hero2 = [...marvel_hero,...dc_hero]
console.log(all_hero2);


let score1 = 100 
let score2 = 200
let score3 = 300 

console.log(Array.of(score1,score2,score3)); // convert into array from any value








 
 
 