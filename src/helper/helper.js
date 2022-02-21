const generateNumbers = (quantity = 19) => {
  let numbers = [];
  while (numbers.length <= quantity) {
    let number = Math.floor(Math.random() * 101);
    if (!numbers.includes(number)) {
      numbers.push(number);
    }
    number = 0;
  }
  return numbers;
};
console.log(generateNumbers());

export default generateNumbers;
