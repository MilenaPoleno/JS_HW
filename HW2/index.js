let num1 = prompt("Введите первое число");
let num2 = prompt("Введите второе число");
if (num1 <= 1 && num2 >= 3) {
  console.log("Условие выполняется");
} else {
  console.log("Условие не выполняется");
}

let test = true;
test === true ? console.log("+++") : console.log("---");

let day = prompt("Введите число от 1 до 31");
if (day >= 1 && day <= 31) {
  console.log("Спасибо за число в нужном даипазоне :)");
  if (day <= 10) {
    console.log("Первая декада месяца");
  } else if (day <= 20) {
    console.log("Вторая декада месяца");
  } else {
    console.log("Третья декада месяца");
  }
} else {
  console.log("Введите, пожалуйста, число в указанном диапазоне :)");
}