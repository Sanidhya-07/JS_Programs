let a = 10,
  b = 50;
console.log(`Before swapping: a=${a} and b=${b}`);

// By using temperory variable

let temp;
temp = a;
a = b;
b = temp;

console.log(`After swapping: a=${a} and b=${b}`);




// By using destructuring

// [a, b] = [b, a];
// console.log(`After swapping: a=${a} and b=${b}`);
