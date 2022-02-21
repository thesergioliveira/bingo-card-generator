const randomNumbers = (quantity = 101) => {
  let numbers = [];
  let number = 0;
  if (numbers.length <= 101) {
    number = Math.floor(Math.random() * 101);
    // number = 0;
  }
  numbers = [...numbers, number];
  return `This is the new number:${number}. This is the list of number ${numbers}`;
};
console.log(`${randomNumbers()}`);
