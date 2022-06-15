let arr = [2, 3, 4, 5, 6, 7, 14, 16, 23, 25, 32];
let evenNumbers = [];
let sum = 0;

for (i = arr.length - 1; i >= 0; i--) {
    let storage = arr[i];
    if (storage % 2 === 0) {
        evenNumbers.push(storage);
        sum += 1;
    }
}
console.log(`Natija ${evenNumbers} \njuftlar soni = ${sum} ta`);


