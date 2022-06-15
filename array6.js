let n = sum(10);

function sum(number) {
    let A = 2, B = 5;
    let C = A + B;
    let array = [];
    array[0] = A;
    array[1] = B;
    array[2] = C;
    for (let i = 3; i < number; i++) {
      C *= 2;
      array.push(C);
    }
    return array;
}
console.log(n);






