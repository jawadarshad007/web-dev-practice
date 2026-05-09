# Event loop
JS is a single threaded synchronous language, it can only do one thing at a time.

 Single threaded: only one command can be executed at a time
 Synchronous: code is executed in order, one line at a time

Iska matlab:
- Ek waqt me sirf ek kaam karti hai
- Ek hi Call Stack hota hai

Phir sawal:
Agar JS single thread hai to async kaam (setTimeout, API calls) kaise chalte hain?

Iska jawab hai **Event Loop**.

---

## 🧠 Important Components

JavaScript runtime me 5 important cheezein hoti hain:

1. Call Stack
2. Web APIs
3. Callback Queue (Task Queue)
4. Microtask Queue
5. Event Loop

---

## 🗂️ 1. Call Stack

Yahan synchronous code execute hota hai.

```js
console.log("A");
console.log("B");
console.log("C");
```

Output:
```
A
B
C
```

Sab line by line Call Stack me run hoti hain.

---

## 🌐 2. Web APIs (Browser ka hissa)

Yeh browser provide karta hai, JavaScript nahi.

Examples:
- setTimeout
- setInterval
- DOM Events
- fetch API

Jab JS ko koi async kaam milta hai, wo usay Web API ko de deta hai.

---

## 📬 3. Callback Queue (Task Queue)

Jab Web API apna kaam complete kar leti hai, to callback yahan aa jata hai.

```js
setTimeout(() => {
  console.log("Hello");
}, 2000);
```

2 seconds baad callback queue me ayega.

---

## ⚡ 4. Microtask Queue (High Priority)

Isme yeh cheezein aati hain:

- Promises (.then, .catch)
- MutationObserver

Microtask queue ki priority Callback Queue se zyada hoti hai.

---

## 🔁 5. Event Loop (Main Hero)

Event Loop ka kaam:

Check karta rehta hai: "Kya Call Stack khali hai?"

Agar haan:
1. Pehle Microtask Queue check karta hai
2. Phir Callback Queue

---

## 🧪 Example 1

```js
console.log("Start");

setTimeout(() => {
  console.log("Timeout");
}, 0);

console.log("End");
```

Output:
```
Start
End
Timeout
```

Reason:
- setTimeout Web API ko gaya
- Call stack pehle khatam hua
- Phir callback aya

---

## 🧪 Example 2 (Microtask Priority)

```js
console.log("Start");

setTimeout(() => {
  console.log("Timeout");
}, 0);

Promise.resolve().then(() => {
  console.log("Promise");
});

console.log("End");
```

Output:
```
Start
End
Promise
Timeout
```

Reason:
- Promise → Microtask Queue
- setTimeout → Callback Queue
- Event Loop pehle Microtask chalata hai

---

## 🧭 Flow (Text Diagram)

```
Call Stack empty?
        ↓
Check Microtask Queue
        ↓
Run all Microtasks
        ↓
Check Callback Queue
        ↓
Run one task
        ↓
Repeat
```

---

## 🧠 Heavy Loops Kahan Run Hotay Hain?

```js
for (let i = 0; i < 1000000000; i++) {}
```

Yeh Call Stack me run hota hai.

Web API ko nahi diya jata.

Is wajah se browser freeze ho jata hai.

---

## 📌 Summary Table

| Situation   | Kahan Jata Hai                   |
|------------|-----------------------------------|
| Normal code| Call Stack                        |
| setTimeout | Web API → Callback Queue          |
| Promise    | Microtask Queue                  |
| Event Loop | Queues ko manage karta hai       |

---

## 🎯 Golden Rule

Synchronous code first  
Microtasks second  
Callbacks last

---

## 🏁 Final Understanding

JavaScript single thread hone ke bawajood async lagti hai because of:

- Web APIs
- Callback Queue
- Microtask Queue
- Event Loop

Yeh sab mil kar JS ko non-blocking banate hain.