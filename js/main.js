/* JavaScript for WATS 3020 Sandwich Machine Assignment */
// Ask for order info, defaults given
let bread = prompt("Please enter the kind of bread you wish to add to your sandwich. Options are white, wheat, rye, and flat)", "rye");
let meats = prompt("Please enter the meat you wish to add to your sandwich. If you choose more than one meat, separate each with a comma: chicken, turkey, ham.", "chicken, bacon");
let toppings = prompt("Please enter a list of toppings in a comma separated list", "tomato, avocado");
let condiments = prompt("Please enter a list of condiments in a comma separated list", "mayo, relish");

// Assign prices for items
let prices = {
    sandwich: 5, // Base price for a sandwich is $5, includes bread
    meat: 1, // Each kind of meat on a sandwich costs $1
    topping: 0.5, // Each topping costs $0.50
    condiment: 0.25 // Each condiment costs $0.25
};
// Divide user imput into individual items
let meatArray = meats.split(",");
let toppingArray = toppings.split(",");
let condimentArray = condiments.split(",");

// Add items by catagory and calculate total cost
let sandwichCost = prices.sandwich;
let meatCost = meatArray.length * prices.meat;
let toppingCost = toppingArray.length * prices.topping;
let condimentCost = condimentArray.length * prices.condiment;

// Find subtotal, add sales tax, and calculate final cost
let subtotal = sandwichCost + meatCost + toppingCost + condimentCost;
let waStateTaxRate = 0.065;
let orderTax = subtotal * waStateTaxRate;
let totalPrice = subtotal + orderTax;

// Design receipt with order info and totals
let receiptTemplate = `
    <p>SANDWICH ORDER</p>
    <p>Bread: ${bread}</p>
    <p>Meat: ${meatArray}</p>
    <p>Toppings: ${toppingArray}</p>
    <p>Condiments: ${condimentArray}</p>
    <p>---------------------</p>
    <p class="text-right">Basic sandwich: $${sandwichCost.toFixed(2)} </p>
    <p class="text-right">Meat: (${meatArray.length}) $${meatCost.toFixed(2)}</p>
    <p class="text-right">Toppings: (${toppingArray.length}) $${toppingCost.toFixed(2)}</p>
    <p class="text-right">Condiments: (${condimentArray.length}) $${condimentCost.toFixed(2)}</p>
    <p class="text-right">--------</p>
    <p class="text-right">Subtotal: $${subtotal.toFixed(2)}</p>
    <p class="text-right">Tax: $${orderTax.toFixed(2)}</p>
    <p class="text-right">--------</p>
    <p class="text-right">Total: $${totalPrice.toFixed(2)}</p>
`
// Add the receipt to the HTML
///////////////////////////////////////////////////////////////////////
// Do not edit below this line unless you are doing something fancy!
//////////////////////////////////////////////////////////////////////
let receiptText = document.querySelector("#receipt-text");
receiptText.innerHTML = receiptTemplate;
