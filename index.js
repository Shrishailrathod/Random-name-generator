let rand = Math.random()
let first,secound,third;
// first 
if(rand<0.33){
    first="Rathod"
}
else if(rand<0.66 && rand>=0.33){
    first="Shrishail"
}
else{
    first="Bhai"
}


// secound
rand = Math.random()
if(rand<0.33){
    secound="Systumm"
}
else if("rand<0.66 & rand>=0.33"){
    secound="bhaichara"
}
else{
    secound="on top"

}

// third
rand = Math.random()
if(rand<0.33){
    third="hello dude"
}
else if(rand<0.66 && rand>=0.33){
     third="Bhau"
}
else{
     third="sade"
}

console.log(`${first} ${secound} ${third}`);
    

