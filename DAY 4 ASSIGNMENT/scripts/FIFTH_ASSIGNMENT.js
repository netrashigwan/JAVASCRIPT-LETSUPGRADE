console.log("THIS IS FIFTH QUESTION !!!")

let percent =  function(a) {
    let value=0;
if(a<=5000){
    value=2;
}
else if(a>5000 && a<=10000){
    value=5;
}
else if(a>10000 && a<=20000){
    value=7;
}
else{
    value=10;
}
return value;
}
let empName = [`NETRA`,`RIDDHITA`, `HARSHADA`,`POURNIMA`];
let salesMade = [29000,2000,15000,5000];
for(let i=0;i<4;i++){
    let salesPercent=percent(salesMade[i]);
    let commision = (salesMade[i]/100)*salesPercent;
    console.log(`Sales made by ${empName[i]} is ${salesMade[i]} and Commission earned by is ${commision}`);
}