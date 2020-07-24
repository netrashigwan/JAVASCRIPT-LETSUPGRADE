let name = prompt("Enter Your Name",'UNKNOWN'),
Name = document.getElementById('userName'),
clock = document.getElementById('clock');
Name.innerHTML += ` ${name}. Thank You For Visiting`;
dispClock= ()=>{
    let date = new Date(),
    time = date.toLocaleTimeString();
    clock.innerHTML = time;
}
dispClock();
setInterval(dispClock,1000);
