const arr = [1, 5, 7, 9];
const minNumber = Math.min(...arr);
console.log(minNumber);


function createCounter() {
  let count = 0;

  return {
    increment: function () {
      count++;
    },
    decrement: function () {
      count--;
    },
    getCount: function () {
      return count;
    },
  };
}

const counter = createCounter();
counter.increment();
console.log(counter.getCount());
counter.decrement();
console.log(counter.getCount());