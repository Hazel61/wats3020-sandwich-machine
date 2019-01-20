/* JavaScript for WATS 3020 Sandwich Machine Assignment */

// Step One ///////////////////////////////////////////////////////////
//
// Gather data from the user using the prompt() command.
// Users will fill in each prompt with text.
// Provide examples where it may help (e.g. show a comma-separated list of
// toppings to indicate how to specify toppings, etc.)
//
let bread = prompt("Please enter the kind of bread you wish to add to your sandwich. Options are white, wheat, rye, and flat)");
let meats = prompt("Please enter the meat you wish to add to your sandwich. If you choose more than one meat, separate each with a comma: chicken, turkey, ham.");
let toppings = prompt("Please enter a list of toppings in a comma separated list");
let condiments = prompt("Please enter a list of condiments in a comma separated list");

// Step Two ////////////////////////////////////////////////////////////
//
// Process all the input to calculate values for the user's order. The named
// values are initialized to `null`. Change that so they equal the proper value.
//
// The `prices` object below specifies the prices for each thing.

let prices = {
    sandwich: 5, // Base price for a sandwich is $5, includes bread
    meat: 1, // Each kind of meat on a sandwich costs $1
    topping: 0.5, // Each topping costs $0.50
    condiment: 0.25 // Each condiment costs $0.25
};

// TODO: Convert order information from Strings to Arrays.

let meatArray = meats.split(",");
let toppingArray = toppings.split(",");
let condimentArray = condiments.split(",");

// TODO: Calculate cost for meat, toppings, and condiments.
// This requires you to determine the length of each Array you just made
// and multiply out the costs. You will need to refer to the attributes of the
// `prices` object in order to calculate these costs.
let sandwichCost = prices.sandwich;
let meatCost = meatArray.length * prices.meat;
let toppingCost = toppingArray.length * prices.topping;
let condimentCost = condimentArray.length * prices.condiment;

// TODO: Combine the costs of each part of the sandwich to get the subtotal.
let subtotal = sandwichCost + meatCost + toppingCost + condimentCost;

// TODO: Calculate the tax owed using the waStateTaxRate.
let waStateTaxRate = 0.065;
let orderTax = subtotal * waStateTaxRate;

// TODO: Calculate `totalPrice` by adding `subtotal` and `orderTax`.
let totalPrice = subtotal + orderTax;


// Step Three //////////////////////////////////////////////////////////
//
// TODO: Now that we've calculated all the values, insert them into this
// template literal using proper expression tags. Note that we must provide
// all of the info the user gave us to confirm the order, and then we must also
// provide the cost information so the user understands their bill.

let receiptTemplate = `
    <p>SANDWICH ORDER</p>
    <p>Bread: ${bread}</p>
    <p>Meat: ${meatArray}</p>
    <p>Toppings: ${toppingArray}</p>
    <p>Condiments: ${condimentArray}</p>
    <p>---------------------</p>
    <p class="text-right">Sandwich: ${sandwichCost} </p>
    <p class="text-right">Meat: ${meatCost}</p>
    <p class="text-right">Toppings: ${toppingCost}</p>
    <p class="text-right">Condiments: ${condimentCost}</p>
    <p class="text-right">--------</p>
    <p class="text-right">Subtotal: ${subtotal}</p>
    <p class="text-right">Tax: ${orderTax}</p>
    <p class="text-right">--------</p>
    <p class="text-right">Total: ${totalPrice}</p>
`

///////////////////////////////////////////////////////////////////////
// Do not edit below this line unless you are doing something fancy!
//////////////////////////////////////////////////////////////////////
let receiptText = document.querySelector("#receipt-text");
receiptText.innerHTML = receiptTemplate;
