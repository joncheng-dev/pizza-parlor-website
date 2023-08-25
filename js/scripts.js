// Business Logic for Orders
function Order() {
  this.pizzas = {};
  this.currentId = 0;
}

// Business Logic for Pizzas
function Pizza(size) {
  this.toppings = [];
  this.pizzaSize = size;
}

let customerOne = new Order();
let pieSpecifications = new Pizza("medium");

// User Interface Logic
