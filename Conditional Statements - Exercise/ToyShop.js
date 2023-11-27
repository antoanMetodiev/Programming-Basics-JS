function toyShop(input) {
    let tourPrice = Number(input[0]);

    let puzzlesCount = Number(input[1]);
    let doysCount = Number(input[2]);
    let bearsCount = Number(input[3]);
    let minionsCount = Number(input[4]);
    let trucksCount = Number(input[5]);

    let puzzlesPrice = puzzlesCount * 2.60;
    let doysPrice = doysCount * 3;
    let bearsPrice = bearsCount * 4.10;
    let minionsPrice = minionsCount * 8.20;
    let trucksPrice = trucksCount * 2;
    
    let totalPrice = puzzlesPrice + doysPrice + bearsPrice + minionsPrice + trucksPrice;

    let totalCount = puzzlesCount + doysCount + bearsCount + minionsCount + trucksCount;
    if (totalCount >= 50) {
        totalPrice -= totalPrice * 0.25;
    }
    totalPrice -= totalPrice * 0.10;

    if (totalPrice >= tourPrice) {
       console.log(`Yes! ${(totalPrice - tourPrice).toFixed(2)} lv left.`);
    } else {
        console.log(`Not enough money! ${Math.abs((totalPrice - tourPrice)).toFixed(2)} lv needed.`);
    }
}

toyShop(["320",
"8",
"2",
"5",
"5",
"1"]);