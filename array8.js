let arr = [2, 3, 4, 5, 6, 12, 23, 25, 33];
let oddNumbers = [];
let sum = 0;
for (i = 0; i < arr.length; i++) {
    let storage = arr[i];
    if (storage % 2 !== 0) {
        oddNumbers.push(storage);
        sum += 1;
    }
}
console.log(`Natija ${oddNumbers} \ntoqlar soni = ${sum} ta`);


// even numbers - juft sonlar
// odd numbers - toq sonlar