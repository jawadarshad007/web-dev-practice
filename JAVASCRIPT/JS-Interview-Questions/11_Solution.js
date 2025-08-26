// Problem 11
// The Array Filterer: You are building a search feature for your e-commerce site. Write a function named filterProducts that takes an array of product objects and a filter criterion. The function should return a new array containing only the products that match the filter criterion.

let products = [
  { name: "Laptop", category: "Electronics" },
  { name: "Mobile", category: "Electronics" },
  { name: "Shirt", category: "Clothing" },
  { name: "Shoes", category: "Clothing" }
];

function filterProducts(products, criterion) {
    return products.filter((products)=>{
        return products.category === criterion;
    })
}

let filtered = filterProducts(products, "Electronics");
console.log(filtered);