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
};

function coinFlip(coin) {

  if (coin = Math.floor(Math.random() * 10) <= 5) {
    console.log('Tails');
  } else {
    console.log('Heads')
  }

}

callTenTimes(coinFlip)

// Returning functions could be useful

function canIAfford (price) {
  return function(myMoney) {
    if (price > myMoney) {
      return "I can't afford it";
    } else {
      return "I can buy it now"
    }
  }
}


