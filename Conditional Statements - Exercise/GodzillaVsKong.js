function godzillaVsKong(input) {
    let movieBudget = Number(input[0]);
    let peopleCount = Number(input[1]);
    let suitPriceForOnePerson = Number(input[2]);

    let decor = movieBudget * 0.10;
    if (peopleCount > 150) {
        suitPriceForOnePerson -= suitPriceForOnePerson * 0.10;
    }
    let allPeopleSuitsPrice = peopleCount * suitPriceForOnePerson;
    let allPrice = decor + allPeopleSuitsPrice;

    if (allPrice > movieBudget) {
        console.log("Not enough money!");
        console.log(`Wingard needs ${(allPrice - movieBudget)
            .toFixed(2)} leva more.`);
    } else {
        console.log("Action!");
        console.log(`Wingard starts filming with ${(movieBudget - allPrice).toFixed(2)} leva left.`);
    }
}

godzillaVsKong(["20000",
"120",
"55.5"]);