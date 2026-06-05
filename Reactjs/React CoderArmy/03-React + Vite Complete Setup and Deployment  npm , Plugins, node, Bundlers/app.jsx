import React from 'react'
import ReactDOM from 'react-dom/client'


const element = <h1>Hello Coder Army</h1>
ReactDOM.createRoot(document.getElementById('root')).render(element)



// npm 
// 👉 Node Package Manager
// 🧠 Easy samajh:
// Socho tum ek mobile app store (Play Store) use karte ho.
// Tum Play Store se apps install karte ho
// Waise hi coding me npm se “code packages / libraries” install karte ho

// 📦 npm kya karta hai?
// ready-made code (packages) install karta hai
// project ke dependencies handle karta hai

// 🔥 Simple line:
// npm = coding ka Play Store for developers




// Package.json file:
// 1. Project ke baare me info deta hai
// Batata hai ki kaunse packages(dependencies) use ho rahe hain


// Important
// React = UI banane ki library.
// Vite = React project ko create, run aur build karne ka tool.
// Vite code ko optimize aur bundle karta hai taake website fast load ho.
// Simple Definition
// Bundle = multiple JavaScript, CSS, aur assets ko combine aur optimize karke browser ke liye tayar ki gayi files.



//                      devDependencies:
// Ye wo packages hote hain jo development ke dauraan use hote hain, lekin production me nahi chahiye hote.
// Jaise ki testing tools, build tools, aur code linters devDependencies me aate hain.
//           dependencies:
// Ye wo packages hote hain jo production me bhi chahiye hote hain, jaise ki React, ReactDOM, etc.




// Vite does not need babel because it uses native ES modules(ESBuild) in the browser, which means it can run modern JavaScript without needing to transpile it down to older versions. This allows for faster development and better performance. 




//  "react": "^19.2.7",
// is ma jo ^ ha is ko hm  caret kahte hn. is ka mtlb ya jab update ho ga mtlb ya version 19.2.7 se start hoga aur 20.0.0 se pehle tak ke versions ko accept kare ga.(Only minor and patch updates, no major updates)
// is ma 19.2.7 version ha React ka .
// is ma last ma jo .7 ha wo patch version ha. is ka mtlb ya jab update ho ga mtlb koi bugs fix kie gyn hn.
// is ma mid ma jo .2 ha wo minor version ha. is ka mtlb ya jab update ho ga mtlb koi new features add kie gyn hn.
// is ma jo 19 ha wo major version ha. is ka mtlb ya jab update ho ga mtlb existing functionality ma  koi breaking changes add kie gyn hn.





//      package-lock.json file:
// Is file ka main purpose hai ki aapke project ke dependencies ke exact versions ko lock karna, taaki jab koi aur developer ya future me aap khud project ko setup kare, to same versions install ho jayein.
// Is file me har ek dependency ke exact version ke sath-sath unke sub-dependencies (dependencies of dependencies) ke versions bhi store hote hain.





// App jab bhi apna project ksis ka sath share krte hn , to node_modules folder ko share nahi krte hain, kyunki wo bahut bada hota hai size ma. 
// Future  ma app ko srif npm install likhna hota ha , than wo package.json file ko read krta ha aur us ma jo dependencies likhi hoti hain unko install krta ha. 