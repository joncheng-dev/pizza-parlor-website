// Business Logic
function Order() {
  this.pizzas = {};
}

function Pizza(size) {
  this.toppings = [];
  this.pizzaSize = size;
}

let customerOne = new Order();
let pieSpecifications = new Pizza("medium");

// User Interface Logic
