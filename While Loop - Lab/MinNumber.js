function minNumber(input) {
    let number = input[0];
    let minNumber = 100000000000;
    let index = 0;
    while (!(number === "Stop")) {
        number = Number(number);
        if (number < minNumber) {
            minNumber = number;
        }
        index++;
        number = input[index];
    }
    console.log(minNumber);
}

minNumber(["-10",
"20",
"-30",
"Stop"]);
