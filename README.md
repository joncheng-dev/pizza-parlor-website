Tests:

```javascript
Describe: Order object constructor

Test 1: "It should return an object of type Order."
Code:
let customerOne = new Order();
typeof customerOne;
Expected Output: object

Test 2: "It should return an Order object containing a property 'this.pizzas', an empty object."
Code:
let customerOne = new Order();
customerOne;
Expected Output:
Order {pizzas: {...}}
```
