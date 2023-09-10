  for (let i = 0; i <= 10; i++) {
    if (i === 0) {
      console.log(i + " - это ноль");
    } else if (i % 2 !== 0) {
      console.log(i + " - нечетное число");
    } else {
      console.log(i + " - четное число");
    }
  }


  const array = [1, 2, 3, 4, 5, 6, 7];
  array.splice(3, 2);
  console.log(array);


  const arr = [];
  for (let i = 0; i < 5; i++) {
    arr.push(Math.floor(Math.random() * 10));
  }
  const sumArr = arr.reduce((a, b) => a + b);
  const minArr = Math.min(...arr);
  const hasThreeArr = arr.includes(3);
  console.log("Массив:", arr);
  console.log("Сумма элементов:", sumArr);
  console.log("Минимальное число:", minArr);
  console.log("Наличие числа 3:", hasThreeArr);