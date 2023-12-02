function accountBalance(input) {
    let sum = input[0];
    let allSum = 0;
    let index = 0;
    while (!(sum === "NoMoreMoney")) {
        sum = Number(sum);
        if (sum < 0) {
            console.log("Invalid operation!");
            break;
        }
        console.log("Increase: " + sum.toFixed(2));
        allSum += sum;
        index++;
        sum = input[index];
    }
    console.log("Total: " + allSum.toFixed(2));
}

accountBalance(["120",
"45.55",
"-150"]);