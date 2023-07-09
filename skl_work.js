let info1 = prompt("อาหารที่อยากกินจานที่ 1");
let info2 = prompt("อาหารที่อยากกินจานที่ 2");
let info3 = prompt("อาหารที่อยากกินจานที่ 3");
let info4 = prompt("อาหารที่อยากกินจานที่ 4");
let info5 = prompt("อาหารที่อยากกินจานที่ 5");

let list = [info1, info2, info3, info4, info5];

let x = list[Math.floor(Math.random() * list.length)];
console.log(x);