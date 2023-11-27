function shopping(input) {
    let budget = Number(input[0]);
    let videoCardsCount = Number(input[1]);
    let processorsCount = Number(input[2]);
    let ramCount = Number(input[3]);

    let priceForVideoCards = (videoCardsCount * 250);
    let priceForProcessors = (priceForVideoCards * 0.35) * processorsCount;
    let priceForRams = (priceForVideoCards * 0.10) * ramCount;
    let allPrice = priceForRams + priceForProcessors + priceForVideoCards;

    if (videoCardsCount > processorsCount) {
        allPrice -= allPrice * 0.15;
    }

    if (allPrice <= budget) {
        console.log(`You have ${(budget - allPrice).toFixed(2)} leva left!`);
    } else {
        console.log(`Not enough money! You need ${(allPrice - budget).toFixed(2)} leva more!`);
    }
}

shopping(["920.45",
"3",
"1",
"1"]);