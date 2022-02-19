const generateNumbers = (quantity = 25) => {
  let numbers = [];
  for (let i = 1; i <= quantity; i++) {
    let number = Math.floor(Math.random() * 101);
    numbers.push(number);
    number = 0;
  }
  return numbers;
};
// console.log(generateNumbers());

export default generateNumbers;
