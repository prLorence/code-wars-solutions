function factorial(n){
  
  let prodFact = 1;
    for (let i = 2; i <= n; i++){
      prodFact *= i;
     
    }
   return prodFact;
}