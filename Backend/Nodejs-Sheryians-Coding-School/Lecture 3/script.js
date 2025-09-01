// NPM understanding
// nodejs core ma jo install hota hai usko core module kehte hai
// npm se jo install karte hai usko package kehte hai
// apne banaye hue module ko custom module kehte hai

// installing package
// npm install <package name>
// npm i <package name>
// installing specific version of package
// npm i <package name>@<version>

// Understanding node_modules
// dependencies => package and their dependencies
// devDependencies => package for only development purpose and when we deploy our code to production these packages we dont use    


// Script 
// default script => start will work when we run npm start
// default script => test will work when we run npm test
// custom script => we can create our own script and run it using npm run <script name>



console.log("Hello World");

const chalk = require('chalk');

console.log(chalk.green('Success!'));          // Green text
console.log(chalk.red.bold('Error!'));              // Red text
console.log(chalk.yellow('Warning!'));         // Yellow text
console.log(chalk.blue.bold('Hello World!'));  // Blue + Bold text
console.log(chalk.bgCyan.black('Inverted'));   // Cyan background + Black text
console.log(chalk.underline('Underline'));     // Underlined text