let a = 20;
setTimeout(() => {
  console.log(++a);
  setTimeout(() => {
    console.log(++a);
    setTimeout(() => {
      console.log(++a);
      setTimeout(() => {
        console.log(++a);
      }, 1000);
    }, 2000);
  }, 1000);
}, 2000);

// second
// fourth
// first
// third

// second
// first
// third
// fourth

// first
// third
// second
// fourth

// go to shop
// order meals
// waiter came
// order served
// pay bill
// receive receipt

let obj = {
  name: "John",
  age: 30,
  address: "New York",
};

let stringifiedObj = JSON.stringify(obj);
console.log(stringifiedObj);
let normalObj = JSON.parse(stringifiedObj);
console.log(normalObj);
