# _Pizza Parlor Website_

#### By _**Jonathan Cheng**_

#### _This website allows users to customize a pizza using toppings of their choosing, and to select a size. The customer may add the pizza to their order, which displays the pizza itemized with its cost._

## Technologies Used

- _HTML_
- _CSS_
- _Bootstrap_
- _JavaScript_
- _Web APIs_

## Description

_This is my independent project for Week 4 of Epicodus, demonstrating my abilities in object oriented JavaScript using constructors and prototypes. Specifically, constructors are used to keep track of 'pizza objects' created when the user submits a form. Prototypes, or methods are called on the pizza objects to update their properties. Also being focused on is Test Driven Development (TDD). I used TDD for every part of the business logic. Tests are written in this README below. The app uses HTML, CSS, and Bootstrap for the website appearance, and JavaScript for the events._

## Setup/Installation Requirements

- _Clone this repository from GitHub: https://github.com/joncheng-dev/pizza-parlor-website.git_
- _Navigate to the project's root directory._
- _Open index.html in your browser._

## Tests:

```javascript
Describe: Order object constructor

Test 1: "It should return an object of type Order."
Code:
let customerOne = new Order();
typeof customerOne;
Expected Output: object

Test 2: "It should return an Order object containing a property 'this.pizzas', an empty object, and start with 'this.currentId' of value 0."
Code:
let customerOne = new Order();
customerOne;
Expected Output:
Order {pizzas: {...}, currentId = 0;}


Describe: Pizza object constructor

Test 1: "It should return an object of type Pizza."
Code:
let pieSpecifications = new Pizza();
typeof pieSpecifications;
Expected Output: object

Test 2: "It should return a Pizza object containing a property 'this.toppings', an empty array, and take a parameter of 'size' which is saved into property 'this.size'."
Code:
let pieSpecifications = new Pizza("medium");
pieSpecifications;
Expected Output:
Pizza {toppings: [], size: "medium"}


Describe: Order.prototype.assignId

Test 1: "It should call method assignId on an Order object and increment the currentId property by 1."
Code:
let customerOne = new Order();
customerOne.assignId();
customerOne;
Expected Output:
Order {pizzas: {…}, currentId: 1}


Describe: Order.prototype.addPizzaToOrder

Test 1: "It should call method addPizzaToOrder on an instance of an Order object, take an argument 'pizzaSpecification', assign an id to it, and then add it to the 'this.pizzas' in the Order object."
Code:
let customerOne = new Order();
let pieSpecifications = new Pizza("medium");
customerOne.addPizzaToOrder(pieSpecifications);
customerOne;
Expected Output:
Order {
pizzas: 1: Pizza {toppings: [], size: "medium", id: 1}
currentId: 1;
}

Test 1b: "It should add two pizzas, both with unique ids."
Code:
let customerOne = new Order();
let pieSpecifications = new Pizza("medium");
let anotherPieToAdd = new Pizza("large");
customerOne.addPizzaToOrder(pieSpecifications);
customerOne.addPizzaToOrder(anotherPieToAdd);
customerOne;
Expected Output:
Order {
  currentId: 2;
  pizzas: 1: Pizza {toppings: [], size: "medium", id: 1}
          2: Pizza {toppings: [], size: "large", id: 2}
}


Describe: Pizza.prototype.calculateCost

Test 1: "It should call method calculateCost on a Pizza object, calculate the cost of the pizza, and save into property 'this.cost'."
Code:
let pieSpecifications = new Pizza("medium");
pieSpecifications.toppings = ["mushrooms", "olives"];
pieSpecifications.calculateCost();
pieSpecifications;
Expected Output:
Pizza {toppings: ["mushrooms", "olives"], size: "medium", cost: 12}


Describe: Order.prototype.selectPizzaById

Test 1: "It should call method selectPizzaById on a Order object, pass in parameter of id, and return false, meaning that the Pizza object with that id value cannot be found."
Code:
let customerOne = new Order();
let pieSpecifications = new Pizza("medium");
customerOne.addPizzaToOrder(pieSpecifications);
customerOne.selectPizzaById(3);
Expected Output:
false;

Test 1b: "It should call method selectPizzaById on a Order object, pass in parameter of id, and return the Pizza object."
Code:
let customerOne = new Order();
let pieSpecifications = new Pizza("medium");
pieSpecifications.toppings = ["mushrooms", "olives"];
customerOne.addPizzaToOrder(pieSpecifications);
customerOne.selectPizzaById(1);
Expected Output:
Pizza {toppings: ["mushrooms", "olives"], size: "medium", id: 1}


Describe: Order.prototype.deletePizzaFromOrder

Test 1: "It will remove the Pizza object from the property 'this.pizzas' using the id passed in."
Code:
let customerOne = new Order();
let pieSpecifications = new Pizza("medium");
pieSpecifications.toppings = ["mushrooms", "olives"];
customerOne.addPizzaToOrder(pieSpecifications);
customerOne.deletePizzaFromOrder(1);
Expected Output:
true;

Then if we call customerOne again, it will be:
Order {pizzas = {...}, currentId = 1};
```

## Known Bugs

- _Currently viewing is not optimized for mobile._
- _After clicking submit, cost column does not line up with itemized pizza entry under "My Order"._
- _Checkout button currently does not work._
- _Quantity is currently hard coded as 1._

## License

_MIT License_

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

Copyright (c) _2023_ _Jonathan Cheng_
