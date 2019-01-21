/* JavaScript for WATS 3020 Sandwich Machine Assignment */
//
let bread = prompt("Please enter the kind of bread you wish to add to your sandwich. Options are white, wheat, rye, and flat)", "rye");
let meats = prompt("Please enter the meat you wish to add to your sandwich. If you choose more than one meat, separate each with a comma: chicken, turkey, ham.", "chicken, bacon");
let toppings = prompt("Please enter a list of toppings in a comma separated list", "tomato, avocado");
let condiments = prompt("Please enter a list of condiments in a comma separated list", "mayo, relish");

//
let prices = {
    sandwich: 5, // Base price for a sandwich is $5, includes bread
    meat: 1, // Each kind of meat on a sandwich costs $1
    topping: 0.5, // Each topping costs $0.50
    condiment: 0.25 // Each condiment costs $0.25
};
// 
let meatArray = meats.split(",");
let toppingArray = toppings.split(",");
let condimentArray = condiments.split(",");

// 
let sandwichCost = prices.sandwich;
let meatCost = meatArray.length * prices.meat;
let toppingCost = toppingArray.length * prices.topping;
let condimentCost = condimentArray.length * prices.condiment;

// 
let subtotal = sandwichCost + meatCost + toppingCost + condimentCost;
let waStateTaxRate = 0.065;
let orderTax = subtotal * waStateTaxRate;
let totalPrice = subtotal + orderTax;

//
let receiptTemplate = `
    <p>SANDWICH ORDER</p>
    <p>Bread: ${bread}</p>
    <p>Meat: ${meatArray}</p>
    <p>Toppings: ${toppingArray}</p>
    <p>Condiments: ${condimentArray}</p>
    <p>---------------------</p>
    <p class="text-right">Basic sandwich: $${sandwichCost.toFixed(2)} </p>
    <p class="text-right">Meat: $${meatCost.toFixed(2)}</p>
    <p class="text-right">Toppings: $${toppingCost.toFixed(2)}</p>
    <p class="text-right">Condiments: $${condimentCost.toFixed(2)}</p>
    <p class="text-right">--------</p>
    <p class="text-right">Subtotal: $${subtotal.toFixed(2)}</p>
    <p class="text-right">Tax: $${orderTax.toFixed(2)}</p>
    <p class="text-right">--------</p>
    <p class="text-right">Total: $${totalPrice.toFixed(2)}</p>
`

///////////////////////////////////////////////////////////////////////
// Do not edit below this line unless you are doing something fancy!
//////////////////////////////////////////////////////////////////////
let receiptText = document.querySelector("#receipt-text");
receiptText.innerHTML = receiptTemplate;
