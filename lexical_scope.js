// LEXICAL SCOPE EXAMPLE

function menu() {
  let foodMenu = ["pasta", " dessert", " and your main dish"];
  function foodOrder() {
    console.log(`Hey! Can I order some ${foodMenu}?`)
  }
  foodOrder();
}

menu()