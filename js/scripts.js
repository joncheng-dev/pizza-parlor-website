// Business Logic for Orders
function Order() {
  this.pizzas = {};
  this.currentId = 0;
}

Order.prototype.assignId = function () {
  this.currentId += 1;
  return this.currentId;
};

Order.prototype.addPizzaToOrder = function (pizzaSpecification) {
  pizzaSpecification.id = this.assignId();
  this.pizzas[pizzaSpecification.id] = pizzaSpecification;
};

// Business Logic for Pizzas
function Pizza(size) {
  this.toppings = [];
  this.pizzaSize = size;
}

let customerOne = new Order();
let pieSpecifications = new Pizza("medium");

// User Interface Logic
