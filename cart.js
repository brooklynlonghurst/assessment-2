///////////////////////////////////////////////
///////////////////CART.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code to
    calculate order totals. You'll also be 
    creating customer objects.  
*/


//////////////////PROBLEM 1////////////////////
/*  
    Below is a cart array that has food objects
    inside. 

    Write a callback below that uses the reduce
    array method to calculate the sum of all
    the food. 
*/

const cart = [
    {
        name: 'pizza', 
        price: 9.99
    }, 
    {
        name: 'pasta', 
        price: 8.99
    }, 
    {
        name: 'salad', 
        price: 7.99
    }
]

//CODE HERE

 const summedPrice = cart.reduce(function(accumlator, element){
    return accumlator + element.price
 }, 0)
 console.log(summedPrice)


//////////////////PROBLEM 2////////////////////
/*  
    Write a function called `calcFinalPrice` that
    can take in `cartTotal`,`couponValue`,
    and `tax` arguments. 

    Inside the function, calculate the tax 
    on the cartTotal and add it in. Subtract
    the value of the coupon. Return the final
    number. 

    Note: the numbers passed in for `tax` will be
    decimals, for example: .06 for a 6% tax.
*/

//CODE HERE
function calcFinalPrice(cartTotal, couponValue, tax){
  let addTax = cartTotal * tax 
  let newTotal = addTax - couponValue 
  return newTotal
}
console.log(calcFinalPrice(100, .25, .06))


//////////////////PROBLEM 3////////////////////
/*  
    In this problem, you'll create a model for 
    a customer object as well as an example
    object. 

    Plan out a customer object for the cart page.
    Think about the information that a 
    restaurant would need about its customers.

    In the TEXT ANSWER area below, describe the
    properties that your customer object will have
    and why you chose those properties.

    Explain what data types each property should be
    and why you chose those data types. 

    Your object should have at least 4 properties. 
*/

/*
    TEXT ANSWER HERE
    what types of foods are in demand or popular (strings: 'American', 'Chinese', 'Indian')
        I chose things three strings because they are types of food that can vary
    what things will be on the menu for each (strings: 'hambuger & fries', 'fried rice & orange chicken', 'chicken tikka masala')
        I chose strings again to represent what is on the menu because there can be different options on the menu. 
    do my customers have allergies (boolean: true or false)
        Allergies would be a boolean because it is either true or it is false. 
    how many people in their party (number: 4)
        The number property is important because it will take in how many people will coming in.
    
*/

/*
    Now, create a customer object following your own
    guidelines.
*/

//CODE HERE

const customer = {
    foodType: 'American',
    menuItem: 'hamburger & fries',
    allergies: false,
    peopleInParty: 4,
}

console.log(customer)