let n = 10;

let arifProgress = 100;
let d = 7;
let array = [];

for (let i = 0; i < n; i++) {
    array.push(arifProgress);
    arifProgress -= d;
}
console.log(array);