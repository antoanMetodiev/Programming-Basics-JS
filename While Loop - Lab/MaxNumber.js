function maxNumber(input) {
    let number = input[0];

    let maxNumber = -100000000000;
    let index = 0;
    while (!(number === "Stop")) {
        number = Number(number);
        if (number > maxNumber) {
            maxNumber = number;
        }
        index++;
        number = input[index];
    }
    console.log(maxNumber);
}

maxNumber(["-1",
"-2",
"Stop"]);