// Dates
const now = new Date();
console.log(now);// it will print the current date and time of uct time zone, in Pakistan it is 5 hours ahead of uct time zone
console.log(typeof now)
console.log(now.toString()) // it will print the date in string format
console.log(now.toISOString())// it will print the date in ISO format
console.log(now.toLocaleString())// it will print the date in local format
console.log(now.getDay()); // it will print the day of the week (0-6) 0 is Sunday and 6 is Saturday
console.log(now.getDate()); // it will print the day of the month (1-31)
console.log(now.getMonth()); // it will print the month (0-11) 0 is January and 11 is December
console.log(now.getFullYear()); // it will print the year
console.log(now.getHours()) 
console.log(now.getMinutes()) 
console.log(now.getSeconds()) // it will print the seconds
console.log(now.getTime()) // it will print the time in milliseconds since January 1, 1970



// Another way to generate manual date is by using new Date
// year month date hour minute second millisecond
const now2 =  new Date(2026, 3, 16, 16, 52, 55, 500) // month is 0 indexed so 3 is April)
console.log(now2)
console.log(now2.toString());
// so many inconsistencies in date object like month is 0 indexed but day is not, so it is better to use a library like moment.js or date-fns to work with dates in JavaScript
// so why javascript wale in ko theek khoun nai kr rhe beacuse it is a very old language , used by many websites , so if they correct these inconsistencies then it will break many websites.


//timestamp is the number of milliseconds since January 1, 1970
const timestamp = Date.now();
const utcTime = new Date(timestamp)
console.log(timestamp) // it will print the current timestamp in milliseconds since January 1, 1970
console.log(utcTime)// it will print the current date and time in UTC time zone