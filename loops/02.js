// for of 

//["","",]
//[{},{},{}]

const arr = [1,2,4,7,8,]
for (const num of arr) {
    console.log(num);  
}

const say = "hello"
for (const hey of say) {
 console.log(`Each char is ${say}`);
}

//maps 

const map = new Map()
map.set('IN',"INDIA")
map.set('ENG',"EMGLAND")
map.set('fr',"france")

console.log(map);
for (const key of map) {
    console.log(key);
    
    
}

const myobj = {
    js: "java",
    ls: "loops",
    key:"keys"

}
for (const key in myobj) {
     
        console.log(`${key} shortcut of ${myobj[key]}`);
        
        
    
}

