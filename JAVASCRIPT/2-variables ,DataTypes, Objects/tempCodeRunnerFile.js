let obj3 = {
    name: "Jawad",
    age: 22,
    address: {
        city: "Jauharabad",
        streetNo: 5
    }
}
let shallowCopy = {...obj3} // shallow copy
obj3.name = "Fawad"
obj3.address.city = "Lahore"
console.log(shallowCopy)