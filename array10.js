let arr = [2, 3, 4, 5, 6, 7, 14, 16, 25, 32];
let oddNumbers = [], evenNumbers = [], sum1 = 0, sum2 = 0;

for (let i = 0; i < arr.length; i++) {
    let storage = arr[i];
    if (storage % 2 === 0) {
        evenNumbers.push(storage);
        sum1 += 1;
    }
    if (storage % 2 !== 0) {
        oddNumbers.push(storage);
        sum2 += 1;
    }
}
console.log(`Natija ${evenNumbers} \njuftlar soni = ${sum1} ta \nNatija ${oddNumbers.reverse()} \ntoqlar soni = ${sum2} ta`);