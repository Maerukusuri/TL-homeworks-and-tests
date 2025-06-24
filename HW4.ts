//Assignment #1
class Calculator {
  //method number addition
  addition(num1: number, num2: number): number {
    return num1 + num2;
  }
  //method one number is greater than other
  isGreaterThan(num1: number, num2: number): boolean {
    return num1 > num2;
  }
}

//Create a new Calculator object so i can use its methods like addition and isGreater
const calc = new Calculator();

console.log("Addition result is", calc.addition(6, 7));
console.log("is 10 greater than 9", calc.isGreaterThan(10, 9)); // true
console.log("is 2 greater than 5", calc.isGreaterThan(2, 5)); // false

//Assignment #2
class Product {
  name: string;
  price: number;
  quantity: number;
  constructor(name: string, price: number, quantity: number) {
    this.name = name;
    this.price = price;
    this.quantity = quantity;
  }
  //Method "is product in stock?"
  isInStock(): boolean {
    return this.quantity > 0;
  }
}
//creating products
const product1 = new Product("Ice cream", 2, 5);
const product2 = new Product("Milk", 1, 0);

console.log("Is ice cream in stock?", product1.isInStock()); // true
console.log("Is milk in stock?", product2.isInStock()); //false
