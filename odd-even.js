const isOdd = (number) => {
  return Number(number) % 2 !== 0;
};

const isEven = (number) => {
  return Number(number) % 2 === 0;
};

console.log(isOdd(7));
console.log(isEven(7));
