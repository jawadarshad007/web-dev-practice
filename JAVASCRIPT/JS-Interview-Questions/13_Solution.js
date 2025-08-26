// Problem 13
// The Shopping Cart Totalizer: You are working on an e-commerce website, and you need to calculate the total cost of items in the shopping cart. Implement a function named calculateTotal that takes an array of products with prices and quantities and returns the total cost.



let cart = [
  { name: "Laptop", price: 50000, quantity: 1 },
  { name: "Mobile", price: 20000, quantity: 2 },
  { name: "Shirt", price: 1500, quantity: 3 }
];

function calculateTotal(cart) {
    let total = 0;
    for (let item of cart){
        total += item.price * item.quantity;
    }
    console.log(`Total Cost: ${total}`);
}
calculateTotal(cart);








