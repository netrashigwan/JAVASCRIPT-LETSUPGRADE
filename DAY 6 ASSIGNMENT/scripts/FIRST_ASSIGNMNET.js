let colorArr = ["pink","black","green",'orange','red'],i=0;
let colorChange= ()=>{
    document.body.style.backgroundColor = colorArr[i];
    i++;
    if(i==colorArr.length)
    i=0;
};
setInterval(colorChange,4000);