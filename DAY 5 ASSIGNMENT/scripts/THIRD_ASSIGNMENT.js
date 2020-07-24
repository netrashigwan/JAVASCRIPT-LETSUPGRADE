console.log("THIS IS THIRD QUESTION !!")

fetch('https://jsonplaceholder.typicode.com/todos/1'
).then(response=>response.json())
.then(data=>console.log(data));
fetch('https://jsonplaceholder.typicode.com/todos/2'
).then(response=>response.json())
.then(data=>console.log(data));
fetch('https://jsonplaceholder.typicode.com/todos/4'
).then(response=>response.json())
.then(data=>console.log(data));