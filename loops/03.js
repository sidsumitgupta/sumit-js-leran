const coding =[ "js", "java","python","hey","c++"]

//coding.forEach(function (iteam){
  //   console.log(iteam);
     
//})

// other way 

//function printme (iteam){
    //console.log(iteam);
    
//}
//coding.forEach(printme)
coding.forEach((iteam, index, arr)=> {
    console.log(iteam, index , arr);
    
})


const mylang= [
    {
        langname : "javasc",
        langtype : "js"
    }
    ,
    {
        langname : "py",
        langtype : "js"
    },
    {
        langname : "jc",
        langtype : "s"
    }
]
mylang.forEach((key)=>{
    console.log(key.langtype);
    
})