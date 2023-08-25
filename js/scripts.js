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

Order.prototype.selectPizzaById = function (id) {
  if (this.pizzas[id] === undefined) {
    return false;
  } else {
    return this.pizzas[id];
  }
};

Order.prototype.deletePizzaFromOrder = function (id) {
  if (this.pizzas[id] === undefined) {
    return false;
  }
  delete this.pizzas[id];
  return true;
};

// Business Logic for Pizzas
function Pizza(pizzaSize) {
  this.toppings = [];
  this.size = pizzaSize;
}

Pizza.prototype.calculateCost = function () {
  // Base cost of a Pizza is 5.
  let totalCost = 5;
  // Cost per added topping is 1.
  totalCost += this.toppings.length * 1;
  // Cost of pizzas: small (+0), medium (+5), large (+10)
  if (this.size === "medium") {
    totalCost += 5;
  } else if (this.size === "large") {
    totalCost += 10;
  } else {
    totalCost += 0;
  }
  this.cost = totalCost;
};

// User Interface Logic
function getUserSelectedToppings() {
  let userSelectedToppings = [];
  let checkboxes = document.querySelectorAll("input[type='checkbox']:checked");
  for (let i = 0; i < checkboxes.length; i++) {
    userSelectedToppings.push(checkboxes[i].value);
  }
  return userSelectedToppings;
}

function getUserSelectedSize() {
  let userSelectedPizzaSize;
  let radioButtons = document.getElementsByName("btnradio");
  for (let i = 0; i < radioButtons.length; i++) {
    if (radioButtons[i].checked) {
      userSelectedPizzaSize = radioButtons[i].value;
    }
  }
  return userSelectedPizzaSize;
}

function displayPizzaItemized(addedPizza) {
  // Set up elements for displaying information
  const ulElementSize = document.createElement("ul");
  const liElementSize = document.createElement("li");
  // Display pizza size
  liElementSize.append(addedPizza.size + " size");
  ulElementSize.append(liElementSize);
  // Display each of the toppings
  const ulElementToppings = document.createElement("ul");
  addedPizza.toppings.forEach(function (topping) {
    const liElementTopping = document.createElement("li");
    liElementTopping.append(topping);
    ulElementToppings.append(liElementTopping);
  });
  document.getElementById("itemized-order").append(ulElementSize);
  ulElementSize.append(ulElementToppings);
  // Display cost
  addedPizza.calculateCost();
  const pElementSubtotalCost = document.createElement("p");
  pElementSubtotalCost.append(addedPizza.cost);
  document.getElementById("itemized-order-cost").append(pElementSubtotalCost);
}

window.addEventListener("load", formLoader);

function formLoader() {
  let userForm = document.getElementById("customize-pizza-form");
  userForm.addEventListener("submit", userFormSubmissionHandler);
}

function userFormSubmissionHandler(event) {
  event.preventDefault();
  //Initialize new object to hold pizza instances. If expand functionality later, allow for more customers
  let customerOne = new Order();
  // Get user input from form
  let userToppings = getUserSelectedToppings();
  const userPizzaSize = getUserSelectedSize();
  // A pizza request is made by the customer
  let aPizza = new Pizza(userPizzaSize);
  aPizza.toppings = userToppings;
  // Add pizza to the order
  customerOne.addPizzaToOrder(aPizza);
  // Display results to User
  displayPizzaItemized(aPizza);
  // Resets form input
  document.getElementById("customize-pizza-form").reset();
}
