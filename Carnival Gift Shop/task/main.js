const input = require('sync-input');
// write your code here
console.log(`WELCOME TO THE CARNIVAL GIFT SHOP!
Hello friend! Thank you for visiting the carnival!
Here's the list of gifts:

1- Teddy Bear, Cost: 10 tickets
2- Big Red Ball, Cost: 5 tickets
3- Huge Bear, Cost: 50 tickets
4- Candy, Cost: 8 tickets
5- Stuffed Tiger, Cost: 15 tickets
6- Stuffed Dragon, Cost: 30 tickets
7- Skateboard, Cost: 100 tickets
8- Toy Car, Cost: 25 tickets
9- Basketball, Cost: 20 tickets
10- Scary Mask, Cost: 75 tickets`);

console.log(`What do you want to do?
1-Buy a gift 2-Add tickets 3-Check tickets 4-Show gifts`);
const GREETING = `Have a nice day!`;
const items = [
    {name: "Teddy Bear", cost: 10},
    {name: "Big Red Ball", cost: 5},
    {name: "Huge Bear", cost: 50},
    {name: "Candy", cost: 8},
    {name: "Stuffed Tiger", cost: 15},
    {name: "Stuffed Dragon", cost: 30},
    {name: "Skateboard", cost: 100},
    {name: "Toy Car", cost: 25},
    {name: "Basketball", cost: 20},
    {name: "Scary Mask", cost: 75}
];

let tickets = 100;
let yourChoice = Number(input());
if (yourChoice == 1) {
    console.log('Enter the number of the gift you want to get:');
    let yourPresent = Number(input());
    console.log(`Here you go, one ${items[yourPresent - 1].name}!`)
    console.log(`Total tickets: ${tickets - items[yourPresent - 1].cost}`);
    console.log(GREETING);
}
else if (yourChoice == 2) {
    console.log(`Enter the ticket amount:`);
    let numberTickets = Number(input());
    console.log(`Total tickets: ${tickets + numberTickets}`);
    console.log(GREETING);
}
else if (yourChoice == 3) {
    console.log(`Total tickets: ${tickets}`);
    console.log(GREETING);
}
else if (yourChoice == 4) {
    console.log("Here's the list of gifts:\n");
    for (let i = 0; i < items.length; i++) {
        console.log(`${i+1}- ${items[i].name}, Cost: ${items[i].cost} tickets`);
    }
    console.log(GREETING);
} else {
    return;
}




