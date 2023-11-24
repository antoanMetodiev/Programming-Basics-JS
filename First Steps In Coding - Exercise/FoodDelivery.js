function foodDelivery(input) {
    let chickenCount = Number(input[0]) * 10.35;
    let fishCount = Number(input[1]) * 12.40;
    let vegetarianCount = Number(input[2]) * 8.15;
    let allSum = chickenCount + fishCount + vegetarianCount;
    allSum += (allSum * 0.20) + 2.50;
    console.log(allSum);
}

foodDelivery(["9 ",
"2 ",
"6 "]);