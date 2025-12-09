// Largest number from 3


const largest = (a, b, c) => {
  if (a > b) {
    if (a > c) {
      return `${a} is largest.`;
    } else {
      return `${c} is largest.`;
    }
  } else {
    if (b > c) {
      return `${b} is largest.`;
    } else {
      return `${c} is largest.`;
    }
  }
};
console.log(largest(20,25,48));


// by using Math.max()

console.log(`largets number is ${Math.max(40,58,96)}`)
console.log(`largets number is ${Math.max(40,58,96,501)}`)
