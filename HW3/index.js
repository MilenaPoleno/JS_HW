  function calculateCube(number) {
    const result = Math.pow(number, 3) + Math.pow(3, 3);
    console.log(result);
  }
  calculateCube(2);
  
  function calculateSalary() {
    const numberSalary = prompt("Введите число ");
    if (isNaN(numberSalary)) {
      console.log("Пожалуйста, введите число, а не текст :) ");
    } else {
      const totalSalary = numberSalary * 0.87;
      console.log("Размер заработной платы за вычетом налогов равен " + totalSalary);
    }
  }
  calculateSalary();
  
  function findMax(number1, number2, number3) {
    return Math.max(number1, number2, number3);
  }
  const input1 = parseInt(prompt("Введите первое число:"));
  const input2 = parseInt(prompt("Введите второе число:"));
  const input3 = parseInt(prompt("Введите третье число:"));
  const maxNumber = findMax(input1, input2, input3);
  console.log("Максимальное из введенных вами чисел это " + maxNumber);
  
  function sumNumber(a, b) {
    return a + b;
  }
  console.log(sumNumber(2, 6));
  
  function diffNumber(a, b) {
    if (a === b) {
      return 0;
    } else if (a > b) {
      return a - b;
    } else {
      return b - a;
    }
  }
  console.log(diffNumber(6, 2));
  
  function multiplyNumber(a, b) {
    return a * b;
  }
  console.log(multiplyNumber(2, 6));
  
  function divideNumber(a, b) {
    return a / b;
  }
  console.log(divideNumber(6, 2));