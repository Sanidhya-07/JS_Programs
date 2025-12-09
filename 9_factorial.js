const factorial = (number) => {
  // factorial of 1 and negative number is 1.

  if (number <= 1) {
    return 1;
  } else {
    fact = number * factorial(number - 1);
    return fact;
  }
};

console.log(`factorial is : ${factorial(7)}`);
