
const BASE_URL = 'https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies';
const dropdownSelects = document.querySelectorAll('.dropdown select');
const btn = document.querySelector('form button');
const fromCurr = document.querySelector('.from select');
const toCurr = document.querySelector('.to select');
const msg = document.querySelector('.msg');

for (let Selects of dropdownSelects) {
   for (let currcode in countryList) {
    let newOption = document.createElement('option');
    newOption.innerText = currcode;
    newOption.value = currcode;
    if (Selects.name === "from" && currcode === "USD") {
        newOption.selected = true;
        }
        else if (Selects.name === "to" && currcode === "PKR") {
        newOption.selected = true;
    }
    Selects.append(newOption);
   }
   Selects.addEventListener("change" , (event) => {
    updateFlag(event.target);
   })
}

const updateExchangeRate = async () =>{
      let amount = document.querySelector('.amount input');
    let amountValue = amount.value;
if (amountValue === "" || isNaN(amountValue) || Number(amountValue) <= 0) {
  alert("❌ Please enter a valid numeric amount greater than 0.");
  return;
}
    const fromCurrency = fromCurr.value.toLowerCase(); 
    const toCurrency = toCurr.value.toLowerCase();     
    const URL = `${BASE_URL}/${fromCurrency}.json`;

    let response = await fetch(URL);
    let data = await response.json();

    // Extract the exchange rate like this:
    let rate = data[fromCurrency][toCurrency];
    console.log(`${amountValue} ${fromCurrency.toUpperCase()} = ${rate} ${toCurrency.toUpperCase()}`);

    let convertedAmount = amountValue * rate
    msg.innerText = `${amountValue} ${fromCurrency.toUpperCase()} = ${convertedAmount.toFixed(2)} ${toCurrency.toUpperCase()}`;    
}

const updateFlag = (element)=> {
    let currCode = element.value;
    let countryCode = countryList[currCode];
    let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
    let img = element.parentElement.querySelector('img');
    img.src = newSrc;
}

btn.addEventListener('click',  (event) => {
    event.preventDefault();
    updateExchangeRate();   
})

window.addEventListener('load', () => {
    updateExchangeRate();
});