// I LEARNED HOW TO USE MAP METHODS

function cleanNames(strings) {
  const cleaned = strings.map((name) => {
    return name.trim()
  })
  return cleaned
}

// I learned filter methods

const validUserNames = (words) => {
  const fltrdNames = words.filter((word) => word.length < 10)
  return fltrdNames
}

// This i how learned some/every

const allEvens = (num) => {
  const isEven = num.every((digit) => digit % 2 === 0)
  return isEven
}

// Higher order functions are neat...

const callTenTimes = function (func) {
  for (let i = 0; i < 10; i++) {
    func()
  }
}

function coinFlip(coin) {
  if ((coin = Math.floor(Math.random() * 10) <= 5)) {
    console.log("Tails")
  } else {
    console.log("Heads")
  }
}

callTenTimes(coinFlip)

// Returning functions could be useful

function canIAfford(price) {
  return function (myMoney) {
    if (price > myMoney) {
      return "I can't afford it"
    } else {
      return "I can buy it now"
    }
  }
}

// Function methods are one way to create your own methods if necessary (objects + functions = function methods)

const square = {
  area(num) {
    return num * num
  },
  perimeter(num) {
    return num * 4
  },
}

// I should look into 'this' more closely, this is just an simple illustration what it can do inside an object.

const hen = {
  name: "Helen",
  eggCount: 0,
  layAnEgg() {
    this.eggCount++
    return "EGG"
  },
}

// Try and catch will definitely help me in the future

function tryAndCatch(val) {
  try {
    console.log(val.toUpperCase.repeat(5))
  } catch {
    console.log(
      "You inputted a non-string value, this only works in a string format"
    )
  }
}

// reduce are rly neat for computations 

let myArr = [123, 124, 124, 01325, 81237];

let sumOfArr = myArr.reduce((acc, curr) => {
  return acc + curr;
});

console.log(sumOfArr)

// spread are rly neat for converting arrays into arguments

let myArr = [12, 15, 112, 72351, 1246];
console.log(...myArr)

// if spread operator is passed in a parameter, it is called REST

function hello(...myParameter){
  return myParameter
}

// Destructuring arrays is another way of putting values in a variable from existing array

let myArr = [12, 123, 546, 37342, 2346341, 67457, 1234121, 5347, 1234542];

let [firstEl, secondEl, thirdEl, ...everythingElse] = myArr;

let sumOfElse = everythingElse.reduce((acc, curr) => acc + curr)

console.log(sumOfElse)