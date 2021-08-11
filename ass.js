// Problem Number -- 1
//-------------------


function seerToMon(seer) {
    if (seer < 0) {
        return "Give a Positive Number";
    }
    else {
        var mon = seer * 0.025;
        return mon;

    }
}
var yourSeer = 0;
var mon = seerToMon(yourSeer);
console.log(mon)


// Problem Number -- 2
// -----------------

function totalSales(shirtQuantity, pantQuantity, shoeQuantity) {
    const pershirt = 100;
    const perpant = 200;
    const pershoe = 500;



    const totalShirtCost = shirtQuantity * pershirt;
    const totalPantCost = pantQuantity * perpant;
    const totalShoeCost = shoeQuantity * pershoe;

    const totalSale = totalShirtCost + totalPantCost + totalShoeCost;

    return totalSale;

}
const giveInput = totalSales(0, 1, 1);
console.log(giveInput)


// Problem Number -- 3
//-------------------


function deliveryCost(tshirtQuantity) {
    const forFirst100Tshirt = 100;
    const for101to200Tshirt = 80;
    const for200toRest = 50;


    if (tshirtQuantity < 0) {
        return ' please enter a valid Number!!!';

    }
    else if (tshirtQuantity <= 100) {
        const totalCost = tshirtQuantity * forFirst100Tshirt;
        return totalCost;
    }
    else if (tshirtQuantity <= 200) {
        const firstCondition = 100 * forFirst100Tshirt;
        const restTshirt = tshirtQuantity - 100;
        const secondCondition = restTshirt * for101to200Tshirt;
        const totalCost = firstCondition + secondCondition;
        return totalCost;

    }
    else {

        const restTshirt = tshirtQuantity - 200;
        const thirdCondition = restTshirt * for200toRest;
        const totalCost = 10000 + 8000 + thirdCondition;
        return totalCost;

    }

}
const totalCost = deliveryCost(0);
console.log(totalCost)


// Problem Number -- 4
//-------------------


function perfectFriend(friendList) {

    for (const element of friendList) {
        if (typeof element != 'string') {
            return ' please enter a valid Name!!!';
        }
        if (element.length == 5)
            return element;
    }
    return 'there is no friend whose name has 5 character!!! ';
}
console.log(perfectFriend(['shakil', 'babul', 'ibrahim', 'bulbul']));







