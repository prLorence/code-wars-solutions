// SUM ARRAY EXERCISE

function sumArray(args) {
    
  let sumOfAll = 0;
  
  for (let i = 0; i < args.length; i++) {
      sumOfAll += args[i];
  }
  
  return sumOfAll;
}