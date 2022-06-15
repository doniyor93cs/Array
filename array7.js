let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// 1-variant
let reverseList = [];
for (i = array.length - 1;  i >= 0; i--) {
    reverseList.push(array[i]);
}
console.log(reverseList);

// 2-variant
// console.log(array.reverse());