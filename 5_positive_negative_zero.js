// Positive, Negative or Zero number

function detectNumber(num) {
  if (num < 0) {
    return `negative`;
  } else if (num > 0) {
    return `positive`;
  } else {
    return `Zero`;
  }
}

const result = detectNumber(5);
console.log(result.toUpperCase());
