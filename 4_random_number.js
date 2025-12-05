function randomNumber() {
  return Math.ceil(Math.random() * 10);
}

for (i = 0; i < 5; i++) {
  const num = randomNumber();
  console.log(num);
}
