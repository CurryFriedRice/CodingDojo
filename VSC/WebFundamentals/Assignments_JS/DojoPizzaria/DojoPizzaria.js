var crusts = ['deep dish', 'hand tossed', 'pie', 'deep dish'];
var sauces = ['traditional', 'marinara', 'white', 'takoyaki'];
var cheeses = ['mozzarella', 'feta', 'gouda', 'provolone', 'cheddar', 'kewpie mayo'];
var toppings = ['pepparoni', 'sausage', 'bacon', 'mushrooms', 'olives', 'onions', 'hotdog', 'octopus', 'shrimp', 'pineapple', 'ham'] 

function pizzaOven(crust, sauce, cheese, toppings)
{
    var pizza = {};
    pizza.crustType = crust;
    pizza.sauceType= sauce;
    pizza.cheeses= cheese;
    pizza.toppings= toppings;
    return pizza;
}

function randomPizza()
{
    var pizza = {};
    var amount;
    pizza.crustType = crusts[Math.floor(Math.random()*crusts.length)];
    pizza.sauceType= sauces[Math.floor(Math.random()*sauces.length)];
    amount = Math.floor(Math.random()*cheeses.length);
    pizza.cheeses = [];
    while(amount != 0)
    {
        pizza.cheeses.push(cheeses[Math.floor(Math.random()*cheeses.length)]);
        amount--;
    }

    amount = Math.floor(Math.random()*toppings.length);
    pizza.toppings = [];
    while(amount != 0)
    {
        pizza.toppings.push(toppings[Math.floor(Math.random()*toppings.length)]);
        amount--;
    }

    return pizza;
}

var pizza1 = pizzaOven("deep dish", 'traditional', ['mozzarella'], ['pepperoni', 'sausage']);
var pizza2 = pizzaOven("hand tossed", "marinara", ["mozzarella", "feta"],["mushrooms", "olives", "onions"]);
var pizza3 = pizzaOven("pie", "white", ['gouda', 'provolone'], ["bacon", 'hotdogs cut like octopus']);
var pizza4 = pizzaOven("thin", "takoyaki", ['cheddar', 'mozzarella', 'kewpie mayo'], ['octopus']);
var pizza5 = randomPizza();

console.log(pizza1);
console.log(pizza2);
console.log(pizza3);
console.log(pizza4);
console.log(pizza5);