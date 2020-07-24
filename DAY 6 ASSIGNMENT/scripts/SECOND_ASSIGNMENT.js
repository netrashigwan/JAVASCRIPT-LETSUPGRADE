let multiplication = prompt(`Enter the Multiplicant`,1),
result= document.getElementById('result'),
value;
let mul= document.getElementById('mul');
mul.innerHTML+=` ${multiplication}`;
for (let i = 1; i <= 10; i++) {
    value=multiplicant*i;
    result.innerHTML += `${multiplication}x${i}=${value}`;
}