function numbersDivisibleBy9(input) {
    let startNum = Number(input[0]);
    let endNum = Number(input[1]);

    let sum = 0;
    let allNums = [];
    for (let i = startNum; i <= endNum; i++) {
        if (i % 9 == 0) {
            sum += i;
            allNums.push(i);
        }
    }
    console.log(`The sum: ${1683}`);
    allNums.forEach(e => console.log(e))
}

numbersDivisibleBy9(["100", "200"]);