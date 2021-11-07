const _purple = "rgb(124, 0, 132)";

let first = document.getElementById("first");
let second = document.getElementById("second");
const spaces = document.querySelectorAll('.box');

first.style.background = "purple";
second.style.background = _purple;

console.log(first.style.background.color);
console.log(second.style.background);
console.log(first.style.background.color == second.style.background.color);
console.log(first.style.background == second.style.background);
console.log(spaces);