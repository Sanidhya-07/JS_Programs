const cheakPrime = (number) => {
  // negative and 1 is not prime

  if (number <= 1) {
    return `${number} is Not Prime Number.`;
  } else {
    let count = 0;
    for (i = 2; i < number/2; i++) {
      if (number % i === 0) {
        count++;
        break;
      }
    }
    if (count === 0) {
      return `${number} is  Prime Number.`;
    } else {
      return `${number} is Not Prime Number.`;
    }
  }
};
console.log(cheakPrime(-61));
console.log(cheakPrime(1));
console.log(cheakPrime(97));
