* function deliveryCost(tshirtQuantity) {
    const forFirst100Tshirt = 100;
    const for101to200Tshirt = 80;
    const for200toRest = 50;


    if (tshirtQuantity <= 100) {
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
const totalCost = deliveryCost(200);
console.log(totalCost)
