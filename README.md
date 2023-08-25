Tests:

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

Test 2: "It should return a Pizza object containing a property 'this.toppings', an empty array, and take a parameter of 'size' which is saved into property 'this.pizzaSize'."
Code:
let pieSpecifications = new Pizza("medium");
pieSpecifications;
Expected Output:
Pizza {toppings: [], pizzaSize: "medium"}


Describe: Order.prototype.assignId

Test 1: "It should call method assignId on an Order object and increment the currentId property by 1."
Code:
let customerOne = new Order();
customerOne.assignId();
customerOne;
Expected Output:
Order {pizzas: {…}, currentId: 1}

```
