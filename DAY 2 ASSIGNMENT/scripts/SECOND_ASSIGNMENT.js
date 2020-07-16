console.log("HELLO THIS IS SECOND QUESTION !")

document.write("1. STRING METHODS !!")
console.log("1. STRING METHODS !!")

let str = "Act as if what you do makes a difference. It does. "
console.log(str);

console.log(str.length);
console.log(str.toLowerCase());
console.log(str.toUpperCase());
console.log(str[10]);
console.log(str.indexOf('4'));
console.log(str.lastIndexOf('a'));
console.log(str.charAt('15'));
console.log(str.endsWith("if"));
console.log(str.split('o'));
console.log(str.concat("Lets start!!"));
console.log(str.repeat(4));
console.log(str.replace("does", "will do"));
console.log(str.search("life"));
console.log(str.slice(2, 9));

document.write("\n2. ARRAY METHODS !!")
console.log("1. ARRAY METHODS !!")

let arr = ['netra', true, 04, ['2','4']];
let arr2 = ['apple', 'banana','cherry','dragonfruit','grapes'];
console.log(arr);
console.log(Array.isArray(arr));
console.log(arr.reverse())
console.log(arr[2]);
console.log(arr.concat(arr2));
arr2.unshift('cherry');
console.log(arr2); 
arr2.push('orange');
console.log(arr2);
arr2.shift('banana');
console.log(arr2);
console.log(arr2.pop());

