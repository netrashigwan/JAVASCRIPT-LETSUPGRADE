console.log("this is third question !!")


var marks = prompt("Please enter your marks", "00");
console.log("by using if...elseif : ")
if (marks < 60){
    console.log("Grade : F");      
    } 
else if (marks < 70) 
{
    console.log("Grade : D"); 
} 
else if (marks < 80) 
{
    console.log("Grade : C"); 
} 
else if (marks < 90) 
{
    console.log("Grade : B"); 
} 
else if (marks < 100) 
{
    console.log("Grade : A"); 
}
else
{
    console.log("please put valid marks")
}


console.log("by using ternary operator : ")
let marksusingternary = (marks < 60) ? 'Grade : F': 
            (marks < 60) ? 'Grade : F':
            (marks < 70) ? 'Grade : D':
            (marks < 80) ? 'Grade : C':
            (marks < 90) ? 'Grade : B':
            (marks < 100) ? 'Grade : A':
            'please put valid marks';

console.log(marksusingternary);



