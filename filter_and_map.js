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
