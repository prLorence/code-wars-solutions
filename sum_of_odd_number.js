function rowSumOddNumbers(n) {

  let firstNum = (n * n) - (n - 1);
  let sum = 0;
  let counter = 0;
  
  while (counter < n) {
    if (firstNum % 2 !== 0){ 
      sum += firstNum;
      counter++;
    }
      firstNum++;
  }
  
  return sum
}