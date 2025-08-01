
function adjectives() {
    let rand = Math.random();
  if (rand >= 0.1 && rand <= 0.3) {
    // console.log("Crazy")
    let a = "Crazy";
    return a;
  } else if (rand > 0.3 && rand <= 0.6) {
    // console.log("Amazing")
    let a = "Amazing";
    return a;
  } else if (rand > 0.6 &&randq <= 0.99) {
    // console.log("Fire")
    let a = "Fire";
    return a;
  }
}
function shopName() {
    let q = Math.random();
  if (q >= 0.1 && q <= 0.3) {
    // console.log("Engine")
    let a = "Engine";
    return a;
  } else if (q > 0.3 && q <= 0.6) {
    // console.log("Foods")
    let a = "Foods";
    return a;
  } else if (q > 0.6 && q <= 0.99) {
    // console.log("Garments")
    let a = "Garments";
    return a;
  }
}
function anotherWord() {
    let q = Math.random();
  if (q >= 0.1 && q <= 0.3) {
    // console.log("Bros")
    let a = "Bros";
    return a;
  } else if (q > 0.3 && q <= 0.6) {
    // console.log("Limited")
    let a = "Limited";
    return a;
  } else if (q > 0.6 && q <= 0.99) {
    // console.log("Hub")
    let a = "Hun";
    return a;
  }
}

let x = adjectives();
let y = shopName();
let z = anotherWord();
console.log("Your Business Name Generator is here:");
console.log(x , y , z);
console.log(
  "May you like it ,  if not run the program again it will create another name for you."
);
