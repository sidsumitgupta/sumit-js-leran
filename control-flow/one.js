// if statement // 

const score = 200
if(score==100){
    let user = "pro"
    console.log(`the score ${user}`);

}
else{
    console.log("not equal too");
}

// real life example


const userloggin = true 
const debitcard = true 


if (userloggin && debitcard) {   // condition play when both are true
    console.log("allow to buy course");
    
}


const loggINbygoogle = true
const loggINbyemail = false

if (loggINbygoogle || loggINbyemail) {   // if any condition true program will execute
    console.log("log IN");
    
}

