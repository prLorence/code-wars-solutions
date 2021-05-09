function squareDigits(num){

  let stringify = num.toString();
  let splitNum = stringify.split('');
  let sqrdNum = splitNum.map(val => {
    return val * val
  })
  let joinedNum = sqrdNum.join('');
  return parseInt(joinedNum)
  
}