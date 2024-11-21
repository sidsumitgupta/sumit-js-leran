// for loops 

for (let index = 0; index < 10; index++) {
    const element = index;
    console.log(element);

    
}
 let array = ["hello", "to","my","world"]
  console.log(array.length);
  
for (let index = 0; index < array.length; index++) {
    const element = array[index];
     console.log(element);
     
    
}


//  brake and continue

for (let index = 0; index <20; index++) {
    if (index==5){
        console.log("5 is found");
        break;
        
    }
    console.log(`index is ${index}`);
    
    
}
for (let index = 0; index <20; index++) {
    if (index==5){
        console.log("5 is found");
        continue;            // its give relaxtion for one time of condition 
        
    }
    console.log(`index is ${index}`);
    
    
}

/// while loop 

let index =0
while(index<=10){
    console.log(index);
    index = index + 2;
}

let i = 0
do {
    console.log(`value is ${i}`);
    
    i++
} while (i<=10);