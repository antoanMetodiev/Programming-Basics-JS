function sumNumbers(input) {
    let theNumber = Number(input[0]);
    let sum = 0;
    let index = 0;
    while (sum < theNumber) {
        index++;
        let num = Number(input[index]);
        sum += num;
    }
    console.log(sum);
}

sumNumbers(["100",
"10",
"20",
"30",
"40"]);
