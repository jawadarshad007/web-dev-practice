const obj2 = {
    account: 1234
}
console.log(obj2.name)
// to inherit the properties of the object
// is sa obj2, obj1 ko bhi point kar raha hai , to obj2 ma bhi name property aa jayegi
obj2.__proto__ = obj;
console.log(obj2.name)