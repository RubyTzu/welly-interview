//2. JavaScript: 陣列過濾

function filterNumbersGreaterThanFive(numbers) {
  const numbersGFive = numbers.filter((num) => {
    return num > 5;
  });

  return numbersGFive;
}

const numbers = [2, 8, 4, 10, 1, 7];
console.log(filterNumbersGreaterThanFive(numbers)); // 預期輸出: [8, 10, 7]
