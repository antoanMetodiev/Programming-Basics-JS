function histogram(input) {
    let n = Number(input[0]);

    let smallerThan200 = 0;
    let between200And399 = 0;
    let between400And599 = 0;
    let between600And799 = 0;
    let biggerOrEqualThan800 = 0;

    let allNumbersCount = 0;
    for (let i = 1; i <= n; i++) {

        let number = Number(input[i]);

        allNumbersCount++;
        if (number < 200) {
            smallerThan200++;
        } else if (number >= 200 && number < 400) {
            between200And399++;
        } else if (number >= 400 && number < 600) {
            between400And599++;
        } else if (number >= 600 && number < 800) {
            between600And799++;
        } else if (number >= 800) {
            biggerOrEqualThan800++;
        }
    }
    smallerThan200 = (smallerThan200 / allNumbersCount) * 100;
    console.log(smallerThan200.toFixed(2) + "%");

    between200And399 = (between200And399 / allNumbersCount) * 100;
    console.log(between200And399.toFixed(2)+ "%");

    between400And599 = (between400And599 / allNumbersCount) * 100;
    console.log(between400And599.toFixed(2)+ "%");

    between600And799 = (between600And799 / allNumbersCount) * 100;
    console.log(between600And799.toFixed(2)+ "%");

    biggerOrEqualThan800 = (biggerOrEqualThan800 / allNumbersCount) * 100;
    console.log(biggerOrEqualThan800.toFixed(2)+ "%");
}

histogram(["3",
"1",
"2",
"999"])
;