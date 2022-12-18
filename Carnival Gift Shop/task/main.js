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


const GREETING = `Have a nice day!`;
let items = [
    {id: 1, name: "Teddy Bear", cost: 10},
    {id: 2, name: "Big Red Ball", cost: 5},
    {id: 3, name: "Huge Bear", cost: 50},
    {id: 4, name: "Candy", cost: 8},
    {id: 5, name: "Stuffed Tiger", cost: 15},
    {id: 6, name: "Stuffed Dragon", cost: 30},
    {id: 7, name: "Skateboard", cost: 100},
    {id: 8, name: "Toy Car", cost: 25},
    {id: 9, name: "Basketball", cost: 20},
    {id: 10, name: "Scary Mask", cost: 75}
];


let tickets = 0;
let yourChoice;
while (true) {
    console.log(`\nWhat do you want to do?
1-Buy a gift 2-Add tickets 3-Check tickets 4-Show gifts 5-Exit the shop`);

    yourChoice = Number(input());
    if (yourChoice == 1) {
        console.log('Enter the number of the gift you want to get:');
        let yourPresent = Number(input());
        let yourItem = items.find(item => item.id === yourPresent);
        console.log(`Here you go, one ${yourItem.name}!`)

        tickets -= yourItem.cost;
        items.splice(items.indexOf(yourItem), 1);
        console.log(`Total tickets: ${tickets}`);

    }
    if (yourChoice == 2) {
        console.log(`Enter the ticket amount:`);
        let numberTickets = Number(input());
        tickets += numberTickets;
        console.log(`Total tickets: ${tickets}`);
    }
    if (yourChoice == 3) {
        console.log(`Total tickets: ${tickets}`);
    }
    if (yourChoice == 4) {
        console.log("Here's the list of gifts:\n");
        for (let item of items) {
            console.log(`${item.id}- ${item.name}, Cost: ${item.cost} tickets`);

        }
    }
    if (yourChoice == 5) {
        console.log(GREETING)
        break;
    }
}





