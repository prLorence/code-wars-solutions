function arithmetic(a, b, operator){
  
  let arithmeticFuncs = {
    'add' : (a, b) => a + b,
    'subtract' : (a, b) => a - b,
    'multiply' : (a, b) => a * b,
    'divide' : (a, b) => a / b
  };

 return arithmeticFuncs[operator](a, b);
  
}